import { HeroImageBlock } from "@/components/Hero/const/HeroImageBlock";
import RewievsMain from "@/Pages/ReviewsPage/Reviewss/RewievsMain";
import React from "react";

const page = () => {
  return (
    <>
      <HeroImageBlock src="/imagesHomePage/heroRev.svg" alt="Маніпулятори" />
      <RewievsMain />
    </>
  );
};

export default page;
