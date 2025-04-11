"use client";
import { Box, Button, Rating, TextField, Typography } from "@mui/material";
import {
  contactInfo,
  rentEquipment,
  serviceLinks,
} from "../../SecondPageComponents/const";
import { useState } from "react";
import { reviewsData, reviewsImg } from "../const";
import Image from "next/image";

const RewievsMain = () => {
  const [yourName, setYourName] = useState<string>("");
  const [impression, setImpression] = useState<string>("");
  const [value, setValue] = useState<number | null>(0);

  const handleSubmitt = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { yourName, impression, value });
    alert("Дякуємо! Ми з Вами зв'яжемося.");
    setYourName("");
    setImpression("");
    setValue(0);
  };

  return (
    <Box
      sx={{
        maxWidth: "1240px",
        margin: "0 auto",
        padding: "40px 0px",
        gap: 4,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "flex-start",
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Box
          sx={{
            padding: "32px",
            backgroundColor: "#DAE0E5",
            borderRadius: "24px",
          }}
        >
          <Typography
            variant="h3"
            sx={{ textAlign: "center", fontSize: "32px", fontWeight: 700 }}
          >
            Залишити відгук
          </Typography>
          <Box sx={{ marginTop: "24px", marginBottom: "38px" }}>
            <Typography
              sx={{ fontSize: "20px", fontWeight: 600, marginBottom: "22px" }}
            >
              Ваше Імʼя:
            </Typography>
            <TextField
              placeholder="Як до вас звертатися?"
              value={yourName}
              onChange={(e) => setYourName(e.target.value)}
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
          </Box>
          <Box>
            <Typography
              sx={{ fontSize: "20px", fontWeight: 600, marginBottom: "8px" }}
            >
              Оберіть оцінку по 5 бальній шкалі:
            </Typography>
            <Rating
              sx={{ marginBottom: "24px" }}
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => setValue(newValue)}
              size="large"
            />
          </Box>
          <Box>
            <Typography
              sx={{ fontSize: "20px", fontWeight: 600, marginBottom: "22px" }}
            >
              Відгук:
            </Typography>
            <TextField
              placeholder="Розкажіть, які ваші враження після роботи з нами"
              value={impression}
              onChange={(e) => setImpression(e.target.value)}
              fullWidth
              required
              multiline
              rows={4}
              sx={{
                input: { color: "#8EA2B2" },
                border: "2px solid #FBB216",
                borderRadius: "8px",
                backgroundColor: "white",
                marginBottom: "24px",
              }}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="submit"
              onClick={handleSubmitt}
              variant="contained"
              sx={{
                backgroundColor: "#FBB216",
                borderRadius: "12px",
                color: "#0A0A0A",
                fontSize: "20px",
                fontWeight: 600,
                mt: 2,
                padding: "12px 48px",
              }}
            >
              Надіслати
            </Button>
          </Box>
        </Box>

        <Box sx={{ marginTop: "80px" }}>
          <Box>
            <Typography
              sx={{
                textTransform: "uppercase",
                color: "#9B2915",
                fontSize: "24px",
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              Що кажуть клієнти
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: "#0A0A0A",
                fontSize: "48px",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              Відгуки про нашу роботу:
            </Typography>
          </Box>
          <Box
            sx={{
              marginTop: "48px",
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 4,
            }}
          >
            {reviewsData.map((item, index) => (
              <Box
                key={index}
                sx={{
                  backgroundColor: "#DAE0E5",
                  borderRadius: "16px",
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Typography>{item.name}</Typography>
                <Rating value={item.rating} readOnly />
                <Typography>{item.message}</Typography>
                <Typography fontSize="14px" color="text.secondary">
                  {item.date}
                </Typography>
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "30px",
              justifyContent: "flex-start",
              marginTop: "48px",
            }}
          >
            {reviewsImg.map((item, index) => (
              <Box
                key={index}
                sx={{
                  borderRadius: "12px",
                  border: "2px solid teal",
                  padding: "10px",
                }}
              >
                <Image src={item.image} width={180} height={180} alt="dsda" />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box
        sx={{ width: "295px", textAlign: "center" }}
        display="flex"
        flexDirection="column"
        gap={4}
      >
        <Box
          sx={{
            backgroundColor: "#1E1E1E",
            borderRadius: "24px",
            padding: "24px",
            color: "#fff",
          }}
        >
          <Typography variant="h4" mb={2} sx={{ fontSize: "28px" }}>
            Наші послуги
          </Typography>
          {serviceLinks.map((item, index) => (
            <Button
              key={index}
              fullWidth
              variant="outlined"
              sx={{
                color: "#FBB216",
                borderColor: "#FBB216",
                mb: "30px",
                padding: "12px",
                borderRadius: "12px",
                fontSize: "20px",
              }}
            >
              {item}
            </Button>
          ))}
        </Box>

        <Box
          sx={{
            backgroundColor: "#F5F5F5",
            borderRadius: "24px",
            padding: 2,
          }}
        >
          <Typography
            variant="h4"
            mb={2}
            sx={{ fontSize: "28px", fontWeight: 700 }}
          >
            Наші контакти
          </Typography>
          {contactInfo.map((contact, index) => (
            <Typography sx={{ fontSize: "18px" }} key={index}>
              {contact}
            </Typography>
          ))}
          <Button
            fullWidth
            sx={{
              backgroundColor: "#FBB216",
              borderRadius: "12px",
              mt: 2,
              padding: "12px",
              color: "#000",
              fontSize: "18px",
              fontWeight: 600,
              borderColor: "#FBB216",
              "&:hover": { backgroundColor: "#e6a200" },
            }}
          >
            Передзвонити Вам?
          </Button>
        </Box>

        <Box
          sx={{
            backgroundColor: "#272E36",
            borderRadius: "24px",
            padding: 2,
            color: "#fff",
          }}
        >
          <Typography
            variant="h4"
            mb={2}
            sx={{ fontSize: { xs: "22px", md: "28px" } }}
          >
            Спецтехніка в оренду
          </Typography>
          {rentEquipment.map((item, index) => (
            <Button
              key={index}
              fullWidth
              variant="outlined"
              sx={{
                color: "#FBB216",
                borderColor: "#FBB216",
                borderRadius: "12px",
                backgroundColor: "#272E36",
                mb: "20px",
                fontSize: "20px",
              }}
            >
              {item}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default RewievsMain;
