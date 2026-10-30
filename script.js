
const darkModeToggle = document.querySelector("#darkModeToggle");
const scrollProgress = document.querySelector("#scroll-progress");

darkModeToggle.addEventListener("click", () => {
    const isDarkMode = document.documentElement.classList.toggle("dark");
    darkModeToggle.setAttribute("aria-pressed", String(isDarkMode));
});

if (!window.gsap || !window.ScrollTrigger) {
    throw new Error("GSAP and ScrollTrigger must load before script.js.");
}

gsap.registerPlugin(ScrollTrigger);

let introTimeline;
const motionEffects = gsap.matchMedia();

motionEffects.add("(prefers-reduced-motion: no-preference)", () => {
    scrollProgress.hidden = false;

    // power3.out settles quickly while keeping the intro gentle.
    introTimeline = gsap.timeline({
        defaults: {
            duration: 0.65,
            ease: "power3.out"
        }
    });

    introTimeline
        .from(".hero-kicker", { autoAlpha: 0, y: 18 })
        .from(".hero-title", { autoAlpha: 0, y: 24 }, "-=0.4")
        .from(".hero-copy", { autoAlpha: 0, y: 16 }, "-=0.4")
        .from(".hero-actions > *", { autoAlpha: 0, y: 14, stagger: 0.12 }, "-=0.4")
        .from(".hero-image", { autoAlpha: 0, y: 20, scale: 0.98 }, "-=0.4");

    gsap.utils.toArray(".reveal").forEach((section) => {
        gsap.fromTo(
            section,
            { autoAlpha: 0, y: 24 },
            {
                autoAlpha: 1,
                y: 0,
                duration: 0.7,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 82%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    gsap.fromTo(
        "#scroll-progress",
        { scaleX: 0, transformOrigin: "left center" },
        {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
                trigger: document.documentElement,
                start: "top top",
                end: "bottom bottom",
                scrub: true
            }
        }
    );

    return () => {
        introTimeline = undefined;
        scrollProgress.hidden = true;
    };
});