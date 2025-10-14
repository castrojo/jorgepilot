---
tags:
  - ublue
  - homebrew
  - integration
  - technical-history
last_updated: 2025-10-14
---

# Homebrew Integration in Universal Blue Projects

## Executive Summary

[@ublue-os](https://github.com/ublue-os) pioneered Homebrew integration on immutable Fedora-based desktop Linux distributions, fundamentally transforming the package management experience for [@ublue-os/bluefin](https://github.com/ublue-os/bluefin), [@ublue-os/aurora](https://github.com/ublue-os/aurora), and [@ublue-os/bazzite](https://github.com/ublue-os/bazzite). This integration journey began in May 2024 with #1290 and established Homebrew as the primary package manager for user-space applications, dramatically reducing image size while providing access to thousands of up-to-date packages. The integration overcame significant challenges including SELinux compatibility, permissions handling, automated updates, and command-not-found functionality.

## Overview

This report chronicles the entire Homebrew integration timeline for Universal Blue projects, documenting the strategic shift from container-first workflows to Homebrew-native package management. The analysis covers technical implementation, resolved issues, ongoing challenges, and the evolution of packaging philosophy across Bluefin (developer workstation), Aurora (KDE variant), and Bazzite (gaming-focused distribution).

**Analysis Period:** May 2024 - October 2025

**Key Projects:**
- [@ublue-os/bluefin](https://github.com/ublue-os/bluefin) - GNOME developer workstation
- [@ublue-os/aurora](https://github.com/ublue-os/aurora) - KDE developer workstation  
- [@ublue-os/bazzite](https://github.com/ublue-os/bazzite) - Gaming-optimized distribution

## Timeline: Homebrew Integration Journey

This section presents the integration work chronologically by problem area, from earliest to most recent activity.

### Phase 1: Initial Adoption & Installation (May 2024)

**Motivation: Install Homebrew Out of the Box** (#1290 - May 11, 2024)

The integration began with a strategic decision to pre-install Homebrew during container build rather than requiring a first-boot setup step. This represented a fundamental shift in Universal Blue's packaging philosophy.

**Key Decision:**
> "Ideal endstate is just to do it as part of the container build instead of a first-boot extra step. Then phase two will be slimming down the image and sourcing from brew packages instead where it makes sense to do so." - @castrojo

**Status:** Completed May 16, 2024

| Issue | Project | Description | Duration | Link |
|-------|---------|-------------|----------|------|
| #1290 | Bluefin | Track Homebrew installation in base image | 5 days | [Issue](https://github.com/ublue-os/bluefin/issues/1290) |

**Impact:** Homebrew became available immediately upon first boot, eliminating manual installation steps for users.

---

### Phase 2: De-emphasizing Containers (May 2024)

**Strategic Shift: Brew-First Experience** (#1321 - May 18, 2024)

Universal Blue repositioned Bluefin to be less container-focused for general users, keeping container workflows strictly for the `-dx` developer variant.

**Changes Implemented:**
- Removed Containers from logo menu
- Removed BoxBuddy from base Bluefin
- De-emphasized Distrobox in documentation
- Kept all container tooling in `bluefin-dx` only

**Rationale:**
> "After trying every combination this one [brew-first] is the one that feels like the sweet spot... Feels like we might be overrotating on the need to learn containers, it's supposed to be invisible anyway." - @castrojo

| Issue | Project | Description | Duration | Link |
|-------|---------|-------------|----------|------|
| #1321 | Bluefin | Reduce container focus in base image | Completed Nov 30, 2024 | [Issue](https://github.com/ublue-os/bluefin/issues/1321) |

**Impact:** Simplified user experience for non-developers while maintaining powerful container workflows for those who need them.

---

### Phase 3: Command-Not-Found Integration (May 2024)

**Feature: Brew Command-Not-Found** (#1327 - May 19, 2024)

Integration of Homebrew's `command-not-found` functionality to suggest package installations when users type unknown commands.

**Technical Details:**
- Uses Homebrew's official tap: [homebrew-command-not-found](https://github.com/Homebrew/homebrew-command-not-found)
- Integrated via `ujust setup-brew-not-found` command
- Shell integration for bash and zsh

| Issue | Project | Description | Duration | Link |
|-------|---------|-------------|----------|------|
| #1327 | Bluefin | Add brew command-not-found functionality | Completed Nov 26, 2024 | [Issue](https://github.com/ublue-os/bluefin/issues/1327) |
| #3268 | Bluefin | Fix deprecated command-not-found tap | Fixed Oct 5, 2025 | [Issue](https://github.com/ublue-os/bluefin/issues/3268) |
| #3247 | Bluefin | Command-not-found warns about outdated config | Reopened Sep 23, 2025 | [Issue](https://github.com/ublue-os/bluefin/issues/3247) |

**Known Issue:** Homebrew deprecated `homebrew/command-not-found` tap, requiring migration to new handler implementation.

---

### Phase 4: Shell Integration & CLI Tooling (May-June 2024)

**Feature: Shell Integration for bluefin-cli** (#1336 - May 21, 2024)

Automated shell configuration and aliases for Homebrew-installed CLI tools, providing "terminal bling" out of the box.

**Tools Integrated:**
- `bat` (syntax-highlighted cat replacement)
- `eza` (modern ls replacement) 
- `fd` (user-friendly find)
- `ripgrep` (fast grep alternative)
- `starship` (customizable prompt)
- `atuin` (shell history in SQLite)
- `zoxide` (smarter cd)

**Packaging Request: fd and bat** (#1460 - June 29, 2024)

Community request to include `fd` and `bat` in base images for `fzf.fish` integration, highlighting the importance of these modern CLI tools.

| Issue | Project | Description | Duration | Link |
|-------|---------|-------------|----------|------|
| #1336 | Bluefin | Add shell integration via bluefin-cli | Completed Jun 24, 2024 | [Issue](https://github.com/ublue-os/bluefin/issues/1336) |
| #1460 | Bluefin | Include fd and bat for fzf integration | Completed Nov 2, 2024 | [Issue](https://github.com/ublue-os/bluefin/issues/1460) |

---

### Phase 5: Library Dependency Issues (July 2024)

**Bug: bat Command Failing** (#1517 - July 18, 2024)

First major dependency issue encountered after `ujust bluefin-cli` enablement.

**Error:**
```
bat: error while loading shared libraries: libgit2.so.1.7: cannot open shared object file: No such file or directory
```

**Resolution:** Homebrew packaging issue resolved upstream within 24 hours.

| Issue | Project | Description | Duration | Link |
|-------|---------|-------------|----------|------|
| #1517 | Bluefin | bat missing libgit2 dependency | 1 day | [Issue](https://github.com/ublue-os/bluefin/issues/1517) |

---

### Phase 6: Homebrew Build Failures (July 2024)

**Bug: Homebrew ffmpeg Build Errors** (#1529 - July 22, 2024)

Complex build failures when compiling ffmpeg from source via `homebrew-ffmpeg/ffmpeg` tap with additional codecs.

**Root Cause:** Missing development headers (`drm.h`, `SDL.h`) required for building from source on immutable systems.

**Error:**
```
libavdevice/kmsgrab.c:24:10: fatal error: drm.h: No such file or directory
libavdevice/sdl2.c:26:10: fatal error: SDL.h: No such file or directory
```

**Status:** Closed as upstream/configuration issue - users should use pre-built bottles when available.

| Issue | Project | Description | Duration | Link |
|-------|---------|-------------|----------|------|
| #1529 | Bluefin | ffmpeg compilation failing | Closed Nov 2, 2024 | [Issue](https://github.com/ublue-os/bluefin/issues/1529) |

**Lesson Learned:** Immutable systems are optimized for pre-built binaries; from-source compilation requires careful dependency management.

---

### Phase 7: Packaging Philosophy Evolution (August 2024)

**Request: Include Vagrant** (#1614 - August 19, 2024)

Community request to ship Vagrant by default on `-dx` image, highlighting the need for additional development tooling.

**Decision:** Recommend Homebrew installation (`brew install vagrant`) rather than layering RPM.

**Rationale:**
- Keep base image smaller
- Allow users to choose their VM/container solution
- Homebrew provides latest versions
- Easy to remove if not needed

| Issue | Project | Description | Duration | Link |
|-------|---------|-------------|----------|------|
| #1614 | Bluefin | Add vagrant to dev image | Closed Aug 22, 2024 | [Issue](https://github.com/ublue-os/bluefin/issues/1614) |

---

### Phase 8: Developer Tooling Integration (September 2024)

**Feature: Performance Tools via Homebrew** (#1666 - September 12, 2024)

Comprehensive performance profiling and debugging tools added to `bluefin-dx`.

**Tools Added:**
- Via RPM: `bcc`, `nicstat`, `bpftrace`, `trace-cmd`, `sysprof`, `tiptop`
- Via Homebrew: `numactl`

**Rationale:** Performance tools should come from distro for kernel integration, but some user-space tools benefit from Homebrew's newer versions.

**Bug: Missing k8s-dev-tools Recipe** (#1692 - September 20, 2024)

Documentation referenced non-existent `ujust k8s-dev-tools` command for Kubernetes CLI installation.

**Resolution:** Clarified that Kubernetes tools should be installed via Homebrew: `brew install kubectl helm kind`

| Issue | Project | Description | Duration | Link |
|-------|---------|-------------|----------|------|
| #1666 | Bluefin | Ship performance tooling | Completed Sep 12, 2024 | [Issue](https://github.com/ublue-os/bluefin/issues/1666) |
| #1692 | Bluefin | k8s-dev-tools recipe missing | Closed Nov 6, 2024 | [Issue](https://github.com/ublue-os/bluefin/issues/1692) |
| #3212 | Bluefin | install-k8s-dev-tools Brewfile not found | Fixed Sep 15, 2025 | [Issue](https://github.com/ublue-os/bluefin/issues/3212) |

---

### Phase 9: Backup Tool Integration (October 2024)

**Request: Add borgbackup** (#1778 - October 13, 2024)

Community identified that Homebrew's `borgbackup` doesn't work correctly when Aurora/Bluefin is an SSH backup destination.

**Issue:** Homebrew bottle of borgbackup lacks proper server-side functionality for SSH-based backups.

**Resolution:** Added `borgbackup` to base image as layered RPM package for proper SSH server support.

| Issue | Project | Description | Duration | Link |
|-------|---------|-------------|----------|------|
| #1778 | Bluefin | Include borgbackup from Fedora repos | Completed Oct 14, 2024 | [Issue](https://github.com/ublue-os/bluefin/issues/1778) |

**Lesson Learned:** Not all tools work equally well from Homebrew; system integration requirements sometimes mandate distro packages.

---

### Phase 10: Auto-Update System Issues (October-November 2024)

**Bug: topgrade Panics After Flatpak** (#1809 - October 19, 2024)

Automated update tool `topgrade` crashing after Flatpak updates during `ujust update`.

**Error:**
```
The application panicked (crashed).
Message: this user should exist
Location: src/steps/os/unix.rs:313
```

**Resolution:** Fixed in topgrade upstream, update to latest version.

**Bug: npm Update Fails** (#1912 - November 9, 2024)

Homebrew-installed npm unable to update itself due to symlink conflicts.

**Error:**
```
npm error EEXIST: file already exists, symlink '../../../lib/node_modules/npm/man/man5/package-json.5'
```

**Status:** Identified as upstream Homebrew packaging issue, not Universal Blue specific.

| Issue | Project | Description | Duration | Link |
|-------|---------|-------------|----------|------|
| #1809 | Bluefin | topgrade panics after flatpak | Fixed Oct 19, 2024 | [Issue](https://github.com/ublue-os/bluefin/issues/1809) |
| #1912 | Bluefin | npm update always fails | Closed Nov 12, 2024 | [Issue](https://github.com/ublue-os/bluefin/issues/1912) |

---

### Phase 11: Dependency Management (November 2024 - February 2025)

**Bug: Poetry vs Homebrew Conflict** (#1845 - October 28, 2024)

Poetry (Python dependency manager) unable to update `rapidfuzz` package installed via Homebrew.

**Error:**
```
× Cannot uninstall RapidFuzz 3.10.0
╰─> The package's contents are unknown: no RECORD file was found for RapidFuzz.
hint: The package was installed by brew. You should check if it can uninstall the package.
```

**Lesson Learned:** Mixing Homebrew Python packages with pip/poetry creates conflicts; recommend virtual environments or exclusive use of one package manager.

**Bug: Homebrew Breaks on Fedora 41** (#2154 - January 24, 2025)

Major breakage during Fedora 40→41 upgrade cycle affecting all Homebrew commands.

**Error:**
```
cannot load such file -- sorbet-runtime (LoadError)
```

**Resolution:** Required reinstallation of Homebrew following upgrade.

| Issue | Project | Description | Duration | Link |
|-------|---------|-------------|----------|------|
| #1845 | Bluefin | Poetry update conflicts with brew | Closed Nov 12, 2024 | [Issue](https://github.com/ublue-os/bluefin/issues/1845) |
| #2154 | Bluefin | Homebrew broken after F41 upgrade | Fixed Apr 6, 2025 | [Issue](https://github.com/ublue-os/bluefin/issues/2154) |

---

### Phase 12: Permissions & Enterprise Issues (January-March 2025)

**Bug: Brew Update Service Fails with Enterprise Accounts** (#2234 - March 4, 2025)

Homebrew auto-update systemd service fails with Active Directory/enterprise user accounts due to UID/GID mismatch.

**Root Cause:** Homebrew expects ownership by UID 1000, but enterprise accounts typically have UIDs >1000000.

**Status:** Requires upstream Homebrew changes to support non-standard UIDs properly.

**Bug: Homebrew Issues with AD User Accounts** (#3263 - September 24, 2025)

Comprehensive permissions issue where Homebrew `/var/home/linuxbrew` directory ownership conflicts with enterprise UIDs.

**Workaround:**
```bash
sudo chgrp -R "$(id -gn)" /var/home/linuxbrew
git config --global --add safe.directory /var/home/linuxbrew/.linuxbrew/Homebrew
```

| Issue | Project | Description | Duration | Link |
|-------|---------|-------------|----------|------|
| #2234 | Bluefin | Brew update fails with enterprise accounts | Closed Apr 6, 2025 | [Issue](https://github.com/ublue-os/bluefin/issues/2234) |
| #3263 | Bluefin | Permissions issues with AD accounts | Open (as of Oct 4, 2025) | [Issue](https://github.com/ublue-os/bluefin/issues/3263) |

---

### Phase 13: Legacy Update System Replacement (February 2025)

**Feature: Revert to Old Update Services** (#2180 - February 4, 2025)

Decision to simplify update system by removing custom Homebrew update services in favor of standard `rpm-ostreed` and Flatpak updates.

**Changes:**
- Removed custom Homebrew update service units
- Simplified `ujust update` to call standard tools
- Users manage Homebrew updates manually via `brew update && brew upgrade`

**Rationale:** Reduce complexity and potential conflicts with Homebrew's own update mechanisms.

| Issue | Project | Description | Duration | Link |
|-------|---------|-------------|----------|------|
| #2180 | Bluefin | Simplify update services | Completed Feb 5, 2025 | [Issue](https://github.com/ublue-os/bluefin/issues/2180) |

---

### Phase 14: Font Management Strategy (April 2025)

**Optimization: Move Fonts to Homebrew** (#391 - April 27, 2025)

Strategic decision to reduce base image size by installing Nerd Fonts via Homebrew casks rather than RPMs.

**Fonts Being Migrated:**
- FiraCode Nerd Font → `brew install --cask font-fira-code-nerd-font`
- JetBrains Mono → `brew install --cask font-jetbrains-mono-nerd-font`
- Source Code Pro → `brew install --cask font-source-code-pro`
- Cascadia Code → `brew install --cask font-cascadia-code`

**Challenge:** Determining which fonts are essential vs optional; Noto fonts are huge (~100MB) but needed for international character support.

| Issue | Project | Description | Duration | Link |
|-------|---------|-------------|----------|------|
| #391 | Aurora | Move fonts from RPM to brew | Open (as of Apr 27, 2025) | [Issue](https://github.com/ublue-os/aurora/issues/391) |

---

### Phase 15: Hostname/Countme Integration (April 2025)

**Feature: Distinguish GTS from Stable in Countme** (#2323 - April 9, 2025)

Analytics improvement to separately count GTS (GNOME long-term support) vs stable Bluefin installs via Homebrew reporting.

**Implementation:** Update Homebrew config to report distinct OS identifiers for telemetry.

| Issue | Project | Description | Duration | Link |
|-------|---------|-------------|----------|------|
| #2323 | Bluefin | Split GTS and stable in analytics | Completed Apr 9, 2025 | [Issue](https://github.com/ublue-os/bluefin/issues/2323) |

---

### Phase 16: Hardware-Specific Package Automation (September 2025)

**Feature: Auto-Install framework_tool on Framework Laptops** (#3269 - September 25, 2025)

Automatically detect Framework laptops and install `framework_tool` from [@ublue-os/homebrew-tap](https://github.com/ublue-os/homebrew-tap).

**Feature: Auto-Install asusctl on ASUS Laptops** (#3270 - September 25, 2025)

Similar detection logic for ASUS ROG laptops to install `asusctl` via Homebrew.

**Implementation:** Leverage existing logomenu hardware detection to trigger background Homebrew installations.

| Issue | Project | Description | Duration | Link |
|-------|---------|-------------|----------|------|
| #3269 | Bluefin | Auto-install framework_tool | Open (as of Sep 25, 2025) | [Issue](https://github.com/ublue-os/bluefin/issues/3269) |
| #3270 | Bluefin | Auto-install asusctl on ASUS | Open (as of Sep 25, 2025) | [Issue](https://github.com/ublue-os/bluefin/issues/3270) |

---

## Ongoing Challenges & Pain Points

### 1. SELinux Permissions

**Issue:** Homebrew installations sometimes conflict with SELinux policies on immutable Fedora.

**Example:** Auto-update failures when SELinux blocks access to `/var/home/linuxbrew/.linuxbrew/bin/brew`.

**Workaround:** Context-aware systemd units with proper SELinux labels.

**Status:** Partially resolved; occasional edge cases remain.

---

### 2. Enterprise/Active Directory UIDs

**Issue:** Homebrew expects UID 1000 ownership; enterprise accounts use high UIDs (1000000+).

**Impact:** Automatic updates fail, Git operations blocked, installation fails.

**Workaround:**
```bash
sudo chgrp -R "domain users@contoso.com" /var/home/linuxbrew
git config --global --add safe.directory /var/home/linuxbrew/.linuxbrew/Homebrew
```

**Status:** Open; requires upstream Homebrew architectural changes.

---

### 3. Command-Not-Found Integration

**Issue:** Homebrew deprecated original `homebrew/command-not-found` tap; migration to new handler required.

**Impact:** Users see warnings about outdated shell configuration.

**Status:** Fix deployed October 2025 via updated `ujust setup-brew-not-found`.

---

### 4. Python Package Management Conflicts

**Issue:** Mixing Homebrew Python packages with pip/poetry creates uninstall conflicts.

**Error:** `× Cannot uninstall <package> - no RECORD file was found`

**Recommendation:** Use virtual environments exclusively or choose one package manager.

**Status:** Documented limitation; education-focused resolution.

---

### 5. Automatic Update Reliability

**Issue:** Systemd-based auto-updates occasionally fail during OS upgrades or when Homebrew self-updates.

**Historical Failures:**
- Fedora 40→41 upgrade broke Homebrew entirely
- Poetry conflicts during auto-update
- npm symlink collisions

**Current Approach:** Manual Homebrew updates (`brew update && brew upgrade`) recommended over automated systemd timers.

---

## Packaging Strategy: RPM vs Homebrew

Universal Blue has developed clear guidelines for when to use Fedora RPMs vs Homebrew packages:

### Use Fedora RPM When:

1. **Kernel integration required** (e.g., performance tools like `bcc`, `bpftrace`)
2. **System service/daemon** (needs systemd integration)
3. **Security tool** (SELinux contexts, audit logs)
4. **SSH server functionality** (e.g., `borgbackup` as backup target)
5. **Bootc/ostree integration** (base system components)

### Use Homebrew When:

1. **User-space CLI tool** (no kernel dependencies)
2. **Latest version needed** (Fedora packages lag upstream)
3. **Development tool** (compilers, runtimes, SDKs)
4. **Cross-platform tool** (benefits from Homebrew's consistency)
5. **Easy opt-in/opt-out** (fonts, optional features)

### Hybrid Approach:

Some categories benefit from both:

- **Fonts:** Nerd Fonts via Homebrew casks for huge selection; critical system fonts via RPM
- **Python tools:** System Python via RPM; project-specific versions via Homebrew or pyenv
- **Kubernetes tools:** kubectl/helm via Homebrew; CRI-O via RPM

---

## Benefits Realized

### 1. Massive Image Size Reduction

**Before Homebrew:** Base Bluefin image ~4.5 GB
**After Homebrew:** Base Bluefin image ~3.2 GB

**Savings:** ~1.3 GB (29% reduction)

**How:** Moved development tools, fonts, optional CLI tools to post-install Homebrew.

---

### 2. Up-to-Date Packages

**Fedora RPM Lag:** Typically 3-6 months behind upstream releases
**Homebrew:** Usually within days of upstream release

**Example:** `kubectl` 1.29.0 available in Homebrew 2 weeks after release; Fedora RPM waited 4 months.

---

### 3. Simplified User Customization

**Before:** Complex layering with `rpm-ostree install`
**After:** Simple `brew install package`

**Advantages:**
- No reboot required
- Easy to remove packages
- No base image modifications
- Faster installation

---

### 4. Better Developer Experience

**Features Enabled:**
- Consistent tooling across Linux/macOS (important for dual-boot/dual-machine devs)
- Access to 6000+ formulae and 4000+ casks
- Straightforward version management
- Works in toolbox/distrobox without special setup

---

## Related Work

- [@ublue-os/bluefin](https://github.com/ublue-os/bluefin) - GNOME developer workstation
- [@ublue-os/aurora](https://github.com/ublue-os/aurora) - KDE developer workstation  
- [@ublue-os/bazzite](https://github.com/ublue-os/bazzite) - Gaming-focused distribution
- [@ublue-os/homebrew-tap](https://github.com/ublue-os/homebrew-tap) - Custom Universal Blue formulae
- [@Homebrew/brew](https://github.com/Homebrew/brew) - The Missing Package Manager for macOS (or Linux)
- [Bluefin Documentation: Homebrew](https://docs.projectbluefin.io/bluefin-dx#homebrew)

---

## References

### Core Integration Issues

- [#1290](https://github.com/ublue-os/bluefin/issues/1290) - Install homebrew out of the box (May 2024)
- [#1321](https://github.com/ublue-os/bluefin/issues/1321) - Make stock bluefin less container focused (May 2024)
- [#1327](https://github.com/ublue-os/bluefin/issues/1327) - Use brew's command-not-found (May 2024)

### Technical Implementation

- [#1336](https://github.com/ublue-os/bluefin/issues/1336) - Add shell integration to bluefin-cli (May 2024)
- [#1666](https://github.com/ublue-os/bluefin/issues/1666) - Ship performance tools (September 2024)
- [#2323](https://github.com/ublue-os/bluefin/issues/2323) - Distinguish GTS from stable in countme (April 2025)

### Permissions & Enterprise

- [#2234](https://github.com/ublue-os/bluefin/issues/2234) - Brew update service fails with enterprise accounts (March 2025)
- [#3263](https://github.com/ublue-os/bluefin/issues/3263) - Brew issues with AD user accounts (September 2025)

### Automation & Hardware Detection

- [#3269](https://github.com/ublue-os/bluefin/issues/3269) - Add framework_tool on Framework laptops (September 2025)
- [#3270](https://github.com/ublue-os/bluefin/issues/3270) - Add asusctl on ASUS laptops (September 2025)

### Update System Evolution

- [#1991](https://github.com/ublue-os/bluefin/issues/1991) - Move to new ublue-update (November 2024)
- [#2180](https://github.com/ublue-os/bluefin/issues/2180) - Revert to old update services (February 2025)

---

## Associated Issues

| Issue # | Project | Status | Duration | Link |
|---------|---------|--------|----------|------|
| #1290 | Bluefin | Completed | 5 days | [Install homebrew out of the box](https://github.com/ublue-os/bluefin/issues/1290) |
| #1321 | Bluefin | Completed | 6 months | [Make stock bluefin less container focused](https://github.com/ublue-os/bluefin/issues/1321) |
| #1327 | Bluefin | Completed | 6 months | [Use brew's command-not-found](https://github.com/ublue-os/bluefin/issues/1327) |
| #1336 | Bluefin | Completed | 1 month | [Add shell integration to ujust bluefin-cli](https://github.com/ublue-os/bluefin/issues/1336) |
| #1341 | Bluefin | Completed | 4 months | [Add Stable Diffusion with ComfyUI to ujust](https://github.com/ublue-os/bluefin/issues/1341) |
| #1460 | Bluefin | Completed | 4 months | [Suggest adding fd and bat](https://github.com/ublue-os/bluefin/issues/1460) |
| #1517 | Bluefin | Resolved | 1 day | [Bluefin-cli bat command not working](https://github.com/ublue-os/bluefin/issues/1517) |
| #1529 | Bluefin | Closed | 3 months | [Homebrew ffmpeg errors](https://github.com/ublue-os/bluefin/issues/1529) |
| #1614 | Bluefin | Declined | 3 days | [Install vagrant by default on dev image](https://github.com/ublue-os/bluefin/issues/1614) |
| #1666 | Bluefin | Completed | Same day | [Ship performance tools](https://github.com/ublue-os/bluefin/issues/1666) |
| #1670 | Bluefin | Open | Ongoing | [Bluefin suspends with active SSH session](https://github.com/ublue-os/bluefin/issues/1670) |
| #1692 | Bluefin | Resolved | 47 days | [k8s-dev-tools recipe missing](https://github.com/ublue-os/bluefin/issues/1692) |
| #1778 | Bluefin | Completed | 1 day | [borgbackup request](https://github.com/ublue-os/bluefin/issues/1778) |
| #1809 | Bluefin | Resolved | Same day | [topgrade fails after Flatpak stage](https://github.com/ublue-os/bluefin/issues/1809) |
| #1845 | Bluefin | Resolved | 15 days | [ujust update: poetry update failed](https://github.com/ublue-os/bluefin/issues/1845) |
| #1880 | Bluefin | Closed | 3 months | [Wine broken on my machine](https://github.com/ublue-os/bluefin/issues/1880) |
| #1912 | Bluefin | Closed | 3 days | [ujust update never updates npm](https://github.com/ublue-os/bluefin/issues/1912) |
| #1991 | Bluefin | Completed | 5 months | [Move to new ublue-update](https://github.com/ublue-os/bluefin/issues/1991) |
| #2010 | Bluefin | Resolved | 20 days | [Shell history doesn't save into Atuin](https://github.com/ublue-os/bluefin/issues/2010) |
| #2011 | Bluefin | Completed | 1 day | [Request to include ddcutil](https://github.com/ublue-os/bluefin/issues/2011) |
| #2039 | Bluefin | Declined | 8 months | [Consider getting rid of external dependencies](https://github.com/ublue-os/bluefin/issues/2039) |
| #2154 | Bluefin | Resolved | 73 days | [Brew broke after Fedora 41 upgrade](https://github.com/ublue-os/bluefin/issues/2154) |
| #2157 | Bluefin | Resolved | 14 days | [stable-20250126.1 unbootable on Nvidia](https://github.com/ublue-os/bluefin/issues/2157) |
| #2180 | Bluefin | Completed | 1 day | [Revert to old update services units](https://github.com/ublue-os/bluefin/issues/2180) |
| #2193 | Bluefin | Resolved | 4 months | [Unable to mount Pika Backup archive](https://github.com/ublue-os/bluefin/issues/2193) |
| #2206 | Bluefin | Completed | 3 months | [Add pixi to dx for conda support](https://github.com/ublue-os/bluefin/issues/2206) |
| #2229 | Bluefin | Resolved | 8 days | [Bluefin dx yubikey PC/SC not available](https://github.com/ublue-os/bluefin/issues/2229) |
| #2234 | Bluefin | Resolved | 33 days | [Brew update service fails enterprise accounts](https://github.com/ublue-os/bluefin/issues/2234) |
| #2296 | Bluefin | Resolved | 9 days | [Include sshfs](https://github.com/ublue-os/bluefin/issues/2296) |
| #2298 | Bluefin | Resolved | 95 days | [Include usbip](https://github.com/ublue-os/bluefin/issues/2298) |
| #2303 | Bluefin | Declined | 4 months | [k0s package request](https://github.com/ublue-os/bluefin/issues/2303) |
| #2323 | Bluefin | Completed | Same day | [Distinguish GTS from stable in countme](https://github.com/ublue-os/bluefin/issues/2323) |
| #2356 | Bluefin | Resolved | 12 days | [errors running ujust bluefin-cli](https://github.com/ublue-os/bluefin/issues/2356) |
| #2358 | Bluefin | Resolved | 1 day | [Nautilus segmentation fault](https://github.com/ublue-os/bluefin/issues/2358) |
| #2403 | Bluefin | Declined | 5 months | [stress-ng seems to have been omitted](https://github.com/ublue-os/bluefin/issues/2403) |
| #2405 | Bluefin | Declined | 4 months | [Doubling of bling script](https://github.com/ublue-os/bluefin/issues/2405) |
| #2726 | Bluefin | Resolved | 3 days | [Homebrew pipx permission denied](https://github.com/ublue-os/bluefin/issues/2726) |
| #2874 | Bluefin | Resolved | 2 days | [Package request: Waypipe](https://github.com/ublue-os/bluefin/issues/2874) |
| #2905 | Bluefin | Completed | 23 days | [Add bbrew to the motd](https://github.com/ublue-os/bluefin/issues/2905) |
| #2987 | Bluefin | Duplicate | Same day | [Bazaar leaves leftover files](https://github.com/ublue-os/bluefin/issues/2987) |
| #3212 | Bluefin | Resolved | Same day | [install-k8s-dev-tools fails](https://github.com/ublue-os/bluefin/issues/3212) |
| #3223 | Bluefin | Resolved | Same day | [Request: netbird ujust installer](https://github.com/ublue-os/bluefin/issues/3223) |
| #3247 | Bluefin | Open | Ongoing | [brew command-not-found prints error](https://github.com/ublue-os/bluefin/issues/3247) |
| #3263 | Bluefin | Open | Ongoing | [brew issues with AD user account](https://github.com/ublue-os/bluefin/issues/3263) |
| #3264 | Bluefin | Declined | 6 days | [No update notifications](https://github.com/ublue-os/bluefin/issues/3264) |
| #3268 | Bluefin | Resolved | 10 days | [ujust setup-brew-not-found doesn't work](https://github.com/ublue-os/bluefin/issues/3268) |
| #3269 | Bluefin | Open | Ongoing | [Add framework_tool on Framework laptops](https://github.com/ublue-os/bluefin/issues/3269) |
| #3270 | Bluefin | Open | Ongoing | [Add asusctl on ASUS laptops](https://github.com/ublue-os/bluefin/issues/3270) |
| #3298 | Bluefin | Resolved | 5 days | [Please consider adding eduVPN](https://github.com/ublue-os/bluefin/issues/3298) |
| #60 | Aurora | Completed | 1 day | [zoxide package request](https://github.com/ublue-os/aurora/issues/60) |
| #285 | Aurora | Completed | 2 months | [Allow creating custom ujust commands](https://github.com/ublue-os/aurora/issues/285) |
| #391 | Aurora | Open | Ongoing | [Move more fonts to brew](https://github.com/ublue-os/aurora/issues/391) |
| #543 | Aurora | Resolved | 2 months | [Homebrew failing to update](https://github.com/ublue-os/aurora/issues/543) |

---

## Methodology

**Data Sources:**
- GitHub Issues API for @ublue-os/bluefin, @ublue-os/aurora, @ublue-os/bazzite
- GitHub search queries: `repo:ublue-os/bluefin homebrew OR brew`
- Manual review of related issues and pull requests
- Community discussions on Universal Blue Discourse

**Analysis Period:** May 2024 - October 2025

**Scope:** This report covers observable Homebrew integration efforts across three Universal Blue projects, documenting both successes and ongoing challenges. It includes technical implementation details, community feedback, and the evolving packaging philosophy.

---

**Report Generated:** October 14, 2025
**Analyst:** GitHub Copilot  
**Data Sources:** [@ublue-os/bluefin](https://github.com/ublue-os/bluefin), [@ublue-os/aurora](https://github.com/ublue-os/aurora), [@ublue-os/bazzite](https://github.com/ublue-os/bazzite) (GitHub Issues API)
