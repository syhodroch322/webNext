"use client";
import { Close, KeyboardArrowDown } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Modal,
  TextField,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import MyButton from "../MyButton";
import Link from "next/link";
import { servicesT } from "../const/const";

export default function Header() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, phone });
    alert("Дякуємо! Ми зателефонуємо вам.");
    setName("");
    setPhone("");
    handleCloseMod();
  };

  const [openMod, setOpenMod] = useState(false);
  const handleOpenMod = () => setOpenMod(true);
  const handleCloseMod = () => setOpenMod(false);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [hoveredImage, setHoveredImage] = useState(servicesT[0].img);

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
            <Link href="/" passHref>
              <Image
                src="/images/Vector.svg"
                alt="logo"
                width={218}
                height={80}
                style={{ cursor: "pointer" }}
              />
            </Link>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: "32px",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Button component={Link} href="/about" color="inherit">
              Про нас
            </Button>

            <Button
              onClick={handleClick}
              color="inherit"
              sx={{ textTransform: "none", fontSize: "18px" }}
              endIcon={<KeyboardArrowDown />}
            >
              Послуги
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              sx={{
                "& .MuiPaper-root": {
                  display: "flex",
                  padding: "16px",
                  gap: "24px",
                  borderRadius: "16px",
                  backgroundColor: "#272E36",
                  color: "#fff",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "24px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  {servicesT.map((item, index) => (
                    <MenuItem
                      key={index}
                      onMouseEnter={() => setHoveredImage(item.img)}
                      onClick={handleClose}
                      sx={{
                        color: "#fff",
                        fontSize: "16px",
                        "&:hover": {
                          color: "#FBB216",
                          backgroundColor: "transparent",
                        },
                      }}
                      component={Link}
                      href={item.href}
                    >
                      {item.title}
                    </MenuItem>
                  ))}
                </Box>
                <Box sx={{ display: { xs: "none", md: "block" } }}>
                  <Image
                    src={hoveredImage}
                    alt="Service image"
                    width={275}
                    height={189}
                    style={{
                      borderRadius: "12px",
                      objectFit: "contain",
                      padding: "10px",
                      border: "2px solid teal",
                      marginTop: "24px",
                    }}
                  />
                </Box>
              </Box>
            </Menu>
            <Button component={Link} href="/reviewss" color="inherit">
              Відгуки
            </Button>
            <Button component={Link} href="/contacts" color="inherit">
              Контакти
            </Button>
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
          <MyButton onClick={handleOpenMod}>Замовити</MyButton>
          <Modal
            open={openMod}
            onClose={handleCloseMod}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "648px",
                bgcolor: "#FFFDFD",
                border: "2px solid teal",
                boxShadow: 24,
                p: "32px 50px",
                borderRadius: "24px",
              }}
            >
              <IconButton
                onClick={handleCloseMod}
                sx={{ position: "absolute", top: 16, right: 16 }}
              >
                <Close />
              </IconButton>
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: 700,
                  fontSize: { xs: "36px", md: "48px" },
                  marginBottom: "16px",
                }}
                id="modal-modal-title"
                variant="h2"
              >
                Заявка
              </Typography>
              <form onSubmit={handleSubmit}>
                <Typography sx={{ fontSize: "20px" }}>Ваше Імʼя:</Typography>
                <TextField
                  value={name}
                  placeholder="Як до вас звертатися?"
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                  required
                  sx={{
                    marginTop: "8px",
                    mb: "24px",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                    },
                    "& fieldset": {
                      borderColor: "#FBB216",
                    },
                  }}
                ></TextField>
                <Typography sx={{ fontSize: "20px" }}>
                  Ваш номер телефону:
                </Typography>
                <TextField
                  value={phone}
                  placeholder="+380-ХХ-ХХХ-ХХ-ХХ"
                  onChange={(e) => setPhone(e.target.value)}
                  fullWidth
                  required
                  sx={{
                    marginTop: "8px",
                    mb: "24px",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                    },
                    "& fieldset": {
                      borderColor: "#FBB216",
                    },
                  }}
                ></TextField>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: "#FBB216",

                    color: "#000",
                    borderRadius: "12px",
                    fontSize: "20px",
                    fontWeight: 600,
                    p: "12px 48px",
                    "&:hover": {
                      backgroundColor: "#e6a200",
                    },
                  }}
                >
                  Надіслати
                </Button>
              </form>
            </Box>
          </Modal>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
