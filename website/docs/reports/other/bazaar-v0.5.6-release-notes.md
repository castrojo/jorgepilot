---
tags:
  - ublue
  - bazaar
  - release-notes
last_updated: 2025-10-15
---

# Bazaar v0.5.6 Release Notes

## Executive Summary

Bazaar v0.5.6 brings significant UX improvements with a new Flathub-style featured app carousel, an interactive screenshot dialog, and extensive UI polish. This release includes 35+ commits since v0.5.5, featuring major design updates to sidebars and context bars, progress bar enhancements, and comprehensive translation updates across 9 languages.

## What's Changed

### 🎨 Major UI/UX Enhancements

* **(UX) Add a Flathub like carousel for featured apps** by [@AlexanderVanhee](https://github.com/AlexanderVanhee) in [#469](https://github.com/kolunmi/bazaar/pull/469)
  - New featured app carousel with auto-switching and smooth animations
  - Improved spring animation values for better user experience
  - Fixed size overflow issues for better responsive design

* **Add interactive screenshot dialog** by [@AlexanderVanhee](https://github.com/AlexanderVanhee) in [#458](https://github.com/kolunmi/bazaar/pull/458)
  - Full interactive screenshot viewer with touch and keyboard navigation
  - Zoom functionality with cursor feedback
  - Automatic screenshot centering

* **(UX) Switch side panels to sidebars and use flat header bar designs** by [@AlexanderVanhee](https://github.com/AlexanderVanhee) in [#443](https://github.com/kolunmi/bazaar/pull/443)
  - Modernized UI with sidebar navigation
  - Flat header bar design for cleaner appearance
  - Improved app page header bar and transaction animations

### 🎯 Context & Interface Improvements

* **Change preferences group to context bar** by [@AlexanderVanhee](https://github.com/AlexanderVanhee) in [#442](https://github.com/kolunmi/bazaar/pull/442)
  - Enhanced context-aware UI
  - Non-focusable license tiles for better keyboard navigation

* **(UX) Polish up the context bar** by [@AlexanderVanhee](https://github.com/AlexanderVanhee) in [#451](https://github.com/kolunmi/bazaar/pull/451)
  - Full view license links
  - Static SPDX implementation

### 📊 Progress & Status Features

* **Global progress bar enhancements** by [@kolunmi](https://github.com/kolunmi)
  - Added pending state for progress bar (commit [276f64d](https://github.com/kolunmi/bazaar/commit/276f64d4c9e87d194b9d06695d78e718aa984450))
  - Corner radius adjustments for inner bar in pending state by [@AlexanderVanhee](https://github.com/AlexanderVanhee) in [#470](https://github.com/kolunmi/bazaar/pull/470)

### 🐛 Bug Fixes & Stability

* **(UI) Fix description rendering issues** by [@AlexanderVanhee](https://github.com/AlexanderVanhee) in [#466](https://github.com/kolunmi/bazaar/pull/466)
  - Fixed whitespace issues in AppstreamDescriptionRender
  - Improved padding consistency with short descriptions
  - Fixed various description rendering problems

* **Minor screenshot dialog fixes** by [@AlexanderVanhee](https://github.com/AlexanderVanhee) in [#463](https://github.com/kolunmi/bazaar/pull/463)
  - Whitespace fixes
  - Improved dialog behavior

* **Fix keyboard not looping screenshot carousel** by [@AlexanderVanhee](https://github.com/AlexanderVanhee) in [#460](https://github.com/kolunmi/bazaar/pull/460)

* **AsyncTexture: avoid potential segfault** (commit [517ac22](https://github.com/kolunmi/bazaar/commit/517ac22ead484c43ea0fb855ed0c033c822bdda8))

* **AppstreamDescriptionRender: fix whitespace issues** (commit [aa15956](https://github.com/kolunmi/bazaar/commit/aa159567574e08aa8a7c24dcdbb55904bbe7af80))

### 🌍 Translation Updates

This release features extensive internationalization work with updates to:

* **chore(po): Update French translation** by [@HarmfulBreeze](https://github.com/HarmfulBreeze) in [#468](https://github.com/kolunmi/bazaar/pull/468)
* **chore(po): update Ukrainian translation** by [@Saltane](https://github.com/Saltane) in [#462](https://github.com/kolunmi/bazaar/pull/462)
* **chore(po): update Russian translation** by [@Lumaeris](https://github.com/Lumaeris) in [#456](https://github.com/kolunmi/bazaar/pull/456)
* **chore(po): update Ukrainian translation** by [@Saltane](https://github.com/Saltane) in [#457](https://github.com/kolunmi/bazaar/pull/457)
* **Update japanese texts** by [@camegone](https://github.com/camegone) in [#439](https://github.com/kolunmi/bazaar/pull/439)
* **chore(po): Update Italian translation** by [@pbluez](https://github.com/pbluez) in [#440](https://github.com/kolunmi/bazaar/pull/440)
* **Updated Spanish translation** by [@Cherryda](https://github.com/Cherryda) in [#444](https://github.com/kolunmi/bazaar/pull/444)
* **chore(po): update Arabic translation** by [@x9a](https://github.com/x9a) in [#438](https://github.com/kolunmi/bazaar/pull/438)
* **Minor improvements to Czech translation** by [@ExistingPerson08](https://github.com/ExistingPerson08) in [#433](https://github.com/kolunmi/bazaar/pull/433)

### 🔧 Technical Improvements

* **bump libdex requirement to 1.0.0** (commit [b6a63c9](https://github.com/kolunmi/bazaar/commit/b6a63c9e27e2998d2da73155d27d432fb24ff5e9))
* **Simplify CLI args** - Removed subcommands concept (commit [fdff81a](https://github.com/kolunmi/bazaar/commit/fdff81ac19535259319dd3139be6aca15e88a2ab))
* **handle --help properly** (commit [f113e79](https://github.com/kolunmi/bazaar/commit/f113e79251340a745a93a6daf2f6a57ecbc55252))
* **Force updates into one transaction** - Prevents dependency race conditions (commit [8534296](https://github.com/kolunmi/bazaar/commit/85342967d30b1493dd551cb201369a6cb08e9883))
* **FlatpakInstance: mark transaction_ready as static** (commit [979b41e](https://github.com/kolunmi/bazaar/commit/979b41e1794b80843d5b1f5540c65c5a9c893c5d))

### 📦 Metadata & Infrastructure

* **Update metainfo file to better follow flathub guidelines** by [@AlexanderVanhee](https://github.com/AlexanderVanhee) in [#448](https://github.com/kolunmi/bazaar/pull/448)
  - Updated screenshot links
  - Better compliance with Flathub standards

* **feat: add nightly suffix to desktop file** by [@renner0e](https://github.com/renner0e) in [#455](https://github.com/kolunmi/bazaar/pull/455)

## 🎉 New Contributors

* 🥇 [@HarmfulBreeze](https://github.com/HarmfulBreeze) made their first contribution in [#468](https://github.com/kolunmi/bazaar/pull/468)

## Repository Information

**Repository:** [@kolunmi/bazaar](https://github.com/kolunmi/bazaar)  
**Release:** v0.5.6 (Expected)  
**Previous Release:** [v0.5.5](https://github.com/kolunmi/bazaar/releases/tag/v0.5.5) (October 9, 2025)  
**Commits Since v0.5.5:** 36 commits  
**Date Range:** October 9, 2025 - October 15, 2025

## Key Contributors This Release

* [@AlexanderVanhee](https://github.com/AlexanderVanhee) - Major UI/UX contributions (carousel, screenshot dialog, sidebars, context bar)
* [@kolunmi](https://github.com/kolunmi) - Core improvements, bug fixes, technical infrastructure
* Translation contributors: [@HarmfulBreeze](https://github.com/HarmfulBreeze), [@Saltane](https://github.com/Saltane), [@Lumaeris](https://github.com/Lumaeris), [@camegone](https://github.com/camegone), [@pbluez](https://github.com/pbluez), [@Cherryda](https://github.com/Cherryda), [@x9a](https://github.com/x9a), [@ExistingPerson08](https://github.com/ExistingPerson08)

## Full Changelog

**Full Changelog**: [v0.5.5...master](https://github.com/kolunmi/bazaar/compare/v0.5.5...master)

## Related Work

- [Bazaar Project](https://github.com/kolunmi/bazaar) - A modern Flatpak app store for GNOME
- [Previous Release: v0.5.5](https://github.com/kolunmi/bazaar/releases/tag/v0.5.5)
- [Flathub](https://flathub.org/) - The app store for Linux

---

**Report Generated**: October 15, 2025  
**Data Source**: [@kolunmi/bazaar](https://github.com/kolunmi/bazaar) repository (GitHub API)
