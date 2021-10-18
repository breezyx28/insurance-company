export let ServicesCard = ({ style = null, icon, headline, description }) => {
  return (
    <div>
      <div
        className="flex flex-col flex-grow w-full gap-8 p-10 shade"
        style={{
          borderRadius: '15px',
          width: '250px',
        }}>
        <div className="flex">
          <div
            className={`icon flex justify-center items-center ${style}`}
            style={{ borderRadius: '24px', width: '4.5rem', height: '4.5rem' }}>
            <span className={`fal fa-${icon} fa-2x`}></span>
          </div>
        </div>
        <div className="desc flex flex-col gap-3">
          <div className="headline text-blue-900 font-bold text-xl">
            {headline}
          </div>
          <div className="flex" style={{ maxWidth: '190px' }}>
            <div
              className="description text-gray-600"
              style={{
                fontWeight: '500',
              }}>
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
