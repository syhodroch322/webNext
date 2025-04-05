"use client";
import React from "react";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { logos } from "./const";
import { Typography } from "@mui/material";

const AnimationScroll = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        marginTop: "100px",
        position: "relative",
        overflow: "hidden",
        height: "auto",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: { xs: "16px", sm: "22px", md: "28px" },
          fontWeight: 700,
          textTransform: "uppercase",
        }}
      >
        {t("НАМ ДОВІРЯЮТЬ ТАКІ КОМПАНІЇ:")}
      </Typography>
      <motion.div
        style={{
          display: "flex",
          marginTop: "26px",
          marginBottom: "150px",
        }}
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        }}
      >
        <Box sx={{ display: "flex", maxWidth: "1900px" }}>
          {logos.map((src, index) => (
            <Box key={index} sx={{ display: "flex" }}>
              <Image
                src={src.url}
                alt={`Company Logo ${index}`}
                width={133}
                height={92}
                style={{ objectFit: "contain", marginRight: "40px" }}
              />
            </Box>
          ))}

          <Box sx={{ display: "flex", marginLeft: "-350px" }}>
            {logos.map((src, index) => (
              <Box key={`dup-${index}`}>
                <Image
                  src={src.url}
                  alt={`Company Logo ${index}`}
                  width={133}
                  height={92}
                  style={{ objectFit: "contain", marginRight: "40px" }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default AnimationScroll;
