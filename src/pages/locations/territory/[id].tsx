import { useState } from 'react';
import { useRouter } from 'next/router'
import { getDataBySceneId } from './utils/getDataBySceneId';
import { ActionPage, SceneHeader } from '../../../components';
import { setStorage } from '../../../shared';
import { ActionType } from '../../../shared';
import { getImagesByScene } from '../../../shared';

export enum SceneActionsState {
  waiting = 'waiting',
  start = 'start',
  finish = 'finish',
}

const Territory = () => {
  const [sceneAction, setSceneAction] = useState<ActionType>();
  const [sceneActionsState, setSceneActionState] = useState<SceneActionsState>(SceneActionsState.waiting);

  const router = useRouter()
  let { id } = router?.query

  const { title, leftAction, rightAction, locationImage, description } = getDataBySceneId(id as string);

  const handleSelectAction = (action) => {
    setSceneAction(action);
  }

  const sceneImages = getImagesByScene(id);

  //todo сделать норм склейку сценариев
  console.log('sceneImages', sceneImages);
  const handleEndScene = () => {
    setSceneAction(null);
    setStorage('currentScene', id);
    router.push('/locations/territory/[id]', `/locations/territory/${id}`);
  }

  if (sceneAction) {
    return (
      <div className={'h-screen w-screen flex flex-col p-8 items-center gap-20'}>
        {sceneActionsState === SceneActionsState.waiting && (
          <SceneHeader
            title={sceneAction.title}
            description={sceneAction.description}
            locationImage={sceneImages ? sceneImages[sceneAction.type].locationImage : undefined}
          />
        )}
        <ActionPage
          action={sceneAction}
          sceneImages={sceneImages}
          endSceneCallback={() => setSceneAction(null)}
          setSceneActionState={setSceneActionState}
        />
      </div>
    )
  }

  //todo думаю тут будет разделение по сценам, если тип такая сцена ,
  // то вот 2 екшена, если другая сцена, то мб другой сценарий
  return (
    <div className={'h-screen w-screen flex flex-col p-8 items-center gap-20'}>
      <SceneHeader title={title} description={description} locationImage={sceneImages?.locationImage}/>
      <div className='flex w-9/12 justify-between'>
        <div className='flex flex-col items-center gap-5'>
          {/*image*/}
          <div
            className={'cursor-pointer p-3 border border-black rounded-md hover:bg-gray-300 transition-all duration-300 bg-gray-100'}
            role={'presentation'}
            onClick={() => handleSelectAction(leftAction)}
          >
            {leftAction?.title}
          </div>
        </div>
        <div className='flex flex-col items-center gap-5'>
          {/*image*/}
          <div
            className={'cursor-pointer p-3 border border-black rounded-md hover:bg-gray-300 transition-all duration-300 bg-gray-100'}
            role={'presentation'}
            onClick={() => handleSelectAction(rightAction)}
          >
            {rightAction?.title}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Territory;
