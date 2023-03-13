/** @type {import('bd-scss/lib/config').Config} */
export default {
	meta: {
		name: "Exponent Test",
		author: "Saltssaumure",
        authorLink: "https://github.com/Saltssaumure",
		version: "1.2.1",
        invite: "uy8nKQVatp",
        source: "https://github.com/Saltssaumure/xp-discord-theme",
		description: "A Windows XP style theme built for BetterDiscord.",
	},
	baseImport: 'https://saltssaumure.github.io/xp-discord-theme/xp.min.css',
    dev: {
        target: "/",
		output: "/.config/BetterDiscord/themes"
    },
	base: {
		output: '/'
	}
}