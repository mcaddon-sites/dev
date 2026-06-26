---
title: ftb_quest:projectile_hit_block | FTB Quests
description: Checks projectile, block, and optional impact window.
---

# ftb_quest:projectile_hit_block

Checks projectile, block, and optional impact window.

| Name                    | Type    | Required | Description |
| ----------------------- | ------- | -------- | ----------- |
| `projectile_id`         | string  | yes      |             |
| `block_id`              | string  | yes      |             |
| `required_hit_location` | Vector3 |          |             |

## Example

```json
{
  "type": "ftb_quest:projectile_hit_block",
  "projectile_id": "minecraft:arrow",
  "block_id": "minecraft:target",
  "required_hit_location": { "x": 0, "y": 0, "z": 0 }
}
```

---

<small>
Source: <a href="https://docs.feed-the-beast.com/docs/marketplace/Addons/quests/api" target="_blank">FTB DOcs</a>
</small>
