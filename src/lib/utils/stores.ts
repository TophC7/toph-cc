import { writable } from 'svelte/store';

/**
 * Creates a tooltip store.
 * @returns An object containing the subscribe, trigger, and blur functions.
 */
function tooltipStore() {
  const { subscribe, set } = writable<App.TooltipProps | null>(null);

  /**
   * Sets the tooltip properties triggering the tooltip component.
   * @param props - The tooltip options to set.
   */
  function trigger(props: App.TooltipProps) {
    set(props);
  }

  /**
   * Sets the store value to null.
   */
  function blur() {
    set(null);
  }

  return {
    subscribe,
    trigger,
    blur
  };
}

export const storeTooltip = tooltipStore();
