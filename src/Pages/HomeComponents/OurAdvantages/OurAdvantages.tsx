import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

const OurAdvantages = () => {
  return (
    <Box position="relative" maxWidth="1240px" width="100%" margin="112px auto">
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "0",
          paddingTop: "46.45%",
        }}
      >
        <Image
          src="/OurImg/Our.svg"
          alt="Наші переваги"
          fill
          style={{ objectFit: "contain" }}
        />
      </Box>
    </Box>
  );
};

export default OurAdvantages;
