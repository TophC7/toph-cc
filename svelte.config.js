import adapter from '@sveltejs/adapter-auto';
import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {

	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},
		vite: {
			server: {
				fs: {
					allow: ['./static/']
				}
			},
			resolve: {
				alias: {
					$static: path.resolve("./static")
				}
			}
		}
	}
};

export default config;