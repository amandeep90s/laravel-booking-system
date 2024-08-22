import React from 'react';
import { Link } from '@inertiajs/react';

const Callout = ({ title, link }) => {
  return (
    <section id="h1-breadcrumb">
      <div className="h1-breadcrumb bg-main-gray relative h-fit w-full overflow-hidden pb-16 md:pb-24">
        <div className="win-grid win-grid-bg absolute left-0 top-0 z-0 h-full w-full" id="win-grid" />
        <div className="pointer-events-none absolute left-1/4 top-[300px] z-0 w-full overflow-hidden">
          <div className="flex justify-center">
            <img src="/images/home-one-hero-circle-shadow.svg" alt="" />
          </div>
        </div>
        <div className="theme-container relative z-20 mx-auto h-fit w-fit">
          <div className="relative z-10 mx-auto mt-[120px] w-fit md:mt-[272px]">
            <h1 className="text-main-black text-34 sm:text-48 w-full text-center font-semibold">{title}</h1>
            <div className="mt-4 flex items-center justify-center gap-5">
              <Link
                href={route('home')}
                className="home-two-nav-item text-18 font-inter text-paragraph hover:text-purple relative leading-5 transition-all duration-300"
              >
                Home
              </Link>
              <svg width={6} height={12} viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1L5 6L1 11"
                  stroke="#794AFF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <a
                href={link}
                className="home-two-nav-item text-18 font-inter text-paragraph hover:text-purple relative leading-5 transition-all duration-300"
              >
                {title}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Callout;
