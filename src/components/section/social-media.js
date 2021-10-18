import { SocialMediaCard } from '../cards/socialmedia-cards';

export let SocialMedia = () => {
  return (
    <section id="social-media">
      <div className="w-screen py-20 bg-gradient-to-t from-gray-50 px-10 md:px-20 pt-20">
        <div className="flex flex-col gap-10">
          <div className="flex justify-center">
            <h1 className="font-bold blue-text md:text-start text-center inline text-4xl">
              Our Social
              <span className="orange-text ml-2">media</span>
            </h1>
          </div>
          <div className="h-full w-full grid md:grid-cols-3 grid-cols-1 md:grid-flow-col grid-flow-row gap-4">
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
