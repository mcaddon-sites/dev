---
title: ftb_quest:player_look_at_block | FTB Quests
description: Player must be looking at the block; sneaking optional.
---

# ftb_quest:player_look_at_block

Player must be looking at the block; sneaking optional.

| Name               | Type    | Required | Description |
| ------------------ | ------- | -------- | ----------- |
| `block_id`         | string  | yes      |             |
| `require_sneaking` | boolean |          |             |

## Example

```json
{
  "type": "ftb_quest:player_look_at_block",
  "block_id": "minecraft:stone",
  "require_sneaking": false
}
```

---

<small>
Source: <a href="https://docs.feed-the-beast.com/docs/marketplace/Addons/quests/api" target="_blank">FTB DOcs</a>
</small>
