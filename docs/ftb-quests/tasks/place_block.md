---
title: ftb_quest:place_block | FTB Quests
description: optionally enforce waterlogged state.
---

# ftb_quest:place_block

optionally enforce waterlogged state.

| Name                   | Type    | Required | Description |
| ---------------------- | ------- | -------- | ----------- |
| `block_id`             | string  | yes      |             |
| `requires_waterlogged` | boolean |          |             |

## Example

```json
{
  "type": "ftb_quest:place_block",
  "block_id": "minecraft:stone",
  "requires_waterlogged": false
}
```

---

<small>
Source: <a href="https://docs.feed-the-beast.com/docs/marketplace/Addons/quests/api" target="_blank">FTB DOcs</a>
</small>
