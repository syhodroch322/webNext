import { HeroImageBlock } from "@/components/Hero/const/HeroImageBlock";
import MainTheme from "@/Pages/AboutUsPage/Main/MainTheme";
import React from "react";

const page = () => {
  return (
    <>
      <HeroImageBlock
        src="/imagesHomePage/aboutUsPage.svg"
        alt="Маніпулятори"
      />
      <MainTheme />
    </>
  );
};
export default page;
