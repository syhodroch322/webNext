import MyButton from "@/components/MyButton";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const HeroImage = () => {
  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: "1240px",
        padding: "0 16px",
        width: "90%",
        height: { xs: "300px", md: "728px" },
        borderRadius: "24px",
        overflow: "hidden",
        margin: "24px auto",
      }}
    >
      <Image
        src="/imagesHomePage/HeroImage0.svg"
        alt="Hero"
        fill
        style={{
          objectFit: "cover",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: { xs: "50%", md: "60%", lg: "70%" },
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          borderRadius: "24px",
          backdropFilter: "blur(15px)",
          maxWidth: { xs: "350px", md: "600px", lg: "778px" },
          width: "100%",
          padding: { xs: "16px", md: "24px 32px" },
          backgroundColor: "rgba(0, 0, 0, 0.25)",
        }}
      >
        <Typography
          variant="subtitle2"
          color="white"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "10px", sm: "14px", md: "24px" },
            mb: 1,
          }}
        >
          ЦІНА – ВИНЯТОК
        </Typography>

        <Typography
          variant="h3"
          color="white"
          sx={{
            fontSize: { xs: "24px", sm: "40px", md: "64px" },
            fontWeight: 700,
            mb: 2,
          }}
        >
          ЯКІСТЬ – ПРАВИЛО
        </Typography>

        <Typography
          variant="body1"
          color="white"
          sx={{
            fontSize: { xs: "12px", sm: "14px", md: "20px" },
            mb: 3,
          }}
        >
          Послуги крана-маніпулятора, вантажного евакуатора,
          <br />
          СТО вантажних автомобілів, автозапчастини.
        </Typography>
        <MyButton>Замовити</MyButton>
      </Box>
    </Box>
  );
};

export default HeroImage;
