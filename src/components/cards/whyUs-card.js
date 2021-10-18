export let WhyUsCard = ({ icon, description }) => {
  return (
    <div className="z-10">
      <div
        className="p-5 filter rounded-lg bg-white bg-opacity-70 bg-clip-padding"
        style={{ maxWidth: '450px', backdropFilter: 'blur(20px)' }}>
        <div className="flex items-start gap-6">
          <div
            className="icon flex items-start"
            style={{ borderRadius: '27px' }}>
            <span
              className={`fa fa-${
                icon ?? 'award'
              } fa-2x text-blue-400 mt-1`}></span>
          </div>
          <div className="flex flex-col">
            <h6 className="blue-text text-xl">
              {description ??
                'We appreciate honesty, integrity, and transparency.'}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};
