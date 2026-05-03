import type { Attachment } from 'svelte/attachments'

export function copyToClipboard(value: string): Attachment<HTMLElement> {
  return (element) => {
    let resetTimer: number | null = null

    function clearResetTimer() {
      if (resetTimer === null) return
      window.clearTimeout(resetTimer)
      resetTimer = null
    }

    async function handleClick() {
      try {
        await navigator.clipboard.writeText(value)
        clearResetTimer()
        element.dataset.copied = 'true'
        resetTimer = window.setTimeout(() => {
          delete element.dataset.copied
          resetTimer = null
        }, 900)
      } catch (error) {
        console.error('Failed to copy to clipboard:', error)
      }
    }

    element.addEventListener('click', handleClick)

    return () => {
      clearResetTimer()
      element.removeEventListener('click', handleClick)
    }
  }
}
