import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const MainGallery = () => {
  return (
    <Box sx={{ maxWidth: "1240px", margin: "100px auto" }}>
      <Box
        sx={{
          textAlign: "center",
          padding: "40px 0",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "18px", md: "24px" },
            fontWeight: 600,
            color: "#9B2915",
            textTransform: "uppercase",
          }}
        >
          Галерея
        </Typography>
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: "38px", md: "48px", fontWeight: 700 } }}
        >
          Ми дбаємо про наших клієнтів
        </Typography>
        <Box
          sx={{
            width: "100%",
            maxWidth: "1240px",
            margin: "48px auto 0",
            borderRadius: "24px",
            overflow: "hidden",
            position: "relative",
            aspectRatio: "16 / 10",
          }}
        >
          <Image
            src={"/videoSecondPage/gallery.svg"}
            alt={"gallery"}
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MainGallery;
