import NormalBtn from '../Buttons/normal';
import Logo from '../logo/logo';

export let Nav2 = () => {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <Logo width={'auto'} height={'40'} />
        <div className="flex gap-1 font-semibold text-xl">
          <span style={{ color: '#fd7a53' }}>Your</span>
          <span style={{ color: '#28a8df' }}>Insurance</span>
        </div>
        <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <span className="fal fa-bars fa-2x"></span>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            About
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Insurance
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Contact
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            EN
          </a>
        </div>
        <div>
          <NormalBtn label={'login'} bg={'white'} color={'black'} />
          <NormalBtn label={'Request a Call'} color={'white'} />
        </div>
      </div>
    </nav>
  );
};
