import HomeLayout from "@/Layouts/HomeLayout";
import { Head, Link } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <HomeLayout>
            <Head title="Home" />

            <section id="home-one-hero">
                <div className="hero-one-section-wrapper w-full xl:h-[905px] overflow-hidden relative">
                    <div
                        className="absolute top-0 left-0 w-full h-full win-grid"
                        id="win-grid"
                    />
                    <div className="relative z-10 h-full mx-auto pointer-events-none theme-container">
                        <div className="w-full grid xl:grid-cols-2 grid-cols-1 2xl:gap-[130px] gap-10 items-center lg:pt-[223px] pt-[130px] h-full">
                            <div className="article-area">
                                <div className="inline-flex md:px-6 px-3 py-2.5 md:py-[14px] bg-white space-x-2.5 items-center rounded-full shadow-style-one mb-5">
                                    <span>
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
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
                                                    <rect
                                                        width={20}
                                                        height={20}
                                                        fill="white"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                    <span className="text-sm font-semibold pointer-events-auto md:text-20 text-purple">
                                        Quland digital agency
                                    </span>
                                </div>
                                <h2 className="text-4xl md:text-65 text-main-black font-semibold mb-[35px] pointer-events-auto">
                                    <span>We’re Modern &amp;</span> <br />
                                    effective
                                    <span className="relative inline-block px-3 font-bold text-white uppercase">
                                        <span className="relative z-10">
                                            digital
                                        </span>
                                        <span className="absolute top-0 left-0 block w-full h-full bg-gradient-to-r from-purple" />
                                    </span>
                                    <br />
                                    <span className="italic">
                                        {" "}
                                        marketing agency{" "}
                                    </span>
                                </h2>
                                <div className="px-6 py-[14px] bg-white border-l-2 border-blue-sass mb-[35px] pointer-events-auto xl:w-full md:w-[500px]">
                                    <p className="text-ptwo text-paragraph">
                                        Digital marketing agency, we craft
                                        compelling narratives &amp; leverage
                                        cutting-edge technologies to propel
                                        brands towards
                                    </p>
                                </div>
                                <div className="flex space-x-[30px] items-center pointer-events-auto">
                                    <Link href="blog.html">
                                        <div className="py-3 home-two-btn-bg group bg-purple border-blue-seo">
                                            <span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-purple font-inter">
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
                                                    className="transition-all duration-300 group-hover:stroke-blue-seo"
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
                                        <div className="flex items-center gap-2 group">
                                            <p className="mb-[1px] font-medium text-main-black leading-5 font-inter border-b border-main-black before:block before:pb-[1px] before:border-purple before:font-medium before:text-purple before:leading-5 before:font-inter before:border-b before:content-['Our_Services'] before:absolute before:-bottom-[1px] before:transition-all before:duration-300 before:w-0 hover:before:w-full before:overflow-hidden before:h-[21px] relative">
                                                Our Services
                                            </p>
                                            <svg
                                                width={7}
                                                height={11}
                                                viewBox="0 0 7 11"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    className="transition-all duration-300 delay-300 group-hover:stroke-purple"
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
                            <div className="relative h-full image-area">
                                <div className="xl:absolute relative 2xl:w-[752px] lg:w-[600px] w-full left-0 top-0 h-full">
                                    <div className="relative bottom-0 left-0 z-10 w-full xl:absolute">
                                        <div className="flex justify-center w-full">
                                            <img
                                                src="/images/home-one-hero-main.webp"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 hidden w-full h-full md:block">
                                        <div
                                            id="hero-mouse-move-anim"
                                            className="relative z-10 w-full h-full pointer-events-auto"
                                        >
                                            <div
                                                data-depth="0.20"
                                                className="layer"
                                            >
                                                <span className="inline-block xl:px-[30px] px-6 xl:py-2.5 py-1.5 bg-[#BA4AFF] 2xl:text-pone xl:text-sm lg:text-pone text-white rounded-br-none rounded-full">
                                                    SEO &amp; Marketing
                                                </span>
                                            </div>
                                            <div
                                                data-depth="0.30"
                                                className="layer"
                                            >
                                                <span className="inline-block xl:px-[30px] px-6 xl:py-2.5 py-1.5 bg-purple 2xl:text-pone xl:text-sm lg:text-pone text-white rounded-full rounded-bl-none">
                                                    Website Optimizations
                                                </span>
                                            </div>
                                            <div
                                                data-depth="0.40"
                                                className="layer h-fit"
                                            >
                                                <span className="inline-block xl:px-[30px] px-6 xl:py-2.5 py-1.5 bg-blue-sass 2xl:text-pone xl:text-sm lg:text-pone text-white rounded-br-none rounded-full h-fit">
                                                    Marketing &amp; Growth
                                                </span>
                                            </div>
                                            <div
                                                data-depth="0.50"
                                                className="layer h-fit"
                                            >
                                                <span className="inline-block xl:px-[30px] px-6 xl:py-2.5 py-1.5 bg-[#FF8C05] 2xl:text-pone xl:text-sm lg:text-pone text-white rounded-full rounded-bl-none h-fit">
                                                    Keywords Research
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute left-0 bottom-[100px] w-full md:block hidden">
                                        <div className="flex justify-center">
                                            <div className="w-[533px] h-[585px] bg-white rounded-[266px]" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                                        <div className="flex justify-center">
                                            <img
                                                src="/images/home-one-hero-circle-shadow.svg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="home-one-client">
                <div className="2xl:px-[152px] md:px-10 xl:xl:py-[130px] md:py-[80px] px-5 py-10 overflow-x-hidden">
                    <p className="text-base text-paragraph font-medium mb-[50px] text-center">
                        We’ve more than 1250+ global clients
                    </p>
                    <div className="w-full h1-partner_slider swiper">
                        <div className="swiper-wrapper">
                            <div className="flex justify-center swiper-slide client-item">
                                <Link href="/" aria-label="partner">
                                    <img
                                        src="/images/home-one-client-1.webp"
                                        alt=""
                                    />
                                </Link>
                            </div>
                            <div className="flex justify-center swiper-slide client-item">
                                <Link href="/" aria-label="partner">
                                    <img
                                        src="/images/home-one-client-2.webp"
                                        alt=""
                                    />
                                </Link>
                            </div>
                            <div className="flex justify-center swiper-slide client-item">
                                <Link href="/" aria-label="partner">
                                    <img
                                        src="/images/home-one-client-3.webp"
                                        alt=""
                                    />
                                </Link>
                            </div>
                            <div className="flex justify-center swiper-slide client-item">
                                <Link href="/" aria-label="partner">
                                    <img
                                        src="/images/home-one-client-4.webp"
                                        alt=""
                                    />
                                </Link>
                            </div>
                            <div className="flex justify-center swiper-slide client-item">
                                <Link href="/" aria-label="partner">
                                    <img
                                        src="/images/home-one-client-5.webp"
                                        alt=""
                                    />
                                </Link>
                            </div>
                            <div className="flex justify-center swiper-slide client-item">
                                <Link href="/" aria-label="partner">
                                    <img
                                        src="/images/home-one-client-6.webp"
                                        alt=""
                                    />
                                </Link>
                            </div>
                            <div className="flex justify-center swiper-slide client-item">
                                <Link href="/" aria-label="partner">
                                    <img
                                        src="/images/home-one-client-7.webp"
                                        alt=""
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="home-one-about">
                <div className="home-one-about-wrapper w-full xl:pb-[153px] pb-[60px]">
                    <div className="mx-auto theme-container">
                        <div className="w-full grid xl:grid-cols-2 grid-cols-1 md:gap-[130px] gap-10 md:items-center relative">
                            <div className="w-full about-thumbnil-area">
                                <div
                                    data-aos="fade-right"
                                    className="xl:absolute relative lg:-left-16 left-0 top-0 lg:w-[682px] w-full"
                                >
                                    <div id="about-shape-mouse-anim">
                                        <div
                                            data-depth="0.20"
                                            className="layer"
                                        >
                                            <div
                                                data-aos="fade-right"
                                                className="hidden thumbnil-wrapper md:block"
                                            >
                                                <img
                                                    src="/images/home-one-about-thumb-shape.webp"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        data-aos="fade-right"
                                        className="left-0 w-full thumbnil-main md:absolute -bottom-16"
                                    >
                                        <div className="flex justify-center w-full">
                                            <img
                                                src="/images/home-one-about-thumb-main.webp"
                                                alt=""
                                                className="rounded-[20px] overflow-hidden"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full md:block hidden absolute left-0 top-0 h-[550px]">
                                        <div
                                            id="home-one-about-mouse-anim"
                                            className="h-full"
                                        >
                                            <div
                                                className="absolute layer left-2/3 top-36"
                                                data-depth="0.30"
                                            >
                                                <div
                                                    data-aos="fade-left"
                                                    data-aos-delay={100}
                                                    className="inline-block h-fit px-[30px] py-2.5 bg-purple text-pone shadow-small shadow-purple text-white rounded-full rounded-bl-none"
                                                >
                                                    Marketing &amp; Growth
                                                </div>
                                            </div>
                                            <div
                                                data-depth="0.50"
                                                className="absolute bottom-0 layer left-1/2"
                                            >
                                                <div
                                                    data-aos="fade-left"
                                                    data-aos-delay={200}
                                                    className="w-[296px] h-fit flex justify-between p-[7px] pl-5 bg-white shadow-style-one rounded-full items-center"
                                                >
                                                    <span className="text-sm font-semibold text-main-black text-nowrap">
                                                        Trusted Clients
                                                    </span>
                                                    <img
                                                        src="/images/home-one-about-group.webp"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="about-article-area">
                                <span className="mb-5 section-title-top-tag">
                                    About Company
                                </span>
                                <h2 className="md:text-48 text-34 font-semibold text-main-black mb-[50px] md:w-[80%] w-full xl:w-full">
                                    Digital Transforming Brands, Elevating Reach
                                    Crafting Success
                                </h2>
                                <p className="text-paragraph mb-[50px]">
                                    Defined by digital dynamism, our digital
                                    marketing agency emerges as a beacon of
                                    innovation and strategic prowess.
                                </p>
                                <ul className="flex flex-wrap md:gap-[30px] gap-5 mb-[50px]">
                                    <li className="flex space-x-2.5 items-center text-purple font-medium px-5 py-3 bg-main-gray border border-[#e7e3fa] leading-none rounded-full">
                                        <span>
                                            <svg
                                                width={18}
                                                height={13}
                                                viewBox="0 0 18 13"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
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
                                    <li className="flex space-x-2.5 items-center text-purple font-medium px-5 py-3 bg-main-gray border border-[#e7e3fa] leading-none rounded-full">
                                        <span>
                                            <svg
                                                width={18}
                                                height={13}
                                                viewBox="0 0 18 13"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
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
                                    <li className="flex space-x-2.5 items-center text-purple font-medium px-5 py-3 bg-main-gray border border-[#e7e3fa] leading-none rounded-full">
                                        <span>
                                            <svg
                                                width={18}
                                                height={13}
                                                viewBox="0 0 18 13"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
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
                                    <li className="flex space-x-2.5 items-center text-purple font-medium px-5 py-3 bg-main-gray border border-[#e7e3fa] leading-none rounded-full">
                                        <span>
                                            <svg
                                                width={18}
                                                height={13}
                                                viewBox="0 0 18 13"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
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
                                    <div className="inline-flex py-3 home-two-btn-bg group bg-blue-sass border-blue-sass">
                                        <span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-blue-sass font-inter">
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
                                                className="transition-all duration-300 group-hover:stroke-blue-seo"
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
                <div className="fun-fact-wrapper w-full xl:pb-[130px] pb-[60px]">
                    <div className="mx-auto theme-container">
                        <div className="grid xl:grid-cols-2 grid-cols-1 xl:gap-[155px]">
                            <div className="w-full">
                                <span className="mb-5 section-title-top-tag">
                                    Our Fun Fact
                                </span>
                                <h2 className="md:text-48 text-34 font-semibold text-main-black mb-[50px]">
                                    We worked with diverse clients and
                                    industries.
                                </h2>
                                <p className="text-paragraph mb-[40px] pl-5 border-l-[3px] border-purple">
                                    Defined by digital dynamism, our digital
                                    marketing agency emerges beacon of
                                    innovation and strategic prowess.
                                </p>
                                <Link href="/">
                                    <div className="w-[182px] h-[56px] rounded-full border border-[#e7e3fa] flex justify-center items-center">
                                        <div className="flex space-x-2.5 items-center text-purple">
                                            <span className="text-pone">
                                                {" "}
                                                Learn More{" "}
                                            </span>
                                            <span>
                                                <svg
                                                    width={7}
                                                    height={12}
                                                    viewBox="0 0 7 12"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
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
                            <div className="relative flex flex-wrap w-full gap-5 mt-10 xl:mt-0 xl:flex-none">
                                <div className="xl:absolute left-20 top-0 rounded-[20px] w-[300px] h-[178px] border border-[#e7e3fa] bg-main-gray overflow-hidden group">
                                    <div className="relative flex items-center justify-center p-8">
                                        <div className="relative z-10 flex flex-col items-center justify-between space-y-5">
                                            <p
                                                className="font-semibold text-center md:text-48 text-34 text-main-black"
                                                data-scroll-qs="scroll"
                                                data-count-qs={15}
                                                data-type-qs="K+"
                                                data-speed-qs={600}
                                            />
                                            <hr className="border-[3px] border-purple w-[80px]" />
                                            <p className="font-semibold text-center text-paragraph text-18">
                                                Project Complete
                                            </p>
                                        </div>
                                        <div className="absolute top-0 left-0 w-full h-full transition-all duration-300 ease-in-out opacity-100 xl:opacity-0 group-hover:opacity-100">
                                            <img
                                                src="/images/home-one-ff-item-shape.webp"
                                                className="w-full h-full"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:absolute left-0 bottom-5 rounded-[20px] w-[300px] h-[178px] border border-[#e7e3fa] bg-main-gray overflow-hidden group">
                                    <div className="relative flex items-center justify-center p-8">
                                        <div className="relative z-10 flex flex-col items-center justify-between space-y-5">
                                            <p
                                                data-scroll-qs="scroll"
                                                data-count-qs={28}
                                                data-type-qs="K+"
                                                data-speed-qs={600}
                                                className="font-semibold text-center md:text-48 text-34 text-main-black"
                                            />
                                            <hr className="border-[3px] border-purple w-[80px]" />
                                            <p className="font-semibold text-center text-paragraph text-18">
                                                Satisfactions Customer
                                            </p>
                                        </div>
                                        <div className="absolute top-0 left-0 w-full h-full transition-all duration-300 ease-in-out opacity-100 xl:opacity-0 group-hover:opacity-100">
                                            <img
                                                src="/images/home-one-ff-item-shape.webp"
                                                className="w-full h-full"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:absolute -right-12 bottom-20 rounded-[20px] w-[300px] h-[178px] border border-[#e7e3fa] bg-main-gray overflow-hidden group">
                                    <div className="relative flex items-center justify-center p-8">
                                        <div className="relative z-10 flex flex-col items-center justify-between space-y-5">
                                            <p
                                                data-scroll-qs="scroll"
                                                data-count-qs={10}
                                                data-type-qs="+"
                                                data-speed-qs={600}
                                                className="font-semibold text-center md:text-48 text-34 text-main-black"
                                            />
                                            <hr className="border-[3px] border-purple w-[80px]" />
                                            <p className="font-semibold text-center text-paragraph text-18">
                                                Years Of Experience
                                            </p>
                                        </div>
                                        <div className="absolute top-0 left-0 w-full h-full transition-all duration-300 ease-in-out opacity-100 group-hover:opacity-100">
                                            <img
                                                src="/images/home-one-ff-item-shape.webp"
                                                className="w-full h-full"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="service">
                <div className="w-full service-section-wrapper xl:pb-[130px] pb-[60px] relative">
                    <div className="relative z-10 mx-auto theme-container">
                        <div className="w-full xl:py-[130px] py-[60px] xl:px-[80px] md:px-10 px-5 bg-main-gray rounded-[10px] border border-[#e7e3fa]">
                            <div className="flex flex-col items-center">
                                <span className="text-purple font-medium px-5 py-3 border border-[#e7e3fa] leading-none rounded-full inline-block mb-5 bg-white">
                                    Explore Services
                                </span>
                                <h2 className="md:text-48 text-34 font-semibold text-main-black mb-[50px] text-center lg:w-[685px] w-full">
                                    High Impact Marketing Services to grow your
                                    business
                                </h2>
                            </div>
                            <div className="w-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-[70px] gap-8">
                                <div
                                    data-aos="zoom-in-left"
                                    className="flex flex-col space-y-[30px] justify-between items-center rounded-[10px] bg-white px-8 py-10 hover:shadow-common group border border-transparent hover:border-purple common-transition"
                                >
                                    <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full bg-[#e7e3fa] group-hover:bg-purple common-transition text-purple group-hover:text-white">
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
                                        <p className="mb-4 font-semibold text-center text-20 text-main-black">
                                            Keyword Research
                                        </p>
                                        <p className="text-center text-paragraph">
                                            Defined by digital dynamism, our
                                            digital marketing agency emerges as
                                            a beacon of innovation
                                        </p>
                                    </div>
                                </div>
                                <div
                                    data-aos="zoom-in-left"
                                    data-aos-delay={100}
                                    className="flex flex-col space-y-[30px] justify-between items-center rounded-[10px] bg-white px-8 py-10 hover:shadow-common group border border-transparent hover:border-purple common-transition"
                                >
                                    <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full bg-[#e7e3fa] group-hover:bg-purple common-transition text-purple group-hover:text-white">
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
                                        <p className="mb-4 font-semibold text-center text-20 text-main-black">
                                            Website Optimization
                                        </p>
                                        <p className="text-center text-paragraph">
                                            Defined by digital dynamism, our
                                            digital marketing agency emerges as
                                            a beacon of innovation
                                        </p>
                                    </div>
                                </div>
                                <div
                                    data-aos="zoom-in-left"
                                    data-aos-delay={200}
                                    className="flex flex-col space-y-[30px] justify-between items-center rounded-[10px] bg-white px-8 py-10 hover:shadow-common group border border-transparent hover:border-purple common-transition"
                                >
                                    <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full bg-[#e7e3fa] group-hover:bg-purple common-transition text-purple group-hover:text-white">
                                        <span>
                                            <svg
                                                width={30}
                                                height={30}
                                                viewBox="0 0 30 30"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
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
                                                <path
                                                    d="M12.5 16.25H17.5"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                />
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
                                        <p className="mb-4 font-semibold text-center text-20 text-main-black">
                                            Content Marketing
                                        </p>
                                        <p className="text-center text-paragraph">
                                            Defined by digital dynamism, our
                                            digital marketing agency emerges as
                                            a beacon of innovation
                                        </p>
                                    </div>
                                </div>
                                <div
                                    data-aos="zoom-in-left"
                                    data-aos-delay={300}
                                    className="flex flex-col space-y-[30px] justify-between items-center rounded-[10px] bg-white px-8 py-10 hover:shadow-common group border border-transparent hover:border-purple common-transition"
                                >
                                    <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full bg-[#e7e3fa] group-hover:bg-purple common-transition text-purple group-hover:text-white">
                                        <span>
                                            <svg
                                                width={30}
                                                height={30}
                                                viewBox="0 0 30 30"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
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
                                        <p className="mb-4 font-semibold text-center text-20 text-main-black">
                                            Email Marketing
                                        </p>
                                        <p className="text-center text-paragraph">
                                            Defined by digital dynamism, our
                                            digital marketing agency emerges as
                                            a beacon of innovation
                                        </p>
                                    </div>
                                </div>
                                <div
                                    data-aos="zoom-in-left"
                                    data-aos-delay={400}
                                    className="flex flex-col space-y-[30px] justify-between items-center rounded-[10px] bg-white px-8 py-10 hover:shadow-common group border border-transparent hover:border-purple common-transition"
                                >
                                    <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full bg-[#e7e3fa] group-hover:bg-purple common-transition text-purple group-hover:text-white">
                                        <span>
                                            <svg
                                                width={28}
                                                height={28}
                                                viewBox="0 0 28 28"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
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
                                        <p className="mb-4 font-semibold text-center text-20 text-main-black">
                                            Social Media Marketing
                                        </p>
                                        <p className="text-center text-paragraph">
                                            Defined by digital dynamism, our
                                            digital marketing agency emerges as
                                            a beacon of innovation
                                        </p>
                                    </div>
                                </div>
                                <div
                                    data-aos="zoom-in-left"
                                    data-aos-delay={500}
                                    className="flex flex-col space-y-[30px] justify-between items-center rounded-[10px] bg-white px-8 py-10 hover:shadow-common group border border-transparent hover:border-purple common-transition"
                                >
                                    <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full bg-[#e7e3fa] group-hover:bg-purple common-transition text-purple group-hover:text-white">
                                        <span>
                                            <svg
                                                width={30}
                                                height={30}
                                                viewBox="0 0 30 30"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
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
                                        <p className="mb-4 font-semibold text-center text-20 text-main-black">
                                            Website Development
                                        </p>
                                        <p className="text-center text-paragraph">
                                            Defined by digital dynamism, our
                                            digital marketing agency emerges as
                                            a beacon of innovation
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between top-1/3">
                        <div id="line-lottie" />
                        <div
                            className="transform rotate-180"
                            id="line-lottie2"
                        />
                    </div>
                </div>
            </section>
            <section id="working-process">
                <div className="working-process-section-wrapper w-full xl:pb-[130px] pb-[60px]">
                    <div className="mx-auto theme-container">
                        <div className="w-full grid-cols-12 xl:grid">
                            <div className="col-span-5">
                                <div className="title-area">
                                    <span className="mb-5 section-title-top-tag">
                                        Our Fun Fact
                                    </span>
                                    <h2 className="md:text-48 text-34 font-semibold text-main-black mb-[50px]">
                                        Efficiency in Motion Navigating the
                                        Working Process
                                    </h2>
                                    <div
                                        id="progress-wrapper"
                                        className="grid grid-cols-1 gap-5 xl:grid-cols-1 lg:grid-cols-3 md:grid-cols-2"
                                    >
                                        <div
                                            data-aos="fade-up"
                                            className="w-full rounded-[20px] border border-[#e7e3fa] bg-main-gray px-10 py-[30px] overflow-hidden group relative"
                                        >
                                            <div className="relative z-10 flex flex-col space-y-5">
                                                <div className="flex items-center justify-center w-10 h-10 bg-white border-2 rounded-full border-purple">
                                                    <span className="font-semibold text-purple">
                                                        01
                                                    </span>
                                                </div>
                                                <div>
                                                    <p className="mb-4 font-semibold text-20 text-main-black">
                                                        Discover &amp; Analysis
                                                    </p>
                                                    <p className="text-paragraph">
                                                        Discover &amp; Analysis"
                                                        encapsulates the crucial
                                                        initial stages of any
                                                        project or venture.
                                                        During this phase, teams
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="absolute top-0 left-0 w-full h-full transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                                                <img
                                                    src="/images/home-one-ff-item-shape-2.webp"
                                                    alt=""
                                                    className="w-full h-full"
                                                />
                                            </div>
                                        </div>
                                        <div
                                            data-aos-delay={100}
                                            data-aos="fade-up"
                                            className="w-full rounded-[20px] border border-[#e7e3fa] bg-main-gray px-10 py-[30px] overflow-hidden group relative"
                                        >
                                            <div className="relative z-10 flex flex-col space-y-5">
                                                <div className="flex items-center justify-center w-10 h-10 bg-white border-2 rounded-full border-purple">
                                                    <span className="font-semibold text-purple">
                                                        02
                                                    </span>
                                                </div>
                                                <div>
                                                    <p className="mb-4 font-semibold text-20 text-main-black">
                                                        Strategy Development
                                                    </p>
                                                    <p className="text-paragraph">
                                                        Discover &amp; Analysis"
                                                        encapsulates the crucial
                                                        initial stages of any
                                                        project or venture.
                                                        During this phase, teams
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="absolute top-0 left-0 w-full h-full transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                                                <img
                                                    src="/images/home-one-ff-item-shape-2.webp"
                                                    alt=""
                                                    className="w-full h-full"
                                                />
                                            </div>
                                        </div>
                                        <div
                                            data-aos-delay={200}
                                            data-aos="fade-up"
                                            className="w-full rounded-[20px] border border-[#e7e3fa] bg-main-gray px-10 py-[30px] overflow-hidden group relative"
                                        >
                                            <div className="relative z-10 flex flex-col space-y-5">
                                                <div className="flex items-center justify-center w-10 h-10 bg-white border-2 rounded-full border-purple">
                                                    <span className="font-semibold text-purple">
                                                        03
                                                    </span>
                                                </div>
                                                <div>
                                                    <p className="mb-4 font-semibold text-20 text-main-black">
                                                        Launch &amp; Execution
                                                    </p>
                                                    <p className="text-paragraph">
                                                        Discover &amp; Analysis"
                                                        encapsulates the crucial
                                                        initial stages of any
                                                        project or venture.
                                                        During this phase, teams
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="absolute top-0 left-0 w-full h-full transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                                                <img
                                                    src="/images/home-one-ff-item-shape-2.webp"
                                                    alt=""
                                                    className="w-full h-full"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-7">
                                <div className="relative flex justify-center w-full h-full xl:justify-end">
                                    <div className="right-0 h-full xl:absolute">
                                        <div className="sticky top-[155px]">
                                            <div
                                                id="home-working-cursor-anim"
                                                className="relative"
                                            >
                                                <div
                                                    data-depth="0.30"
                                                    className="z-10 layer h-fit"
                                                >
                                                    <span className="px-[30px] py-2.5 bg-purple shadow-small shadow-purple text-pone text-white rounded-br-none rounded-full md:inline-block hidden">
                                                        Sales and marketing
                                                    </span>
                                                </div>
                                                <div
                                                    data-depth="0.40"
                                                    className="z-10 layer h-fit"
                                                >
                                                    <div className="hidden md:inline-block">
                                                        <img
                                                            src="/images/teer.webp"
                                                            alt=""
                                                            className="drop-shadow-xl"
                                                        />
                                                    </div>
                                                </div>
                                                <div
                                                    data-depth="0.20"
                                                    className="layer h-fit"
                                                >
                                                    <span className="md:inline-block hidden px-[30px] py-2.5 bg-blue-sass text-pone text-white rounded-br-none rounded-full shadow-small shadow-blue-sass">
                                                        Marketing &amp; Growth
                                                    </span>
                                                </div>
                                            </div>
                                            <div id="progressThumbHeight">
                                                <img
                                                    src="/images/working-process-thumb.webp"
                                                    alt=""
                                                />
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
                        backgroundImage: "url(/images/testimonial-bg.webp)",
                    }}
                    className="testimoial-section-wrapper w-full bg-cover bg-no-repeat xl:py-[130px] pt-[60px] pb-[120px]"
                >
                    <div className="relative z-10 mx-auto theme-container">
                        <div className="flex flex-col items-center">
                            <span className="inline-block px-5 py-3 mb-5 font-medium leading-none text-white rounded-full bg-purple">
                                Our Testimonials
                            </span>
                            <h2 className="md:text-48 text-34 font-semibold text-white mb-[70px] text-center">
                                Customer Say About Our Services
                            </h2>
                        </div>
                        <div className="w-full lg:grid grid-cols-12 items-stretch gap-[30px]">
                            <div className="col-span-4">
                                <div className="w-full h-[401px] relative">
                                    <img
                                        src="/images/testimonial-thumb.webp"
                                        alt=""
                                        className="w-full h-full overflow-hidden rounded-[20px] object-top object-cover"
                                    />
                                    <div className="absolute left-0 -bottom-5 sm:px-[56px] pl-1 w-full">
                                        <div className="w-full flex justify-between p-[7px] pl-5 bg-white shadow-style-one rounded-full items-center">
                                            <span className="text-sm font-semibold text-main-black text-nowrap">
                                                Trusted Clients
                                            </span>
                                            <img
                                                src="/images/home-one-about-group.webp"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-full col-span-8 mt-20 lg:mt-0">
                                <div className="relative w-full h-full">
                                    <div className="w-full h-full testimonial-swiper">
                                        <div className="w-full h-full swiper-wrapper">
                                            <div className="w-full h-full swiper-slide">
                                                <div className="w-full bg-purple h-full rounded-[20px] py-10 relative">
                                                    <div className="absolute left-0 shape top-10">
                                                        <img
                                                            src="/images/testimonial-shape.webp"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="relative z-10">
                                                        <div className="flex justify-between md:pl-[70px] pl-5 mb-10">
                                                            <div>
                                                                <img
                                                                    src="/images/quotation.webp"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div className="w-[422px] h-[60px] relative md:flex hidden justify-center">
                                                                <div className="absolute top-0 left-0 flex w-full h-full">
                                                                    <div className="w-1/2 h-full bg-gradient-to-l from-white opacity-30" />
                                                                    <div className="w-1/2 h-full bg-gradient-to-r from-white opacity-30" />
                                                                </div>
                                                                <div className="flex items-center space-x-5">
                                                                    <span className="font-semibold text-white text-20">
                                                                        Quality
                                                                        Service
                                                                    </span>
                                                                    <div className="flex space-x-[11px] items-center">
                                                                        <span>
                                                                            <svg
                                                                                width={
                                                                                    18
                                                                                }
                                                                                height={
                                                                                    18
                                                                                }
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
                                                                                width={
                                                                                    18
                                                                                }
                                                                                height={
                                                                                    18
                                                                                }
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
                                                                                width={
                                                                                    18
                                                                                }
                                                                                height={
                                                                                    18
                                                                                }
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
                                                                                width={
                                                                                    18
                                                                                }
                                                                                height={
                                                                                    18
                                                                                }
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
                                                                                width={
                                                                                    18
                                                                                }
                                                                                height={
                                                                                    18
                                                                                }
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
                                                        <div className="md:px-[70px] px-5">
                                                            <p className="mb-10 font-semibold text-white text-24 line-clamp-3">
                                                                In this
                                                                ever-evolving
                                                                digital era,
                                                                understand the
                                                                significance of
                                                                staying ahead.
                                                                Through our blog
                                                                invite explore
                                                                the dynamic
                                                                world of IT with
                                                                us decoding
                                                                algorithms to
                                                                unraveling
                                                            </p>
                                                            <div className="flex items-center space-x-5">
                                                                <div className="w-[56px] h-[56px] rounded-full overflow-hidden">
                                                                    <img
                                                                        src="/images/testimonial-p1.webp"
                                                                        alt=""
                                                                        className="object-cover w-full h-full"
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <p className="font-semibold text-white text-18">
                                                                        Matthew
                                                                        C.
                                                                        Lansberry
                                                                    </p>
                                                                    <p className="text-sm font-medium text-white">
                                                                        CEO
                                                                        &amp;
                                                                        Founder
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full h-full swiper-slide">
                                                <div className="w-full bg-purple h-full rounded-[20px] py-10 relative">
                                                    <div className="absolute left-0 shape top-10">
                                                        <img
                                                            src="/images/testimonial-shape.webp"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="relative z-10">
                                                        <div className="flex justify-between md:pl-[70px] pl-5 mb-10">
                                                            <div>
                                                                <img
                                                                    src="/images/quotation.webp"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div className="w-[422px] h-[60px] relative md:flex hidden justify-center">
                                                                <div className="absolute top-0 left-0 flex w-full h-full">
                                                                    <div className="w-1/2 h-full bg-gradient-to-l from-white opacity-30" />
                                                                    <div className="w-1/2 h-full bg-gradient-to-r from-white opacity-30" />
                                                                </div>
                                                                <div className="flex items-center space-x-5">
                                                                    <span className="font-semibold text-white text-20">
                                                                        Quality
                                                                        Service
                                                                    </span>
                                                                    <div className="flex space-x-[11px] items-center">
                                                                        <span>
                                                                            <svg
                                                                                width={
                                                                                    18
                                                                                }
                                                                                height={
                                                                                    18
                                                                                }
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
                                                                                width={
                                                                                    18
                                                                                }
                                                                                height={
                                                                                    18
                                                                                }
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
                                                                                width={
                                                                                    18
                                                                                }
                                                                                height={
                                                                                    18
                                                                                }
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
                                                                                width={
                                                                                    18
                                                                                }
                                                                                height={
                                                                                    18
                                                                                }
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
                                                                                width={
                                                                                    18
                                                                                }
                                                                                height={
                                                                                    18
                                                                                }
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
                                                        <div className="md:px-[70px] px-5">
                                                            <p className="mb-10 font-semibold text-white text-24 line-clamp-3">
                                                                In this
                                                                ever-evolving
                                                                digital era,
                                                                understand the
                                                                significance of
                                                                staying ahead.
                                                                Through our blog
                                                                invite explore
                                                                the dynamic
                                                                world of IT with
                                                                us decoding
                                                                algorithms to
                                                                unraveling
                                                            </p>
                                                            <div className="flex items-center space-x-5">
                                                                <div className="w-[56px] h-[56px] rounded-full overflow-hidden">
                                                                    <img
                                                                        src="/images/testimonial-p2.webp"
                                                                        alt=""
                                                                        className="object-cover w-full h-full"
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <p className="font-semibold text-white text-18">
                                                                        Matthew
                                                                        C.
                                                                        Lansberry
                                                                    </p>
                                                                    <p className="text-sm font-medium text-white">
                                                                        CEO
                                                                        &amp;
                                                                        Founder
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full absolute -bottom-[60px] z-10">
                                            <div className="flex justify-center w-full">
                                                <div className="flex space-x-5">
                                                    <div>
                                                        <button
                                                            type="button"
                                                            className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-purple focus:bg-blue-sass swiper-button-prev"
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
                                                            className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-purple focus:bg-blue-sass swiper-button-next"
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
                <div className="blogs-section-wrapper w-full xl:pt-[130px] xl:pb-[100px] py-[60px] overflow-hidden">
                    <div className="mx-auto theme-container">
                        <div className="w-full">
                            <div className="flex flex-col items-center">
                                <span className="mb-5 section-title-top-tag">
                                    News &amp; Blog
                                </span>
                                <h2 className="md:text-48 text-34 font-semibold text-main-black mb-[60px] text-center">
                                    Read and explore Our latest news
                                </h2>
                            </div>
                        </div>
                        <div className="w-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                            <div data-aos="fade-left" className="item group">
                                <div
                                    style={{
                                        backgroundImage:
                                            "url(/images/blogs-1.webp)",
                                    }}
                                    className="w-full h-[280px] rounded-[15px] bg-cover bg-no-repeat relative mb-[58px]"
                                >
                                    <div className="w-full absolute left-0 -bottom-7 lg:px-[50px] px-5">
                                        <div className="px-[25px] py-[17px] flex justify-between items-center bg-white w-full rounded-[10px] shadow-small">
                                            <span className="font-semibold text-purple">
                                                Marketing
                                            </span>
                                            <div className="w-[5px] h-[5px] rounded-full bg-[#D2A98E]" />
                                            <span className="text-paragraph">
                                                December 25, 2023
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <h2 className="text-center text-22 font-semibold mb-[35px] text-main-black">
                                    People The Office Analyzing and Checking
                                    Finance Graphs
                                </h2>
                                <Link href="blog-details.html">
                                    <div className="py-5 border-t border-[#f2edff] group-hover:border-purple w-full flex justify-center common-transition">
                                        <div className="flex space-x-[7px] items-center text-paragraph group-hover:text-purple common-transition">
                                            <span className="font-medium">
                                                Read More
                                            </span>
                                            <span>
                                                <svg
                                                    width={7}
                                                    height={11}
                                                    viewBox="0 0 7 11"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
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
                            <div
                                data-aos="fade-left"
                                data-aos-delay={100}
                                className="item group"
                            >
                                <div
                                    style={{
                                        backgroundImage:
                                            "url(/images/blogs-2.webp)",
                                    }}
                                    className="w-full h-[280px] rounded-[15px] bg-cover bg-no-repeat relative mb-[58px]"
                                >
                                    <div className="w-full absolute left-0 -bottom-7 lg:px-[50px] px-5">
                                        <div className="px-[25px] py-[17px] flex justify-between items-center bg-white w-full rounded-[10px] shadow-small">
                                            <span className="font-semibold text-purple">
                                                Research
                                            </span>
                                            <div className="w-[5px] h-[5px] rounded-full bg-[#D2A98E]" />
                                            <span className="text-paragraph">
                                                December 25, 2023
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <h2 className="text-center text-22 font-semibold mb-[35px] text-main-black">
                                    People The Office Analyzing and Checking
                                    Finance Graphs
                                </h2>
                                <Link href="blog-details.html">
                                    <div className="py-5 border-t border-[#f2edff] group-hover:border-purple w-full flex justify-center common-transition">
                                        <div className="flex space-x-[7px] items-center text-paragraph group-hover:text-purple common-transition">
                                            <span className="font-medium">
                                                Read More
                                            </span>
                                            <span>
                                                <svg
                                                    width={7}
                                                    height={11}
                                                    viewBox="0 0 7 11"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
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
                            <div
                                data-aos="fade-left"
                                data-aos-delay={200}
                                className="item group last:hidden xl:last:block"
                            >
                                <div
                                    style={{
                                        backgroundImage:
                                            "url(/images/blogs-3.webp)",
                                    }}
                                    className="w-full h-[280px] rounded-[15px] bg-cover bg-no-repeat relative mb-[58px]"
                                >
                                    <div className="w-full absolute left-0 -bottom-7 lg:px-[50px] px-5">
                                        <div className="px-[25px] py-[17px] flex justify-between items-center bg-white w-full rounded-[10px] shadow-small">
                                            <span className="font-semibold text-purple">
                                                SEO
                                            </span>
                                            <div className="w-[5px] h-[5px] rounded-full bg-[#D2A98E]" />
                                            <span className="text-paragraph">
                                                December 25, 2023
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <h2 className="text-center text-22 font-semibold mb-[35px] text-main-black">
                                    People The Office Analyzing and Checking
                                    Finance Graphs
                                </h2>
                                <Link href="blog-details.html">
                                    <div className="py-5 border-t border-[#f2edff] group-hover:border-purple w-full flex justify-center common-transition">
                                        <div className="flex space-x-[7px] items-center text-paragraph group-hover:text-purple common-transition">
                                            <span className="font-medium">
                                                Read More
                                            </span>
                                            <span>
                                                <svg
                                                    width={7}
                                                    height={11}
                                                    viewBox="0 0 7 11"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
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
                <div className="relative w-full consultation-section-wrapper">
                    <div className="relative z-10 mx-auto theme-container">
                        <div className="w-full py-[80px] xl:pl-[110px] pl-10 border border-[#e7e3fa] rounded-[20px] bg-main-gray md:flex relative">
                            <div className="absolute bottom-0 left-0 pointer-events-none">
                                <img src="/images/cta-dot-shape.webp" alt="" />
                            </div>
                            <div className="md:w-[432px] w-full">
                                <span className="mb-5 section-title-top-tag">
                                    Get Consultations
                                </span>
                                <h2 className="md:text-48 text-34 font-semibold text-main-black mb-[32px]">
                                    Get your free digital marketing audit
                                </h2>
                                <p className="text-paragraph mb-[45px]">
                                    We’ve 25+ years of experience in digital
                                    marketing
                                </p>
                                <Link href="contact.html">
                                    <div className="inline-flex py-3 home-two-btn-bg group bg-purple border-purple">
                                        <span className="relative z-10 text-base text-white transition-all duration-300 group-hover:text-purple font-inter">
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
                                                className="transition-all duration-300 group-hover:stroke-blue-seo"
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
                                <div
                                    id="consaltaion-mouse-move-anim"
                                    className="relative flex justify-end w-full mt-10"
                                >
                                    <div className="mr-10 moving-h2-hero-main-img">
                                        <img
                                            src="/images/cta-shape.webp"
                                            alt=""
                                        />
                                    </div>
                                    <div data-depth="0.40" className="layer">
                                        <img
                                            src="/images/cta-p-1.webp"
                                            alt=""
                                        />
                                    </div>
                                    <div
                                        data-depth="0.20"
                                        className="absolute layer md:right-40 right-10"
                                    >
                                        <img
                                            src="/images/cta-p-2.webp"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between top-20">
                        <div id="line-lottie-style-2" />
                        <div
                            className="transform rotate-180"
                            id="line-lottie2-style-2"
                        />
                    </div>
                </div>
            </section>
        </HomeLayout>
    );
}
