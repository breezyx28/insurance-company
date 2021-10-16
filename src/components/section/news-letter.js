import { NewsLetterCard } from '../cards/newsletter-card';

export let NewsLetter = () => {
  return (
    <section id="newsletter">
      <div className="w-screen px-20" style={{ height: '80vh' }}>
        <div className="flex flex-col h-full justify-center items-center">
          <NewsLetterCard />
        </div>
      </div>
    </section>
  );
};
