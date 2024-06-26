[light]:        https://saltssaumure.github.io/xp-discord-theme/preview/exponent1.png
[dark]:         https://saltssaumure.github.io/xp-discord-theme/preview/exponent2.png
[customised]:   https://saltssaumure.github.io/xp-discord-theme/preview/exponent3.png

[bsod-text]:    https://github.com/Saltssaumure/xp-discord-theme/blob/main/scss/top/_vars.scss
[addons]:       https://github.com/Saltssaumure/xp-discord-theme/tree/main/addon

[css-color]:        https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
[css-string]:       https://developer.mozilla.org/en-US/docs/Web/CSS/string
[discord]:          https://discord.gg/uy8nKQVatp

[BetterDiscord]:    https://betterdiscord.app/
[Replugged]:        https://replugged.dev/
[Vencord]:          https://vencord.dev/

[shield-donate]:    https://img.shields.io/badge/Donate-ko--fi-orange?style=flat-square&logo=kofi&logoColor=orange
[ko-fi]:            https://ko-fi.com/saltssaumure "Buy me a coffee!"

[shield-css-dl]:    https://img.shields.io/github/downloads/Saltssaumure/xp-discord-theme/Exponent.theme.css?color=purple&label=Downloads&style=flat-square
[shield-asar-dl]:   https://img.shields.io/github/downloads/Saltssaumure/xp-discord-theme/net.saltssaumure.Exponent.asar?color=purple&label=Downloads&style=flat-square
[shield-repo-size]: https://img.shields.io/github/repo-size/Saltssaumure/xp-discord-theme?label=Repository&style=flat-square "Total size"

[github]:           https://github.com/Saltssaumure/xp-discord-theme
[license]:          https://github.com/Saltssaumure/xp-discord-theme/blob/main/LICENSE
[issues]:           https://github.com/Saltssaumure/xp-discord-theme/issues
[.theme.css]:       https://github.com/Saltssaumure/xp-discord-theme/blob/main/Exponent.theme.css

[release-bd]:       https://betterdiscord.app/theme/?id=823 "BetterDiscord store page"
[release-css-gh]:   https://github.com/Saltssaumure/xp-discord-theme/releases/latest/download/Exponent.theme.css "Get latest release"
[release-rp]:       https://replugged.dev/store/net.saltssaumure.Exponent "Replugged store page"
[release-rp-gh]:    https://github.com/Saltssaumure/xp-discord-theme/releases/latest/download/net.saltssaumure.Exponent.asar "Get latest release"

# Exponent Discord Theme
[![Buy me a coffee on ko-fi][shield-donate]][ko-fi]
[![CSS GitHub downloads][shield-css-dl]][release-css-gh]
[![Replugged GitHub downloads][shield-asar-dl]][release-rp-gh]
[![Total repository size][shield-repo-size]][github]

***A Windows XP style Discord theme.***

| Light mode                       | Dark mode                      |
| -------------------------------- | ------------------------------ |
| ![Exponent in light mode][light] | ![Exponent in dark mode][dark] |

## Installation

### [BetterDiscord][BetterDiscord]
<details>
    <summary>Click to expand</summary>

1. Download `Exponent.theme.css`:
    - [BetterDiscord store][release-bd]
    - [GitHub][release-css-gh]
2. Place the file in the themes folder:
    - `Settings` > `BetterDiscord` > `Themes` > `Open Themes Folder`
3. Toggle on the theme card.
</details>

### [Replugged][Replugged]
<details>
    <summary>Click to expand</summary>

#### Automatic
1. Click to install:
    - [Replugged store][release-rp]
#### Manual
1. Download `net.saltssaumure.Exponent.asar`:
    - [GitHub][release-rp-gh]
2. Place the file in the themes folder:
    - `Settings` > `Replugged` > `Themes` > `Open Themes Folder`
3. Click `Load Missing Themes` and toggle on the theme card.
</details>

### [Vencord][Vencord]
<details>
    <summary>Click to expand</summary>

#### Local
1. Download `Exponent.theme.css`:
    - [BetterDiscord store][release-bd]
    - [GitHub][release-css-gh]
2. Place the file in the themes folder:
    - `Settings` > `Vencord` > `Themes` > `Local Themes` > `Open Themes Folder`
3. Click `Load missing Themes` and toggle on the theme card.
#### Online
1. Paste the link in `Settings` > `Vencord` > `Themes` > `Online Themes`:
    - `https://saltssaumure.github.io/xp-discord-theme/Exponent.theme.css`
</details>

## Customisation

![Screenshot of Exponent with customised colours][customised]

