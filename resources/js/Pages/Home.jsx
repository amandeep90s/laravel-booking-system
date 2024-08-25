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
                  <span className="md:text-20 text-purple pointer-events-auto text-sm font-semibold">
                    ਰਾਜ ਬਿਨਾ ਨਹਿ ਧਰਮ ਚਲੈ ਹੈਂ । ਧਰਮ ਬਿਨਾ ਸਭ ਦਲੈ ਮਲੈ ਹੈਂ ।
                  </span>
                </div>
                <h2 className="md:text-48 text-main-black pointer-events-auto mb-[35px] text-4xl font-semibold">
                  <span>Member Parliament (khadoor sahib) </span> <br />
                  <span className="relative inline-block px-3 font-bold uppercase text-white">
                    <span className="relative z-10">Bhai Amritpal Singh Khalsa</span>
                    <span className="from-purple absolute left-0 top-0 block h-full w-full bg-gradient-to-r" />
                  </span>
                  <br />
                </h2>
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
