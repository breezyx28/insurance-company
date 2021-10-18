import NormalBtn from '../Buttons/normal';
import { CustomerCard } from '../cards/customers-cards';
import './style.css';

export let Slider = () => {
  return (
    <section id="slider">
      <div className="w-screen pb-20 px-20 bg-gradient-to-t from-gray-50">
        <div className="slider">
          <div className="flex flex-col gap-8 justify-between">
            <div className="flex justify-between items-center">
              <h1
                className="text-4xl font-bold blue-text"
                style={{ width: '30%' }}>
                What Our <span className="orange-text">Customers</span> Say
                About Us
              </h1>
              <div className="slider-btn text-xl flex gap-4">
                <div className="relative slider-button rounded-full w-12 h-12 shade flex justify-center items-center transition-all cursor-pointer">
                  <span
                    style={{ fontWeight: '700' }}
                    className="absolute fa fa-chevron-left text-sm"></span>
                </div>
                <div className="relative slider-button rounded-full w-12 h-12 shade flex justify-center items-center transition-all cursor-pointer">
                  <span
                    style={{ fontWeight: '700' }}
                    className="absolute fa fa-chevron-right text-sm"></span>
                </div>
              </div>
            </div>
            <div className="items w-screen mt-5">
              <div className="slider-items flex gap-8">
                <CustomerCard src={'./imgs/people/girl-blue-bg.jpg'} />
                <CustomerCard src={'./imgs/people/girl-yellow-bg.jpg'} />
                <CustomerCard src={'./imgs/people/man-gray-bg.jpg'} />
              </div>
            </div>
            <div className="slider-dots w-full flex justify-center gap-2 mt-10">
              <div className="dot"></div>
              <div className="dot active"></div>
              <div className="dot"></div>
            </div>
            <div className="rate">
              <div className="flex justify-center gap-2 mt-5">
                <img
                  src="./icons/companies/google.svg"
                  className="ml-2"
                  width="40"
                  height="40"
                />
                <span className="flex items-center text-2xl font-bold blue-text">
                  5.0 / 5.0 Rating
                  <div className="flex items-center px-2">
                    <span className="fa fa-star text-yellow-400 px-1 text-3xl"></span>
                    <span className="fa fa-star text-yellow-400 px-1 text-3xl"></span>
                    <span className="fa fa-star text-yellow-400 px-1 text-3xl"></span>
                    <span className="fa fa-star text-yellow-400 px-1 text-3xl"></span>
                    <span className="fa fa-star text-yellow-400 px-1 text-3xl"></span>
                  </div>
                  Out of 250+ Reviews
                </span>
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <NormalBtn label={'Read Reviews on Google'} size={'py-6 px-10'} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
