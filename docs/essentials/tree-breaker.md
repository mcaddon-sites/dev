---
title: Tree Breaker | Essentials
description: In order to make your custom trees compatible with the Essentials Add-on's Tree Breaker feature, you need to add specific tags to your tree blocks.
---

# Tree Breaker

In order to make your custom trees compatible with the Essentials Add-on's Tree Breaker feature, you need to add specific tags to your tree blocks.

## Tree Log Tag

This tag should be added to all log blocks of your custom tree. Replace `<group>` with the appropriate group name for your tree type.

```txt
ulkd_ess:tree_log_<group>
```

## Tree Leaves Tag

This tag should be added to all leaf blocks of your custom tree. Again, replace `<group>` with the appropriate group name.

```txt
ulkd_ess:tree_leaves_<group>
```

## Tree Sapling Tag

This tag should be added to all sapling blocks of your custom tree. Replace `<group>` with the appropriate group name.

```txt
ulkd_ess:tree_sapling_<group>
```

## Algorithm

The basic algorithm for determining whether the broken log block is part of a tree is as follows:

1. Go through all the blocks upwards from the broken log block.
2. If you find a leaf block with the corresponding `ulkd_ess:tree_leaves_<group>` tag, consider it a tree.

## Example

For an oak tree, you would add the following tags:

- `ulkd_ess:tree_log_oak for minecraft:oak_log`
- `ulkd_ess:tree_leaves_oak for minecraft:oak_leaves`
- `ulkd_ess:tree_sapling_oak for minecraft:oak_sapling`

For a custom tree, you would add the following tags:

- `ulkd_ess:tree_log_wiki:my_tree for wiki:my_log`
- `ulkd_ess:tree_leaves_wiki:my_tree for wiki:my_leaves`
- `ulkd_ess:tree_sapling_wiki:my_tree for wiki:my_sapling`

---

<small>
Source: Unlinked Discord
</small>
