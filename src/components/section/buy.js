import { ServicesCard } from '../cards/services-cards';

export let Buy = () => {
  return (
    <section id="buy">
      <div className="content w-screen py-20 px-20">
        <div className="flex flex-col justify-center items-center h-full">
          <p className="text-4xl blue-text md:text-start text-center font-bold mb-4">
            Buy Insurance <span style={{ color: '#fd7a53' }}>From Us</span>
          </p>
          <p className="text-gray-700 text-center mb-14">
            Insurance is provided by Delta Insurance Services with License No.
            72 of the Insurance Authority.
          </p>
          <div className="companies-slider w-full flex-wrap flex justify-center gap-4 lg:justify-between items-center">
            <ServicesCard
              style={'bg-blue-100 text-blue-500'}
              icon={'shield-check'}
              headline={'Very Safe'}
              description={'Your data is not shared with anyone.'}
            />
            <ServicesCard
              style={'bg-red-100 text-red-600'}
              icon={'award'}
              headline={'Very Safe'}
              description={'Your data is not shared with anyone.'}
            />
            <ServicesCard
              style={'bg-purple-100 text-purple-900'}
              icon={'headset'}
              headline={'Very Safe'}
              description={'Your data is not shared with anyone.'}
            />
            <ServicesCard
              style={'bg-green-100 text-green-900'}
              icon={'hands-heart'}
              headline={'Very Safe'}
              description={'Your data is not shared with anyone.'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
