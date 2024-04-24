import './homePage.css';
import IndexSection from "../components/IndexSection";
import AboutSection from "./home/AboutSection";
import { Link } from "react-router-dom";
import { GoMail } from "react-icons/go";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect ,useState, useRef, useLayoutEffect } from "react";


function HomePage() {    
    const [activeImg, setActiveImg] = useState('default');
    const sectionRefs = useRef<HTMLDivElement>(null); 
    const imgBoxRef = useRef<HTMLElement>(null);

    useEffect(()=>{
        if (sectionRefs.current) {
            gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);
           
            gsap.context(()=>{
                const scrolling = {
                    enabled: true,
                    events: "scroll,wheel,touchmove,pointermove".split(","),
                    prevent: (e: Event) => {
                        e.preventDefault();
                    },
                    disable() {
                        if (scrolling.enabled) {
                            scrolling.enabled = false;
                            window.addEventListener("scroll", gsap.ticker.tick, {passive: true});
                            scrolling.events.forEach((e, i) => (i ? document : window).addEventListener(e, scrolling.prevent, {passive: false}));
                        }
                    },
                    enable() {
                        if (!scrolling.enabled) {
                            scrolling.enabled = true;
                            window.removeEventListener("scroll", gsap.ticker.tick);
                            scrolling.events.forEach((e, i) => (i ? document : window).removeEventListener(e, scrolling.prevent));
                        }
                    }
                };
                function goToSection(section: HTMLDivElement, anim: GSAPTween) {
                    if (scrolling.enabled) { // skip if a scroll tween is in progress
                            scrolling.disable();
                            gsap.to(window, {
                                scrollTo: {y: section, autoKill: false},
                                onComplete: scrolling.enable,
                                duration: 1
                            });
            
                        anim && anim.restart();
                    }
                }
        
                if(sectionRefs.current) {
                    Array.from(sectionRefs.current.children).forEach((sectionNode, i) => {
                        const section = sectionNode as HTMLDivElement;
                        const imgBox = section.querySelector(".imgbox");
                        let intoAnim: GSAPTween;
                        if (imgBox) {
                            intoAnim = gsap.fromTo(section.querySelector(".imgbox"),{ opacity:0, yPercent: 20 }, { opacity:1, yPercent: 0, duration: 1, paused: true });
                        }
                        ScrollTrigger.create({
                            trigger: section,
                            start: "top bottom-=1",
                            end: "bottom top+=1",
                            onEnter: () => goToSection(section, intoAnim),
                            onEnterBack: () => goToSection(section, intoAnim)
                        });
                        
                    });
                }
            })
            return () => {
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    
            };
        }
    },[])



    const handleHoverIn = (event: React.MouseEvent) => {
        const link: string | null = (event.target as HTMLAnchorElement)?.href;
        if (link&& imgBoxRef.current) {
            let linkName = link?.substring(link.lastIndexOf('/') + 1);
            linkName = linkName?.replace(/\.[^/.]+$/, "");
            setActiveImg(linkName); 
        }
    }
    const handleHoverOut = ()=> {
        setActiveImg('default');
    }

    return (
        <div ref={sectionRefs} className="container mx-auto">
            <section  id="section1" className="grid grid-cols-2 gap-10 h-dvh">
                
                <div className="col-span-1">
                    <AboutSection />
                </div>
                <div className="col-span-1">
                    <div className="imgbox flex flex-col justify-center h-dvh">
                        <img className="w-fit border rounded-lg" src="./images/home/banner.jpg" alt="banner" />
                    </div>
                </div>
            </section>
            <section id="section2" className="grid grid-cols-2 gap-10 h-dvh">
                <div className="col-span-1 md:order-2 order-1">
                    <IndexSection twTitle="專案作品" engTitle="Projects">
                        <div>
                            <Link
                                className="project-name hover:underline"
                                to='/projects/todolist'
                                onMouseEnter={handleHoverIn}
                                onMouseLeave={handleHoverOut}
                            >
                                    迷你Todolist
                            </Link>
                        </div>
                        <div>
                            <Link 
                                className="project-name hover:underline"
                                to='/projects/pokebook'
                                onMouseEnter={handleHoverIn}
                                onMouseLeave={handleHoverOut}
                            >
                                pokebook
                            </Link>
                        </div>
                        <div>
                            <Link 
                                className="project-name hover:underline"
                                to='/projects/pinwork'
                                onMouseEnter={handleHoverIn}
                                onMouseLeave={handleHoverOut}
                            >
                                過去作品
                            </Link>
                        </div>
                        
                    </IndexSection>
                </div>
                <div className="col-span-1 md:order-1 order-2">
                    <div className='flex flex-col justify-center h-dvh imgbox'>
                        <div ref={imgBoxRef as React.LegacyRef<HTMLDivElement>} className="cursor-hover-imgbox border">
                            <div className={`image bg-${activeImg}`}></div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section3" className="grid grdi-cols-2 gap-10 h-dvh">
                <div className="col-span-1 text-center">
                    <IndexSection twTitle="與我聯繫" engTitle="Contact">
                        <div>
                            <a className='inline-flex items-center' href='mailto:chyjreoo@gmail.com'><span><GoMail className='mr-2' /></span>chyjreoo●gmail.com</a>
                        </div>
                    </IndexSection>
                </div>
            </section>
        </div>
    )
    
}

export default HomePage;