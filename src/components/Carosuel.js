import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  return (
    <div className="bg-neutral-800 rounded-xl mx-5">
      
      <HorizontalScrollCarousel />
     
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);

  return (
    <section ref={targetRef} className="relative h-[150vh] bg-neutral-900 ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-xl font-Aeo uppercase text-black backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: "../public/india.jpg",
    title: "Rail Madad is a comprehensive passenger grievance redressal system featuring a user-friendly interface, AI-powered complaint resolution, and a dedicated chatbot for instant assistance.",
    id: 1,
  },
  {
    url: "../public/hi.jpg",
    title: "Experience hassle-free railway journeys with Rail Madad's innovative platform that combines a chatbot, advanced AI, and a seamless interface to address passenger concerns efficiently.",
    id: 2,
  },
  {
    url: "../public/hi.jpg",
    title: "Rail Madad leverages AI and cutting-edge technology to provide a superior passenger experience, offering a chatbot for quick queries and an intuitive platform for complaint resolution.",
    id: 3,
  },
  {
    url: "../public/hi.jpg",
    title: "Beyond complaint registration, Rail Madad's AI-driven platform offers intelligent solutions, while the chatbot provides real-time support, ensuring passenger satisfaction.",
    id: 4,
  },
 

  
];