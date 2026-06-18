---
title: ftb_quest:item | FTB Quests
description: Gives an item stack.
---

# ftb_quest:item

Gives an item stack.

| Name    | Type   | Required | Description |
| ------- | ------ | -------- | ----------- |
| `item`  | string | yes      |             |
| `count` | number |          |             |

## Items

- `ftb_quests:loot_bag_common`
- `ftb_quests:loot_bag_epic`
- `ftb_quests:loot_bag_legendary`
- `ftb_quests:loot_bag_rare`
- `ftb_quests:loot_bag_uncommon`

## Example

```json
{
  "type": "ftb_quest:item",
  "item": "minecraft:emerald",
  "count": 1
}
```
