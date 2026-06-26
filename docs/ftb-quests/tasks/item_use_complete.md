---
title: ftb_quest:item_use_complete | FTB Quests
description: Fires when item use finishes.
---

# ftb_quest:item_use_complete

Fires when item use finishes.

| Name            | Type    | Required | Description |
| --------------- | ------- | -------- | ----------- |
| `item_id`       | string  | yes      |             |
| `consumes_item` | boolean |          |             |

## Example

```json
{
  "type": "ftb_quest:item_use_complete",
  "item_id": "minecraft:apple",
  "consumes_item": false
}
```

---

<small>
Source: <a href="https://docs.feed-the-beast.com/docs/marketplace/Addons/quests/api" target="_blank">FTB Docs</a>
</small>
