import Menu from "@/Components/Menu";
import MobileMenu from "@/Components/MobileMenu";
import { Link } from "@inertiajs/react";
import { useEffect } from "react";

export default function HomeLayout({ children }) {
    useEffect(() => {
        const scripts = [
            "/js/jquery-3.6.3.min.js",
            "/js/lottie.js",
            "/js/swiper-bundle.min.js",
            "/js/parallax.min.js",
            "/js/aos.js",
            "/js/plugins.js",
            "/js/gsap.min.js",
            "/js/ScrollTrigger.min.js",
            "/js/ScrollSmoother.min.js",
            "/js/main.js",
        ];

        // Function to dynamically load scripts
        const loadScripts = async () => {
            for (const src of scripts) {
                const script = document.createElement("script");
                script.src = src;
                script.async = true;
                document.body.appendChild(script);

                // Wait for each script to load
                await new Promise((resolve) => {
                    script.onload = resolve;
                });
            }

            // Initialize AOS after scripts are loaded
            if (window.AOS) {
                window.AOS.init();
            }
        };

        loadScripts();

        // Cleanup on component unmount
        return () => {
            scripts.forEach((src) => {
                const script = document.querySelector(`script[src="${src}"]`);
                if (script) {
                    document.body.removeChild(script);
                }
            });
        };
    }, []);

    useEffect(() => {
        const cssFiles = [
            "/css/swiper-bundle.min.css",
            "/css/aos.css",
            "/css/output.css",
            "/css/style.css",
        ];

        // Function to dynamically load CSS files
        const loadCSSFiles = () => {
            cssFiles.forEach((href) => {
                const link = document.createElement("link");
                link.rel = "stylesheet";
                link.href = href;
                document.head.appendChild(link);
            });
        };

        loadCSSFiles();

        // Cleanup on component unmount
        return () => {
            cssFiles.forEach((href) => {
                const link = document.querySelector(`link[href="${href}"]`);
                if (link) {
                    document.head.removeChild(link);
                }
            });
        };
    }, []);

    return (
        <>
            <Menu />
            <MobileMenu />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <div>
                        <main>{children}</main>
                        <footer>
                            <div className="footer-one-wrapper w-full pt-[130px]">
                                <div className="mx-auto theme-container">
                                    <div className="w-full">
                                        <div className="top-bar w-full flex md:flex-row md:justify-between items-center flex-col space-y-10 md:space-y-0 md:mb-[80px] mb-10">
                                            <div>
                                                <img
                                                    src="/images/logo-1.webp"
                                                    alt=""
                                                />
                                            </div>
                                            <ul className="flex flex-wrap gap-5 md:gap-14 md:items-center">
                                                <li className="font-semibold text-18 hover:text-purple hover:underline common-transition text-paragraph">
                                                    <Link href="/">
                                                        Facebook
                                                    </Link>
                                                </li>
                                                <li className="font-semibold text-18 hover:text-purple hover:underline common-transition text-paragraph">
                                                    <Link href="/">
                                                        Twitter
                                                    </Link>
                                                </li>
                                                <li className="font-semibold text-18 hover:text-purple hover:underline common-transition text-paragraph">
                                                    <Link href="/">
                                                        Instagram
                                                    </Link>
                                                </li>
                                                <li className="font-semibold text-18 hover:text-purple hover:underline common-transition text-paragraph">
                                                    <Link href="/">
                                                        LinkedIn
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="w-full py-[80px] border-t border-[e7e3fa] grid xl:grid-cols-12 md:grid-cols-3 md:gap-10 grid-cols-2 gap-8">
                                            <div className="xl:col-span-3">
                                                <div className="w-full mb-10">
                                                    <p className="text-main-black text-18 font-semibold mb-[30px]">
                                                        Address
                                                    </p>
                                                    <p className="font-medium text-paragraph">
                                                        55 Street, 2nd block,
                                                        3rd Floor <br />
                                                        Melbourne, Australia
                                                    </p>
                                                </div>
                                                <div className="w-full">
                                                    <p className="text-main-black text-18 font-semibold mb-[30px]">
                                                        Contact
                                                    </p>
                                                    <p className="font-medium text-paragraph">
                                                        <Link
                                                            href="https://quomodothemes.website/cdn-cgi/l/email-protection"
                                                            className="__cf_email__"
                                                            data-cfemail="9cf5f2faf3ede9f0fdf2f8dcfbf1fdf5f0b2fff3f1"
                                                        >
                                                            [email&nbsp;protected]
                                                        </Link>
                                                        <br />
                                                        +880 456 852 99
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="xl:col-span-2">
                                                <div className="w-full">
                                                    <p className="text-main-black text-18 font-semibold mb-[30px]">
                                                        Services
                                                    </p>
                                                    <ul className="flex flex-col space-y-2.5">
                                                        <li className="font-medium hover:text-purple hover:underline common-transition text-paragraph">
                                                            <Link href="project-details.html">
                                                                Keyword Research
                                                            </Link>
                                                        </li>
                                                        <li className="font-medium hover:text-purple hover:underline common-transition text-paragraph">
                                                            <Link href="project-details.html">
                                                                Email marketing
                                                            </Link>
                                                        </li>
                                                        <li className="font-medium hover:text-purple hover:underline common-transition text-paragraph">
                                                            <Link href="project-details.html">
                                                                Content
                                                                marketing
                                                            </Link>
                                                        </li>
                                                        <li className="font-medium hover:text-purple hover:underline common-transition text-paragraph">
                                                            <Link href="project-details.html">
                                                                Web Development
                                                            </Link>
                                                        </li>
                                                        <li className="font-medium hover:text-purple hover:underline common-transition text-paragraph">
                                                            <Link href="project-details.html">
                                                                Social Marketing
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="xl:col-span-2">
                                                <div className="w-full">
                                                    <p className="text-main-black text-18 font-semibold mb-[30px]">
                                                        Quick Link
                                                    </p>
                                                    <ul className="flex flex-col space-y-2.5">
                                                        <li className="font-medium hover:text-purple hover:underline common-transition text-paragraph">
                                                            <Link href="contact.html">
                                                                Help center
                                                            </Link>
                                                        </li>
                                                        <li className="font-medium hover:text-purple hover:underline common-transition text-paragraph">
                                                            <Link href="blog.html">
                                                                Tutorials
                                                            </Link>
                                                        </li>
                                                        <li className="font-medium hover:text-purple hover:underline common-transition text-paragraph">
                                                            <Link href="contact.html">
                                                                Create a ticket{" "}
                                                            </Link>
                                                        </li>
                                                        <li className="font-medium hover:text-purple hover:underline common-transition text-paragraph">
                                                            <Link href="team-members.html">
                                                                Meet Our Team
                                                            </Link>
                                                        </li>
                                                        <li className="font-medium hover:text-purple hover:underline common-transition text-paragraph">
                                                            <Link href="faq.html">
                                                                FAQs
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="xl:col-span-2">
                                                <div className="w-full">
                                                    <p className="text-main-black text-18 font-semibold mb-[30px]">
                                                        Company
                                                    </p>
                                                    <ul className="flex flex-col space-y-2.5">
                                                        <li className="font-medium hover:text-purple hover:underline common-transition text-paragraph">
                                                            <Link href="about.html">
                                                                About us
                                                            </Link>
                                                        </li>
                                                        <li className="font-medium hover:text-purple hover:underline common-transition text-paragraph">
                                                            <Link href="projects.html">
                                                                Careers
                                                            </Link>
                                                        </li>
                                                        <li className="font-medium hover:text-purple hover:underline common-transition text-paragraph">
                                                            <Link href="blog.html">
                                                                News &amp; Blog{" "}
                                                            </Link>
                                                        </li>
                                                        <li className="font-medium hover:text-purple hover:underline common-transition text-paragraph">
                                                            <Link href="blog-details.html">
                                                                Our Reviews
                                                            </Link>
                                                        </li>
                                                        <li className="font-medium hover:text-purple hover:underline common-transition text-paragraph">
                                                            <Link href="contact.html">
                                                                Contact Us
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-span-2 xl:col-span-3 md:col-span-1">
                                                <div className="w-full mb-10">
                                                    <p className="text-main-black text-18 font-semibold mb-[30px]">
                                                        Newsletter
                                                    </p>
                                                    <p className="font-medium text-paragraph mb-[30px]">
                                                        Subscribe newsletter to
                                                        get updates
                                                    </p>
                                                    <div className="mb-2.5">
                                                        <input
                                                            placeholder="Email Address"
                                                            id="eOne"
                                                            type="text"
                                                            className="placeholder:text-paragraph w-full h-[56px] bg-main-gray border border-[#e7e3fa] focus:border-purple focus:outline-none focus:right-0 rounded-full px-[25px]"
                                                        />
                                                    </div>
                                                    <Link href="/">
                                                        <div className="inline-flex py-3 home-two-btn-bg group bg-purple border-purple">
                                                            <span className="relative z-10 text-base text-white transition-all duration-300 group-hover:text-purple font-inter">
                                                                Subscribe
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
                                </div>
                                <div
                                    className="w-full md:h-[65px] h-10"
                                    style={{
                                        background:
                                            "linear-gradient(90deg,#794aff 0%,#f3f4f9 63.23%)",
                                    }}
                                >
                                    <div className="h-full mx-auto theme-container">
                                        <div className="flex items-center justify-between w-full h-full text-xs md:text-base">
                                            <span className="text-white">
                                                2024 © All rights reserved by{" "}
                                                <strong>Quland</strong>
                                            </span>
                                            <div className="relative hidden md:block">
                                                <a
                                                    href="#"
                                                    aria-label="go top"
                                                    className="w-[45px] h-[45px] rounded-full border-[3px] border-white flex justify-center items-center bg-blue-sass absolute -top-[55px]"
                                                >
                                                    <span>
                                                        <svg
                                                            width={45}
                                                            height={45}
                                                            viewBox="0 0 45 45"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <circle
                                                                cx="22.5"
                                                                cy="22.5"
                                                                r={21}
                                                                fill="#4A7DFF"
                                                                stroke="white"
                                                                strokeWidth={3}
                                                            />
                                                            <path
                                                                d="M19 21L23 17M23 17L27 21M23 17V29"
                                                                stroke="white"
                                                                strokeWidth={2}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </span>
                                                </a>
                                            </div>
                                            <ul className="items-center hidden md:space-x-6 md:flex">
                                                <li className="font-medium hover:text-purple hover:underline common-transition text-paragraph">
                                                    <Link href="/">
                                                        Privacy Policy
                                                    </Link>
                                                </li>
                                                <li className="font-medium text-paragraph">
                                                    |
                                                </li>
                                                <li className="font-medium hover:text-purple hover:underline common-transition text-paragraph">
                                                    <Link href="/">
                                                        Terms &amp; Conditions
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
