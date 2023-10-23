import type { RGBColor } from 'colorthief';
import tinycolor from 'tinycolor2';

/**
 * A tuple of three arrays, each containing RGB values for the primary, secondary, and tertiary colors.
 */
export type PaletteTuple = [RGBColor, RGBColor, RGBColor];
export const EMPTY_PALETTE: PaletteTuple = [
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0]
];

/**
 * Represents a color palette with primary, secondary, and tertiary colors, as well as on-color variants of each.
 * In Practice this translates a 3 color palette from colorthief into tinycolor instances.
 */
export class Palette {
	/** The primary color of the palette. */
	primary: tinycolor.Instance;

	/** The secondary color of the palette. */
	secondary: tinycolor.Instance;

	/** The tertiary color of the palette. */
	tertiary: tinycolor.Instance;

	/** The on-color variant of the primary color. */
	onPrimary!: tinycolor.Instance | undefined;

	/** The on-color variant of the secondary color. */
	onSecondary!: tinycolor.Instance;

	/** The on-color variant of the tertiary color. */
	onTertiary!: tinycolor.Instance;

	/**
	 * Creates a new Palette instance.
	 * @param palette - A tuple of three arrays, each containing RGB values for the primary, secondary, and tertiary colors.
	 */
	constructor(palette: PaletteTuple) {
		this.primary = tinycolor({ r: palette[0][0], g: palette[0][1], b: palette[0][2] });
		this.secondary = tinycolor({ r: palette[1][0], g: palette[1][1], b: palette[2][2] });
		this.tertiary = tinycolor({ r: palette[2][0], g: palette[2][1], b: palette[2][2] });

		this.initializeOnColors(50);
	}

	/**
	 * Initializes the on-color variants of the primary, secondary, and tertiary colors.
	 * @param brightnessShift - The amount to shift the brightness of the on-color variants.
	 */
	private initializeOnColors(brightnessShift: number): void {
		this.onPrimary = this.primary.isDark()
			? this.primary.clone().brighten(brightnessShift).setAlpha(1)
			: this.primary.clone().darken(brightnessShift).setAlpha(1);
		this.onSecondary = this.secondary.isDark()
			? this.secondary.clone().brighten(brightnessShift).setAlpha(1)
			: this.secondary.clone().darken(brightnessShift).setAlpha(1);
		this.onTertiary = this.tertiary.isDark()
			? this.tertiary.clone().brighten(brightnessShift).setAlpha(1)
			: this.tertiary.clone().darken(brightnessShift).setAlpha(1);
	}

	/**
	 * Softens the colors of the palette.
	 * @param isDark - Whether the colors should be darkened or lightened.
	 * @returns The updated Palette instance.
	 */
	soft(isDark: boolean): Palette {
		const alpha = 0.5;
		let temp: tinycolor.Instance | tinycolor.ColorFormats.HSLA;

		temp = this.primary.toHsl();
		temp.l = isDark ? 30 : 70;
		this.primary = new tinycolor(temp);

		temp = this.secondary.toHsl();
		temp.l = isDark ? 30 : 70;
		this.secondary = new tinycolor(temp);

		temp = this.tertiary.toHsl();
		temp.l = isDark ? 30 : 70;
		this.tertiary = new tinycolor(temp);

		this.initializeOnColors(50);
		this.primary.setAlpha(alpha);
		this.secondary.setAlpha(alpha);
		this.tertiary.setAlpha(alpha);

		return this;
	}
}
