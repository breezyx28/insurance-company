import { NewsLetterCard } from '../cards/newsletter-card';

export let NewsLetter = () => {
  return (
    <section id="newsletter">
      <div className="w-screen md:px-20 py-20">
        <div className="flex flex-col h-full justify-center items-center">
          <NewsLetterCard />
        </div>
      </div>
    </section>
  );
};
