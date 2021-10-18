import NormalBtn from '../Buttons/normal';
import './css/newsletter.css';

export let NewsLetterCard = () => {
  return (
    <div className="w-full">
      <div
        className="blue-bg"
        style={{
          borderRadius: '10px',
          position: 'relative',
        }}>
        <div
          className="absolute w-full h-20 overflow-hidden md:right-0 h-full"
          style={{ borderRadius: '10px' }}>
          <div className="flex justify-end h-full">
            <img id="newsletterImg" src={'./imgs/object/Car.png'} />
          </div>
        </div>
        <div className="content flex justify-between h-full px-5 md:px-20 py-10">
          <div className="flex w-full md:w-4/6 flex-col gap-6">
            <p className="text-white text-3xl font-bold">NewsLetter</p>
            <p className="text-white text-xl">Subscribe To Receive Discounts</p>
            <div className="input-group rounded-lg items-center flex gap-2 bg-white p-2">
              <div className="pl-4 flex items-center w-full input-label text-gray-400 font-light">
                <span className="fal fa-envelope"></span>
                <input
                  type="email"
                  className="border border-none w-full font-light ml-4 outline-none"
                  placeholder="Your Email Here"
                />
              </div>

              <NormalBtn label={'Subscribe'} size={'px-8 py-4'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
