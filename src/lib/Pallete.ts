import type tinycolor from 'tinycolor2';

/**
 * A class representing a color palette with primary, secondary, and tertiary colors, as well as on-color variants.
 */
export class Palette {
	/**
	 * Creates a new Palette instance.
	 * @param color - The base color to generate the palette from.
	 */
	constructor(color: tinycolor.Instance) {
		const triad = color.triad();

		this.primary = triad[0].clone();
		this.secondary = triad[1].clone();
		this.tertiary = triad[2].clone();
		this.onPrimary = this.primary.isDark()
			? this.primary.clone().brighten(80)
			: this.primary.clone().darken(80);
		this.onSecondary = this.secondary.isDark()
			? this.secondary.clone().brighten(80)
			: this.secondary.clone().darken(80);
		this.onTertiary = this.tertiary.isDark()
			? this.tertiary.clone().brighten(80)
			: this.tertiary.clone().darken(80);
	}

	/** The primary color of the palette. */
	primary: tinycolor.Instance;

	/** The secondary color of the palette. */
	secondary: tinycolor.Instance;

	/** The tertiary color of the palette. */
	tertiary: tinycolor.Instance;

	/** The on-color variant of the primary color. */
	onPrimary: tinycolor.Instance;

	/** The on-color variant of the secondary color. */
	onSecondary: tinycolor.Instance;

	/** The on-color variant of the tertiary color. */
	onTertiary: tinycolor.Instance;
}
