---
title: Add Quests | FTB Quests
description: Add quests to a chapter.
---

# Add Quests

Chapter must have been provisioned via [Create Chapter](./create-chapter.md) and not yet committed.

Duplicate quest IDs inside a chapter are skipped with a warning.

| Name         | Type                      | Description                               |
| ------------ | ------------------------- | ----------------------------------------- |
| `chapter_id` | string                    | ID of the chapter to add these quests to. |
| `quests`     | Array of [Quests](#quest) | Array of quests to add.                   |

## Quest

| Name          | Type            | Note |
| ------------- | --------------- | ---- |
| `id`          | string          |      |
| `name`        | string          |      |
| `description` | string          |      |
| `icon`        | string          |      |
| `tasks`       | [Tasks](#tasks) |      |

## Tasks

| Name    | Type                | Note               |
| ------- | ------------------- | ------------------ |
| `anyOf` | [TaskMap](#taskmap) | Match the any item |
| `allOf` | [TaskMap](#taskmap) | Match all items    |

## TaskMap

A map keyed by two-digit hex strings (e.g., "00", "0A", "FF"), each pointing to a [task](./tasks/index.md) definition.

```json
{
  "anyOf": {
    "00": {
      "type": "...",
      ...
    }
  }
}
```

## Code Example

::: code-group

```ts [TypeScript]
import { system } from "@minecraft/server";

interface ItemReward {
  type: "ftb_quest:item";
}

type Reward = ItemReward;

interface Quest {
  id: string;
  name: string;
  description: string;
  icon: string;
  tasks: any;
  rewards: Reward[];
}

interface Quests {
  chapter_id: string;
  quests: Quest[];
}

function addQuests(quests: Quests): void {
  system.sendScriptEvent("ftbquests:create_chapter", JSON.stringify(quests));
}

world.afterEvents.worldInitialize.subscribe((event) => {
  addQuests({
    chapter_id: "api_demo",
    quests: [
      {
        id: "cook_beef",
        name: "api.demo.cook_beef.name",
        description: "api.demo.cook_beef.desc",
        icon: "minecraft:cooked_beef",
        tasks: {
          anyOf: {
            "00": {
              type: "ftb_quest:item_use_complete",
              item_id: "minecraft:cooked_beef",
              consumes_item: true,
            },
          },
        },
        rewards: [{ type: "ftb_quest:item", item: "minecraft:diamond", count: 3 }],
      },
    ],
  });
});
```

```js [JavaScript]
import { system } from "@minecraft/server";

function addQuests(quests) {
  system.sendScriptEvent("ftbquests:create_chapter", JSON.stringify(quests));
}

world.afterEvents.worldInitialize.subscribe((event) => {
  addQuests({
    chapter_id: "api_demo",
    quests: [
      {
        id: "cook_beef",
        name: "api.demo.cook_beef.name",
        description: "api.demo.cook_beef.desc",
        icon: "minecraft:cooked_beef",
        tasks: {
          anyOf: {
            "00": {
              type: "ftb_quest:item_use_complete",
              item_id: "minecraft:cooked_beef",
              consumes_item: true,
            },
          },
        },
        rewards: [{ type: "ftb_quest:item", item: "minecraft:diamond", count: 3 }],
      },
    ],
  });
});
```

:::

---

<small>
Source: <a href="https://docs.feed-the-beast.com/docs/marketplace/Addons/quests/api" target="_blank">FTB DOcs</a>
</small>
