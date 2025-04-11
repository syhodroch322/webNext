import { HeroImageBlock } from "@/components/Hero/const/HeroImageBlock";
import FAQ from "@/Pages/HomeComponents/FAQ/FAQ";
import AboutMain from "@/Pages/SecondPageComponents/AboutMain/AboutMain";
import MainGallery from "@/Pages/SecondPageComponents/GalleryMain/MainGallery";
import SomeVideos from "@/Pages/SecondPageComponents/SomeVideos/SomeVideos";

const AboutPage = () => {
  return (
    <>
      <HeroImageBlock src="/imagesHomePage/HeroImage2.svg" alt="Маніпулятори" />
      <AboutMain />
      <SomeVideos />
      <MainGallery />
      <FAQ />
    </>
  );
};

export default AboutPage;
