---
tags:
  - ublue
  - bazzite
  - bluefin
  - comparison
  - report
last_updated: 2025-12-08
---

# Bazzite vs. Bluefin (GNOME): Technical Comparison Report

## Executive Summary

This report details the technical differences between [@ublue-os/bazzite](https://github.com/ublue-os/bazzite) and [@ublue-os/bluefin](https://github.com/ublue-os/bluefin) GNOME editions. Both share a Fedora Silverblue OCI base but differ in kernel selection, package composition, and system configuration. Bluefin targets developer workstations while Bazzite focuses on gaming and HTPC use cases.

## Kernel & Hardware Enablement

| Component | Bluefin | Bazzite |
| :--- | :--- | :--- |
| **Kernel** | Fedora Stable (`kernel`, `kernel-core`) | Custom (`kernel-bazzite`) |
| **Source** | Upstream Fedora | Derived from `kernel-fsync` |
| **Patches** | Standard Fedora patchset | `futex2`, `winesync`, `fsync` |
| **Scheduling** | CFS (Completely Fair Scheduler) | Supports `sched-ext` (`scx-scheds`, `scx-tools`) |
| **ZFS** | Supported (via `akmods-zfs`) | Not included |
| **Extra Modules** | `xone`, `openrazer`, `framework-laptop`, `v4l2loopback` | `xone`, `openrazer`, `framework-laptop`, `v4l2loopback`, `cpulimit`, `ryzenadj` |

Bazzite's kernel includes patches for handheld gaming devices (Steam Deck, ROG Ally, Legion Go). Bluefin uses the upstream Fedora kernel.

## Package Management & Repositories

Both distributions use `rpm-ostree` with different package sets and COPR repositories.

### Bluefin
- **Base Packages:** Standard Fedora workstation set plus `tailscale`, `just`, `ptyxis`.
- **COPRs:** `ublue-os/packages`, `che/nerd-fonts`.
- **Additions:**
  - `bluefin-schemas`, `bluefin-backgrounds`, `bluefin-faces`: Branding and configuration.
  - `ublue-brew`: Homebrew integration.
  - Development tools: `git-credential-libsecret`, `python3-pip`, `make`, `gcc`.

### Bazzite
- **Base Packages:** Modified Fedora set for gaming.
- **COPRs:** `bazzite-org/bazzite`, `bazzite-org/bazzite-multilib`, `ublue-os/staging`, `hhd-dev/hhd`, `lizardbyte/beta`, `ycollet/audinux`.
- **Gaming Packages:**
  - Game launchers: `steam`, `lutris`, `heroic-games-launcher-bin`.
  - Performance layers: `gamescope`, `mangohud`, `vkbasalt`.
  - Streaming: `sunshine`, `moonlight`.
  - Recording: `obs-studio`, `obs-vkcapture`.
- **External Repos:** Terra (Mesa drivers), Negativo17 (Steam/multimedia), RPM Fusion (codecs).
- **Drivers:** Proprietary NVIDIA drivers on `-nvidia` images, AMD ROCm support.

## Desktop Environment Configuration (GNOME)

### Display Manager
- **Bluefin:** GDM (GNOME Display Manager).
- **Bazzite GNOME:** GDM on desktop images.
- **Bazzite Deck:** SDDM on handheld images for `gamescope-session`.

### GNOME Extensions

**Bluefin Extensions (shipped via git submodules):**
- `appindicatorsupport@rgcjonas.gmail.com` - System tray icons
- `blur-my-shell@aunetx` - Shell blur effects
- `caffeine@eonpatapon` - Prevent auto-suspend
- `dash-to-dock@micxgx.gmail.com` - Persistent dock
- `gsconnect@andyholmes.github.io` - Android integration
- `logomenu@aryan_k` - Bluefin logo in top bar
- `search-light@icedman.github.com` - Spotlight-like search

**Bazzite Extensions (built from `bazzite-gnome-extensions` repo):**
- `user-theme@gnome-shell-extensions.gcampax.github.com` - Custom shell themes
- `gsconnect@andyholmes.github.io` - Android integration
- `appindicatorsupport@rgcjonas.gmail.com` - System tray icons
- Additional gaming-specific extensions (hardware-dependent)

### GNOME Settings (GSettings Overrides)

**Bazzite Specific (`zz0-*-bazzite-desktop-silverblue-*.gschema.override`):**

```ini
[org.gnome.mutter]
experimental-features=['variable-refresh-rate', 'scale-monitor-framebuffer', 'xwayland-native-scaling']
check-alive-timeout=uint32 20000

[org.gnome.software]
allow-updates=false
download-updates=false
download-updates-notify=false

[org.gnome.desktop.wm.keybindings]
switch-applications=['<Super>Tab']
switch-applications-backward=['<Shift><Super>Tab']
switch-windows=['<Alt>Tab']
switch-windows-backward=['<Shift><Alt>Tab']
```

**Bluefin Specific:**
- Packaged via `bluefin-schemas` RPM from `ublue-os/packages` COPR.
- Enables `dash-to-dock`, `appindicator`, `blur-my-shell` by default.
- Sets Inter (UI) and JetBrains Mono (monospace) as system fonts.

## System Services & Daemons

Bazzite includes hardware control daemons not present in Bluefin.

| Service | Description | Bazzite | Bluefin |
| :--- | :--- | :--- | :--- |
| **hhd.service** | Handheld Daemon (controller support) | Enabled | Not included |
| **steamos-manager.service** | SteamOS hardware manager | Enabled (global) | Not included |
| **sunshine** | Game streaming host | Pre-installed | Not included |
| **wireplumber-workaround.service** | Audio latency optimization | Enabled | Not included |
| **pipewire-workaround.service** | Audio stability fixes | Enabled | Not included |
| **bazzite-autologin.service** | Auto-login for deck mode | Enabled | Not included |
| **tailscaled** | Tailscale VPN mesh | Pre-installed | Pre-installed |
| **ublue-brew-setup** | Homebrew initialization | Enabled | Enabled |
| **podman** | Container runtime | Default | Default |

**Disabled Services in Bazzite:**
- `uupd.timer` - Update notifier (replaced with custom logic)
- `input-remapper.service` - Disabled by default
- `jupiter-*` services - Steam Deck services (disabled on non-Deck hardware)

## Repository Priority Configuration

### Bluefin
- Fedora repos: Standard priority
- `ublue-os/packages` COPR: High priority for branding packages
- Tailscale: Disabled by default, enabled on-demand
- No Mesa overrides

### Bazzite
- `bazzite-org/bazzite` COPR: Priority 1
- Terra repos: Priority 3 (Mesa drivers)
- Negativo17: Priority 4 (Steam, multimedia)
- RPM Fusion: Priority 5 (codecs, drivers)
- Fedora: Excludes Mesa, kernel packages

## Package Exclusions

### Bluefin Removes:
- `firefox`, `firefox-langpacks` (replaced with Flatpak)
- `gnome-software` (replaced or removed depending on Fedora version)
- `gnome-terminal-nautilus` (uses Ptyxis)
- `podman-docker`
- `fedora-chromium-config-gnome`

### Bazzite Removes:
- `firefox`, `firefox-langpacks` (replaced with Flatpak)
- `gnome-software`
- `gnome-terminal-nautilus`
- `podman-docker`
- `nvidia-gpu-firmware` (on NVIDIA builds)
- `rocm-*` packages (on NVIDIA builds)

## Build Process Differences

### Bluefin
- Sources GNOME extensions via git submodules (versioned, pinned)
- Builds extensions using `build-gnome-extensions.sh` from projectbluefin/common
- Uses Fedora kernel directly
- Minimal systemd unit modifications

### Bazzite
- Sources GNOME extensions from `bazzite-gnome-extensions` repository
- Custom kernel build from `ghcr.io/bazzite-org/kernel-bazzite:latest`
- NVIDIA driver build from `ghcr.io/bazzite-org/nvidia-drivers:latest`
- Systemd unit customization for hardware support

## NVIDIA Driver Handling

### Bluefin
- Uses `akmods-nvidia-open` from upstream
- Installs via standard ublue-os/main NVIDIA script
- Kernel args: `rd.driver.blacklist=nouveau`, `modprobe.blacklist=nouveau`, `nvidia-drm.modeset=1`

### Bazzite
- Uses custom-built NVIDIA drivers from `bazzite-org/nvidia-drivers`
- Removes `nouveau_icd.*.json`
- Installs `egl-wayland` and `egl-wayland2` (both x86_64 and i686)
- Links `libnvidia-ml.so` for monitoring tools

## Conclusion

Bluefin follows upstream Fedora closely with added developer tooling and UI polish. Bazzite uses a custom kernel and gaming-focused package set. Users requiring standard Fedora kernel behavior and ZFS support should use Bluefin. Users requiring `fsync` kernel patches, VRR support, or handheld hardware enablement should use Bazzite.

## References

- [@ublue-os/bluefin](https://github.com/ublue-os/bluefin) - Bluefin repository
- [@ublue-os/bazzite](https://github.com/ublue-os/bazzite) - Bazzite repository
- [Bluefin Health Check](./bluefin-health-check.md)
- [Bazzite Health Check](./bazzite-health-check.md)
- [Bluefin Driver Versions](./bluefin-driver-versions.md)
- [Bazzite Driver Versions](./bazzite-driver-versions.md)
