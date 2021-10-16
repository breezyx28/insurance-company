import NormalBtn from '../Buttons/normal';

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
          className="absolute overflow-hidden right-0 h-full"
          style={{ borderRadius: '10px' }}>
          <img
            src={'./imgs/object/Car.png'}
            width="290"
            height="200"
            className="relative overflow-hidden"
            style={{ right: '-79px', bottom: '-80px' }}
          />
        </div>
        <div className="content flex justify-between h-full px-20 py-10">
          <div className="flex w-4/6 flex-col gap-6">
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
