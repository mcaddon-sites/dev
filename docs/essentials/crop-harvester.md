---
title: Crop Harvester | Essentials
description: To make your custom crop blocks compatible with the Essentials Add-on's Crop Harvester feature, you need to add specific tags to your crop blocks.
---

# Crop Harvester

To make your custom crop blocks compatible with the Essentials Add-on's Crop Harvester feature, you need to add specific tags to your crop blocks.

## Crop Block Tag

This tag should be added to all crop blocks of your custom crop type. Replace `<group>` with the appropriate group name for your crop type.

```txt
ulkd_ess:crop_block_<group>
```

## Crop State Name Tag

This tag should be added to the crop block, to mark its growth state. Replace `<state>` with the appropriate state name (e.g., "growth").

```txt
ulkd_ess:crop_state_name_<state>
```

## Crop State Value Tag

This tag should be added to the crop block, to mark its growth value. Replace `<value>` with the appropriate value (e.g., "7" for fully grown crops).

```txt
ulkd_ess:crop_state_value_<value>
```

## Crop Seed Tag

This tag should be added to all seed items of your custom crop type. Replace `<group>` with the appropriate group name for your crop type.

```txt
ulkd_ess:crop_seed_<group>
```

## Example

For a wheat crop, you would add the following tags:

- `ulkd_ess:crop_block_wheat` for `minecraft:wheat`
- `ulkd_ess:crop_state_name_growth` for `minecraft:wheat`
- `ulkd_ess:crop_state_value_7` for `minecraft:wheat`
- `ulkd_ess:crop_seed_wheat` for `minecraft:wheat_seeds`

For a custom crop, you would add the following tags:

- `ulkd_ess:crop_block_wiki:my_crop` for `wiki:my_crop`
- `ulkd_ess:crop_state_name_wiki:growth` for `wiki:my_crop`
- `ulkd_ess:crop_state_value_7` for `wiki:my_crop`
- `ulkd_ess:crop_seed_wiki:my_crop` for `wiki:my_seeds`

---

<small>
Source: Unlinked Discord
</small>
