---
title: Drawer Manipulation | Storage Drawers
description: This allows you to add and remove items from a drawer
---

# Drawer Manipulation

This allows you to add and remove items from a drawer

## Adding Items

### Add

To request to add items to a drawer, send a script event with the id `ftb_sd:add_item_v2` as JSON with the following data:

| Name            | Type                                   | Description                                                                                     |
| --------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `dimId`         | string                                 | The dimension ID of the drawer                                                                  |
| `blockLocation` | Vector3                                | The location as of the drawer block                                                             |
| `itemTypeId`    | string                                 | The item Id of the item to add                                                                  |
| `itemAmount`    | number                                 | The amount of the item to add (Not limited to 64)                                               |
| `slots`         | Array of [Drawer Slots](#drawer-slots) | Optional, the slots to add the item to, if not specified it will try to add to all drawer slots |
| `feedbackId`    | string                                 | Optional, the id of the feedback event to send when the item is added                           |

### Response

After items are added, a script event with the id `ftb_sd:add_item_status_v2` responds with the data expect itemAmount is the number of items not added

## Removing Items

### Remove

To request to remove items to a drawer, send a script event with the id `ftb_sd:remove_item_v2` as JSON with the following data:

| Name            | Type                                   | Description                                                                                        |
| --------------- | -------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `dimId`         | string                                 | The dimension ID of the drawer                                                                     |
| `blockLocation` | Vector3                                | The location as of the drawer block                                                                |
| `itemTypeId`    | string                                 | The item Id of the item to remove                                                                  |
| `itemAmount`    | number                                 | The amount of the item to remove (Not limited to 64)                                               |
| `slots`         | Array of [Drawer Slots](#drawer-slots) | Optional, the slots to remove the item to, if not specified it will try to add to all drawer slots |
| `feedbackId`    | string                                 | Optional, the id of the feedback event to send when the item is removed                            |

### Response

After items are removed, a script event with the id `ftb_sd:add_item_status_v2` responds with the data expect: itemAmount is the number of items not removed.

## Status

### Remove

To get the number of items in a drawer `ftb_sd:status_v2` as JSON with the following data:

| Name            | Type                                   | Description                                                                                     |
| --------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `dimId`         | string                                 | The dimension ID of the drawer                                                                  |
| `blockLocation` | Vector3                                | The location as of the drawer block                                                             |
| `slots`         | Array of [Drawer Slots](#drawer-slots) | Optional, the slots to add the item to, if not specified it will try to add to all drawer slots |
| `feedbackId`    | string                                 | The id of the feedback event to send when the item is added                                     |

### Response

The status is returned with `ftb_sd:status_status_v2`

with the following data:

| Name            | Type                                                            | Description                                                                                                             |
| --------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `dimId`         | string                                                          | The dimension ID of the drawer                                                                                          |
| `blockLocation` | Vector3                                                         | The location as of the drawer block                                                                                     |
| `feedbackId`    | string                                                          | The id of the feedback event                                                                                            |
| `slotInfo`      | Map of [Drawer Slots](#drawer-slots) to [Slot Info](#slot-info) | A map of the slots and their item info, where the key is the slot and the value is an object with amount and itemTypeId |

## Drawer Slots

| Name     |
| -------- |
| `bottom` |
| `top`    |

## Slot Info

| Name         | Type   | Description                                          |
| ------------ | ------ | ---------------------------------------------------- |
| `amount`     | number | The amount of the item to remove (Not limited to 64) |
| `itemTypeId` | string | The item Id of the item to add                       |

## Code Example

::: code-group

```ts [TypeScript]
export enum DrawerSlot {
  BOTTOM,
  TOP,
}

export interface ModifyItem {
  dimId: string;
  blockLocation: Vector3;
  itemTypeId: string;
  itemAmount: number;
  slots?: DrawerSlot[];
  feedbackId?: string;
}

export interface StatusRequest {
  dimId: string;
  blockLocation: Vector3;
  slots?: DrawerSlot[];
  feedbackId: string;
}

export interface StatusResult {
  dimId: string;
  blockLocation: Vector3;
  feedbackId: string;
  slotInfo: Map<DrawerSlot, SlotInfo>;
}

export interface SlotInfo {
  amount: number;
  itemTypeId: string;
}

function addItem(addItem: ModifyItem): void {
  system.sendScriptEvent("ftb_sd:add_item_v2", JSON.stringify(addItem));
}

function removeItem(removeItem: ModifyItem): void {
  system.sendScriptEvent("ftb_sd:remove_item_v2", JSON.stringify(removeItem));
}

system.afterEvents.scriptEventReceive.subscribe((event) => {
  if (event?.id === "ftb_sd:add_item_status_v2") {
    const addItem = JSON.parse(event.data) as ModifyItem;
    // do something with the addItem response
    return;
  }

  if (event?.id === "ftb_sd:remove_item_status_v2") {
    const removeItem = JSON.parse(event.data) as ModifyItem;
    // do something with the removeItem response
    return;
  }

  if (event?.id === "ftb_sd:status_status_v2") {
    const result = JSON.parse(event.data) as StatusResult;
    // do something with the status result
    return;
  }
});
```

```js [JavaScript]
function addItem(addItem) {
  system.sendScriptEvent("ftb_sd:add_item_v2", JSON.stringify(addItem));
}

function removeItem(removeItem) {
  system.sendScriptEvent("ftb_sd:remove_item_v2", JSON.stringify(removeItem));
}

system.afterEvents.scriptEventReceive.subscribe((event) => {
  if (event?.id === "ftb_sd:add_item_status_v2") {
    const addItem = JSON.parse(event.data);
    // do something with the addItem response
    return;
  }

  if (event?.id === "ftb_sd:remove_item_status_v2") {
    const removeItem = JSON.parse(event.data);
    // do something with the removeItem response
    return;
  }

  if (event?.id === "ftb_sd:status_status_v2") {
    const result = JSON.parse(event.data);
    // do something with the status result
    return;
  }
});
```

:::
