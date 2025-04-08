import { HeroImageBlock } from "@/components/Hero/const/HeroImageBlock";
import FAQ from "@/Pages/HomeComponents/FAQ/FAQ";
import RentCrainew from "@/Pages/RentPageComponents/RentCrainew/RentCrainew";
import RentText from "@/Pages/RentPageComponents/RentText/RentText";
import MainGallery from "@/Pages/SecondPageComponents/GalleryMain/MainGallery";
import SomeVideos from "@/Pages/SecondPageComponents/SomeVideos/SomeVideos";
import React from "react";

const page = () => {
  return (
    <>
      <HeroImageBlock src="/imagesHomePage/rent1.svg" alt="Маніпулятори" />
      <RentCrainew />
      <SomeVideos />
      <MainGallery />
      <FAQ />
      <RentText />
    </>
  );
};

export default page;
