import { ActionType, getImagesBySceneReturnType } from '../../shared';
import { EmptyScene } from './empty-scene';
import { FightScene } from './fight-scene';
import { InteractionSceneWithNPC } from './interaction-scene-with-npc';

export interface ActionPageProps {
  action: ActionType;
  endSceneCallback: () => void;
  sceneImages: getImagesBySceneReturnType | any;
}

export type ActionSceneProps = Pick<ActionPageProps, 'action' | 'endSceneCallback' | 'sceneImages'>

export const ActionPage = ({ action, endSceneCallback, sceneImages }: ActionPageProps) => {

  const imagesForCurrentActions = sceneImages[action.type] //todo может передать свыше
  console.log('imagesForCurrentActions', imagesForCurrentActions);

  if (action?.enemies) {
    return (
      <FightScene
        action={action}
        endSceneCallback={endSceneCallback}
        sceneImages={imagesForCurrentActions}
      />
    )
  }

  if (action?.npc) {
    return (
      <InteractionSceneWithNPC
        endSceneCallback={endSceneCallback}
        action={action}/>
    )
  }
  return (
    <div>
      <EmptyScene endSceneCallback={endSceneCallback} action={action}/>
    </div>
  )
}
