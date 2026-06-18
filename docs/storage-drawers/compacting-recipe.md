---
title: Compacting Recipe | Storage Drawers
description: This allows you to register a compacting recipe for the Compacting Drawer.
---

# Compacting Recipe

This allows you to register a compacting recipe for the Compacting Drawer.

To register a recipe, send a script event with the ID `ftb_sd:register_compacting_recipe` as JSON with data.

| Name              | Type   | Description                                                                                    |
| ----------------- | ------ | ---------------------------------------------------------------------------------------------- |
| `topSlot`         | string | The top slot of the drawer item                                                                |
| `bottomSlot`      | string | The bottom slot of the drawer item - This is the item that will be compacted into the top slot |
| `bottomSlotCount` | number | The amount of the bottom slot item that will be compacted into the top slot                    |

## Code Example

::: code-group

```ts [TypeScript]
interface CompactingRecipe {
  topSlot: string;
  bottomSlot: string;
  bottomSlotCount: number;
}

function registerRecipe(recipe: CompactingRecipe): void {
  system.sendScriptEvent("ftb_sd:register_compacting_recipe", JSON.stringify(recipe));
}

world.afterEvents.worldInitialize.subscribe((event) => {
  registerRecipe({
    topSlot: "minecraft:diamond_block",
    bottomSlot: "minecraft:diamond",
    bottomSlotCount: 9,
  });
});
```

```js [JavaScript]
function registerRecipe(recipe) {
  system.sendScriptEvent("ftb_sd:register_compacting_recipe", JSON.stringify(recipe));
}

world.afterEvents.worldInitialize.subscribe((event) => {
  registerRecipe({
    topSlot: "minecraft:diamond_block",
    bottomSlot: "minecraft:diamond",
    bottomSlotCount: 9,
  });
});
```

:::

## Command Example

> [!WARNING]
> Please note if using commands to register the recipe you must run the command at least once every time you load the world.

```txt
/scriptevent ftb_sd:register_compacting_recipe '{"topSlot":"minecraft:diamond_block","bottomSlot":"minecraft:diamond","bottomSlotCount":9}'
```
