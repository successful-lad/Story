import scene_1_left_action from '../images/scene_1_enemy_wolf.png';
import scene_1_location from '../images/scene_1_location.gif';
import sword_lvl_1 from '../images/items/sword_lvl_1.png';
import wolf_with_sword from '../images/enemies/wolf_with_sword.png';


export type getImagesBySceneReturnType = {
  locationImage: string;
  leftAction: {
    locationImage: string;
    loot?: {
      image: string;
    }[];
    enemies?: {
      image: string;
    }[]
  }
};

export const getImagesByScene = (scene: number): getImagesBySceneReturnType | undefined => {
  if (!scene) return undefined;

  return {
    1: {
      locationImage: scene_1_location,
      leftAction: {
        locationImage: scene_1_left_action,
        loot: [{
          image: sword_lvl_1,
        }],
        enemies: [{
          image: wolf_with_sword,
        }]
      },
    }
  }[scene]
}
