import { HeroImageBlock } from "@/components/Hero/const/HeroImageBlock";
import Contacts from "@/Pages/ContactsPage/Contacts/Contacts";
import FindUs from "@/Pages/ContactsPage/FintUs/FindUs";
import React from "react";

const page = () => {
  return (
    <>
      <HeroImageBlock src="/imagesHomePage/contacts.svg" alt="Маніпулятори" />
      <Contacts />
      <FindUs />
    </>
  );
};

export default page;
