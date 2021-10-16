import { OffersCard } from '../cards/offers-cards';

export let Offer = () => {
  return (
    <section id="offer">
      <div className="content w-screen h-screen px-20">
        <div className="flex justify-between">
          <div className="left">
            <p className="text-4xl font-bold blue-text pb-10 w-full">
              Cheap Car Insurance in{' '}
              <span style={{ color: '#fd7a53' }}>3 Simple Steps</span>
            </p>
            <div className="flex flex-col gap-4">
              <OffersCard bg={'orange-bg'} />
              <OffersCard
                title={'Buy It From Us'}
                description={
                  'Choose car insurance plans within your budget and with the features you need. Pay easily online through our secure website'
                }
                icon={'shopping-cart'}
              />
              <OffersCard
                bg={'blue-bg'}
                title={'Get Your Policy'}
                description={
                  'Send your documents online and we’ll issue your car insurance policy in 60 minutes. It will automatically be included in the RTA system.'
                }
                icon={'file-signature'}
              />
            </div>
          </div>
          <div className="right">
            <div className="object-img h-full">
              <img
                src="./imgs/object/guy.png"
                width="700"
                height="auto"
                className="h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
