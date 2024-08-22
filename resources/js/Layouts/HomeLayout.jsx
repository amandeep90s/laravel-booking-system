import Footer from '@/Components/Footer.jsx';
import Menu from '@/Components/Menu';
import MobileMenu from '@/Components/MobileMenu';
import { useEffect } from 'react';

export default function HomeLayout({ children }) {
  useEffect(() => {
    const scripts = [
      '/js/jquery-3.6.3.min.js',
      '/js/lottie.js',
      '/js/swiper-bundle.min.js',
      '/js/parallax.min.js',
      '/js/aos.js',
      '/js/plugins.js',
      '/js/gsap.min.js',
      '/js/ScrollTrigger.min.js',
      '/js/ScrollSmoother.min.js',
      '/js/main.js',
    ];

    const loadScripts = async () => {
      const loadedScripts = [];
      for (const src of scripts) {
        if (!document.querySelector(`script[src="${src}"]`)) {
          const script = document.createElement('script');
          script.src = src;
          script.async = true;
          document.body.appendChild(script);
          loadedScripts.push(script);

          await new Promise((resolve) => {
            script.onload = resolve;
          });
        }
      }

      if (window.AOS) {
        window.AOS.init();
      }
      if (window.ScrollSmoother) {
        ScrollSmoother.create({
          wrapper: '#smooth-wrapper',
          content: '#smooth-content',
        });
      }

      return loadedScripts;
    };
    loadScripts();
  }, []);

  return (
    <>
      <Menu />
      <MobileMenu />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div>
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
