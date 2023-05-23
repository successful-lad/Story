export enum GameStatus {
  START_SCENE = 'startScene',
  GET_LOOT = 'getLoot',
  FIGHT = 'fight',
  END_SCENE = 'endScene',
}

export type EnemyType = {
  name: string,
  description: string,
  image: string
  health: number;
  damage: number;
  defense: number;
}

export interface NpcBasicType {
  name: string,
  description: string,
  image: string,
}

export interface ActionType {
  title: string;
  previewImage?: string;
  description: string;
  locationImage?: string;
  experience?: number;
  nextSceneNum: number;
  type: 'leftAction' | 'rightAction';
  loot?: {
    gold?: number;
    experience?: number;
    items?: Array<{
      name: string,
      description: string,
      image: string
    }>;
  };
  enemies?: Array<EnemyType>;
  npc?: NpcBasicType;
  punishmentForFailure?: {
    gold?: number;
    health?: number;
    message: string;
  };
}
