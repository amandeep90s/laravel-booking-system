import Menu from "@/Components/Menu";
import MobileMenu from "@/Components/MobileMenu";
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

    return (
        <>
            <Menu />
            <MobileMenu />

            {children}
        </>
    );
}
