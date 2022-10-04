module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				complementary: '#53D7DF',
				offWhite: '#FAE6E5',
				coral: {
					50: '#FDF7F6',
					100: '#FAE6E5',
					200: '#F3C1BF',
					300: '#EDA09C',
					400: '#E57B75',
					500: '#DF5B53',
					600: '#CA2E26',
					700: '#92211B',
					800: '#5A1411',
					900: '#220806'
				},
				Blueblack: {
					50: '#E0F0FF',
					100: '#B8DCFF',
					200: '#61B3FF',
					300: '#0F8BFF',
					400: '#005FB8',
					500: '#003566',
					600: '#002A52',
					700: '#002242',
					800: '#00182E',
					900: '#00101F'
				},
				Sea: {
					50: '#EEFBFC',
					100: '#DDF7F9',
					200: '#BAEFF2',
					300: '#98E8EC',
					400: '#75E0E5',
					500: '#53D7DF',
					600: '#25BEC6',
					700: '#1A848A',
					800: '#0E4A4D',
					900: '#031011'
				},
				Mint: {
					50: '#F4F0F3',
					100: '#E9E7E8',
					200: '#C9D9CF',
					300: '#9BD4B1',
					400: '#65DC93',
					500: '#26ED71',
					600: '#27AA59',
					700: '#2D6743',
					800: '#223027',
					900: '#0B0A0A'
				}
			},
			fontFamily: {
				Inter: ['Inter', 'sans-serif']
			}
		}
	},
	plugins: []
};
