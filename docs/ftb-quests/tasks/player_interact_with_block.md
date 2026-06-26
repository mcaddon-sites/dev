---
title: ftb_quest:player_interact_with_block | FTB Quests
description: Note the plural namespace ftb_quests.
---

# ftb_quest:player_interact_with_block

Note the plural namespace ftb_quests.

| Name                 | Type               | Required | Description |
| -------------------- | ------------------ | -------- | ----------- |
| `block_id`           | string or string[] | yes      |             |
| `required_held_item` | string or string[] |          |             |

## Example

```json
{
  "type": "ftb_quest:player_interact_with_block",
  "block_id": "minecraft:stone",
  "required_held_item": "minecraft:paper"
}
```

---

<small>
Source: <a href="https://docs.feed-the-beast.com/docs/marketplace/Addons/quests/api" target="_blank">FTB Docs</a>
</small>
