export let BlogCard = ({
  imageSrc,
  imageWidth,
  imageHeight,
  head,
  content,
  infoImg,
  infoUsername,
}) => {
  return (
    <div style={{ maxWidth: '500px' }}>
      <div className="flex flex-col gap-4">
        <div className="img">
          <img
            src={imageSrc ?? './imgs/blog/car-drive-3.jpg'}
            className="fit-cover"
            style={{ borderRadius: '15px' }}
            width={imageWidth ?? '500px'}
            height={imageHeight ?? '500px'}
          />
        </div>
        <div className="head">
          <div className="md:text-2xl text-lg font-bold blue-text">
            {head ?? 'What Is Insurance? And How The Insurance Works?'}
          </div>
        </div>
        <div className="content">
          <div className="line-clamp-2 overflow-hidden text-gray-500">
            {content ??
              'As long as you don’t know what insurance is and why it’s necessary, your suspicions adaw.awdaw awdaw adw sertg wesf w fesf'}
          </div>
        </div>
        <div className="info">
          <div className="flex gap-2 justify-between items-center">
            <div className="flex md:gap-3 gap-2">
              <img
                src={infoImg ?? './imgs/people/girl-blue-bg.jpg'}
                className="w-8 h-8 object-cover rounded-full"
              />
              <div className="by-name flex items-center gap-1">
                <span className="text-gray-500">By</span>
                <span className="blue-text font-semibold">
                  {infoUsername ?? 'Maryam Afzal'}
                </span>
              </div>
            </div>
            <div className="date flex gap-2 text-gray-500 text-sm">
              <span className="fa fa-calendar-alt"></span>
              <span className="">6 Jul, 2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
