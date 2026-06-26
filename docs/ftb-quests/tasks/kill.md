---
title: ftb_quest:kill | FTB Quests
description: Matches additional filters before counting.
---

# ftb_quest:kill

Matches additional filters before counting.

| Name                            | Type    | Required | Description |
| ------------------------------- | ------- | -------- | ----------- |
| `entity_id`                     | string  | yes      |             |
| `amount`                        | number  |          |             |
| `required_distance_from_source` | number  |          |             |
| `required_projectile_id`        | string  |          |             |
| `required_damage_cause`         | string  |          |             |
| `allow_baby`                    | boolean |          |             |

## Example

```json
{
  "type": "ftb_quest:kill",
  "entity_id": "minecraft:creeper",
  "amount": 10,
  "required_distance_from_source": 10,
  "required_projectile_id": "minecraft:arrow",
  "required_damage_cause": "minecraft:projectile",
  "allow_baby": false
}
```

---

<small>
Source: <a href="https://docs.feed-the-beast.com/docs/marketplace/Addons/quests/api" target="_blank">FTB Docs</a>
</small>
