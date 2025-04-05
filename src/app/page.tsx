import AboutUs from "@/Pages/HomeComponents/AboutUs/AboutUs";
import AnimationScroll from "@/Pages/HomeComponents/AnimationScroll/AnimationScroll";
import FAQ from "@/Pages/HomeComponents/FAQ/FAQ";
import HeroImage from "@/Pages/HomeComponents/HeroImages/HeroImage";
import OurAdvantages from "@/Pages/HomeComponents/OurAdvantages/OurAdvantages";
import OurServices from "@/Pages/HomeComponents/OurServices/OurServices";
import RandomViedeos from "@/Pages/HomeComponents/RandomVideos/RandomViedeos";
import SomeNumbers from "@/Pages/HomeComponents/SomeNumbers/SomeNumbers";

export default function Home() {
  return (
    <>
      <HeroImage />
      <AnimationScroll />
      <AboutUs />
      <SomeNumbers />
      <OurServices />
      <RandomViedeos />
      <OurAdvantages />
      <FAQ />
    </>
  );
}
