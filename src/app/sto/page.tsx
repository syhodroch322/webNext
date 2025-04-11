import { HeroImageBlock } from "@/components/Hero/const/HeroImageBlock";
import MainInfo from "@/Pages/STO_Components/Main/MainInfo";
import React from "react";

const page = () => {
  return (
    <>
      <HeroImageBlock src="/imagesHomePage/forSto.svg" alt="Маніпулятори" />
      <MainInfo />
    </>
  );
};

export default page;
