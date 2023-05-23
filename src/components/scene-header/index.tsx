import Image from 'next/image';

export type SceneHeader = {
  title: string;
  locationImage: string;
  description: string;
}
// посмотри на image с next api
export const SceneHeader = ({ title, locationImage, description }: SceneHeader) => {
  console.log('sceneImages?.locationImage', locationImage)

  return (
    <div className={'flex flex-col gap-20 items-center'}>
      <div>{title}</div>
      <div className={'w-[500px] h-auto'}>
        <Image
          src={locationImage}
          alt={'locationImage'}
          className={'w-full'}
          // width={500}
          // height={500}
        />
      </div>
      <div className={'w-9/12 text-justify'}>
        {description}
      </div>
    </div>
  )
}
