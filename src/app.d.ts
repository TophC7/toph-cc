import '@poppanator/sveltekit-svg/dist/svg';
import type { ComponentType, SvelteComponent } from 'svelte';
import type { SVGAttributes } from 'svelte/elements';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}

    // SVG component type
    type SVGC = ComponentType<SvelteComponent<SVGAttributes<SVGSVGElement>, unknown, unknown>>;
    // Skeleton CSS color names
    type SkeletonColors = 'primary' | 'secondary' | 'tertiary' | 'surface' | 'success' | 'warning' | 'error';
    // Possible positions, for now only used with Tooltips
    type Position = 'top' | 'right' | 'bottom' | 'left';
    // Tooltip props
    type TooltipProps = { anchor?: HTMLElement; text: string; position: Position; color: SkeletonColors };
  }
}

export {};
