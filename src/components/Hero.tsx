import Button from "./Button";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Copy from "./Copy";
import FadeIn from "./FadeIn";

const marqueeImages = [
  "/images/popout.webp",
  "/images/chris.webp",
  "/images/enesee.webp",
  "/images/ochexagon.webp",
];

export default function Hero() {
  return (
    <div className="wrapper flex flex-col gap-8 items-center min-h-screen">
      <Copy
        animationOptions={{ delay: 0.2, stagger: 0.15, ease: "power2.out" }}
      >
        <h1 className="text-4xl lg:text-5xl  font-bold text-center mt-[180px]">
          Websites That Do More than <br /> Just Look Good
        </h1>
      </Copy>
      <Copy animationOptions={{ delay: 0.8, stagger: 0.1, ease: "power2.out" }}>
        <p className="text-center text-lg max-w-2xl">
          From sleek landing pages to custom web softwares, I build fast,
          conversion-driven websites that feel like you.
        </p>
      </Copy>
      <Copy animationOptions={{ delay: 1.4, ease: "power2.out" }}>
        <div>
          <Button text="Let's Build Yours" link="/" />
        </div>
      </Copy>

        <div className="w-full overflow-hidden mt-12">
          <Marquee speed={40}>
            <FadeIn delay={1.4}>
            <div className="flex">
              {marqueeImages.map((src, i) => (
                
                  <div className="flex-shrink-0 w-[400px] bg-gray-100 rounded-lg border border-gray-200 mx-4 flex items-center justify-center">
                    <Image
                      src={src}
                      alt={`Project ${i + 1}`}
                      width={1000}
                      height={1000}
                      className="w-full rounded-lg"
                    />
                  </div>
                
              ))}
            </div>
            </FadeIn>
          </Marquee>
        </div>
    </div>
  );
}
