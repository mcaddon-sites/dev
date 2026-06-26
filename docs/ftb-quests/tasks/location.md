---
title: ftb_quest:location | FTB Quests
description: At least one absolute pos or range is required.
---

# ftb_quest:location

At least one absolute pos or range is required.

| Name                    | Type               | Required | Description |
| ----------------------- | ------------------ | -------- | ----------- |
| `absolute_position`     | Vector3 or ranges  |          |             |
| `target_x`              | number or range    |          |             |
| `target_y`              | number or range    |          |             |
| `target_z`              | number or range    |          |             |
| `restricted_dimensions` | string or string[] |          |             |

## Example

```json
{
  "type": "ftb_quest:location",
  "absolute_position": { "x": 0, "y": 0, "z": 0 }
}
```

---

<small>
Source: <a href="https://docs.feed-the-beast.com/docs/marketplace/Addons/quests/api" target="_blank">FTB Docs</a>
</small>