| Variable name                      | Description                 | Valid values                                     | Default value                                                         |
| ---------------------------------- | --------------------------- | ------------------------------------------------ | --------------------------------------------------------------------- |
| `--xp-background-image`            | Background image            | Any image link encased in `url()`.               | `url(https://saltssaumure.github.io/xp-discord-theme/img/bliss.avif)` |
| `--xp-background-color`            | Background colour           | Any [colour][css-color].                         | `#003300`                                                             |
| `--xp-window-color-1`, `-2`        | Window titlebar colours     | Any [colour][css-color].                         | `#005AE7`, `#0372FF`                                                  |
| `--xp-taskbar-color-1`, `-2`, `-3` | Taskbar control colours     | Any [colour][css-color].                         | `#108CE4`, `#578CD0`, `#1665CA`                                       |
| `--xp-start-color-1`, `-2`         | Start button colours        | Any [colour][css-color].                         | `#008000`, `#38C438`                                                  |
| `--xp-shortcut-color-1`, `-2`      | Shortcut icon colours       | Any [colour][css-color].                         | `#0CA80C`, `#008000`                                                  |
| `--xp-ping-color`                  | Ping bubble colour          | Any [colour][css-color].                         | `#E64D1C`                                                             |
| `--bsod-color`                     | BSOD background colour      | Any [colour][css-color].                         | `navy`                                                                |
| `--bsod-text`                      | BSOD text                   | Any [text][css-string]. Use `\A` for new lines.  | [Read here][bsod-text].                                               |
| `--xp-bg-color`                    | Panel background colour     | Any [colour][css-color].                         | `#000` (dark) / `#FFF` (light)                                        |
| `--xp-set-color`                   | Panel settings icon colour  | Any [colour][css-color], preferably translucent. | `#FFFFFFB3` (dark) / `#000000B3` (light)                              |
| `--xp-hover-color`                 | Panel hovered item colour   | Any [colour][css-color].                         | `#102030` (dark) / `#D3D3D3` (light)                                  |
| `--xp-zing-color`                  | Panel top decoration colour | Any [colour][css-color].                         | `#A05000` (dark) / `#FFA500` (light)                                  |
| `--xp-txt-color`                   | Panel text colour           | Any [colour][css-color].                         | `#FFF` (dark) / `#000` (light)                                        |
| `--xp-bg-bright-color`             | Button highlight colour     | Any [colour][css-color].                         | `#203040` (dark) / `#F0EFED` (light)                                  |
| `--xp-bg-tint-color`               | Button background colour    | Any [colour][css-color].                         | `#202020` (dark) / `#EBE8D7` (light)                                  |
| `--xp-bg-shade-color`              | Button shadow colour        | Any [colour][css-color].                         | `#101010` (dark) / `#808080` (light)                                  |
| `--xp-border-color`                | Button/panel border colour  | Any [colour][css-color].                         | `#1665CA` (dark) / `#000000` (light)                                  |

### BetterDiscord
<details>
    <summary>Click to expand</summary>

1. Open `Settings` > `BetterDiscord` > `Themes`.
2. Click the pencil icon on this theme.
3. Edit the variable values and save changes.
</details>

### Replugged
<details>
    <summary>Click to expand</summary>

1. Enable `Automatically Apply Quick CSS` in `Settings` > `Replugged` > `General`.
1. Open `Settings` > `Replugged` > `Quick CSS`.
3. Copy and paste lines 15-57 of [`Exponent.theme.css`][.theme.css].
3. Edit the variable values and save.
</details>

### Vencord
<details>
    <summary>Click to expand</summary>

#### Local
2. `Open Themes Folder` in `Settings` > `Vencord` > `Themes` > `Local Themes`
3. Open `Exponent.theme.css` with your favourite text editor.
4. Edit the variable values and save.
#### Online
1. `Enable Custom CSS` in `Settings` > `Vencord` > `Vencord` and click `Open QuickCSS File`.
2. Copy and paste lines 15-57 of [`Exponent.theme.css`][.theme.css].
3. Edit the variable values.
</details>

## Addons
See [Addons][addons] for mini-themes designed to be used alongside Exponent to add extra optional features.

## License
Copyright (c) 2022-2024 Saltssaumure

This theme is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This theme is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the [GNU Affero General Public License][license] for more details.

## Credits
### Themes
[hsl]:  https://github.com/DiscordStyles/HorizontalServerList
- [HorizontalServerList][hsl] by [DiscordStyles](https://github.com/DiscordStyles) ([Gibbu](https://github.com/Gibbu)) - MIT license

### Assets
[bliss]:    https://archive.org/details/windows-xp-bliss-wallpaper
- [Bliss][bliss] by Microsoft (Charles O'Rear)

## Questions or suggestions?
- Post [an issue][issues] on GitHub.
- Post in `#theme-support` on [my support server][discord].