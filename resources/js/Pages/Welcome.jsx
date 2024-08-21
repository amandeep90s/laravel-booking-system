import HomeLayout from '@/Layouts/HomeLayout';
import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
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
                      <img src="/images/home-one-hero-main.webp" alt="" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 hidden h-full w-full md:block">
                    <div id="hero-mouse-move-anim" className="pointer-events-auto relative z-10 h-full w-full">
                      <div data-depth="0.20" className="layer">
                        <span className="2xl:text-pone lg:text-pone inline-block rounded-full rounded-br-none bg-[#BA4AFF] px-6 py-1.5 text-white xl:px-[30px] xl:py-2.5 xl:text-sm">
                          SEO &amp; Marketing
                        </span>
                      </div>
                      <div data-depth="0.30" className="layer">
                        <span className="bg-purple 2xl:text-pone lg:text-pone inline-block rounded-full rounded-bl-none px-6 py-1.5 text-white xl:px-[30px] xl:py-2.5 xl:text-sm">
                          Website Optimizations
                        </span>
                      </div>
                      <div data-depth="0.40" className="layer h-fit">
                        <span className="bg-blue-sass 2xl:text-pone lg:text-pone inline-block h-fit rounded-full rounded-br-none px-6 py-1.5 text-white xl:px-[30px] xl:py-2.5 xl:text-sm">
                          Marketing &amp; Growth
                        </span>
                      </div>
                      <div data-depth="0.50" className="layer h-fit">
                        <span className="2xl:text-pone lg:text-pone inline-block h-fit rounded-full rounded-bl-none bg-[#FF8C05] px-6 py-1.5 text-white xl:px-[30px] xl:py-2.5 xl:text-sm">
                          Keywords Research
                        </span>
                      </div>
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
      <section id="home-one-client">
        <div className="overflow-x-hidden px-5 py-10 md:px-10 md:py-[80px] xl:xl:py-[130px] 2xl:px-[152px]">
          <p className="text-paragraph mb-[50px] text-center text-base font-medium">
            We’ve more than 1250+ global clients
          </p>
          <div className="h1-partner_slider swiper w-full">
            <div className="swiper-wrapper">
              <div className="swiper-slide client-item flex justify-center">
                <Link href="/" aria-label="partner">
                  <img src="/images/home-one-client-1.webp" alt="" />
                </Link>
              </div>
              <div className="swiper-slide client-item flex justify-center">
                <Link href="/" aria-label="partner">
                  <img src="/images/home-one-client-2.webp" alt="" />
                </Link>
              </div>
              <div className="swiper-slide client-item flex justify-center">
                <Link href="/" aria-label="partner">
                  <img src="/images/home-one-client-3.webp" alt="" />
                </Link>
              </div>
              <div className="swiper-slide client-item flex justify-center">
                <Link href="/" aria-label="partner">
                  <img src="/images/home-one-client-4.webp" alt="" />
                </Link>
              </div>
              <div className="swiper-slide client-item flex justify-center">
                <Link href="/" aria-label="partner">
                  <img src="/images/home-one-client-5.webp" alt="" />
                </Link>
              </div>
              <div className="swiper-slide client-item flex justify-center">
                <Link href="/" aria-label="partner">
                  <img src="/images/home-one-client-6.webp" alt="" />
                </Link>
              </div>
              <div className="swiper-slide client-item flex justify-center">
                <Link href="/" aria-label="partner">
                  <img src="/images/home-one-client-7.webp" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="home-one-about">
        <div className="home-one-about-wrapper w-full pb-[60px] xl:pb-[153px]">
          <div className="theme-container mx-auto">
            <div className="relative grid w-full grid-cols-1 gap-10 md:items-center md:gap-[130px] xl:grid-cols-2">
              <div className="about-thumbnil-area w-full">
                <div
                  data-aos="fade-right"
                  className="relative left-0 top-0 w-full lg:-left-16 lg:w-[682px] xl:absolute"
                >
                  <div id="about-shape-mouse-anim">
                    <div data-depth="0.20" className="layer">
                      <div data-aos="fade-right" className="thumbnil-wrapper hidden md:block">
                        <img src="/images/home-one-about-thumb-shape.webp" alt="" />
                      </div>
                    </div>
                  </div>
                  <div data-aos="fade-right" className="thumbnil-main -bottom-16 left-0 w-full md:absolute">
                    <div className="flex w-full justify-center">
                      <img
                        src="/images/home-one-about-thumb-main.webp"
                        alt=""
                        className="overflow-hidden rounded-[20px]"
                      />
                    </div>
                  </div>
                  <div className="absolute left-0 top-0 hidden h-[550px] w-full md:block">
                    <div id="home-one-about-mouse-anim" className="h-full">
                      <div className="layer absolute left-2/3 top-36" data-depth="0.30">
                        <div
                          data-aos="fade-left"
                          data-aos-delay={100}
                          className="bg-purple text-pone shadow-small shadow-purple inline-block h-fit rounded-full rounded-bl-none px-[30px] py-2.5 text-white"
                        >
                          Marketing &amp; Growth
                        </div>
                      </div>
                      <div data-depth="0.50" className="layer absolute bottom-0 left-1/2">
                        <div
                          data-aos="fade-left"
                          data-aos-delay={200}
                          className="shadow-style-one flex h-fit w-[296px] items-center justify-between rounded-full bg-white p-[7px] pl-5"
                        >
                          <span className="text-main-black text-nowrap text-sm font-semibold">Trusted Clients</span>
                          <img src="/images/home-one-about-group.webp" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-article-area">
                <span className="section-title-top-tag mb-5">About Company</span>
                <h2 className="md:text-48 text-34 text-main-black mb-[50px] w-full font-semibold md:w-[80%] xl:w-full">
                  Digital Transforming Brands, Elevating Reach Crafting Success
                </h2>
                <p className="text-paragraph mb-[50px]">
                  Defined by digital dynamism, our digital marketing agency emerges as a beacon of innovation and
                  strategic prowess.
                </p>
                <ul className="mb-[50px] flex flex-wrap gap-5 md:gap-[30px]">
                  <li className="text-purple bg-main-gray flex items-center space-x-2.5 rounded-full border border-[#e7e3fa] px-5 py-3 font-medium leading-none">
                    <span>
                      <svg width={18} height={13} viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.751 0.287391C17.3457 0.749891 17.4528 1.60687 16.9903 2.20151L9.70279 11.5712C8.56844 13.0296 6.43472 13.2189 5.06137 11.9829L0.451552 7.83405C-0.108394 7.3301 -0.153786 6.46764 0.350164 5.90769C0.854115 5.34775 1.71657 5.30236 2.27652 5.80631L6.88634 9.95514C7.08253 10.1317 7.38735 10.1047 7.5494 9.89633L14.8369 0.526657C15.2994 -0.0679854 16.1564 -0.175108 16.751 0.287391Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <span>Transform &amp; businesses</span>
                  </li>
                  <li className="text-purple bg-main-gray flex items-center space-x-2.5 rounded-full border border-[#e7e3fa] px-5 py-3 font-medium leading-none">
                    <span>
                      <svg width={18} height={13} viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.751 0.287391C17.3457 0.749891 17.4528 1.60687 16.9903 2.20151L9.70279 11.5712C8.56844 13.0296 6.43472 13.2189 5.06137 11.9829L0.451552 7.83405C-0.108394 7.3301 -0.153786 6.46764 0.350164 5.90769C0.854115 5.34775 1.71657 5.30236 2.27652 5.80631L6.88634 9.95514C7.08253 10.1317 7.38735 10.1047 7.5494 9.89633L14.8369 0.526657C15.2994 -0.0679854 16.1564 -0.175108 16.751 0.287391Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <span>Unified product catalog</span>
                  </li>
                  <li className="text-purple bg-main-gray flex items-center space-x-2.5 rounded-full border border-[#e7e3fa] px-5 py-3 font-medium leading-none">
                    <span>
                      <svg width={18} height={13} viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.751 0.287391C17.3457 0.749891 17.4528 1.60687 16.9903 2.20151L9.70279 11.5712C8.56844 13.0296 6.43472 13.2189 5.06137 11.9829L0.451552 7.83405C-0.108394 7.3301 -0.153786 6.46764 0.350164 5.90769C0.854115 5.34775 1.71657 5.30236 2.27652 5.80631L6.88634 9.95514C7.08253 10.1317 7.38735 10.1047 7.5494 9.89633L14.8369 0.526657C15.2994 -0.0679854 16.1564 -0.175108 16.751 0.287391Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <span>All-in-one SaaS solution</span>
                  </li>
                  <li className="text-purple bg-main-gray flex items-center space-x-2.5 rounded-full border border-[#e7e3fa] px-5 py-3 font-medium leading-none">
                    <span>
                      <svg width={18} height={13} viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.751 0.287391C17.3457 0.749891 17.4528 1.60687 16.9903 2.20151L9.70279 11.5712C8.56844 13.0296 6.43472 13.2189 5.06137 11.9829L0.451552 7.83405C-0.108394 7.3301 -0.153786 6.46764 0.350164 5.90769C0.854115 5.34775 1.71657 5.30236 2.27652 5.80631L6.88634 9.95514C7.08253 10.1317 7.38735 10.1047 7.5494 9.89633L14.8369 0.526657C15.2994 -0.0679854 16.1564 -0.175108 16.751 0.287391Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <span>Wide largest companies</span>
                  </li>
                </ul>
                <Link href="blog.html">
                  <div className="home-two-btn-bg bg-blue-sass border-blue-sass group inline-flex py-3">
                    <span className="group-hover:text-blue-sass font-inter relative z-10 text-base font-semibold text-white transition-all duration-300">
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="fun-fact">
        <div className="fun-fact-wrapper w-full pb-[60px] xl:pb-[130px]">
          <div className="theme-container mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-[155px]">
              <div className="w-full">
                <span className="section-title-top-tag mb-5">Our Fun Fact</span>
                <h2 className="md:text-48 text-34 text-main-black mb-[50px] font-semibold">
                  We worked with diverse clients and industries.
                </h2>
                <p className="text-paragraph border-purple mb-[40px] border-l-[3px] pl-5">
                  Defined by digital dynamism, our digital marketing agency emerges beacon of innovation and strategic
                  prowess.
                </p>
                <Link href="/">
                  <div className="flex h-[56px] w-[182px] items-center justify-center rounded-full border border-[#e7e3fa]">
                    <div className="text-purple flex items-center space-x-2.5">
                      <span className="text-pone"> Learn More </span>
                      <span>
                        <svg width={7} height={12} viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M1 10.5L4.79289 6.70711C5.12623 6.37377 5.29289 6.20711 5.29289 6C5.29289 5.79289 5.12623 5.62623 4.79289 5.29289L1 1.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="relative mt-10 flex w-full flex-wrap gap-5 xl:mt-0 xl:flex-none">
                <div className="bg-main-gray group left-20 top-0 h-[178px] w-[300px] overflow-hidden rounded-[20px] border border-[#e7e3fa] xl:absolute">
                  <div className="relative flex items-center justify-center p-8">
                    <div className="relative z-10 flex flex-col items-center justify-between space-y-5">
                      <p
                        className="md:text-48 text-34 text-main-black text-center font-semibold"
                        data-scroll-qs="scroll"
                        data-count-qs={15}
                        data-type-qs="K+"
                        data-speed-qs={600}
                      />
                      <hr className="border-purple w-[80px] border-[3px]" />
                      <p className="text-paragraph text-18 text-center font-semibold">Project Complete</p>
                    </div>
                    <div className="absolute left-0 top-0 h-full w-full opacity-100 transition-all duration-300 ease-in-out group-hover:opacity-100 xl:opacity-0">
                      <img src="/images/home-one-ff-item-shape.webp" className="h-full w-full" alt="" />
                    </div>
                  </div>
                </div>
                <div className="bg-main-gray group bottom-5 left-0 h-[178px] w-[300px] overflow-hidden rounded-[20px] border border-[#e7e3fa] xl:absolute">
                  <div className="relative flex items-center justify-center p-8">
                    <div className="relative z-10 flex flex-col items-center justify-between space-y-5">
                      <p
                        data-scroll-qs="scroll"
                        data-count-qs={28}
                        data-type-qs="K+"
                        data-speed-qs={600}
                        className="md:text-48 text-34 text-main-black text-center font-semibold"
                      />
                      <hr className="border-purple w-[80px] border-[3px]" />
                      <p className="text-paragraph text-18 text-center font-semibold">Satisfactions Customer</p>
                    </div>
                    <div className="absolute left-0 top-0 h-full w-full opacity-100 transition-all duration-300 ease-in-out group-hover:opacity-100 xl:opacity-0">
                      <img src="/images/home-one-ff-item-shape.webp" className="h-full w-full" alt="" />
                    </div>
                  </div>
                </div>
                <div className="bg-main-gray group -right-12 bottom-20 h-[178px] w-[300px] overflow-hidden rounded-[20px] border border-[#e7e3fa] xl:absolute">
                  <div className="relative flex items-center justify-center p-8">
                    <div className="relative z-10 flex flex-col items-center justify-between space-y-5">
                      <p
                        data-scroll-qs="scroll"
                        data-count-qs={10}
                        data-type-qs="+"
                        data-speed-qs={600}
                        className="md:text-48 text-34 text-main-black text-center font-semibold"
                      />
                      <hr className="border-purple w-[80px] border-[3px]" />
                      <p className="text-paragraph text-18 text-center font-semibold">Years Of Experience</p>
                    </div>
                    <div className="absolute left-0 top-0 h-full w-full opacity-100 transition-all duration-300 ease-in-out group-hover:opacity-100">
                      <img src="/images/home-one-ff-item-shape.webp" className="h-full w-full" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="service">
        <div className="service-section-wrapper relative w-full pb-[60px] xl:pb-[130px]">
          <div className="theme-container relative z-10 mx-auto">
            <div className="bg-main-gray w-full rounded-[10px] border border-[#e7e3fa] px-5 py-[60px] md:px-10 xl:px-[80px] xl:py-[130px]">
              <div className="flex flex-col items-center">
                <span className="text-purple mb-5 inline-block rounded-full border border-[#e7e3fa] bg-white px-5 py-3 font-medium leading-none">
                  Explore Services
                </span>
                <h2 className="md:text-48 text-34 text-main-black mb-[50px] w-full text-center font-semibold lg:w-[685px]">
                  High Impact Marketing Services to grow your business
                </h2>
              </div>
              <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-[70px]">
                <div
                  data-aos="zoom-in-left"
                  className="hover:shadow-common hover:border-purple common-transition group flex flex-col items-center justify-between space-y-[30px] rounded-[10px] border border-transparent bg-white px-8 py-10"
                >
                  <div className="group-hover:bg-purple common-transition text-purple flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#e7e3fa] group-hover:text-white">
                    <span>
                      <svg
                        width={30}
                        height={30}
                        className="fill-current"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22.8125 13.125C22.8125 18.4753 18.4753 22.8125 13.125 22.8125C7.77474 22.8125 3.4375 18.4753 3.4375 13.125C3.4375 7.77474 7.77474 3.4375 13.125 3.4375C18.4753 3.4375 22.8125 7.77474 22.8125 13.125ZM13.125 24.6875C19.5108 24.6875 24.6875 19.5108 24.6875 13.125C24.6875 6.73921 19.5108 1.5625 13.125 1.5625C6.73921 1.5625 1.5625 6.73921 1.5625 13.125C1.5625 19.5108 6.73921 24.6875 13.125 24.6875ZM26.7771 26.7771C25.8132 27.741 24.2505 27.741 23.2866 26.7771L20.9454 24.436C22.3081 23.492 23.492 22.3081 24.436 20.9454L26.7771 23.2865C27.741 24.2504 27.741 25.8132 26.7771 26.7771Z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div>
                    <p className="text-20 text-main-black mb-4 text-center font-semibold">Keyword Research</p>
                    <p className="text-paragraph text-center">
                      Defined by digital dynamism, our digital marketing agency emerges as a beacon of innovation
                    </p>
                  </div>
                </div>
                <div
                  data-aos="zoom-in-left"
                  data-aos-delay={100}
                  className="hover:shadow-common hover:border-purple common-transition group flex flex-col items-center justify-between space-y-[30px] rounded-[10px] border border-transparent bg-white px-8 py-10"
                >
                  <div className="group-hover:bg-purple common-transition text-purple flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#e7e3fa] group-hover:text-white">
                    <span>
                      <svg
                        className="fill-current"
                        width={28}
                        height={28}
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1.5 15.5H0.5V17.5H1.5V15.5ZM26.5 17.5H27.5V15.5H26.5V17.5ZM10.25 25.5C9.69771 25.5 9.25 25.9477 9.25 26.5C9.25 27.0523 9.69771 27.5 10.25 27.5V25.5ZM17.75 27.5C18.3023 27.5 18.75 27.0523 18.75 26.5C18.75 25.9477 18.3023 25.5 17.75 25.5V27.5ZM15 21.5C15 20.9477 14.5523 20.5 14 20.5C13.4477 20.5 13 20.9477 13 21.5H15ZM5.25 2.5H22.75V0.5H5.25V2.5ZM25.5 5.25V17.75H27.5V5.25H25.5ZM22.75 20.5H5.25V22.5H22.75V20.5ZM2.5 17.75V5.25H0.5V17.75H2.5ZM5.25 20.5C3.73122 20.5 2.5 19.2688 2.5 17.75H0.5C0.5 20.3734 2.62665 22.5 5.25 22.5V20.5ZM25.5 17.75C25.5 19.2688 24.2688 20.5 22.75 20.5V22.5C25.3734 22.5 27.5 20.3734 27.5 17.75H25.5ZM22.75 2.5C24.2688 2.5 25.5 3.73122 25.5 5.25H27.5C27.5 2.62665 25.3734 0.5 22.75 0.5V2.5ZM5.25 0.5C2.62665 0.5 0.5 2.62665 0.5 5.25H2.5C2.5 3.73122 3.73122 2.5 5.25 2.5V0.5ZM1.5 17.5H26.5V15.5H1.5V17.5ZM10.25 27.5H14V25.5H10.25V27.5ZM14 27.5H17.75V25.5H14V27.5ZM15 26.5V21.5H13V26.5H15Z" />
                      </svg>
                    </span>
                  </div>
                  <div>
                    <p className="text-20 text-main-black mb-4 text-center font-semibold">Website Optimization</p>
                    <p className="text-paragraph text-center">
                      Defined by digital dynamism, our digital marketing agency emerges as a beacon of innovation
                    </p>
                  </div>
                </div>
                <div
                  data-aos="zoom-in-left"
                  data-aos-delay={200}
                  className="hover:shadow-common hover:border-purple common-transition group flex flex-col items-center justify-between space-y-[30px] rounded-[10px] border border-transparent bg-white px-8 py-10"
                >
                  <div className="group-hover:bg-purple common-transition text-purple flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#e7e3fa] group-hover:text-white">
                    <span>
                      <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M2.5 7.75V3.5C2.5 2.94772 2.94772 2.5 3.5 2.5H7.75C8.30228 2.5 8.75 2.94772 8.75 3.5V7.75C8.75 8.30228 8.30228 8.75 7.75 8.75H3.5C2.94772 8.75 2.5 8.30228 2.5 7.75Z"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21.25 7.75V3.5C21.25 2.94772 21.6977 2.5 22.25 2.5H26.5C27.0523 2.5 27.5 2.94772 27.5 3.5V7.75C27.5 8.30228 27.0523 8.75 26.5 8.75H22.25C21.6977 8.75 21.25 8.30228 21.25 7.75Z"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21.25 26.5V22.25C21.25 21.6977 21.6977 21.25 22.25 21.25H26.5C27.0523 21.25 27.5 21.6977 27.5 22.25V26.5C27.5 27.0523 27.0523 27.5 26.5 27.5H22.25C21.6977 27.5 21.25 27.0523 21.25 26.5Z"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.5 26.5V22.25C2.5 21.6977 2.94772 21.25 3.5 21.25H7.75C8.30228 21.25 8.75 21.6977 8.75 22.25V26.5C8.75 27.0523 8.30228 27.5 7.75 27.5H3.5C2.94772 27.5 2.5 27.0523 2.5 26.5Z"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path d="M12.5 16.25H17.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                        <path
                          d="M11.25 18.75L15 10L18.75 18.75"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.75 5.625H21.25M24.375 8.75V21.25M21.25 24.375H8.75M5.625 21.25V8.75"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div>
                    <p className="text-20 text-main-black mb-4 text-center font-semibold">Content Marketing</p>
                    <p className="text-paragraph text-center">
                      Defined by digital dynamism, our digital marketing agency emerges as a beacon of innovation
                    </p>
                  </div>
                </div>
                <div
                  data-aos="zoom-in-left"
                  data-aos-delay={300}
                  className="hover:shadow-common hover:border-purple common-transition group flex flex-col items-center justify-between space-y-[30px] rounded-[10px] border border-transparent bg-white px-8 py-10"
                >
                  <div className="group-hover:bg-purple common-transition text-purple flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#e7e3fa] group-hover:text-white">
                    <span>
                      <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M25 2.5L26.6161 4.11612C27.1043 4.60427 27.1043 5.39573 26.6161 5.88388L25 7.5M20 5H26.25M7.5 16.25L10.25 18.3125C11.5833 19.3125 13.4167 19.3125 14.75 18.3125L17.5 16.25M6.25 27.5H18.75C20.8211 27.5 22.5 25.8211 22.5 23.75V13.75C22.5 11.6789 20.8211 10 18.75 10H6.25C4.17893 10 2.5 11.6789 2.5 13.75V23.75C2.5 25.8211 4.17893 27.5 6.25 27.5Z"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div>
                    <p className="text-20 text-main-black mb-4 text-center font-semibold">Email Marketing</p>
                    <p className="text-paragraph text-center">
                      Defined by digital dynamism, our digital marketing agency emerges as a beacon of innovation
                    </p>
                  </div>
                </div>
                <div
                  data-aos="zoom-in-left"
                  data-aos-delay={400}
                  className="hover:shadow-common hover:border-purple common-transition group flex flex-col items-center justify-between space-y-[30px] rounded-[10px] border border-transparent bg-white px-8 py-10"
                >
                  <div className="group-hover:bg-purple common-transition text-purple flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#e7e3fa] group-hover:text-white">
                    <span>
                      <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M4 12.75H24M4 12.75C2.61929 12.75 1.5 11.6307 1.5 10.25V9C1.5 7.61929 2.61929 6.5 4 6.5H24C25.3807 6.5 26.5 7.61929 26.5 9V10.25C26.5 11.6307 25.3807 12.75 24 12.75M4 12.75L4 24C4 25.3807 5.11929 26.5 6.5 26.5H21.5C22.8807 26.5 24 25.3807 24 24V12.75M14 6.5H19C20.3807 6.5 21.5 5.38071 21.5 4C21.5 2.61929 20.3807 1.5 19 1.5C16.2386 1.5 14 3.73858 14 6.5ZM14 6.5H9C7.61929 6.5 6.5 5.38071 6.5 4C6.5 2.61929 7.61929 1.5 9 1.5C11.7614 1.5 14 3.73858 14 6.5ZM14 6.5V26.5"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div>
                    <p className="text-20 text-main-black mb-4 text-center font-semibold">Social Media Marketing</p>
                    <p className="text-paragraph text-center">
                      Defined by digital dynamism, our digital marketing agency emerges as a beacon of innovation
                    </p>
                  </div>
                </div>
                <div
                  data-aos="zoom-in-left"
                  data-aos-delay={500}
                  className="hover:shadow-common hover:border-purple common-transition group flex flex-col items-center justify-between space-y-[30px] rounded-[10px] border border-transparent bg-white px-8 py-10"
                >
                  <div className="group-hover:bg-purple common-transition text-purple flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#e7e3fa] group-hover:text-white">
                    <span>
                      <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M8.75 8.75H21.25M8.75 15H15M20 21.25L23.75 27.5M10 21.25L6.25 27.5M15 21.25V25M23.75 2.5L6.25 2.5C4.17893 2.5 2.5 4.17893 2.5 6.25L2.5 17.5C2.5 19.5711 4.17893 21.25 6.25 21.25L23.75 21.25C25.8211 21.25 27.5 19.5711 27.5 17.5L27.5 6.25C27.5 4.17893 25.8211 2.5 23.75 2.5Z"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div>
                    <p className="text-20 text-main-black mb-4 text-center font-semibold">Website Development</p>
                    <p className="text-paragraph text-center">
                      Defined by digital dynamism, our digital marketing agency emerges as a beacon of innovation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-1/3 flex justify-between">
            <div id="line-lottie" />
            <div className="rotate-180 transform" id="line-lottie2" />
          </div>
        </div>
      </section>
      <section id="working-process">
        <div className="working-process-section-wrapper w-full pb-[60px] xl:pb-[130px]">
          <div className="theme-container mx-auto">
            <div className="w-full grid-cols-12 xl:grid">
              <div className="col-span-5">
                <div className="title-area">
                  <span className="section-title-top-tag mb-5">Our Fun Fact</span>
                  <h2 className="md:text-48 text-34 text-main-black mb-[50px] font-semibold">
                    Efficiency in Motion Navigating the Working Process
                  </h2>
                  <div
                    id="progress-wrapper"
                    className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1"
                  >
                    <div
                      data-aos="fade-up"
                      className="bg-main-gray group relative w-full overflow-hidden rounded-[20px] border border-[#e7e3fa] px-10 py-[30px]"
                    >
                      <div className="relative z-10 flex flex-col space-y-5">
                        <div className="border-purple flex h-10 w-10 items-center justify-center rounded-full border-2 bg-white">
                          <span className="text-purple font-semibold">01</span>
                        </div>
                        <div>
                          <p className="text-20 text-main-black mb-4 font-semibold">Discover &amp; Analysis</p>
                          <p className="text-paragraph">
                            Discover &amp; Analysis" encapsulates the crucial initial stages of any project or venture.
                            During this phase, teams
                          </p>
                        </div>
                      </div>
                      <div className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">
                        <img src="/images/home-one-ff-item-shape-2.webp" alt="" className="h-full w-full" />
                      </div>
                    </div>
                    <div
                      data-aos-delay={100}
                      data-aos="fade-up"
                      className="bg-main-gray group relative w-full overflow-hidden rounded-[20px] border border-[#e7e3fa] px-10 py-[30px]"
                    >
                      <div className="relative z-10 flex flex-col space-y-5">
                        <div className="border-purple flex h-10 w-10 items-center justify-center rounded-full border-2 bg-white">
                          <span className="text-purple font-semibold">02</span>
                        </div>
                        <div>
                          <p className="text-20 text-main-black mb-4 font-semibold">Strategy Development</p>
                          <p className="text-paragraph">
                            Discover &amp; Analysis" encapsulates the crucial initial stages of any project or venture.
                            During this phase, teams
                          </p>
                        </div>
                      </div>
                      <div className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">
                        <img src="/images/home-one-ff-item-shape-2.webp" alt="" className="h-full w-full" />
                      </div>
                    </div>
                    <div
                      data-aos-delay={200}
                      data-aos="fade-up"
                      className="bg-main-gray group relative w-full overflow-hidden rounded-[20px] border border-[#e7e3fa] px-10 py-[30px]"
                    >
                      <div className="relative z-10 flex flex-col space-y-5">
                        <div className="border-purple flex h-10 w-10 items-center justify-center rounded-full border-2 bg-white">
                          <span className="text-purple font-semibold">03</span>
                        </div>
                        <div>
                          <p className="text-20 text-main-black mb-4 font-semibold">Launch &amp; Execution</p>
                          <p className="text-paragraph">
                            Discover &amp; Analysis" encapsulates the crucial initial stages of any project or venture.
                            During this phase, teams
                          </p>
                        </div>
                      </div>
                      <div className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">
                        <img src="/images/home-one-ff-item-shape-2.webp" alt="" className="h-full w-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-7">
                <div className="relative flex h-full w-full justify-center xl:justify-end">
                  <div className="right-0 h-full xl:absolute">
                    <div className="sticky top-[155px]">
                      <div id="home-working-cursor-anim" className="relative">
                        <div data-depth="0.30" className="layer z-10 h-fit">
                          <span className="bg-purple shadow-small shadow-purple text-pone hidden rounded-full rounded-br-none px-[30px] py-2.5 text-white md:inline-block">
                            Sales and marketing
                          </span>
                        </div>
                        <div data-depth="0.40" className="layer z-10 h-fit">
                          <div className="hidden md:inline-block">
                            <img src="/images/teer.webp" alt="" className="drop-shadow-xl" />
                          </div>
                        </div>
                        <div data-depth="0.20" className="layer h-fit">
                          <span className="bg-blue-sass text-pone shadow-small shadow-blue-sass hidden rounded-full rounded-br-none px-[30px] py-2.5 text-white md:inline-block">
                            Marketing &amp; Growth
                          </span>
                        </div>
                      </div>
                      <div id="progressThumbHeight">
                        <img src="/images/working-process-thumb.webp" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonial">
        <div
          style={{
            backgroundImage: 'url(/images/testimonial-bg.webp)',
          }}
          className="testimoial-section-wrapper w-full bg-cover bg-no-repeat pb-[120px] pt-[60px] xl:py-[130px]"
        >
          <div className="theme-container relative z-10 mx-auto">
            <div className="flex flex-col items-center">
              <span className="bg-purple mb-5 inline-block rounded-full px-5 py-3 font-medium leading-none text-white">
                Our Testimonials
              </span>
              <h2 className="md:text-48 text-34 mb-[70px] text-center font-semibold text-white">
                Customer Say About Our Services
              </h2>
            </div>
            <div className="w-full grid-cols-12 items-stretch gap-[30px] lg:grid">
              <div className="col-span-4">
                <div className="relative h-[401px] w-full">
                  <img
                    src="/images/testimonial-thumb.webp"
                    alt=""
                    className="h-full w-full overflow-hidden rounded-[20px] object-cover object-top"
                  />
                  <div className="absolute -bottom-5 left-0 w-full pl-1 sm:px-[56px]">
                    <div className="shadow-style-one flex w-full items-center justify-between rounded-full bg-white p-[7px] pl-5">
                      <span className="text-main-black text-nowrap text-sm font-semibold">Trusted Clients</span>
                      <img src="/images/home-one-about-group.webp" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative col-span-8 mt-20 h-full lg:mt-0">
                <div className="relative h-full w-full">
                  <div className="testimonial-swiper h-full w-full">
                    <div className="swiper-wrapper h-full w-full">
                      <div className="swiper-slide h-full w-full">
                        <div className="bg-purple relative h-full w-full rounded-[20px] py-10">
                          <div className="shape absolute left-0 top-10">
                            <img src="/images/testimonial-shape.webp" alt="" />
                          </div>
                          <div className="relative z-10">
                            <div className="mb-10 flex justify-between pl-5 md:pl-[70px]">
                              <div>
                                <img src="/images/quotation.webp" alt="" />
                              </div>
                              <div className="relative hidden h-[60px] w-[422px] justify-center md:flex">
                                <div className="absolute left-0 top-0 flex h-full w-full">
                                  <div className="h-full w-1/2 bg-gradient-to-l from-white opacity-30" />
                                  <div className="h-full w-1/2 bg-gradient-to-r from-white opacity-30" />
                                </div>
                                <div className="flex items-center space-x-5">
                                  <span className="text-20 font-semibold text-white">Quality Service</span>
                                  <div className="flex items-center space-x-[11px]">
                                    <span>
                                      <svg
                                        width={18}
                                        height={18}
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M7.22953 1.14427C7.95375 -0.381422 10.0462 -0.381425 10.7705 1.14427L12.0221 3.78106C12.3097 4.38691 12.8656 4.80684 13.5087 4.904L16.3074 5.32682C17.9268 5.57148 18.5734 7.64059 17.4016 8.82817L15.3764 10.8806C14.9111 11.3522 14.6988 12.0317 14.8086 12.6976L15.2867 15.5957C15.5633 17.2726 13.8704 18.5514 12.422 17.7596L9.91874 16.3913C9.34357 16.0769 8.65643 16.0769 8.08125 16.3913L5.57799 17.7596C4.12955 18.5514 2.43668 17.2726 2.71331 15.5957L3.19139 12.6976C3.30124 12.0317 3.0889 11.3522 2.62357 10.8806L0.598388 8.82818C-0.57342 7.64059 0.0731955 5.57148 1.69259 5.32682L4.49134 4.904C5.1344 4.80684 5.69031 4.38691 5.9779 3.78106L7.22953 1.14427Z"
                                          fill="white"
                                        />
                                      </svg>
                                    </span>
                                    <span>
                                      <svg
                                        width={18}
                                        height={18}
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M7.22953 1.14427C7.95375 -0.381422 10.0462 -0.381425 10.7705 1.14427L12.0221 3.78106C12.3097 4.38691 12.8656 4.80684 13.5087 4.904L16.3074 5.32682C17.9268 5.57148 18.5734 7.64059 17.4016 8.82817L15.3764 10.8806C14.9111 11.3522 14.6988 12.0317 14.8086 12.6976L15.2867 15.5957C15.5633 17.2726 13.8704 18.5514 12.422 17.7596L9.91874 16.3913C9.34357 16.0769 8.65643 16.0769 8.08125 16.3913L5.57799 17.7596C4.12955 18.5514 2.43668 17.2726 2.71331 15.5957L3.19139 12.6976C3.30124 12.0317 3.0889 11.3522 2.62357 10.8806L0.598388 8.82818C-0.57342 7.64059 0.0731955 5.57148 1.69259 5.32682L4.49134 4.904C5.1344 4.80684 5.69031 4.38691 5.9779 3.78106L7.22953 1.14427Z"
                                          fill="white"
                                        />
                                      </svg>
                                    </span>
                                    <span>
                                      <svg
                                        width={18}
                                        height={18}
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M7.22953 1.14427C7.95375 -0.381422 10.0462 -0.381425 10.7705 1.14427L12.0221 3.78106C12.3097 4.38691 12.8656 4.80684 13.5087 4.904L16.3074 5.32682C17.9268 5.57148 18.5734 7.64059 17.4016 8.82817L15.3764 10.8806C14.9111 11.3522 14.6988 12.0317 14.8086 12.6976L15.2867 15.5957C15.5633 17.2726 13.8704 18.5514 12.422 17.7596L9.91874 16.3913C9.34357 16.0769 8.65643 16.0769 8.08125 16.3913L5.57799 17.7596C4.12955 18.5514 2.43668 17.2726 2.71331 15.5957L3.19139 12.6976C3.30124 12.0317 3.0889 11.3522 2.62357 10.8806L0.598388 8.82818C-0.57342 7.64059 0.0731955 5.57148 1.69259 5.32682L4.49134 4.904C5.1344 4.80684 5.69031 4.38691 5.9779 3.78106L7.22953 1.14427Z"
                                          fill="white"
                                        />
                                      </svg>
                                    </span>
                                    <span>
                                      <svg
                                        width={18}
                                        height={18}
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M7.22953 1.14427C7.95375 -0.381422 10.0462 -0.381425 10.7705 1.14427L12.0221 3.78106C12.3097 4.38691 12.8656 4.80684 13.5087 4.904L16.3074 5.32682C17.9268 5.57148 18.5734 7.64059 17.4016 8.82817L15.3764 10.8806C14.9111 11.3522 14.6988 12.0317 14.8086 12.6976L15.2867 15.5957C15.5633 17.2726 13.8704 18.5514 12.422 17.7596L9.91874 16.3913C9.34357 16.0769 8.65643 16.0769 8.08125 16.3913L5.57799 17.7596C4.12955 18.5514 2.43668 17.2726 2.71331 15.5957L3.19139 12.6976C3.30124 12.0317 3.0889 11.3522 2.62357 10.8806L0.598388 8.82818C-0.57342 7.64059 0.0731955 5.57148 1.69259 5.32682L4.49134 4.904C5.1344 4.80684 5.69031 4.38691 5.9779 3.78106L7.22953 1.14427Z"
                                          fill="white"
                                        />
                                      </svg>
                                    </span>
                                    <span>
                                      <svg
                                        width={18}
                                        height={18}
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M7.22953 1.14427C7.95375 -0.381422 10.0462 -0.381425 10.7705 1.14427L12.0221 3.78106C12.3097 4.38691 12.8656 4.80684 13.5087 4.904L16.3074 5.32682C17.9268 5.57148 18.5734 7.64059 17.4016 8.82817L15.3764 10.8806C14.9111 11.3522 14.6988 12.0317 14.8086 12.6976L15.2867 15.5957C15.5633 17.2726 13.8704 18.5514 12.422 17.7596L9.91874 16.3913C9.34357 16.0769 8.65643 16.0769 8.08125 16.3913L5.57799 17.7596C4.12955 18.5514 2.43668 17.2726 2.71331 15.5957L3.19139 12.6976C3.30124 12.0317 3.0889 11.3522 2.62357 10.8806L0.598388 8.82818C-0.57342 7.64059 0.0731955 5.57148 1.69259 5.32682L4.49134 4.904C5.1344 4.80684 5.69031 4.38691 5.9779 3.78106L7.22953 1.14427Z"
                                          fill="white"
                                        />
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="px-5 md:px-[70px]">
                              <p className="text-24 mb-10 line-clamp-3 font-semibold text-white">
                                In this ever-evolving digital era, understand the significance of staying ahead. Through
                                our blog invite explore the dynamic world of IT with us decoding algorithms to
                                unraveling
                              </p>
                              <div className="flex items-center space-x-5">
                                <div className="h-[56px] w-[56px] overflow-hidden rounded-full">
                                  <img
                                    src="/images/testimonial-p1.webp"
                                    alt=""
                                    className="h-full w-full object-cover"
                                  />
                                </div>
                                <div>
                                  <p className="text-18 font-semibold text-white">Matthew C. Lansberry</p>
                                  <p className="text-sm font-medium text-white">CEO &amp; Founder</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide h-full w-full">
                        <div className="bg-purple relative h-full w-full rounded-[20px] py-10">
                          <div className="shape absolute left-0 top-10">
                            <img src="/images/testimonial-shape.webp" alt="" />
                          </div>
                          <div className="relative z-10">
                            <div className="mb-10 flex justify-between pl-5 md:pl-[70px]">
                              <div>
                                <img src="/images/quotation.webp" alt="" />
                              </div>
                              <div className="relative hidden h-[60px] w-[422px] justify-center md:flex">
                                <div className="absolute left-0 top-0 flex h-full w-full">
                                  <div className="h-full w-1/2 bg-gradient-to-l from-white opacity-30" />
                                  <div className="h-full w-1/2 bg-gradient-to-r from-white opacity-30" />
                                </div>
                                <div className="flex items-center space-x-5">
                                  <span className="text-20 font-semibold text-white">Quality Service</span>
                                  <div className="flex items-center space-x-[11px]">
                                    <span>
                                      <svg
                                        width={18}
                                        height={18}
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M7.22953 1.14427C7.95375 -0.381422 10.0462 -0.381425 10.7705 1.14427L12.0221 3.78106C12.3097 4.38691 12.8656 4.80684 13.5087 4.904L16.3074 5.32682C17.9268 5.57148 18.5734 7.64059 17.4016 8.82817L15.3764 10.8806C14.9111 11.3522 14.6988 12.0317 14.8086 12.6976L15.2867 15.5957C15.5633 17.2726 13.8704 18.5514 12.422 17.7596L9.91874 16.3913C9.34357 16.0769 8.65643 16.0769 8.08125 16.3913L5.57799 17.7596C4.12955 18.5514 2.43668 17.2726 2.71331 15.5957L3.19139 12.6976C3.30124 12.0317 3.0889 11.3522 2.62357 10.8806L0.598388 8.82818C-0.57342 7.64059 0.0731955 5.57148 1.69259 5.32682L4.49134 4.904C5.1344 4.80684 5.69031 4.38691 5.9779 3.78106L7.22953 1.14427Z"
                                          fill="white"
                                        />
                                      </svg>
                                    </span>
                                    <span>
                                      <svg
                                        width={18}
                                        height={18}
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M7.22953 1.14427C7.95375 -0.381422 10.0462 -0.381425 10.7705 1.14427L12.0221 3.78106C12.3097 4.38691 12.8656 4.80684 13.5087 4.904L16.3074 5.32682C17.9268 5.57148 18.5734 7.64059 17.4016 8.82817L15.3764 10.8806C14.9111 11.3522 14.6988 12.0317 14.8086 12.6976L15.2867 15.5957C15.5633 17.2726 13.8704 18.5514 12.422 17.7596L9.91874 16.3913C9.34357 16.0769 8.65643 16.0769 8.08125 16.3913L5.57799 17.7596C4.12955 18.5514 2.43668 17.2726 2.71331 15.5957L3.19139 12.6976C3.30124 12.0317 3.0889 11.3522 2.62357 10.8806L0.598388 8.82818C-0.57342 7.64059 0.0731955 5.57148 1.69259 5.32682L4.49134 4.904C5.1344 4.80684 5.69031 4.38691 5.9779 3.78106L7.22953 1.14427Z"
                                          fill="white"
                                        />
                                      </svg>
                                    </span>
                                    <span>
                                      <svg
                                        width={18}
                                        height={18}
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M7.22953 1.14427C7.95375 -0.381422 10.0462 -0.381425 10.7705 1.14427L12.0221 3.78106C12.3097 4.38691 12.8656 4.80684 13.5087 4.904L16.3074 5.32682C17.9268 5.57148 18.5734 7.64059 17.4016 8.82817L15.3764 10.8806C14.9111 11.3522 14.6988 12.0317 14.8086 12.6976L15.2867 15.5957C15.5633 17.2726 13.8704 18.5514 12.422 17.7596L9.91874 16.3913C9.34357 16.0769 8.65643 16.0769 8.08125 16.3913L5.57799 17.7596C4.12955 18.5514 2.43668 17.2726 2.71331 15.5957L3.19139 12.6976C3.30124 12.0317 3.0889 11.3522 2.62357 10.8806L0.598388 8.82818C-0.57342 7.64059 0.0731955 5.57148 1.69259 5.32682L4.49134 4.904C5.1344 4.80684 5.69031 4.38691 5.9779 3.78106L7.22953 1.14427Z"
                                          fill="white"
                                        />
                                      </svg>
                                    </span>
                                    <span>
                                      <svg
                                        width={18}
                                        height={18}
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M7.22953 1.14427C7.95375 -0.381422 10.0462 -0.381425 10.7705 1.14427L12.0221 3.78106C12.3097 4.38691 12.8656 4.80684 13.5087 4.904L16.3074 5.32682C17.9268 5.57148 18.5734 7.64059 17.4016 8.82817L15.3764 10.8806C14.9111 11.3522 14.6988 12.0317 14.8086 12.6976L15.2867 15.5957C15.5633 17.2726 13.8704 18.5514 12.422 17.7596L9.91874 16.3913C9.34357 16.0769 8.65643 16.0769 8.08125 16.3913L5.57799 17.7596C4.12955 18.5514 2.43668 17.2726 2.71331 15.5957L3.19139 12.6976C3.30124 12.0317 3.0889 11.3522 2.62357 10.8806L0.598388 8.82818C-0.57342 7.64059 0.0731955 5.57148 1.69259 5.32682L4.49134 4.904C5.1344 4.80684 5.69031 4.38691 5.9779 3.78106L7.22953 1.14427Z"
                                          fill="white"
                                        />
                                      </svg>
                                    </span>
                                    <span>
                                      <svg
                                        width={18}
                                        height={18}
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M7.22953 1.14427C7.95375 -0.381422 10.0462 -0.381425 10.7705 1.14427L12.0221 3.78106C12.3097 4.38691 12.8656 4.80684 13.5087 4.904L16.3074 5.32682C17.9268 5.57148 18.5734 7.64059 17.4016 8.82817L15.3764 10.8806C14.9111 11.3522 14.6988 12.0317 14.8086 12.6976L15.2867 15.5957C15.5633 17.2726 13.8704 18.5514 12.422 17.7596L9.91874 16.3913C9.34357 16.0769 8.65643 16.0769 8.08125 16.3913L5.57799 17.7596C4.12955 18.5514 2.43668 17.2726 2.71331 15.5957L3.19139 12.6976C3.30124 12.0317 3.0889 11.3522 2.62357 10.8806L0.598388 8.82818C-0.57342 7.64059 0.0731955 5.57148 1.69259 5.32682L4.49134 4.904C5.1344 4.80684 5.69031 4.38691 5.9779 3.78106L7.22953 1.14427Z"
                                          fill="white"
                                        />
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="px-5 md:px-[70px]">
                              <p className="text-24 mb-10 line-clamp-3 font-semibold text-white">
                                In this ever-evolving digital era, understand the significance of staying ahead. Through
                                our blog invite explore the dynamic world of IT with us decoding algorithms to
                                unraveling
                              </p>
                              <div className="flex items-center space-x-5">
                                <div className="h-[56px] w-[56px] overflow-hidden rounded-full">
                                  <img
                                    src="/images/testimonial-p2.webp"
                                    alt=""
                                    className="h-full w-full object-cover"
                                  />
                                </div>
                                <div>
                                  <p className="text-18 font-semibold text-white">Matthew C. Lansberry</p>
                                  <p className="text-sm font-medium text-white">CEO &amp; Founder</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -bottom-[60px] z-10 w-full">
                      <div className="flex w-full justify-center">
                        <div className="flex space-x-5">
                          <div>
                            <button
                              type="button"
                              className="bg-purple focus:bg-blue-sass swiper-button-prev flex h-[30px] w-[30px] items-center justify-center rounded-full"
                            >
                              <span>
                                <svg
                                  width={12}
                                  height={10}
                                  viewBox="0 0 12 10"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M4.75 9L1 5.25M1 5.25L4.75 1.5M1 5.25L11 5.25"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </span>
                            </button>
                          </div>
                          <div className="swiper-pagination" />
                          <div>
                            <button
                              type="button"
                              className="bg-purple focus:bg-blue-sass swiper-button-next flex h-[30px] w-[30px] items-center justify-center rounded-full"
                            >
                              <span>
                                <svg
                                  width={12}
                                  height={10}
                                  viewBox="0 0 12 10"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M7.25 9L11 5.25M11 5.25L7.25 1.5M11 5.25L1 5.25"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="blogs">
        <div className="blogs-section-wrapper w-full overflow-hidden py-[60px] xl:pb-[100px] xl:pt-[130px]">
          <div className="theme-container mx-auto">
            <div className="w-full">
              <div className="flex flex-col items-center">
                <span className="section-title-top-tag mb-5">News &amp; Blog</span>
                <h2 className="md:text-48 text-34 text-main-black mb-[60px] text-center font-semibold">
                  Read and explore Our latest news
                </h2>
              </div>
            </div>
            <div className="grid w-full grid-cols-1 gap-[30px] md:grid-cols-2 xl:grid-cols-3">
              <div data-aos="fade-left" className="item group">
                <div
                  style={{
                    backgroundImage: 'url(/images/blogs-1.webp)',
                  }}
                  className="relative mb-[58px] h-[280px] w-full rounded-[15px] bg-cover bg-no-repeat"
                >
                  <div className="absolute -bottom-7 left-0 w-full px-5 lg:px-[50px]">
                    <div className="shadow-small flex w-full items-center justify-between rounded-[10px] bg-white px-[25px] py-[17px]">
                      <span className="text-purple font-semibold">Marketing</span>
                      <div className="h-[5px] w-[5px] rounded-full bg-[#D2A98E]" />
                      <span className="text-paragraph">December 25, 2023</span>
                    </div>
                  </div>
                </div>
                <h2 className="text-22 text-main-black mb-[35px] text-center font-semibold">
                  People The Office Analyzing and Checking Finance Graphs
                </h2>
                <Link href="blog-details.html">
                  <div className="group-hover:border-purple common-transition flex w-full justify-center border-t border-[#f2edff] py-5">
                    <div className="text-paragraph group-hover:text-purple common-transition flex items-center space-x-[7px]">
                      <span className="font-medium">Read More</span>
                      <span>
                        <svg width={7} height={11} viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M1 10L4.79289 6.20711C5.12623 5.87377 5.29289 5.70711 5.29289 5.5C5.29289 5.29289 5.12623 5.12623 4.79289 4.79289L1 1"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
              <div data-aos="fade-left" data-aos-delay={100} className="item group">
                <div
                  style={{
                    backgroundImage: 'url(/images/blogs-2.webp)',
                  }}
                  className="relative mb-[58px] h-[280px] w-full rounded-[15px] bg-cover bg-no-repeat"
                >
                  <div className="absolute -bottom-7 left-0 w-full px-5 lg:px-[50px]">
                    <div className="shadow-small flex w-full items-center justify-between rounded-[10px] bg-white px-[25px] py-[17px]">
                      <span className="text-purple font-semibold">Research</span>
                      <div className="h-[5px] w-[5px] rounded-full bg-[#D2A98E]" />
                      <span className="text-paragraph">December 25, 2023</span>
                    </div>
                  </div>
                </div>
                <h2 className="text-22 text-main-black mb-[35px] text-center font-semibold">
                  People The Office Analyzing and Checking Finance Graphs
                </h2>
                <Link href="blog-details.html">
                  <div className="group-hover:border-purple common-transition flex w-full justify-center border-t border-[#f2edff] py-5">
                    <div className="text-paragraph group-hover:text-purple common-transition flex items-center space-x-[7px]">
                      <span className="font-medium">Read More</span>
                      <span>
                        <svg width={7} height={11} viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M1 10L4.79289 6.20711C5.12623 5.87377 5.29289 5.70711 5.29289 5.5C5.29289 5.29289 5.12623 5.12623 4.79289 4.79289L1 1"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
              <div data-aos="fade-left" data-aos-delay={200} className="item group last:hidden xl:last:block">
                <div
                  style={{
                    backgroundImage: 'url(/images/blogs-3.webp)',
                  }}
                  className="relative mb-[58px] h-[280px] w-full rounded-[15px] bg-cover bg-no-repeat"
                >
                  <div className="absolute -bottom-7 left-0 w-full px-5 lg:px-[50px]">
                    <div className="shadow-small flex w-full items-center justify-between rounded-[10px] bg-white px-[25px] py-[17px]">
                      <span className="text-purple font-semibold">SEO</span>
                      <div className="h-[5px] w-[5px] rounded-full bg-[#D2A98E]" />
                      <span className="text-paragraph">December 25, 2023</span>
                    </div>
                  </div>
                </div>
                <h2 className="text-22 text-main-black mb-[35px] text-center font-semibold">
                  People The Office Analyzing and Checking Finance Graphs
                </h2>
                <Link href="blog-details.html">
                  <div className="group-hover:border-purple common-transition flex w-full justify-center border-t border-[#f2edff] py-5">
                    <div className="text-paragraph group-hover:text-purple common-transition flex items-center space-x-[7px]">
                      <span className="font-medium">Read More</span>
                      <span>
                        <svg width={7} height={11} viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M1 10L4.79289 6.20711C5.12623 5.87377 5.29289 5.70711 5.29289 5.5C5.29289 5.29289 5.12623 5.12623 4.79289 4.79289L1 1"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-aos="fade-up" id="consultation">
        <div className="consultation-section-wrapper relative w-full">
          <div className="theme-container relative z-10 mx-auto">
            <div className="bg-main-gray relative w-full rounded-[20px] border border-[#e7e3fa] py-[80px] pl-10 md:flex xl:pl-[110px]">
              <div className="pointer-events-none absolute bottom-0 left-0">
                <img src="/images/cta-dot-shape.webp" alt="" />
              </div>
              <div className="w-full md:w-[432px]">
                <span className="section-title-top-tag mb-5">Get Consultations</span>
                <h2 className="md:text-48 text-34 text-main-black mb-[32px] font-semibold">
                  Get your free digital marketing audit
                </h2>
                <p className="text-paragraph mb-[45px]">We’ve 25+ years of experience in digital marketing</p>
                <Link href="contact.html">
                  <div className="home-two-btn-bg bg-purple border-purple group inline-flex py-3">
                    <span className="group-hover:text-purple font-inter relative z-10 text-base text-white transition-all duration-300">
                      Get Consultation
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
              <div className="flex-1">
                <div id="consaltaion-mouse-move-anim" className="relative mt-10 flex w-full justify-end">
                  <div className="moving-h2-hero-main-img mr-10">
                    <img src="/images/cta-shape.webp" alt="" />
                  </div>
                  <div data-depth="0.40" className="layer">
                    <img src="/images/cta-p-1.webp" alt="" />
                  </div>
                  <div data-depth="0.20" className="layer absolute right-10 md:right-40">
                    <img src="/images/cta-p-2.webp" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-20 flex justify-between">
            <div id="line-lottie-style-2" />
            <div className="rotate-180 transform" id="line-lottie2-style-2" />
          </div>
        </div>
      </section>
    </HomeLayout>
  );
}
