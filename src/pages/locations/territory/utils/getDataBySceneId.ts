import Scenario from '../../../../shared/plot/scenario.json' //todo алиасы впили пж

export const getDataBySceneId = (id: string | number | undefined) => { //todo если все ок будет, брать данные со Стораджа, и убрать пропс

  const currentScene = JSON.parse(JSON.stringify(Scenario))[id];

  return {
    title: currentScene?.title,
    description: currentScene?.description,
    locationImage: currentScene?.locationImage,
    leftAction: currentScene?.actions?.left,
    rightAction: currentScene?.actions?.right,
  }
}
