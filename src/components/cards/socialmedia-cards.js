import Logo from '../logo/logo';

export let SocialMediaCard = ({ text, icon, color }) => {
  return (
    <div className="">
      <div className="border rounded-lg border-gray-300">
        <div className="content flex gap-4 py-5 px-4">
          <div className="logo">
            <Logo width={'35'} height={'35'} />
          </div>
          <div className="flex flex-col gap-4 w-full">
            <div className="date text-gray-500">
              <date datetime="6 Jul, 2021">6 Jul, 2021</date>
            </div>
            <div className="text blue-text">
              {text ??
                'Send your documents online and we’ll issue your car insurance policy in 60 minutes. It will automatically be included in the RTA system.'}
            </div>
          </div>
          <div className="social-icon">
            <span
              className={`fab fa-${icon ?? 'twitter'} ${
                color ?? 'text-blue-400'
              } text-xl`}></span>
          </div>
        </div>
      </div>
    </div>
  );
};
