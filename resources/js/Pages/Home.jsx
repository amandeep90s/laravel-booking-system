import HomeLayout from '@/Layouts/HomeLayout';
import { Head, Link } from '@inertiajs/react';

export default function Home({ auth, laravelVersion, phpVersion }) {
  return (
    <HomeLayout>
      <Head title="Home" />

      <section id="home-one-hero">
        <div className="hero-one-section-wrapper relative w-full overflow-hidden xl:h-[905px]">
          <div className="win-grid absolute left-0 top-0 h-full w-full" id="win-grid" />
          <div className="theme-container pointer-events-none relative z-10 mx-auto h-full">
            <div className="grid h-full w-full grid-cols-1 items-center gap-10 pt-[130px] lg:pt-[223px] xl:grid-cols-2 2xl:gap-[130px]">
              <div className="article-area">
                <div className="shadow-style-one mb-5 inline-flex items-center space-x-2.5 rounded-full bg-white px-3 py-2.5 md:px-6 md:py-[14px]">
                  <span>
                    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_460_7967)">
                        <path
                          d="M10.0005 10.9371L0.0507812 7.62184C0.132029 7.4156 0.3164 7.26529 0.535144 7.23435L6.68811 6.32812L10.0005 10.9371Z"
                          fill="#FEC461"
                        />
                        <path
                          d="M10.0002 10.937V16.6775L4.49725 19.6149C4.28475 19.7274 4.03195 19.709 3.83789 19.5649L10.0002 10.937Z"
                          fill="#F7B84E"
                        />
                        <path
                          d="M10.0005 10.937L3.83784 19.5646C3.64753 19.4243 3.55035 19.1837 3.59128 18.9431L4.64094 12.7248L10.0005 10.937Z"
                          fill="#FEC461"
                        />
                        <path
                          d="M10 10.9368L4.64079 12.7246L0.190595 8.31813C0.0190365 8.14938 -0.0437743 7.89595 0.0312237 7.66814C0.0377861 7.65252 0.0405985 7.63658 0.0502858 7.62158L10 10.9368Z"
                          fill="#F7B84E"
                        />
                        <path
                          d="M9.99992 0.312012V10.9367L6.6875 6.32748L9.44055 0.665128C9.54368 0.449196 9.76242 0.312012 9.99992 0.312012Z"
                          fill="#FEC461"
                        />
                        <path
                          d="M13.3124 6.32748L10 10.9367V0.312012C10.2375 0.312012 10.4562 0.449196 10.5594 0.665128L13.3124 6.32748Z"
                          fill="#F7B84E"
                        />
                        <path
                          d="M19.9497 7.62167L10 10.9369L13.3124 6.32764L19.4654 7.23386C19.6841 7.26511 19.8685 7.41511 19.9497 7.62167Z"
                          fill="#FEC461"
                        />
                        <path
                          d="M19.8123 8.31813L15.3592 12.7246L10 10.9368L19.9497 7.62158C19.9591 7.63689 19.9622 7.65283 19.9688 7.66814C20.0435 7.89626 19.981 8.14938 19.8123 8.31813Z"
                          fill="#F7B84E"
                        />
                        <path
                          d="M16.1623 19.5646L10 10.937L15.3592 12.7248L16.4092 18.9431C16.4498 19.184 16.353 19.4243 16.1623 19.5646Z"
                          fill="#FEC461"
                        />
                        <path
                          d="M16.1623 19.5646C15.9686 19.7087 15.7155 19.7274 15.5033 19.6146L10 16.6775V10.937L16.1623 19.5646Z"
                          fill="#F7B84E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_460_7967">
                          <rect width={20} height={20} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span className="md:text-20 text-purple pointer-events-auto text-sm font-semibold">
                    Quland digital agency
                  </span>
                </div>
                <h2 className="md:text-65 text-main-black pointer-events-auto mb-[35px] text-4xl font-semibold">
                  <span>We’re Modern &amp;</span> <br />
                  effective
                  <span className="relative inline-block px-3 font-bold uppercase text-white">
                    <span className="relative z-10">digital</span>
                    <span className="from-purple absolute left-0 top-0 block h-full w-full bg-gradient-to-r" />
                  </span>
                  <br />
                  <span className="italic"> marketing agency </span>
                </h2>
                <div className="border-blue-sass pointer-events-auto mb-[35px] border-l-2 bg-white px-6 py-[14px] md:w-[500px] xl:w-full">
                  <p className="text-ptwo text-paragraph">
                    Digital marketing agency, we craft compelling narratives &amp; leverage cutting-edge technologies to
                    propel brands towards
                  </p>
                </div>
                <div className="pointer-events-auto flex items-center space-x-[30px]">
                  <Link href="blog.html">
                    <div className="home-two-btn-bg bg-purple border-blue-seo group py-3">
                      <span className="group-hover:text-purple font-inter relative z-10 text-base font-semibold text-white transition-all duration-300">
                        Learn More
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
                  <Link href="service.html">
                    <div className="group flex items-center gap-2">
                      <p className="text-main-black font-inter border-main-black before:border-purple before:text-purple before:font-inter relative mb-[1px] border-b font-medium leading-5 before:absolute before:-bottom-[1px] before:block before:h-[21px] before:w-0 before:overflow-hidden before:border-b before:pb-[1px] before:font-medium before:leading-5 before:transition-all before:duration-300 before:content-['Our_Services'] hover:before:w-full">
                        Our Services
                      </p>
                      <svg width={7} height={11} viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          className="group-hover:stroke-purple transition-all delay-300 duration-300"
                          d="M1.5 10L5.29289 6.20711C5.62623 5.87377 5.79289 5.70711 5.79289 5.5C5.79289 5.29289 5.62623 5.12623 5.29289 4.79289L1.5 1"
                          stroke="#101828"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="image-area relative h-full">
                <div className="relative left-0 top-0 h-full w-full lg:w-[600px] xl:absolute 2xl:w-[752px]">
                  <div className="relative bottom-0 left-0 z-10 w-full xl:absolute">
                    <div className="flex w-full justify-center">
                      <img src="/images/mp-amritpal-singh.png" alt="" />
                    </div>
                  </div>
                  <div className="absolute bottom-[100px] left-0 hidden w-full md:block">
                    <div className="flex justify-center">
                      <div className="h-[585px] w-[533px] rounded-[266px] bg-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                    <div className="flex justify-center">
                      <img src="/images/home-one-hero-circle-shadow.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="blogs">
        <div className="blogs-section-wrapper w-full overflow-hidden pt-[60px] xl:pt-[130px]">
          <div className="theme-container mx-auto">
            <div className="w-full">
              <div className="flex flex-col items-center">
                <h2 className="md:text-48 text-34 text-main-black mb-[60px] text-center font-semibold">
                  Under Development
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HomeLayout>
  );
}
