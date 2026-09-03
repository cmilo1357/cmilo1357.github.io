export interface ProjectStat {
  value: string;
  label: string;
}

export interface GameProject {
  id: string;
  title: string;
  platform: string;
  status: string;
  role: string;
  summary: string;
  image?: string;
  imageAlt?: string;
  visualClass?: string;
  stats: ProjectStat[];
  highlights: string[];
  stack: string[];
  url?: string;
  urlLabel?: string;
}

const projects: GameProject[] = [
  {
    id: 'fortune-city',
    title: 'Fortune City',
    platform: 'UEFN · Fortnite',
    status: 'In development',
    role: 'Solo UEFN / Verse Developer & Technical Artist',
    summary: 'A persistent multiplayer city experience where jobs, housing, activities, shops, progression, and the player economy operate as one connected ecosystem.',
    visualClass: 'fortune-visual',
    stats: [
      { value: '16', label: 'Player sessions' },
      { value: '01', label: 'Persistent profile' },
      { value: '360°', label: 'End-to-end ownership' }
    ],
    highlights: [
      'Architected isolated per-player runtimes for economy, jobs, modifiers, UI, audio, and saved progression.',
      'Built reusable, event-driven systems for job contracts, housing upgrades, activities, shops, banking, and inventory.',
      'Owned gameplay, UI, level design, technical art, debugging, performance, and publishing workflows.'
    ],
    stack: ['Verse', 'UEFN', 'UMG', 'Persistence', 'Niagara', 'HLSL']
  },
  {
    id: 'battle-academy',
    title: 'Battle Academy',
    platform: 'UEFN · Fortnite',
    status: 'Released · Archived',
    role: 'Solo UEFN Developer',
    summary: 'A one-to-four-player roguelike built around combat rooms, class progression, varied mission types, random perks, and permanent upgrades.',
    image: 'img/projects/battle-academy-thumbnail.webp',
    imageAlt: 'Battle Academy key art with four Fortnite characters',
    stats: [
      { value: '1.7M', label: 'Minutes played' },
      { value: '8.6K', label: 'Favorites' },
      { value: '04', label: 'Playable classes' }
    ],
    highlights: [
      'Designed four classes with distinct loadouts, upgrade paths, and player-facing progression.',
      'Created repeatable room missions including combat, bomb defusal, and intel retrieval.',
      'Implemented responsive UI, randomized perk selection, persistent upgrades, and the complete content pipeline.'
    ],
    stack: ['Verse', 'UEFN', 'Game Design', 'UI', 'VFX', 'Level Design'],
    url: 'https://fortnite.gg/island?code=2537-1041-1759',
    urlLabel: 'View island archive'
  },
  {
    id: 'no-safe-zone',
    title: 'No Safe Zone',
    platform: 'UEFN · Fortnite',
    status: 'Independent project',
    role: 'Solo UEFN / Verse Developer & Technical Artist',
    summary: 'A dark extraction experience featuring hostile walkers, zone-based missions, crafting, shops, a black market, and persistent player progression.',
    image: 'img/projects/no-safe-zone-thumbnail.png',
    imageAlt: 'A foggy fortified prison environment from No Safe Zone',
    stats: [
      { value: '16', label: 'Player sessions' },
      { value: '04', label: 'Mission threat tiers' },
      { value: '∞', label: 'Replayable extraction loop' }
    ],
    highlights: [
      'Developed the extraction, inventory, rewards, mission, NPC, crafting, and player-data systems in Verse.',
      'Built a layered UI flow for mission tracking, stores, crafting, rewards, and the black market.',
      'Connected gameplay state, persistence, team flow, onboarding, and world interactions through modular managers.'
    ],
    stack: ['Verse', 'UEFN', 'Extraction Systems', 'NPCs', 'UI', 'Persistence']
  },
  {
    id: 'griefville',
    title: 'Griefville',
    platform: 'Roblox · Licensed IP',
    status: 'Shipped at ON3D Studios',
    role: 'Technical Artist',
    summary: 'A multiplayer horror experience with a day-and-night loop, live content, nightmare portals, and a limited-time Chucky collaboration.',
    image: 'img/projects/griefville-thumbnail.webp',
    imageAlt: 'Griefville Survive the Nightmare key art featuring Chucky',
    stats: [
      { value: '2.3M+', label: 'Visits' },
      { value: '16', label: 'Player servers' },
      { value: 'Live', label: 'Event-driven content' }
    ],
    highlights: [
      'Created and integrated real-time VFX that communicated gameplay events across the experience.',
      'Produced hand-painted textures and effects for portals, abilities, hazards, and live-event content.',
      'Worked closely with developers to iterate on mechanics and keep effects within performance targets.'
    ],
    stack: ['Roblox', 'Lua', 'Real-time VFX', 'Photoshop', 'After Effects', 'Optimization'],
    url: 'https://www.roblox.com/games/16578847473',
    urlLabel: 'View on Roblox'
  }
];

export default projects;
