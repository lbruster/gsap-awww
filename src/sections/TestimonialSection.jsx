import { useRef } from "react";
import { cards } from "../constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TestimonialSection = () => {
  const vdRef = useRef([]);
  const vdWrapRef = useRef([]);

  useGSAP(() => {
    gsap.set(".testimonials-section", {
      marginTop: "-140vh",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top bottom",
        end: "200% top",
        scrub: true,
      },
    });

    tl.to(".testimonials-section .first-title", {
      xPercent: 70,
    })
      .to(
        ".testimonials-section .sec-title",
        {
          xPercent: 25,
        },
        "<"
      )
      .to(
        ".testimonials-section .third-title",
        {
          xPercent: -50,
        },
        "<"
      );

    const pinTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "10% top",
        end: "200% top",
        scrub: 1.5,
        pin: true,
      },
    });

    pinTl.from(".vd-card", {
      yPercent: 150,
      stagger: 0.2,
      ease: "power1.inOut",
    });
  });

  const handlePlay = (index) => {
    const video = vdRef.current[index];

    const videochild = video.parentElement;
    videochild.classList.add("vd-priority");

    video.play();
  };

  const handlePause = (index) => {
    const video = vdRef.current[index];

    const videochild = video.parentElement;
    videochild.classList.remove("vd-priority");

    video.pause();
  };

  return (
    <section className="testimonials-section">
      <div className="absolute size-full flex flex-col items-center py-[5vw]">
        <h1 className="text-black first-title">What's</h1>
        <h1 className="text-light-brown sec-title">Everyone</h1>
        <h1 className="text-black third-title">Talking</h1>
      </div>

      <div className="pin-box">
        {/*  {cards.map((card, index) => {
          {
            return <p key={index}>{card.src}</p>;
          }
        })} */}
        {cards.map((card, index) => {
          return (
            <div
              key={index}
              /* ref={(elwa) => (videoWrapper.current[index] = elwa)} */
              className={`vd-card ${card.translation} ${card.rotation}`}
              onMouseEnter={() => handlePlay(index)}
              onMouseLeave={() => handlePause(index)}
            >
              {/*  <h1>ejecutando</h1> */}
              {/* src: "/videos/f1.mp4",
    rotation: "rotate-z-[-10deg]",
    name: "Madison",
    img: "/images/p1.png",
    translation: "translate-y-[-5%]", */}
              <video
                ref={(el) => (vdRef.current[index] = el)}
                src={card.src} /*  */
                playsInline
                muted
                loop
                className="size-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TestimonialSection;
