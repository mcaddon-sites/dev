---
title: ftb_quest:item_collected | FTB Quests
description: Uses current inventory total as progress.
---

# ftb_quest:item_collected

Uses current inventory total as progress.

| Name      | Type   | Required | Description |
| --------- | ------ | -------- | ----------- |
| `item_id` | string | yes      |             |
| `count`   | number |          |             |

## Example

```json
{
  "type": "ftb_quest:item_collected",
  "item_id": "minecraft:paper",
  "count": 100
}
```

---

<small>
Source: <a href="https://docs.feed-the-beast.com/docs/marketplace/Addons/quests/api" target="_blank">FTB DOcs</a>
</small>
