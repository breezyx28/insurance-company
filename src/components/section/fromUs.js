import { WhyUsCard } from '../cards/whyUs-card';

export let FromUs = () => {
  return (
    <section id="fromUS">
      <div className="w-screen py-20 md:px-20 px-10 bg-gray-50 pt-10">
        <div className="w-full">
          <div className="car-illustrate h-full w-auto sm:w-full absolute z-10">
            <div className="h-full w-full flex justify-center">
              <img
                src="./imgs/object/Car-Logo.png"
                id="carLogo"
                style={{ maxWidth: '500px', maxHeight: '500px' }}
                className="mb-20 xs:mb-0 w-full px-10"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full w-full">
          <div className="title flex justify-center blue-text">
            <div className="flex flex-col items-center">
              <h1 className="text-4xl text-center md:text-start font-bold">
                Why Buy Insurance <span className="orange-text">From Us</span>
              </h1>
              <p className="text-gray-600 text-center mt-4">
                Insurance is provided by Delta Insurance Services with License
                No. 72 of the Insurance Authority.
              </p>
            </div>
          </div>
          <div className="flex justify-between mt-16">
            <div className="grid w-full md:grid-cols-2 sm:justify-items-center grid-cols-1 gap-3">
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
