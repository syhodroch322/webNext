"use client";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { vidix } from "./const";
import MyButton from "@/components/MyButton";

const RandomViedeos = () => {
  return (
    <Box sx={{ maxWidth: "1240px", margin: "48px auto" }}>
      <Box sx={{ marginTop: "100px", textAlign: "center" }}>
        <Typography
          sx={{
            color: "#9B2915",
            fontSize: "24px",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          Цікаве з місця подій
        </Typography>
        <Typography
          variant="h2"
          sx={{ color: "#0A0A0A", fontSize: "48px", fontWeight: "600" }}
        >
          Виконані роботи
        </Typography>
      </Box>
      <Grid
        container
        spacing={1}
        sx={{ marginTop: "48px", display: "flex", justifyContent: "center" }}
      >
        {vidix.map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Box
              sx={{
                border: "2px solid #FBB216",
                borderRadius: "12px",
                overflow: "hidden",
                padding: "32px",
                maxWidth: "610px",
                maxHeight: "437px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={item.src}
                alt={item.alt}
                sx={{
                  borderRadius: "16px",
                  width: "546px",
                  height: "285px",
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  padding: "32px",
                  maxWidth: "610px",
                  fontWeight: 600,
                  textAlign: "center",
                  flexWrap: "wrap",
                }}
              >
                {item.discription}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "48px",
        }}
      >
        <MyButton>Більше робіт</MyButton>
      </Box>
    </Box>
  );
};

export default RandomViedeos;
