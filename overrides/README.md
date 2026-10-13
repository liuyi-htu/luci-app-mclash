# Configuration module

This directory contains shared Dart configuration processing and locked dependencies.

- `bin/main.dart`: browser bridge for nodes, subscriptions, Host, chains, groups, rules and DNS.
- `bin/network.dart`: OpenWrt capture, proxy scope, DNS and routing settings.
- `bin/legacy.dart`: migration of legacy Chinese metadata and built-in groups.
- `lib/shared/`: parsers and configuration transformations.
- `default-config.yaml`: initial configuration template.
- `pubspec.yaml` / `pubspec.lock`: dependency definitions and locked versions.

Run `./build-overrides.sh` from the project root to generate `overrides.js`, `template.js` and `root/etc/mclash/config.yaml`. Compilation uses `.build-cache/`.

Compiled JS is included; normal SDK packaging and router operation do not require Dart. Recompile after editing this module. See the [project README](../README.md).
