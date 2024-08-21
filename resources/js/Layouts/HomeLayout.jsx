import Menu from '@/Components/Menu';
import MobileMenu from '@/Components/MobileMenu';
import { useEffect } from 'react';
import Footer from '@/Components/Footer.jsx';

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

    // Function to dynamically load scripts
    const loadScripts = async () => {
      const loadedScripts = [];
      for (const src of scripts) {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        document.body.appendChild(script);
        loadedScripts.push(script);

        // Wait for each script to load
        await new Promise((resolve) => {
          script.onload = resolve;
        });
      }

      // Initialize AOS after scripts are loaded
      if (window.AOS) {
        window.AOS.init();
      }

      return loadedScripts;
    };

    let loadedScripts = [];
    loadScripts().then((scripts) => (loadedScripts = scripts));

    // Cleanup on component unmount
    return () => {
      loadedScripts.forEach((script) => {
        document.body.removeChild(script);
      });
    };
  }, []);

  useEffect(() => {
    const cssFiles = ['/css/swiper-bundle.min.css', '/css/aos.css', '/css/output.css', '/css/style.css'];

    // Function to dynamically load CSS files
    const loadCSSFiles = () => {
      const loadedLinks = [];
      cssFiles.forEach((href) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
        loadedLinks.push(link);
      });
      return loadedLinks;
    };

    const loadedLinks = loadCSSFiles();

    // Cleanup on component unmount
    return () => {
      loadedLinks.forEach((link) => {
        document.head.removeChild(link);
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
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
