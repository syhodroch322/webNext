"use client";
import { KeyboardArrowDown } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import MyButton from "../MyButton";

export default function Header() {
  const [language, setLanguage] = useState<"ua" | "ru">("ua");

  const switchLanguage = (lang: "ua" | "ru") => {
    setLanguage(lang);
  };
  return (
    <Box sx={{ margin: "20px auto", maxWidth: "1240px" }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#272E36",
          borderRadius: "24px",
          px: { xs: 2, md: 4 },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            py: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/images/Vector.svg"
              alt="logo"
              width={218}
              height={46}
            />
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: "32px",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Button color="inherit">Про нас</Button>
            <IconButton color="inherit" sx={{ borderRadius: "12px" }}>
              <Typography color="white" fontSize={16}>
                Послуги
              </Typography>
              <KeyboardArrowDown />
            </IconButton>
            <Button color="inherit">Відгуки</Button>
            <Button color="inherit">Контакти</Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <Box sx={{ display: "flex", gap: "4px", alignItems: "center" }}>
              <Typography
                onClick={() => switchLanguage("ua")}
                sx={{
                  color: language === "ua" ? "#FBB216" : "white",
                  fontWeight: language === "ua" ? "bold" : "normal",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                Укр
              </Typography>
              <Typography sx={{ color: "white", fontSize: "14px" }}>
                |
              </Typography>
              <Typography
                onClick={() => switchLanguage("ru")}
                sx={{
                  color: language === "ru" ? "#FBB216" : "white",
                  fontWeight: language === "ru" ? "bold" : "normal",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                Рус
              </Typography>
            </Box>

            <Typography
              sx={{
                color: "#FBB216",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              <a
                href="tel:+380991234567"
                style={{ textDecoration: "none", color: "#FBB216" }}
              >
                +38 (099) 123-45-67
              </a>
            </Typography>
          </Box>

          <MyButton>Замовити</MyButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
