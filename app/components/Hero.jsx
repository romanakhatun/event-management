import HeroBg from "@/public/images/hero-bg.jpg";
import OverlayImg from "@/public/images/hero-bg-overlay.png";
import HeroDish from "@/public/images/hero-dish.jpg";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="min-h-[120vh] bg-center bg-cover flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${OverlayImg.src}), url(${HeroBg.src})`,
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="w-full container mx-auto px-4 lg:px-0">
        <div className="flex justify-between flex-col md:flex-row md:items-center">
          <div className="flex-1">
            <h2 className="text-[28px] font-fraunces text-secondary">
              Deliciously Crafted
            </h2>

            <h1 className="text-5xl lg:text-6xl xl:text-9xl font-fraunces my-4">
              Elegantly Served
            </h1>
            <Link href={"/menus"} className="btn-primary">
              Discover Menus
            </Link>
          </div>
          <div className="flex-1">
            <Image
              src={HeroDish}
              alt="Hero Dish"
              className="w-[90%] hidden md:block lg:w-[400px] object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
