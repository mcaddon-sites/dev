export interface Addon {
  description: string;
  downloadUrl: string;
  docs: AddonDocLink[];
  imageSrc: string;
  link: string;
  namespace: string;
  title: string;
}

export interface AddonDocLink {
  description: string;
  link: string;
  title: string;
}

export const addons: Addon[] = [
  {
    title: "FTB Quests",
    namespace: "ftb_quests",
    link: "/ftb-quests/",
    imageSrc: "/images/Quests-Thumbnail_0.jpg",
    downloadUrl: "https://www.minecraft.net/en-us/marketplace/pdp/ftb/ftb-quests/bc60ce5d-fc5c-477b-9ebd-05d6e776247d",
    description: "A progression add-on for building quest chapters, objectives, and rewards into Minecraft worlds.",
    docs: [
      {
        title: "Overview",
        link: "/ftb-quests/overview",
        description: "IDs, namespaces, and metadata needed before wiring FTB Quests into a world.",
      },
      {
        title: "Create Chapter",
        link: "/ftb-quests/create-chapter",
        description: "Start a staged quest chapter before adding objectives and rewards.",
      },
      {
        title: "Add Quests",
        link: "/ftb-quests/add-quests",
        description: "Define quest entries, tasks, rewards, and the data shape for a chapter.",
      },
      {
        title: "Task Types",
        link: "/ftb-quests/tasks/",
        description: "Browse supported objectives such as block breaks, kills, locations, items, XP, and more.",
      },
      {
        title: "Reward Types",
        link: "/ftb-quests/rewards/",
        description: "Configure item, command, loot table, and XP rewards for completed quests.",
      },
      {
        title: "Commit Chapter",
        link: "/ftb-quests/commit-chapter",
        description: "Publish a staged chapter into the live quest manager.",
      },
    ],
  },
  {
    title: "Storage Drawers",
    namespace: "ftb_sd",
    link: "/storage-drawers/",
    imageSrc: "/images/Storage_Drawers-Thumbnail_0.jpg",
    downloadUrl:
      "https://www.minecraft.net/en-us/marketplace/pdp/ftb/storage-drawers-2.0/4a357d7e-174b-4075-81f2-4ba13cc412e8",
    description: "Script event APIs for compacting recipes and drawer item manipulation.",
    docs: [
      {
        title: "Overview",
        link: "/storage-drawers/overview",
        description: "IDs and metadata for targeting the Storage Drawers add-on.",
      },
      {
        title: "Compacting Recipe",
        link: "/storage-drawers/compacting-recipe",
        description: "Register custom compacting recipes for Compacting Drawers.",
      },
      {
        title: "Drawer Manipulation",
        link: "/storage-drawers/drawer-manipulation",
        description: "Add, remove, inspect, and query items in drawer slots through script events.",
      },
    ],
  },
  {
    title: "Essentials",
    namespace: "ulkd_ess",
    link: "/essentials/",
    imageSrc: "/images/essentials_Thumbnail_0.jpg",
    downloadUrl:
      "https://www.minecraft.net/en-us/marketplace/pdp/unlinked/essentials/2e1f786f-7f12-4573-91b4-4e356302737b",
    description: "Compatibility tags for custom trees, ores, and crops used by Essentials automation features.",
    docs: [
      {
        title: "Overview",
        link: "/essentials/overview",
        description: "IDs and metadata for targeting the Essentials add-on.",
      },
      {
        title: "Tree Breaker",
        link: "/essentials/tree-breaker",
        description: "Tag custom logs, leaves, and saplings for Tree Breaker compatibility.",
      },
      {
        title: "Ore Breaker",
        link: "/essentials/ore-breaker",
        description: "Tag custom ore blocks so Essentials can recognize connected veins.",
      },
      {
        title: "Crop Harvester",
        link: "/essentials/crop-harvester",
        description: "Tag crop blocks, growth states, and seeds for automated harvesting.",
      },
    ],
  },
];
