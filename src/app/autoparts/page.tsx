import { HeroImageBlock } from "@/components/Hero/const/HeroImageBlock";
import AutoParts from "@/Pages/AutoParts/Main/AutoParts";
import React from "react";

const page = () => {
  return (
    <>
      <HeroImageBlock src="/imagesHomePage/autoPart.svg" alt="Маніпулятори" />
      <AutoParts />
    </>
  );
};

export default page;
