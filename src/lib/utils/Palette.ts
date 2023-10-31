import { Colord, extend, type HslaColor } from 'colord';
import ColorThief from 'colorthief';
import mixPlugin from 'colord/plugins/mix';

extend([mixPlugin]);

/**
 * An object representing the main colors of a palette.
 */
type BasicPalette = {
  primary: Colord;
  secondary: Colord;
  accent: Colord;
};

/**
 * A class representing a color palette with main, foreground, and content colors.
 */
export default class Palette {
  // Constants
  private static SOFT_ALPHA = 0.5;
  // Main colors
  primary: Colord;
  secondary: Colord;
  accent: Colord;
  // Foreground colors
  primaryForeground: Colord;
  secondaryForeground: Colord;
  accentForeground: Colord;
  // Content colors
  primaryContent: Colord;
  secondaryContent: Colord;
  accentContent: Colord;

  /**
   * Creates a new Palette instance.
   * @param palette - An object containing the main colors of the palette.
   */
  constructor(palette: BasicPalette, soft?: boolean, dark?: boolean) {
    if (soft) {
      let temp: Colord | HslaColor;

      // Main Soft
      temp = palette.primary.toHsl();
      temp.l = dark ? 30 : 70;
      this.primary = new Colord(temp).alpha(Palette.SOFT_ALPHA);

      temp = palette.secondary.toHsl();
      temp.l = dark ? 30 : 70;
      this.secondary = new Colord(temp).alpha(Palette.SOFT_ALPHA);

      temp = palette.accent.toHsl();
      temp.l = dark ? 30 : 70;
      this.accent = new Colord(temp).alpha(Palette.SOFT_ALPHA);
    } else {
      // Main Normal
      this.primary = palette.primary;
      this.secondary = palette.secondary;
      this.accent = palette.accent;
    }

    // Foreground
    this.primaryForeground = this.asForeground(this.primary, dark);
    this.secondaryForeground = this.asForeground(this.secondary, dark);
    this.accentForeground = this.asForeground(this.accent, dark);
    // Content
    this.primaryContent = this.asContent(this.primary);
    this.secondaryContent = this.asContent(this.secondary);
    this.accentContent = this.asContent(this.accent);
  }

  /**
   * Asynchronously extracts a color palette from an image.
   * @param {string} imgUrl - The URL of the image.
   * @param {object} options - The options for the extraction.
   * @param {string} options.crossOrigin - The cross-origin setting for the image.
   * @param {boolean} options.soft - Whether to use soft colors.
   * @param {boolean} options.dark - Whether the background appears dark, helps when foreground colors aren't bright enough.
   * @returns {Promise<Palette>} - A promise that resolves to a Palette instance.
   */
  public static async getAsync(imgUrl: string, options?: { crossOrigin?: string; soft?: boolean; dark?: boolean }) {
    function rbgToColord([r, g, b]: number[]): Colord {
      return new Colord({ r, g, b });
    }

    function extractOnLoad(resource: HTMLImageElement): Promise<BasicPalette> {
      return new Promise((resolve, reject) => {
        const onload = () => {
          unbindEvents();
          try {
            const [primary, secondary, accent] = new ColorThief().getPalette(resource, 3, 1).map(rbgToColord);
            resolve({ primary, secondary, accent });
          } catch (e) {
            reject(e);
          }
        };

        const onerror = () => {
          unbindEvents();
          reject(new Error(`Error loading image "${resource.src}"`));
        };

        const unbindEvents = () => {
          resource.removeEventListener('load', onload);
          resource.removeEventListener('error', onerror);
        };

        resource.addEventListener('load', onload);
        resource.addEventListener('error', onerror);
      });
    }

    const img = new Image();
    img.crossOrigin = options?.crossOrigin || '';
    img.src = imgUrl;
    return new Palette(await extractOnLoad(img).then((data) => data), options?.soft, options?.dark);
  }

  /**
   * Returns a foreground color based on the given color.
   * @param color - The base color to use.
   * @param dark - Whether the background color is dark or not.
   * @param percentage - The percentage of the foreground color to mix with the base color.
   * @returns The foreground color.
   */
  private asForeground(color: Colord, dark?: boolean, percentage = 0.8) {
    if (dark) {
      return color.mix('#fff', percentage);
    } else {
      return color.mix(color.isDark() ? '#fff' : '#000', percentage);
    }
  }

  /**
   * Returns a new Colord instance that is a darker version of the given color.
   * @param color - The color to create a content color for.
   * @param percentage - The percentage of the darken to use for the given color.
   * @returns A new Colord instance representing the content color.
   */
  private asContent(color: Colord, percentage = 0.7) {
    return color.darken(percentage);
  }
}
