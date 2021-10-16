import NormalBtn from '../Buttons/normal';
import Logo from '../logo/logo';

export let Nav = () => {
  return (
    <nav>
      <div className="nav-wrapper flex justify-between">
        <div className="left flex gap-10">
          <div className="logo flex items-center gap-4">
            <Logo width={'auto'} height={'40'} />
            <div className="flex gap-1 font-semibold text-xl">
              <span style={{ color: '#fd7a53' }}>Your</span>
              <span style={{ color: '#28a8df' }}>Insurance</span>
            </div>
          </div>
          <ul className="flex items-center text-black font-semibold text-sm gap-20">
            <li>About</li>
            <li>Insurance</li>
            <li>Contact</li>
            <li>EN</li>
          </ul>
        </div>
        <div className="right flex gap-4">
          <NormalBtn label={'login'} bg={'white'} color={'black'} />
          <NormalBtn label={'Request a Call'} color={'white'} />
        </div>
      </div>
    </nav>
  );
};
