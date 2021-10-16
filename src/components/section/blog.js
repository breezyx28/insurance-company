import NormalBtn from '../Buttons/normal';
import { BlogCard } from '../cards/blogs-cards';

export let Blog = () => {
  return (
    <section id="blog">
      <div className="w-screen h-screen bg-gray-50 px-20">
        <div className="flex flex-col">
          <div className="hero flex justify-center mt-10">
            <h1 className="text-4xl blue-text font-bold pb-10">
              Our <span className="orange-text">Blog</span>
            </h1>
          </div>
          <div className="flex justify-between gap-10">
            <BlogCard />
            <BlogCard imageSrc={'./imgs/blog/car-drive.jpg'} />
            <BlogCard imageSrc={'./imgs/blog/car-drive-2.jpg'} />
          </div>
          <div className="flex justify-center pt-20">
            <NormalBtn
              label={'See All Articles'}
              bg={'#7e8cb4'}
              size={'py-5 px-10'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
