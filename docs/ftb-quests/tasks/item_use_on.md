---
title: ftb_quest:item_use_on | FTB Quests
description: Requires using the item on the target block.
---

# ftb_quest:item_use_on

Requires using the item on the target block.

| Name       | Type   | Required | Description |
| ---------- | ------ | -------- | ----------- |
| `item_id`  | string | yes      |             |
| `block_id` | string | yes      |             |

## Example

```json
{
  "type": "ftb_quest:item_use_on",
  "item_id": "minecraft:copper_sword",
  "block_id": "minecraft:copper_nugget"
}
```

---

<small>
Source: <a href="https://docs.feed-the-beast.com/docs/marketplace/Addons/quests/api" target="_blank">FTB Docs</a>
</small>
