import { Link } from '@inertiajs/react';
import React from 'react';

const MobileMenu = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <header className="relative flex flex-col xl:hidden">
      <div className="fixed left-0 top-0 z-50 flex h-16 w-full items-center justify-between bg-white px-2.5">
        <Link href="/" aria-label="logo">
          <h1 className="text-2xl font-semibold text-gray-700">MP. Bhai Amritpal Singh</h1>
        </Link>
        <button
          aria-label="mobile-Menu"
          className="text-main-black text-48 toggle_nav_menu h-6 w-6"
          id="mobile_nav_toggle_menu"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <svg
            className={`pointer-events-none transition-all duration-300 ${toggleMenu ? 'hidden' : 'block'}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
          <svg
            className={`pointer-events-none transition-all duration-300 ${toggleMenu ? 'block' : 'hidden'}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </button>
      </div>
      <div className="transition-all duration-300">
        <div
          className={`fixed -left-full z-40 h-screen w-full bg-black/80 transition-all delay-150 duration-300 ${toggleMenu ? 'active_mobile_nav' : 'hidden'}`}
          id="mobile-nav-div-overlay"
        />
        <div
          className={`fixed -left-full top-16 z-50 h-screen w-full overflow-y-scroll bg-white transition-all delay-0 duration-300 ${toggleMenu ? 'active_mobile_nav' : 'hidden'}`}
          id="mobile-nav-div"
        >
          <div className="flex flex-col gap-28 pl-5 pt-5">
            <ul className="text-paragraph font-inter flex flex-col gap-5 text-base font-medium leading-5">
              <li className="text-paragraph hover:text-purple font-semibold hover:underline">
                <Link
                  href={route('home')}
                  className="text-paragraph hover:text-purple flex items-center gap-2 font-semibold hover:underline"
                >
                  Home
                </Link>
              </li>
              <li className="text-paragraph hover:text-purple font-semibold hover:underline">
                <Link href={route('about-us')}>About Us</Link>
              </li>
              <li className="text-paragraph hover:text-purple font-semibold hover:underline">
                <Link href={route('history')}>History</Link>
              </li>
              <li className="text-paragraph hover:text-purple font-semibold hover:underline">
                <Link href={route('press-media')}>Press/Media</Link>
              </li>
              <li className="text-paragraph hover:text-purple font-semibold hover:underline">
                <Link href={route('appointment')}>Appointment</Link>
              </li>
              <li className="text-paragraph hover:text-purple font-semibold hover:underline">
                <Link href={route('contact-us')}>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="mt-5 flex flex-col gap-5 pl-5">
            {/* <Link href="#" className="group flex gap-2.5">
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z"
                  stroke="#5D51F2"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 5L12 5M22 5C22 4.43982 20.604 3.39322 20.25 3M22 5C22 5.56018 20.604 6.60678 20.25 7M12 5C12 4.43982 13.396 3.39322 13.75 3M12 5C12 5.56018 13.396 6.60678 13.75 7"
                  stroke="#5D51F2"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-main-black text-base font-bold leading-5 tracking-tight">
                Call : 000 (123) 456 88
              </span>
            </Link> */}
            {/* <Link href={route('contact-us')}>
              <div className="home-two-btn-bg bg-blue-seo border-blue-seo group w-fit py-2.5">
                <span className="group-hover:text-blue-seo font-inter relative z-10 text-base font-semibold text-white transition-all duration-300">
                  Contact US
                </span>
                <svg
                  className="relative z-10"
                  width={7}
                  height={12}
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="group-hover:stroke-blue-seo transition-all duration-300"
                    d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default MobileMenu;
