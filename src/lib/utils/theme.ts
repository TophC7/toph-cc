import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const croissant: CustomThemeConfig = {
  name: 'croissant',
  properties: {
    // =~= Theme Properties =~=
    '--theme-font-family-base': 'system-ui',
    '--theme-font-family-heading': 'system-ui',
    '--theme-font-color-base': 'var(--color-surface-900)',
    '--theme-font-color-dark': 'var(--color-primary-50)',
    '--theme-rounded-base': '6px',
    '--theme-rounded-container': '6px',
    '--theme-border-base': '2px',
    // =~= Theme On-X Colors =~=
    '--on-primary': 'var(--color-surface-900)',
    '--on-secondary': 'var(--color-surface-900)',
    '--on-tertiary': 'var(--color-surface-900)',
    '--on-success': 'var(--color-surface-900)',
    '--on-warning': 'var(--color-surface-900)',
    '--on-error': 'var(--color-surface-900)',
    '--on-surface': 'var(--color-primary-50)',
    // =~= Theme Colors  =~=
    // primary | #DF5B53
    '--color-primary-50': '250 230 229', // #fae6e5
    '--color-primary-100': '249 222 221', // #f9dedd
    '--color-primary-200': '247 214 212', // #f7d6d4
    '--color-primary-300': '242 189 186', // #f2bdba
    '--color-primary-400': '233 140 135', // #e98c87
    '--color-primary-500': '223 91 83', // #DF5B53
    '--color-primary-600': '201 82 75', // #c9524b
    '--color-primary-700': '167 68 62', // #a7443e
    '--color-primary-800': '134 55 50', // #863732
    '--color-primary-900': '109 45 41', // #6d2d29
    // secondary | #25BEC6
    '--color-secondary-50': '222 245 246', // #def5f6
    '--color-secondary-100': '211 242 244', // #d3f2f4
    '--color-secondary-200': '201 239 241', // #c9eff1
    '--color-secondary-300': '168 229 232', // #a8e5e8
    '--color-secondary-400': '102 210 215', // #66d2d7
    '--color-secondary-500': '37 190 198', // #25BEC6
    '--color-secondary-600': '33 171 178', // #21abb2
    '--color-secondary-700': '28 143 149', // #1c8f95
    '--color-secondary-800': '22 114 119', // #167277
    '--color-secondary-900': '18 93 97', // #125d61
    // tertiary | #26ED71
    '--color-tertiary-50': '222 252 234', // #defcea
    '--color-tertiary-100': '212 251 227', // #d4fbe3
    '--color-tertiary-200': '201 251 220', // #c9fbdc
    '--color-tertiary-300': '168 248 198', // #a8f8c6
    '--color-tertiary-400': '103 242 156', // #67f29c
    '--color-tertiary-500': '38 237 113', // #26ED71
    '--color-tertiary-600': '34 213 102', // #22d566
    '--color-tertiary-700': '29 178 85', // #1db255
    '--color-tertiary-800': '23 142 68', // #178e44
    '--color-tertiary-900': '19 116 55', // #137437
    // success | #53dfa1
    '--color-success-50': '229 250 241', // #e5faf1
    '--color-success-100': '221 249 236', // #ddf9ec
    '--color-success-200': '212 247 232', // #d4f7e8
    '--color-success-300': '186 242 217', // #baf2d9
    '--color-success-400': '135 233 189', // #87e9bd
    '--color-success-500': '83 223 161', // #53dfa1
    '--color-success-600': '75 201 145', // #4bc991
    '--color-success-700': '62 167 121', // #3ea779
    '--color-success-800': '50 134 97', // #328661
    '--color-success-900': '41 109 79', // #296d4f
    // warning | #d7df53
    '--color-warning-50': '249 250 229', // #f9fae5
    '--color-warning-100': '247 249 221', // #f7f9dd
    '--color-warning-200': '245 247 212', // #f5f7d4
    '--color-warning-300': '239 242 186', // #eff2ba
    '--color-warning-400': '227 233 135', // #e3e987
    '--color-warning-500': '215 223 83', // #d7df53
    '--color-warning-600': '194 201 75', // #c2c94b
    '--color-warning-700': '161 167 62', // #a1a73e
    '--color-warning-800': '129 134 50', // #818632
    '--color-warning-900': '105 109 41', // #696d29
    // error | #df5391
    '--color-error-50': '250 229 239', // #fae5ef
    '--color-error-100': '249 221 233', // #f9dde9
    '--color-error-200': '247 212 228', // #f7d4e4
    '--color-error-300': '242 186 211', // #f2bad3
    '--color-error-400': '233 135 178', // #e987b2
    '--color-error-500': '223 83 145', // #df5391
    '--color-error-600': '201 75 131', // #c94b83
    '--color-error-700': '167 62 109', // #a73e6d
    '--color-error-800': '134 50 87', // #863257
    '--color-error-900': '109 41 71', // #6d2947
    // surface | #00101f
    '--color-surface-50': '217 219 221', // #d9dbdd
    '--color-surface-100': '204 207 210', // #cccfd2
    '--color-surface-200': '191 195 199', // #bfc3c7
    '--color-surface-300': '153 159 165', // #999fa5
    '--color-surface-400': '77 88 98', // #4d5862
    '--color-surface-500': '0 16 31', // #00101f
    '--color-surface-600': '0 14 28', // #000e1c
    '--color-surface-700': '0 12 23', // #000c17
    '--color-surface-800': '0 10 19', // #000a13
    '--color-surface-900': '0 8 15' // #00080f
  }
};
