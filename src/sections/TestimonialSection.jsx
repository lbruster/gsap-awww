import { useRef } from "react";
import { cards } from "../constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TestimonialSection = () => {
  // 1. useState: Manages the array of cards (the list data)
  const [cards, setCards] = useState([]);
  // 3. useEffect: Used here to load the initial card data once when the component mounts
  useEffect(() => {
    // In a real app, you would fetch data here (e.g., axios.get('/api/cards'))
    // For now, we'll use the static data:
    setCards(INITIAL_CARDS);

    // Cleanup function (optional for this simple case, but good practice)
    return () => {
      // Any cleanup needed when the component unmounts
    };
  }, []); // The empty array ensures this runs only ONCE after the initial render

  const vdRef = useRef([]);

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
    video.play();
  };

  const handlePause = (index) => {
    const video = vdRef.current[index];
    video.pause();
  };

  console.log(cards);

  return (
    <section className="testimonials-section">
      <div className="absolute size-full flex flex-col items-center py-[5vw]">
        <h1 className="text-black first-title">What's</h1>
        <h1 className="text-light-brown sec-title">Everyone</h1>
        <h1 className="text-black third-title">Talking</h1>
      </div>

      <div className="pin-box">
        {(!cards.lenght || cards.length === 0) && <h1>No hay cards</h1>}
        {/* usar useState / useEffect para manejar el array */}
        {cards.map((card, index) => {
          <div
            key={index}
            className={`vd-card ${card.translation} ${card.rotation}`}
            onMouseEnter={() => handlePlay(index)}
            onMouseLeave={() => handlePause(index)}
          >
            <h1>ejecutando</h1>
            {/* src: "/videos/f1.mp4",
    rotation: "rotate-z-[-10deg]",
    name: "Madison",
    img: "/images/p1.png",
    translation: "translate-y-[-5%]", */}
            <video
              ref={(el) => (vdRef.current[index] = el)}
              src={card.src} /* {card.src} */ /*"/videos/f1.mp4"*/
              playsInline
              muted
              loop
              className="size-full object-cover"
            />
          </div>;
        })}
        {cards.length === 0 && <p>Loading videos...</p>}
      </div>
    </section>
  );
};

export default TestimonialSection;
