---
title: Create Chapter | FTB Quests
description: Creates a provisioned chapter (not yet live).
---

# Create Chapter

Creates a provisioned chapter (not yet live).

| Name          | Type   | Note                                           |
| ------------- | ------ | ---------------------------------------------- |
| `id`          | string | Must match regex ^[a-z0-9_.-]+$ and be unique. |
| `title`       | string |                                                |
| `description` | string |                                                |
| `icon`        | string |                                                |

## Code Example

::: code-group

```ts [TypeScript]
import { system } from "@minecraft/server";

interface Chapter {
  id: string;
  title: string;
  description: string;
  icon: string;
}

function createChapter(chapter: Chapter): void {
  system.sendScriptEvent("ftbquests:create_chapter", JSON.stringify(chapter));
}

world.afterEvents.worldInitialize.subscribe((event) => {
  createChapter({
    id: "api_demo",
    title: "api.demo.title",
    description: "api.demo.desc",
    icon: "minecraft:book",
  });
});
```

```js [JavaScript]
import { system } from "@minecraft/server";

function createChapter(chapter) {
  system.sendScriptEvent("ftbquests:create_chapter", JSON.stringify(chapter));
}

world.afterEvents.worldInitialize.subscribe((event) => {
  createChapter({
    id: "api_demo",
    title: "api.demo.title",
    description: "api.demo.desc",
    icon: "minecraft:book",
  });
});
```

:::

---

<small>
Source: <a href="https://docs.feed-the-beast.com/docs/marketplace/Addons/quests/api" target="_blank">FTB DOcs</a>
</small>
