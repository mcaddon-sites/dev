---
title: Overview | Essentials
description: IDs, compatibility tags, and recommended starting points for the Essentials add-on.
---

# Overview

Essentials compatibility is driven by block and item tags. Add the expected tags to custom content so Essentials features can recognize trees, ores, crops, and seeds.

Use this page as the quick reference before adding compatibility tags to your blocks and items.

## Add-on Metadata

| Key       | Value      |
| --------- | ---------- |
| Studio    | Unlinked   |
| Namespace | `ulkd_ess` |

## Compatibility Areas

| Feature        | What to tag                                              |
| -------------- | -------------------------------------------------------- |
| Tree Breaker   | Logs, leaves, and saplings that belong to the same tree. |
| Ore Breaker    | Ore blocks that belong to the same vein group.           |
| Crop Harvester | Crop blocks, growth state tags, and seed items.          |

## Tag Patterns

| Pattern                         | Used for                             |
| ------------------------------- | ------------------------------------ |
| `ulkd_ess:tree_log_<group>`     | Logs for a custom tree group.        |
| `ulkd_ess:tree_leaves_<group>`  | Leaves for a custom tree group.      |
| `ulkd_ess:tree_sapling_<group>` | Saplings for a custom tree group.    |
| `ulkd_ess:ore_<group>`          | Ore blocks for a custom ore group.   |
| `ulkd_ess:crop_block_<group>`   | Crop blocks for a custom crop group. |
| `ulkd_ess:crop_seed_<group>`    | Seed items for a custom crop group.  |

## Naming Notes

- Use the same `<group>` value for blocks or items that should be treated as one set.
- For custom content, include your own namespace in the group when that helps avoid collisions.
- Crop Harvester also needs growth state tags so it can identify mature crops.

## Next Steps

- Use [Tree Breaker](./tree-breaker.md) for custom log, leaf, and sapling tags.
- Use [Ore Breaker](./ore-breaker.md) for custom ore tags.
- Use [Crop Harvester](./crop-harvester.md) for crop block, growth state, and seed tags.
