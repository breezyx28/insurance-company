import NormalBtn from '../Buttons/normal';
import Logo from '../logo/logo';

export let Nav = () => {
  return (
    <nav class="flex items-center justify-between flex-wrap">
      <div class="flex items-center flex-shrink-0 text-white mr-14">
        <Logo width={'auto'} height={'40'} />
        <div className="flex gap-1 font-semibold ml-4 text-xl">
          <span style={{ color: '#fd7a53' }}>Your</span>
          <span style={{ color: '#28a8df' }}>Insurance</span>
        </div>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2">
          <span className="fal fa-bars fa-2x"></span>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 blue-text font-bold hover:text-blue-900 mr-4">
            About
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 blue-text font-bold hover:text-blue-900 mr-4">
            Insurance
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 blue-text font-bold hover:text-blue-900 mr-4">
            Contact
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 blue-text font-bold hover:text-blue-900">
            EN
          </a>
        </div>
        <div className="md:flex md:gap-4">
          <NormalBtn label={'login'} bg={'white'} color={'black'} />
          <NormalBtn label={'Request a Call'} color={'white'} />
        </div>
      </div>
    </nav>
  );
};
