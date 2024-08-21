import React from 'react';
import { Link } from '@inertiajs/react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-one-wrapper w-full pt-[130px]">
        <div className="theme-container mx-auto">
          <div className="w-full">
            <div className="top-bar mb-10 flex w-full flex-col items-center space-y-10 md:mb-[80px] md:flex-row md:justify-between md:space-y-0">
              <div>
                <img src="/images/logo-1.webp" alt="" />
              </div>
              <ul className="flex flex-wrap gap-5 md:items-center md:gap-14">
                <li className="text-18 hover:text-purple common-transition text-paragraph font-semibold hover:underline">
                  <Link href="/">Facebook</Link>
                </li>
                <li className="text-18 hover:text-purple common-transition text-paragraph font-semibold hover:underline">
                  <Link href="/">Twitter</Link>
                </li>
                <li className="text-18 hover:text-purple common-transition text-paragraph font-semibold hover:underline">
                  <Link href="/">Instagram</Link>
                </li>
                <li className="text-18 hover:text-purple common-transition text-paragraph font-semibold hover:underline">
                  <Link href="/">LinkedIn</Link>
                </li>
              </ul>
            </div>
            <div className="grid w-full grid-cols-2 gap-8 border-t border-[e7e3fa] py-[80px] md:grid-cols-3 md:gap-10 xl:grid-cols-12">
              <div className="xl:col-span-3">
                <div className="mb-10 w-full">
                  <p className="text-main-black text-18 mb-[30px] font-semibold">Address</p>
                  <p className="text-paragraph font-medium">
                    55 Street, 2nd block, 3rd Floor <br />
                    Melbourne, Australia
                  </p>
                </div>
                <div className="w-full">
                  <p className="text-main-black text-18 mb-[30px] font-semibold">Contact</p>
                  <p className="text-paragraph font-medium">
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
                  <p className="text-main-black text-18 mb-[30px] font-semibold">Services</p>
                  <ul className="flex flex-col space-y-2.5">
                    <li className="hover:text-purple common-transition text-paragraph font-medium hover:underline">
                      <Link href="project-details.html">Keyword Research</Link>
                    </li>
                    <li className="hover:text-purple common-transition text-paragraph font-medium hover:underline">
                      <Link href="project-details.html">Email marketing</Link>
                    </li>
                    <li className="hover:text-purple common-transition text-paragraph font-medium hover:underline">
                      <Link href="project-details.html">Content marketing</Link>
                    </li>
                    <li className="hover:text-purple common-transition text-paragraph font-medium hover:underline">
                      <Link href="project-details.html">Web Development</Link>
                    </li>
                    <li className="hover:text-purple common-transition text-paragraph font-medium hover:underline">
                      <Link href="project-details.html">Social Marketing</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="xl:col-span-2">
                <div className="w-full">
                  <p className="text-main-black text-18 mb-[30px] font-semibold">Quick Link</p>
                  <ul className="flex flex-col space-y-2.5">
                    <li className="hover:text-purple common-transition text-paragraph font-medium hover:underline">
                      <Link href="contact.html">Help center</Link>
                    </li>
                    <li className="hover:text-purple common-transition text-paragraph font-medium hover:underline">
                      <Link href="blog.html">Tutorials</Link>
                    </li>
                    <li className="hover:text-purple common-transition text-paragraph font-medium hover:underline">
                      <Link href="contact.html">Create a ticket </Link>
                    </li>
                    <li className="hover:text-purple common-transition text-paragraph font-medium hover:underline">
                      <Link href="team-members.html">Meet Our Team</Link>
                    </li>
                    <li className="hover:text-purple common-transition text-paragraph font-medium hover:underline">
                      <Link href="faq.html">FAQs</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="xl:col-span-2">
                <div className="w-full">
                  <p className="text-main-black text-18 mb-[30px] font-semibold">Company</p>
                  <ul className="flex flex-col space-y-2.5">
                    <li className="hover:text-purple common-transition text-paragraph font-medium hover:underline">
                      <Link href="about.html">About us</Link>
                    </li>
                    <li className="hover:text-purple common-transition text-paragraph font-medium hover:underline">
                      <Link href="projects.html">Careers</Link>
                    </li>
                    <li className="hover:text-purple common-transition text-paragraph font-medium hover:underline">
                      <Link href="blog.html">News &amp; Blog </Link>
                    </li>
                    <li className="hover:text-purple common-transition text-paragraph font-medium hover:underline">
                      <Link href="blog-details.html">Our Reviews</Link>
                    </li>
                    <li className="hover:text-purple common-transition text-paragraph font-medium hover:underline">
                      <Link href="contact.html">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-2 md:col-span-1 xl:col-span-3">
                <div className="mb-10 w-full">
                  <p className="text-main-black text-18 mb-[30px] font-semibold">Newsletter</p>
                  <p className="text-paragraph mb-[30px] font-medium">Subscribe newsletter to get updates</p>
                  <div className="mb-2.5">
                    <input
                      placeholder="Email Address"
                      id="eOne"
                      type="text"
                      className="placeholder:text-paragraph bg-main-gray focus:border-purple h-[56px] w-full rounded-full border border-[#e7e3fa] px-[25px] focus:right-0 focus:outline-none"
                    />
                  </div>
                  <Link href="/">
                    <div className="home-two-btn-bg bg-purple border-purple group inline-flex py-3">
                      <span className="group-hover:text-purple font-inter relative z-10 text-base text-white transition-all duration-300">
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
        </div>
        <div
          className="h-10 w-full md:h-[65px]"
          style={{
            background: 'linear-gradient(90deg,#794aff 0%,#f3f4f9 63.23%)',
          }}
        >
          <div className="theme-container mx-auto h-full">
            <div className="flex h-full w-full items-center justify-between text-xs md:text-base">
              <span className="text-white">
                2024 © All rights reserved by <strong>Quland</strong>
              </span>
              <div className="relative hidden md:block">
                <a
                  href="#"
                  aria-label="go top"
                  className="bg-blue-sass absolute -top-[55px] flex h-[45px] w-[45px] items-center justify-center rounded-full border-[3px] border-white"
                >
                  <span>
                    <svg width={45} height={45} viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="22.5" cy="22.5" r={21} fill="#4A7DFF" stroke="white" strokeWidth={3} />
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
              <ul className="hidden items-center md:flex md:space-x-6">
                <li className="hover:text-purple common-transition text-paragraph font-medium hover:underline">
                  <Link href="/">Privacy Policy</Link>
                </li>
                <li className="text-paragraph font-medium">|</li>
                <li className="hover:text-purple common-transition text-paragraph font-medium hover:underline">
                  <Link href="/">Terms &amp; Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
