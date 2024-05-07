// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,css}"],
	theme: {
		extend: {
			fontFamily: {
				primary: ["var(--font-family-primary)", "sans-serif"],
			},
		},
	},
	plugins: [],
};
