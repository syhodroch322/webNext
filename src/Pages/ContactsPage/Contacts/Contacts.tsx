"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const Contacts = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { name, contact, message });
    alert("Дякуємо! Ми з Вами зв'яжемося.");
    setName("");
    setContact("");
    setMessage("");
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: "1240px",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        margin: "0 auto",
        width: "100%",
        boxSizing: "border-box",
        gap: "32px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#272E36",
          marginTop: "64px",
          maxWidth: "473px",
          display: "flex",
          flexDirection: "column",
          borderRadius: "24px",
          padding: "32px",
        }}
      >
        <Box sx={{ padding: "32px 78px" }}>
          <Typography
            variant="h3"
            sx={{
              color: "#FFFDFD",
              textAlign: "center",
              fontSize: "32px",
              marginBottom: "32px",
            }}
          >
            Задати питання
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#FFFFFF",
              fontWeight: 600,
              marginBottom: "8px",
            }}
          >
            Ваше Імʼя:
          </Typography>
          <TextField
            placeholder="Як до вас звертатися?"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            required
            sx={{
              input: { color: "#8EA2B2" },
              border: "2px solid #FBB216",
              borderRadius: "8px",
              backgroundColor: "white",
              marginBottom: "16px",
            }}
          />
          <Typography
            sx={{
              fontSize: "20px",
              color: "#FFFFFF",
              fontWeight: 600,
              marginBottom: "8px",
            }}
          >
            Контакт для звʼязку:
          </Typography>
          <TextField
            placeholder="Ваш номер телефону або електронна пошта"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            fullWidth
            required
            sx={{
              input: { color: "#8EA2B2" },
              border: "2px solid #FBB216",
              borderRadius: "8px",
              backgroundColor: "white",
              marginBottom: "16px",
            }}
          />
          <Typography
            sx={{
              fontSize: "20px",
              color: "#FFFFFF",
              fontWeight: 600,
              marginBottom: "8px",
            }}
          >
            Що Вас цікавить?
          </Typography>
          <TextField
            placeholder="Опишіть суть звернення"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            fullWidth
            required
            multiline
            rows={4}
            sx={{
              input: { color: "#8EA2B2" },
              border: "2px solid #FBB216",
              borderRadius: "8px",
              backgroundColor: "white",
              marginBottom: "16px",
            }}
          />
        </Box>
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#FBB216",
            borderRadius: "12px",
            color: "#0A0A0A",
            fontSize: "20px",
            fontWeight: 600,
            mt: 2,
            padding: "12px 155px",
          }}
        >
          Надіслати
        </Button>
      </Box>
      <Box
        sx={{
          backgroundColor: "#E0E6EA",
          borderRadius: "24px",
          padding: { xs: "24px", md: "32px" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: 4,
          marginTop: "64px",
          maxWidth: "735px",
          width: "100%",
        }}
      >
        <Box>
          <Typography
            variant="h3"
            fontWeight={700}
            mb={2}
            sx={{ fontSize: "32px" }}
          >
            Контакти
          </Typography>
          <Typography
            sx={{ marginBottom: "16px", fontSize: "20px", fontWeight: 500 }}
          >
            Кран маніпулятор: <br />
            +38 (050) 000-00-00
          </Typography>
          <Typography
            sx={{ marginBottom: "16px", fontSize: "20px", fontWeight: 500 }}
          >
            Вантажний евакуатор:
            <br />
            +38 (050) 000-00-01
          </Typography>
          <Typography
            sx={{ marginBottom: "16px", fontSize: "20px", fontWeight: 500 }}
          >
            СТО:
            <br /> +38 (050) 000-00-02
          </Typography>
          <Typography
            sx={{ marginBottom: "16px", fontSize: "20px", fontWeight: 500 }}
          >
            Автозапчастини:
            <br /> +38 (050) 000-00-03
          </Typography>
          <Typography
            sx={{ marginBottom: "16px", fontSize: "20px", fontWeight: 500 }}
          >
            Email: <br />
            example@email.com
          </Typography>
        </Box>

        <Box sx={{ maxWidth: "289px" }}>
          <Typography
            variant="h3"
            fontWeight={700}
            sx={{ fontSize: "32px", marginBottom: "16px" }}
          >
            Наша адреса
          </Typography>
          <Typography sx={{ marginBottom: "48px" }}>
            Купол 7, Сектор Альфа, <br /> Колонія «Новий Геліос», Регіон
            Елізійські рівнини, <br /> Марс, Поштовий код: MRS-001
          </Typography>

          <Typography
            variant="h3"
            fontWeight={700}
            sx={{ fontSize: "32px", marginBottom: "16px" }}
          >
            Час роботи
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Понеділок - П'ятниця
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>08:00 – 17:00</Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Contacts;
