import './fa/css/all.css';
import './style.css';
import NormalBtn from './components/Buttons/normal';
import IconBtn from './components/Buttons/btn&icon';
import Logo from './components/logo/logo';
import FirstForm from './components/Forms/firstForm';
import { ServicesCard } from './components/cards/services-cards';
import { OffersCard } from './components/cards/offers-cards';
import { CustomerCard } from './components/cards/customers-cards';
import { WhyUsCard } from './components/cards/whyUs-card';
import { SocialMediaCard } from './components/cards/socialmedia-cards';
import { BlogCard } from './components/cards/blogs-cards';
import { Footer } from './components/section/footer';
import { list } from 'purgecss/node_modules/postcss';
import { Nav } from './components/section/nav';
import { Partners } from './components/section/parteners';
import { Buy } from './components/section/buy';
import { Offer } from './components/section/offer';
import { Slider } from './components/section/slider';
import { FromUs } from './components/section/fromUs';
import { SocialMedia } from './components/section/social-media';
import { Blog } from './components/section/blog';
import { Faq } from './components/section/faq';
import { NewsLetter } from './components/section/news-letter';

function App() {
  return (
    <div className="App overflow-x-hidden">
      <section className="splash" id="splash">
        <div className="absolute w-screen h-screen">
          <img
            src="./imgs/background/background.png"
            className="h-full w-full"
          />
        </div>
        <div
          className="pt-5 px-20 z-20 filter bg-opacity-80 bg-clip-padding"
          style={{ backdropFilter: 'blur(20px)' }}>
          <Nav />
          <div className="content flex justify-center md:justify-between md:gap-40 md:pt-10">
            <div className="header flex flex-col justify-around">
              <div className="">
                <p className="text-5xl leading-tight font-bold blue-text">
                  Best Insurances in UAE Compare & Buy{' '}
                  <span style={{ color: '#FD7A53' }}>Cheap Insurance</span>{' '}
                  Online
                </p>
                <div className="mt-5">
                  <ul className="flex flex-col gap-4">
                    <li className="flex gap-4">
                      <span className="fa fa-award fa-2x text-blue-500"></span>{' '}
                      <h6 className="blue-text font-semibold">
                        Buy from the best car insurance providers in the UAE
                      </h6>
                    </li>
                    <li className="flex gap-4">
                      <span className="fa fa-award fa-2x text-blue-500"></span>{' '}
                      <h6 className="blue-text font-semibold">
                        Up to 20% no claims discount
                      </h6>
                    </li>
                    <li className="flex gap-4">
                      <span className="fa fa-award fa-2x text-blue-500"></span>{' '}
                      <h6 className="blue-text font-semibold">
                        Prices from{' '}
                        <span style={{ color: '#FD7A53' }}>525 AED</span> inc
                        VAT
                      </h6>
                    </li>
                    <li className="flex gap-4">
                      <span className="fa fa-award fa-2x text-blue-500"></span>{' '}
                      <h6 className="blue-text font-semibold">
                        Get a car insurance in just{' '}
                        <span style={{ color: '#FD7A53' }}>1 minute</span>
                      </h6>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex md:items-start md:justify-start justify-center gap-4 mt-8">
                <span className="fal fa-long-arrow-down"></span>
                <a href="#partners" className="text-sm font-semibold">
                  S C R O L L
                </a>
              </div>
            </div>
            <FirstForm />
          </div>
        </div>
      </section>
      <Partners />
      <Buy />
      <Offer />
      <Slider />
      <FromUs />
      <SocialMedia />
      <Blog />
      <Faq />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
