import { Link } from '@inertiajs/react';
import React from 'react';

const Menu = () => {
  return (
    <header>
      <div className="header-wrapper h1-header-sticky h1-header-sticky-qs fixed left-0 top-0 z-20 hidden w-full xl:block">
        <div className="relative mx-auto px-5 2xl:px-[110px]">
          <div className="h1-top-bar !hidden h-[45px] w-full items-center justify-between border border-[#e7e8e9] bg-white pl-[50px]">
            <span className="hidden 2xl:block">
              Welcome to{''}
              <span className="text-purple font-semibold">MP. Bhai Amritpal Singh </span>official website
            </span>
            <div
              style={{
                background: 'linear-gradient(270deg,#794aff 50%,rgba(121, 74, 255, 0) 90.03%)',
              }}
              className="flex h-full w-full items-center justify-end 2xl:w-[1021px]"
            >
              <div className="mr-7 hidden items-center space-x-2.5">
                <span>
                  <svg width={22} height={20} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M21 10.5001C21 10.0087 20.9947 9.01723 20.9842 8.52439C20.9189 5.45886 20.8862 3.92609 19.7551 2.79066C18.6239 1.65523 17.0497 1.61568 13.9012 1.53657C11.9607 1.48781 10.0393 1.48781 8.09882 1.53656C4.95033 1.61566 3.37608 1.65521 2.24495 2.79065C1.11382 3.92608 1.08114 5.45885 1.01576 8.52438C0.994745 9.51007 0.994745 10.4899 1.01577 11.4756C1.08114 14.5412 1.11383 16.0739 2.24496 17.2094C3.37608 18.3448 4.95033 18.3843 8.09883 18.4634C8.90159 18.4836 9.70108 18.4954 10.5 18.4989"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 4L7.91302 7.92462C10.4387 9.35846 11.5613 9.35846 14.087 7.92462L21 4"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 15.5L13 15.5M21 15.5C21 14.7998 19.0057 13.4915 18.5 13M21 15.5C21 16.2002 19.0057 17.5085 18.5 18"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="font-bold text-white">
                  Email :
                  <u>
                    <Link
                      href="https://quomodothemes.website/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="5f363139302e2a333e313b1f38323e3633713c3032"
                    >
                      [email&nbsp;protected]
                    </Link>
                  </u>
                </span>
              </div>
              <div className="mr-7 flex items-center space-x-2.5">
                <span>
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 5L12 5M22 5C22 4.43982 20.604 3.39322 20.25 3M22 5C22 5.56018 20.604 6.60678 20.25 7M12 5C12 4.43982 13.396 3.39322 13.75 3M12 5C12 5.56018 13.396 6.60678 13.75 7"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="font-bold text-white">Call : 000 (123) 456 88</span>
              </div>
              <ul className="mr-[55px] flex items-center space-x-[15px]">
                <li>
                  <Link href="#" aria-label="facebook" className="text-white opacity-50 hover:opacity-100">
                    <svg
                      className="fill-current"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2H11.3333C8.756 2 6.66667 4.08934 6.66667 6.66667H4V9.33333H6.66667V14H9.33333V9.33333H12V6.66667H9.33333V5.66667C9.33333 5.11438 9.78105 4.66667 10.3333 4.66667H12V2Z" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="#" aria-label="twitter" className="text-white opacity-50 hover:opacity-100">
                    <svg
                      className="fill-current"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.19087 0.666504C6.78831 0.666504 5.6513 1.86041 5.6513 3.33317C5.6513 3.55572 5.67726 3.7719 5.72618 3.97855C4.37757 3.97855 2.34626 3.70589 0.649788 2.00624C0.424199 1.78023 0.00821913 1.93134 0.0238667 2.25029C0.275284 7.37494 2.47001 8.86978 3.60023 8.9628C2.8704 9.68362 1.81023 10.2526 0.743422 10.508C0.461872 10.5754 0.39232 10.8836 0.667629 10.9731C1.43098 11.2214 2.52361 11.317 3.11173 11.3332C7.27228 11.3332 10.6539 7.83126 10.7292 3.48137C11.2754 3.12613 11.6253 2.35484 11.8219 1.80844C11.8698 1.67537 11.6517 1.52032 11.5211 1.57468C11.1131 1.74455 10.595 1.78483 10.1538 1.64104C9.688 1.04601 8.98164 0.666504 8.19087 0.666504Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative flex h-[95px] w-full items-center justify-between border border-t-0 border-[#e7e8e9] bg-white px-[50px]">
            <div className="flex w-full items-center justify-between xl:w-auto xl:space-x-10 2xl:space-x-[100px]">
              <div>
                <Link href="/" aria-label="logo">
                  <h1 className="text-2xl font-semibold text-gray-700">MP. Bhai Amritpal Singh</h1>
                </Link>
              </div>
              <div>
                <ul className="flex items-center space-x-10">
                  <li className="group z-50">
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
            </div>
            <div className="hidden items-center space-x-[30px] xl:flex">
              <Link href={route('contact-us')}>
                <div className="home-two-btn-bg bg-blue-seo border-blue-seo group py-3">
                  <span className="group-hover:text-blue-seo font-inter relative z-10 text-base font-semibold text-white transition-all duration-300">
                    Contact1 Us
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Menu;
