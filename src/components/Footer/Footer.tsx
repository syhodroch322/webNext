import { Facebook, Instagram, YouTube } from "@mui/icons-material";
import { Box, IconButton, Typography, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import { contactsList, equipmentList } from "./const";

const Footer = () => {
  return (
    <Box
      sx={{
        maxWidth: "1240px",
        width: "100%",
        margin: "118px auto",
        padding: { xs: "40px 20px", md: "70px 80px" },
        backgroundColor: "#272E36",
        borderRadius: "32px",
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={3.5} component={"div" as React.ElementType}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              gap: "50px",
            }}
          >
            <Image
              src="/images/Vector.svg"
              alt="Footer"
              width={250}
              height={52}
            />
            <Typography
              sx={{
                color: "#FFFDFD",
                fontSize: { xs: "12px", md: "16px" },
                textAlign: "center",
                marginTop: "32px",
                fontWeight: 400,
              }}
            >
              Ми надаємо послуги спеціальної техніки. <br /> Займаємося
              організацією
              <br /> транспортування, навантаження- <br /> розвантаження
              габаритних і
              <br /> негабаритних вантажів. Гарантоване <br />{" "}
              висококваліфіковане обслуговування за <br /> гнучкими цінами,
              форма оплати будь-яка.
            </Typography>
            <Box
              display="flex"
              gap={2}
              sx={{ marginTop: "32px", justifyContent: "center" }}
            >
              {[Facebook, Instagram, YouTube].map((Icon, index) => (
                <IconButton
                  key={index}
                  sx={{
                    backgroundColor: "#FBB216",
                    color: "#000",
                    width: 56,
                    height: 56,
                    "&:hover": {
                      backgroundColor: "#e6a200",
                    },
                  }}
                >
                  <Icon />
                </IconButton>
              ))}
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={6}
          sm={6}
          md={2.5}
          component={"div" as React.ElementType}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <Typography sx={{ color: "#FFFDFD", fontSize: "18px" }}>
              Послуги
            </Typography>
            <Typography sx={{ color: "#FFFDFD", fontSize: "18px" }}>
              Оренда крана <br /> маніпулятора
            </Typography>
            <Typography sx={{ color: "#FFFDFD", fontSize: "18px" }}>
              Евакуатор
            </Typography>
            <Typography sx={{ color: "#FFFDFD", fontSize: "18px" }}>
              СТО
            </Typography>
            <Typography sx={{ color: "#FFFDFD", fontSize: "18px" }}>
              Запчастини
            </Typography>
            <Typography sx={{ color: "#FFFDFD", fontSize: "18px" }}>
              Маніпулятор
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={6} sm={6} md={3} component={"div" as React.ElementType}>
          <Box
            sx={{
              gap: "12px",
              display: "flex",
              flexDirection: "column",
              maxWidth: "187px",
            }}
          >
            <Typography sx={{ color: "#FFFDFD", fontSize: "18px" }}>
              Наша техніка
            </Typography>
            {equipmentList.map((item, index) => (
              <Typography
                key={index}
                sx={{
                  color: "#FFFDFD",
                  fontSize: "18px",
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} md={3} component={"div" as React.ElementType}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Typography sx={{ color: "#FFFDFD", fontSize: "18px" }}>
              Контакти
            </Typography>
            {contactsList.map((item, index) => (
              <Box key={index} mb={2}>
                <Typography sx={{ color: "#FFFDFD", fontSize: "18px" }}>
                  {item.label}:
                </Typography>
                <Typography
                  component="a"
                  href={item.href}
                  sx={{
                    color: "#FBB216",
                    fontSize: "18px",
                    textDecoration: "none",
                  }}
                >
                  {item.phone}
                </Typography>
              </Box>
            ))}
            <Typography sx={{ color: "#FFFDFD", fontSize: "16px" }}>
              Наша адреса: <br />
              Сектор Ares-3, купол б. 7, <br />
              Кратер Шиапареллі, <br />
              Марсіанська колонія "Red Horizon", <br />
              Сектор Elysium Planitia, Mars 00001.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          borderTop: "1px solid #4A4A4A",

          mt: 6,
          pt: 2,
          textAlign: "center",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "#999",
            fontSize: "14px",
          }}
        >
          © 2003–2025
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
