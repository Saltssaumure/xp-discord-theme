[light]: https://user-images.githubusercontent.com/29710355/229367843-ad03f107-ad47-4c63-9692-89cd781d40f8.png
[dark]: https://user-images.githubusercontent.com/29710355/229367846-78bf3675-a091-4f60-8ff0-4427697a2ef2.png
[bsod-text]: https://github.com/Saltssaumure/xp-discord-theme/blob/main/scss/top/_vars-scss.scss
[addons]: https://github.com/Saltssaumure/xp-discord-theme/tree/main/addon

[css-color]:        https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
[discord]:          https://discord.gg/uy8nKQVatp

[BetterDiscord]:    https://betterdiscord.app/
[Replugged]:        https://replugged.dev/
[Vencord]:          https://github.com/Vendicated/Vencord

[shield-donate]:    https://img.shields.io/badge/Donate-ko--fi-orange?style=flat-square&logo=kofi&logoColor=orange
[ko-fi]:            https://ko-fi.com/saltssaumure "Any amount is much appreciated!"

[shield-total-dl]:  https://img.shields.io/github/downloads/saltssaumure/xp-discord-theme/total?color=purple&label=Total%20GitHub%20downloads&style=flat-square
[shield-asar-dl]:   https://img.shields.io/github/downloads/saltssaumure/xp-discord-theme/latest/net.saltssaumure.Exponent.asar?color=purple&label=Replugged%20installs&style=flat-square
[shield-repo-size]: https://img.shields.io/github/repo-size/saltssaumure/xp-discord-theme?style=flat-square "Total size"

[license]:          https://github.com/Saltssaumure/xp-discord-theme/blob/main/LICENSE
[issues]:           https://github.com/Saltssaumure/xp-discord-theme/issues
[.theme.css]:       https://github.com/Saltssaumure/xp-discord-theme/blob/main/Exponent.theme.css

[release-gh]:       https://github.com/Saltssaumure/xp-discord-theme/releases/latest "Latest release"
[release-bd]:       https://betterdiscord.app/theme/?id=823 "BetterDiscord store page"
[release-rp]:       https://replugged.dev/install?identifier=Saltssaumure/xp-discord-theme&source=github "Replugged addon installer"

# Exponent Discord Theme
[![Donate via ko-fi][shield-donate]][ko-fi]
[![Total downloads][shield-total-dl]][release-gh]
[![Replugged installs][shield-asar-dl]][release-gh]
![Total size][shield-repo-size]

***A Windows XP style Discord theme.***

| Light mode                                                      | Dark mode                                                    |
| --------------------------------------------------------------- | ------------------------------------------------------------ |
| ![Screenshot of Exponent light mode applied to Discord ][light] | ![Screenshot of Exponent dark mode applied to Discord][dark] |

## Installation

### BetterDiscord
1. Install [BetterDiscord][BetterDiscord].
2. Download the theme file:
    - [GitHub][release-gh]
    - [BD Store][release-bd]
3. Place theme file in the `themes` folder:
    - Windows: `%AppData%/BetterDiscord/themes`
    - Mac: `~/Library/Application Support/betterdiscord/themes`
    - Linux: `~/.config/BetterDiscord/themes`

### Replugged
1. Install [Replugged][Replugged].
2. Install the theme:
    - [GitHub][release-gh]
    - [Installer][release-rp]

### Vencord
1. Install [Vencord][Vencord].
2. Paste the following in `Settings` > `Vencord` > `Themes`:
    - `https://saltssaumure.github.io/xp-discord-theme/Exponent.theme.css`

## Customisation

| Description                 | Variable name           | Valid values                               | Default value                                                        |
| --------------------------- | ----------------------- | ------------------------------------------ | -------------------------------------------------------------------- |
| Background image            | `--xp-background-image` | Any image link encased in `url()`. | `url(https://saltssaumure.github.io/xp-discord-theme/img/bliss.avif)` |
| Background colour           | `--xp-background-color` | Any [colour][css-color].                   | `#003300`                                                            |
| BSOD background colour      | `--bsod-color`          | Any [colour][css-color].                   | `navy`                                                               |
| BSOD text                   | `--bsod-text`           | Any quoted text. Use `\A` for new lines.   | [Read here][bsod-text].                                              |
| Panel background colour     | `--xp-bg-color`         | Any [colour][css-color].                   | `#000` (dark) / `#FFF` (light)                                       |
| Panel settings icon colour  | `--xp-set-color`        | Any [colour][css-color].                   | `#FFFFFFB3` (dark) / `#000000B3` (light)                             |
| Panel hovered item colour   | `--xp-hover-color`      | Any [colour][css-color].                   | `#102030` (dark) / `#D3D3D3` (light)                                 |
| Panel top decoration colour | `--xp-zing-color`       | Any [colour][css-color].                   | `#A05000` (dark) / `#FFA500` (light)                                 |
| Panel text colour           | `--xp-txt-color`        | Any [colour][css-color].                   | `#FFF` (dark) / `#000` (light)                                       |
| Button highlight colour     | `--xp-bg-bright-color`  | Any [colour][css-color].                   | `#203040` (dark) / `#F0EFED` (light)                                 |
| Button background colour    | `--xp-bg-tint-color`    | Any [colour][css-color].                   | `#202020` (dark) / `#EBE8D7` (light)                                 |
| Button shadow colour        | `--xp-bg-shade-color`   | Any [colour][css-color].                   | `#101010` (dark) / `#808080` (light)                                 |
| Button/panel border colour  | `--xp-border-color`     | Any [colour][css-color].                   | `#1665CA` (dark) / `#000000` (light)                                 |

### BetterDiscord
1. Open `Settings` > `BetterDiscord` > `Themes`.
2. Click the pencil icon on this theme.
3. Edit the variable values and save changes.

### Replugged
1. Open `Settings` > `Replugged` > `Quick CSS`.
2. Copy and paste lines 15-45 of [`Exponent.theme.css`][.theme.css].
3. Edit the variable values and apply changes.

### Vencord
#### Standard method
1. Follow the instructions in `Settings` > `Vencord` > `Themes`.
#### Recommended method
1. Open `Settings` > `Vencord` > `Vencord`.
2. Toggle on `Enable Custom CSS` and click `Open QuickCSS File`.
3. Copy and paste lines 15-45 of [`Exponent.theme.css`][.theme.css].
4. Edit the variable values.

## Addons
See [Addons][addons] for mini-themes designed to be used alongside Exponent to add extra optional features.

## License
[GNU General Public License v3.0][license]
- <span title="Too long; didn't read; not a lawyer">TL;DR;NAL</span>: Do whatever you want with this theme, as long as you allow others to do the same with your version.

## Questions or suggestions?
- Post [an issue][issues] on GitHub.
- Post in `#theme-support` on [my support server][discord].
