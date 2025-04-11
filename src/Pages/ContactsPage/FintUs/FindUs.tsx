import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const FindUs = () => {
  return (
    <Box
      sx={{
        maxWidth: "1240px",
        width: "100%",
        margin: "80px auto",
      }}
    >
      <Box sx={{ textAlign: "center", marginBottom: "48px" }}>
        <Typography variant="h2" sx={{ fontSize: "48px", fontWeight: 700 }}>
          Як нас знайти
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
        }}
      >
        <Box
          sx={{
            flex: 2,
            borderRadius: "16px",
            overflow: "hidden",
            minHeight: "509px",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2644.447142592026!2d22.300362315904877!3d48.620822123073846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473918f59e2db60b%3A0xe90c01d0e000000!2z0J7QsdC40LvQtdC90LjQuiDQn9C-0LvRjNC90YssINCd0L7RgdC90LDRjywg0KPQutGA0LDQuNC90LAsIDA4MDAw!5e0!3m2!1suk!2sua!4v1712587771111!5m2!1suk!2sua"
            width="100%"
            loading="lazy"
            style={{ border: "2px solid teal", minHeight: "509px" }}
          ></iframe>
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 2,
            paddingLeft: "57px",
          }}
        >
          <Image
            src="/mapImg/map1.svg"
            alt="Крок 1"
            width={285}
            height={160}
            style={{ borderRadius: "12px", border: "2px solid teal" }}
          />
          <Image
            src="/mapImg/map2.svg"
            alt="Крок 2"
            width={285}
            height={160}
            style={{ borderRadius: "12px", border: "2px solid teal" }}
          />
          <Image
            src="/mapImg/map3.svg"
            alt="Крок 3"
            width={285}
            height={160}
            style={{ borderRadius: "12px", border: "2px solid teal" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FindUs;
