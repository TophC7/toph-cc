<script lang="ts">
  import { untrack } from 'svelte'

  let {
    class: className = '',
    quantity = 70,
    staticity = 44,
    ease = 64,
    size = 0.45,
    color = '#ffb59f',
    vx = 0,
    vy = 0
  }: {
    class?: string
    quantity?: number
    staticity?: number
    ease?: number
    size?: number
    color?: string
    vx?: number
    vy?: number
  } = $props()

  let canvasRef = $state<HTMLCanvasElement | null>(null)
  let containerRef = $state<HTMLDivElement | null>(null)

  interface Circle {
    x: number
    y: number
    translateX: number
    translateY: number
    size: number
    alpha: number
    targetAlpha: number
    dx: number
    dy: number
    magnetism: number
  }

  let context: CanvasRenderingContext2D | null = null
  let circles: Circle[] = []
  let mouse = { x: 0, y: 0 }
  let canvasSize = { w: 0, h: 0, dpr: 1 }
  let canvasRect = { left: 0, top: 0 }
  let animId: number | null = null
  let resizeId: number | null = null
  let pointerId: number | null = null
  let pendingPointer: MouseEvent | null = null
  let prefersReducedMotion = false
  let documentVisible = true
  let componentVisible = true

  function circleParams(): Circle {
    return {
      x: Math.floor(Math.random() * canvasSize.w),
      y: Math.floor(Math.random() * canvasSize.h),
      translateX: 0,
      translateY: 0,
      size: Math.floor(Math.random() * 2) + size,
      alpha: 0,
      targetAlpha: Number((Math.random() * 0.45 + 0.08).toFixed(2)),
      dx: (Math.random() - 0.5) * 0.08,
      dy: (Math.random() - 0.5) * 0.08,
      magnetism: 0.1 + Math.random() * 4
    }
  }

  function drawCircle(circle: Circle) {
    if (!context) return
    context.globalAlpha = circle.alpha
    context.beginPath()
    context.arc(circle.x + circle.translateX, circle.y + circle.translateY, circle.size, 0, 2 * Math.PI)
    context.fill()
  }

  function renderParticles() {
    if (!context) return
    context.setTransform(canvasSize.dpr, 0, 0, canvasSize.dpr, 0, 0)
    context.clearRect(0, 0, canvasSize.w, canvasSize.h)
    context.fillStyle = color
    for (const circle of circles) drawCircle(circle)
    context.globalAlpha = 1
  }

  function resetParticles() {
    circles = Array.from({ length: quantity }, circleParams)
    renderParticles()
  }

  function updateCanvasRect() {
    if (!canvasRef) return
    const rect = canvasRef.getBoundingClientRect()
    canvasRect = { left: rect.left, top: rect.top }
  }

  function resizeCanvas() {
    if (!containerRef || !canvasRef || !context) return
    const width = containerRef.offsetWidth
    const height = containerRef.offsetHeight
    const dpr = window.devicePixelRatio || 1

    updateCanvasRect()

    if (width === canvasSize.w && height === canvasSize.h && dpr === canvasSize.dpr) return

    canvasSize = { w: width, h: height, dpr }
    canvasRef.width = width * dpr
    canvasRef.height = height * dpr
    canvasRef.style.width = `${width}px`
    canvasRef.style.height = `${height}px`
    context.setTransform(dpr, 0, 0, dpr, 0, 0)
    resetParticles()
  }

  function scheduleResize() {
    if (resizeId !== null) return
    resizeId = requestAnimationFrame(() => {
      resizeId = null
      resizeCanvas()
    })
  }

  function shouldAnimate() {
    return !prefersReducedMotion && documentVisible && componentVisible
  }

  function stopAnimation() {
    if (animId === null) return
    cancelAnimationFrame(animId)
    animId = null
  }

  function startAnimation() {
    if (animId !== null || !context || !shouldAnimate()) return
    animId = requestAnimationFrame(animate)
  }

  function syncAnimation() {
    if (shouldAnimate()) {
      startAnimation()
    } else {
      stopAnimation()
    }
  }

  function animate() {
    animId = null
    if (!context || !shouldAnimate()) return

    context.setTransform(canvasSize.dpr, 0, 0, canvasSize.dpr, 0, 0)
    context.clearRect(0, 0, canvasSize.w, canvasSize.h)
    context.fillStyle = color

    for (let i = circles.length - 1; i >= 0; i--) {
      const circle = circles[i]

      const closestEdge = Math.min(
        circle.x + circle.translateX - circle.size,
        canvasSize.w - circle.x - circle.translateX - circle.size,
        circle.y + circle.translateY - circle.size,
        canvasSize.h - circle.y - circle.translateY - circle.size
      )
      const remap = Math.max(0, closestEdge / 20)

      if (remap > 1) {
        circle.alpha = Math.min(circle.alpha + 0.02, circle.targetAlpha)
      } else {
        circle.alpha = circle.targetAlpha * remap
      }

      circle.x += circle.dx + vx
      circle.y += circle.dy + vy
      circle.translateX += (mouse.x / (staticity / circle.magnetism) - circle.translateX) / ease
      circle.translateY += (mouse.y / (staticity / circle.magnetism) - circle.translateY) / ease

      if (
        circle.x < -circle.size ||
        circle.x > canvasSize.w + circle.size ||
        circle.y < -circle.size ||
        circle.y > canvasSize.h + circle.size
      ) {
        circles[i] = circleParams()
        drawCircle(circles[i])
      } else {
        drawCircle(circle)
      }
    }
    context.globalAlpha = 1
    animId = requestAnimationFrame(animate)
  }

  function onMouseMove(event: MouseEvent) {
    pendingPointer = event
    if (pointerId !== null) return
    pointerId = requestAnimationFrame(() => {
      pointerId = null
      if (!pendingPointer) return
      const { w, h } = canvasSize
      const x = pendingPointer.clientX - canvasRect.left - w / 2
      const y = pendingPointer.clientY - canvasRect.top - h / 2
      pendingPointer = null
      if (x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2) {
        mouse.x = x
        mouse.y = y
      }
    })
  }

  function onVisibilityChange() {
    documentVisible = document.visibilityState === 'visible'
    syncAnimation()
  }

  $effect(() => {
    if (!canvasRef || !containerRef) return
    const canvas = canvasRef
    const container = containerRef

    return untrack(() => {
      const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      const resizeObserver = new ResizeObserver(scheduleResize)
      const intersectionObserver = new IntersectionObserver(([entry]) => {
        componentVisible = entry.isIntersecting
        syncAnimation()
      })

      function onMotionChange(event: MediaQueryListEvent) {
        prefersReducedMotion = event.matches
        syncAnimation()
      }

      context = canvas.getContext('2d')
      prefersReducedMotion = motionQuery.matches
      documentVisible = document.visibilityState === 'visible'
      resizeObserver.observe(container)
      intersectionObserver.observe(container)
      resizeCanvas()
      syncAnimation()

      window.addEventListener('resize', scheduleResize)
      window.addEventListener('scroll', updateCanvasRect, true)
      window.addEventListener('mousemove', onMouseMove)
      document.addEventListener('visibilitychange', onVisibilityChange)
      motionQuery.addEventListener('change', onMotionChange)

      return () => {
        stopAnimation()
        if (resizeId !== null) cancelAnimationFrame(resizeId)
        if (pointerId !== null) cancelAnimationFrame(pointerId)
        resizeObserver.disconnect()
        intersectionObserver.disconnect()
        window.removeEventListener('resize', scheduleResize)
        window.removeEventListener('scroll', updateCanvasRect, true)
        window.removeEventListener('mousemove', onMouseMove)
        document.removeEventListener('visibilitychange', onVisibilityChange)
        motionQuery.removeEventListener('change', onMotionChange)
        context = null
        circles = []
      }
    })
  })

  $effect(() => {
    quantity
    size
    if (!context) return
    untrack(() => {
      resetParticles()
      syncAnimation()
    })
  })

  $effect(() => {
    color
    if (!context || animId !== null) return
    untrack(() => {
      renderParticles()
    })
  })
</script>

<div class={`absolute inset-0 ${className}`} bind:this={containerRef} aria-hidden="true">
  <canvas bind:this={canvasRef} class="h-full w-full"></canvas>
</div>
