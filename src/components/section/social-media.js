import { SocialMediaCard } from '../cards/socialmedia-cards';

export let SocialMedia = () => {
  return (
    <section id="social-media">
      <div className="w-screen h-screen bg-gradient-to-t from-gray-50 px-20 pt-20">
        <div className="flex flex-col gap-10">
          <div className="flex justify-center">
            <h1 className="font-bold blue-text text-4xl">
              Our Social
              <span className="orange-text">media</span>
            </h1>
          </div>
          <div className="h-full w-full grid grid-cols-3 grid-flow-col gap-4">
            <div className="flex flex-col gap-4">
              <SocialMediaCard />
              <SocialMediaCard />
              <SocialMediaCard />
            </div>
            <div className="flex flex-col gap-4">
              <SocialMediaCard />
              <SocialMediaCard />
              <SocialMediaCard />
            </div>
            <div className="flex flex-col gap-4">
              <SocialMediaCard />
              <SocialMediaCard />
              <SocialMediaCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
