---
title: ftb_quest:loot_table | FTB Quests
description: Runs loot give @s loot <table> for each entry.
---

# ftb_quest:loot_table

Runs `loot give @s loot <table>` for each entry.

| Name         | Type     | Required | Description |
| ------------ | -------- | -------- | ----------- |
| `loot_table` | string[] | yes      |             |

## Example

```json
{
  "type": "ftb_quest:loot_table",
  "loot_table": ["loot_tables/chests/igloo_chest"]
}
```

---

<small>
Source: <a href="https://docs.feed-the-beast.com/docs/marketplace/Addons/quests/api" target="_blank">FTB Docs</a>
</small>
