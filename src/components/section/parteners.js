import Slider from 'react-slick';
import './infinite-slider.css';

export let Partners = () => {
  let settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <section id="partners">
      <div className="content pt-20 px-20">
        <div className="flex flex-col justify-end items-center h-full">
          <p className="text-4xl font-bold text-center md:text-start blue-text mb-14">
            Our <span style={{ color: '#fd7a53' }}>Trusted</span> Partners
          </p>
          <div className="w-full flex flex-col justify-center">
            <div className="companies-slider" style={{ height: '140px' }}>
              <Slider className="slider flex items-center" {...settings}>
                <img
                  src="./icons/companies/youku-logo-1.svg"
                  width="70"
                  height="70"
                />
                <img
                  src="./icons/companies/mastercard (1).svg"
                  width="70"
                  height="70"
                />
                <img
                  src="./icons/companies/hoya.svg"
                  width="100"
                  height="auto"
                />
                <img
                  src="./icons/companies/pngegg (1).png"
                  width="60"
                  height="60"
                />
                <img
                  src="./icons/companies/hoya.svg"
                  width="100"
                  height="auto"
                />
                <img src="./icons/companies/cat.svg" width="70" height="70" />
                <img
                  src="./icons/companies/mastercard (1).svg"
                  width="70"
                  height="70"
                />
                <img
                  src="./icons/companies/youku-logo-1.svg"
                  width="70"
                  height="70"
                />
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
