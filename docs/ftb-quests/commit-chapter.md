---
title: Commit Chapter | FTB Quests
description: Moves the provisioned chapter into the live quest manager and drops the staging copy.
---

# Commit Chapter

Moves the provisioned chapter into the live quest manager and drops the staging copy.

| Name         | Type   | Note                                           |
| ------------ | ------ | ---------------------------------------------- |
| `chapter_id` | string | Must match regex ^[a-z0-9_.-]+$ and be unique. |

## Code Example

::: code-group

```ts [TypeScript]
import { system } from "@minecraft/server";

function commitChapter(chapter_id: string): void {
  system.sendScriptEvent("ftbquests:commit_chapter", JSON.stringify({ chapter_id }));
}

world.afterEvents.worldInitialize.subscribe((event) => {
  commitChapter("api_demo");
});
```

```js [JavaScript]
import { system } from "@minecraft/server";

function commitChapter(chapter_id) {
  system.sendScriptEvent("ftbquests:commit_chapter", JSON.stringify({ chapter_id }));
}

world.afterEvents.worldInitialize.subscribe((event) => {
  commitChapter("api_demo");
});
```

:::

---

<small>
Source: <a href="https://docs.feed-the-beast.com/docs/marketplace/Addons/quests/api" target="_blank">FTB Docs</a>
</small>
