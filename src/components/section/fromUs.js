import { WhyUsCard } from '../cards/whyUs-card';

export let FromUs = () => {
  return (
    <section id="fromUS">
      <div className="w-screen py-20 px-20 bg-gray-50 pt-10">
        <div className="car-illustrate w-full h-full absolute z-10">
          <div className="h-full w-full flex justify-center">
            <img
              src="./imgs/object/Car-Logo.png"
              id="carLogo"
              width="500"
              height="500"
            />
          </div>
        </div>
        <div className="flex flex-col h-full w-full">
          <div className="title flex justify-center blue-text">
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-bold">
                Why Buy Insurance <span className="orange-text">From Us</span>
              </h1>
              <p className="text-gray-600 text-center mt-4">
                Insurance is provided by Delta Insurance Services with License
                No. 72 of the Insurance Authority.
              </p>
            </div>
          </div>
          <div className="flex justify-between mt-16">
            <div className="grid w-full grid-cols-2 justify-items-center gap-3">
              <WhyUsCard />
              <WhyUsCard />
              <WhyUsCard />
              <WhyUsCard />
              <WhyUsCard />
              <WhyUsCard />
              <WhyUsCard />
              <WhyUsCard />
              <WhyUsCard />
              <WhyUsCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
