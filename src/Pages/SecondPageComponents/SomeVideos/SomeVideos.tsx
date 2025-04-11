"use client";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { vidixTwo } from "../const";
import Image from "next/image";

const SomeVideos = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "40px 0",
        maxWidth: "1240px",
        margin: "100px auto",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: "#9B2915",
          fontWeight: 600,
          fontSize: "24px",
          textTransform: "uppercase",
        }}
      >
        Відео
      </Typography>
      <Typography
        variant="h2"
        sx={{ fontWeight: 700, mb: 4, fontSize: { xs: "38px", md: "48px" } }}
      >
        Як ми працюємо
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "repeat(3, 1fr)",
          },
          gap: 2,
          mb: 4,
        }}
      >
        {vidixTwo.map((video, index) => (
          <Box
            key={index}
            sx={{
              border: "2px solid #FBB216",
              borderRadius: "12px",
              overflow: "hidden",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Image
              src={video.image}
              alt={video.title}
              width={368}
              height={208}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "18px",
                p: 2,
              }}
            >
              {video.title}
            </Typography>
          </Box>
        ))}
      </Box>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FBB216",
          color: "#000",
          fontSize: "20px",
          fontWeight: 600,
          px: 4,
          py: 1.5,
          borderRadius: "12px",
        }}
      >
        Більше відео
      </Button>
    </Box>
  );
};

export default SomeVideos;
