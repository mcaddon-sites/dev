---
title: ftb_quest:stop_on_block | FTB Quests
description: Requires stepping onto block, optionally with specific gear.
---

# ftb_quest:stop_on_block

Requires stepping onto block, optionally with specific gear.

| Name                     | Type               | Required | Description |
| ------------------------ | ------------------ | -------- | ----------- |
| `block_id`               | string or string[] | yes      |             |
| `required_equipped_item` | string or string[] |          |             |
| `equipment_slot`         | string             |          |             |

## Example

```json
{
  "type": "ftb_quest:stop_on_block",
  "block_id": "minecraft:grass_block",
  "required_equipped_item": "minecraft:iron_helmet",
  "equipment_slot": "Head"
}
```

---

<small>
Source: <a href="https://docs.feed-the-beast.com/docs/marketplace/Addons/quests/api" target="_blank">FTB DOcs</a>
</small>
