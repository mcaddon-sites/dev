---
title: Task Types | FTB Quests
description: A list of task types for quests.
---

# Task Types

A list of task types for quests.

| Task Type                                                                   | Description                                                   |
| --------------------------------------------------------------------------- | ------------------------------------------------------------- |
| [`ftb_quest:biome_visited`](./biome_visited.md)                             | Completes when entering the biome.                            |
| [`ftb_quest:block_break`](./block_break.md)                                 | Counts broken blocks of the given type.                       |
| [`ftb_quest:deal_damage`](./deal_damage.md)                                 | Checks entity match, damage range, and held item if provided. |
| [`ftb_quest:effect_active`](./effect_active.md)                             | Triggers while the named effect is active.                    |
| [`ftb_quest:fall_distance`](./fall_distance.md)                             | Passes when fall distance is in range.                        |
| [`ftb_quest:item_collected`](./item_collected.md)                           | Uses current inventory total as progress.                     |
| [`ftb_quest:item_use_complete`](./item_use_complete.md)                     | Fires when item use finishes.                                 |
| [`ftb_quest:item_use_on`](./item_use_on.md)                                 | Requires using the item on the target block.                  |
| [`ftb_quest:item_use`](./item_use.md)                                       | Counts item uses.                                             |
| [`ftb_quest:kill`](./kill.md)                                               | Matches additional filters before counting.                   |
| [`ftb_quest:location`](./location.md)                                       | At least one absolute pos or range is required.               |
| [`ftb_quest:place_block`](./place_block.md)                                 | Optionally enforce waterlogged state.                         |
| [`ftb_quest:player_interact_with_block`](./player_interact_with_block.md)   | Note the plural namespace ftb_quests .                        |
| [`ftb_quest:player_interact_with_entity`](./player_interact_with_entity.md) | Checks entity, optional item and Y-level.                     |
| [`ftb_quest:player_look_at_block`](./player_look_at_block.md)               | Player must be looking at the block; sneaking optional.       |
| [`ftb_quest:player_look_at_entity`](./player_look_at_entity.md)             | Requires line-of-sight and optional held item.                |
| [`ftb_quest:player_riding_entity`](./player_riding_entity.md)               | Also verifies optional passengers by ID.                      |
| [`ftb_quest:projectile_hit_block`](./projectile_hit_block.md)               | Checks projectile, block, and optional impact window.         |
| [`ftb_quest:step_on_block`](./step_on_block.md)                             | Requires stepping onto block, optionally with specific gear.  |
| [`ftb_quest:visit_dimension`](./visit_dimension.md)                         | Fires on entering the dimension.                              |
| [`ftb_quest:xp`](./xp.md)                                                   | Checks total XP or levels.                                    |

---

<small>
Source: <a href="https://docs.feed-the-beast.com/docs/marketplace/Addons/quests/api" target="_blank">FTB Docs</a>
</small>
