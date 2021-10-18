import { Cash } from '../../assets/icons/cash';
import { MasterCard } from '../../assets/icons/masterCard';
import { Visa } from '../../assets/icons/visa';
import Logo from '../logo/logo';

export let Footer = () => {
  return (
    <div className="w-screen blue-bg text-white">
      <div className="wrapper pt-20 pb-10 px-10 md:px-20">
        <div className="pb-20">
          <div className="footer-wrapper grid md:grid-cols-4 grid-rows-1 gap-10 md:gap-20">
            <div className="flex flex-col">
              <div className="head text-3xl flex font-bold">
                <Logo
                  style={'mr-2'}
                  width={'40'}
                  height={'40'}
                  white={'#fff'}
                />{' '}
                Head Office
              </div>
              <ul className="list-none flex flex-col gap-6 mt-5">
                <li className="flex flex-col gap-2">
                  <div className="sub-head font-bold text-2xl">Location</div>
                  <div className="text-gray-300 text-lg">
                    1406, DAMAClgart Heights, Barsha Heights, Dubai, United Arab
                    Emirates
                  </div>
                </li>
                <li className="flex flex-col gap-2">
                  <div className="sub-head font-bold text-2xl">Email us</div>
                  <div className="text-gray-300 text-lg">
                    info@buyanyinsurance.com
                  </div>
                </li>
                <li className="flex flex-col gap-2">
                  <div className="sub-head font-bold text-2xl">
                    Call us - Toll Free
                  </div>
                  <div className="text-gray-300 text-lg">800765429</div>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <div className="head text-3xl font-bold">Quick Links</div>
              <ul className="list-none flex flex-col text-lg text-gray-300 gap-4 mt-5">
                <li>Contact us</li>
                <li>About us</li>
                <li>Blog</li>
                <li>FAQ</li>
                <li>Privacy & Policy</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <div className="head text-3xl font-bold">Insurance</div>
              <ul className="list-none flex flex-col text-lg text-gray-300 gap-4 mt-5">
                <li>Insurance companies</li>
                <li>Terms and Conditions</li>
                <li>Car Insurance</li>
                <li>Home Insurance</li>
                <li>Travel Insurance</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <div className="head text-3xl font-bold w-full">Social Media</div>
              <div className="grid grid-cols-3 text-gray-300 mt-5 gap-2 w-2/4">
                <div className="h-10 w-10 rounded-full flex items-center justify-center bg-gray-300">
                  <span
                    className="fab fa-facebook-f"
                    style={{ color: '#325790' }}></span>
                </div>
                <div className="h-10 w-10 rounded-full flex items-center justify-center bg-gray-300">
                  <span
                    className="fab fa-instagram"
                    style={{ color: '#b34a6c' }}></span>
                </div>
                <div className="h-10 w-10 rounded-full flex items-center justify-center bg-gray-300">
                  <span
                    className="fab fa-linkedin-in"
                    style={{ color: '#0c6aa6' }}></span>
                </div>
                <div className="h-10 w-10 rounded-full flex items-center justify-center bg-gray-300">
                  <span
                    className="fab fa-twitter"
                    style={{ color: '#2a98cc' }}></span>
                </div>
                <div className="h-10 w-10 rounded-full flex items-center justify-center bg-gray-300">
                  <span
                    className="fab fa-youtube"
                    style={{ color: '#c8363e' }}></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex border-b border-gray-500 justify-center items-center pb-10">
          <div className="payment-cards flex items-center gap-4">
            <Visa />
            <MasterCard />
            <Cash />
          </div>
        </div>

        <div className="copywrights copywrights py-10">
          <div className="flex justify-center items-center font-bold">
            Copyrights © 2021 Your Insurance
          </div>
        </div>
      </div>
    </div>
  );
};
