import { HeroImageBlock } from "@/components/Hero/const/HeroImageBlock";
import ServicesPage from "@/Pages/SecondPageComponents/AboutMain/AboutMain";
import FAQ from "@/Pages/SecondPageComponents/FAQ/FAQ";
import MainGallery from "@/Pages/SecondPageComponents/GalleryMain/MainGallery";
import SomeVideos from "@/Pages/SecondPageComponents/SomeVideos/SomeVideos";
import React from "react";

const page = () => {
  return (
    <>
      <HeroImageBlock src="/imagesHomePage/heroRev.svg" alt="Маніпулятори" />
      <ServicesPage />
      <FAQ />
      <MainGallery />
      <SomeVideos />
    </>
  );
};

export default page;
