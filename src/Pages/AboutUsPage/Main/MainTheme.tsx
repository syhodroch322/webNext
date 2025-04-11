import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { aboutUsImg } from "../const";
import Image from "next/image";
import {
  contactInfo,
  rentEquipment,
  serviceLinks,
} from "@/Pages/SecondPageComponents/const";

const MainTheme = () => {
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
        justifyContent: "flex-start",
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Box
          sx={{
            padding: "32px 74px 32px 32px",
            backgroundColor: "#DAE0E5",
            borderRadius: "24px",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              marginBottom: "48px",
              fontWeight: 700,
              flexWrap: "nowrap",
              fontSize: "48px",
            }}
          >
            Ми дбаємо про наших клієнтів
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Наше підприємство засноване в 2000 році. З моменту заснування, ми
            досягли високих показників в якості обслуговування клієнтів. Досвід
            наших фахівців дозволяє нам виконувати роботи на професійному рівні
            з гарантією якості.
          </Typography>

          <Box sx={{ marginTop: "25px" }}>
            <Typography sx={{ fontSize: "18px", marginBottom: "30px" }}>
              На сьогоднішній день ми маємо в своєму розпорядженні широкий
              асортимент кранів-маніпуляторів і вантажних евакуаторів, стоянкою,
              ремонтною базою, фахівцями з ремонту, водіями і кваліфікованими
              інженерно-технічними працівниками.
            </Typography>
            <Typography sx={{ fontSize: "18px", marginBottom: "30px" }}>
              За час роботи у нас сформувався певний досвід в сфері даних
              послуг. Ми зацікавлені в довгостроковому співробітництві як з
              підприємствами, так і з приватними особами. Ми відкриті для
              взаємовигідної і чесної роботи з метою успішного розвитку вашого і
              нашого бізнесу.
            </Typography>
            <Typography sx={{ fontSize: "18px", marginBottom: "30px" }}>
              Наша організація гарантує замовникам комплексне, якісне,
              висококваліфіковане обслуговування за гнучкими цінами.
            </Typography>
            <Typography sx={{ fontSize: "18px", marginBottom: "30px" }}>
              Послуги крана-маніпулятора надаються нами з 2006 року, ми маємо
              широкий асортимент маніпуляторів в нашому автопарку і команду
              професійних водіїв.
            </Typography>
            <Typography sx={{ fontSize: "18px", marginBottom: "30px" }}>
              Ми маємо великий досвід в галузі евакуацій, одним з перших
              евакуаторів в нашому автопарку був КРАЗ 255, який з'явився в 2005
              році. Далі наш автопарк розширювався, і зараз ми маємо великий
              асортимент машин для надання якісних послуг вантажний евакуації.
            </Typography>
            <Typography sx={{ fontSize: "18px", marginBottom: "30px" }}>
              Наша компанія завжди з розумінням ставимося до кожного з клієнтів,
              повністю вникає в поставлені завдання і пропонує оптимальний
              варіант рішення. Ми обслуговуємо як державні, так і приватні
              об'єкти з різними бюджетами, а також готові запропонувати гнучку
              систему знижок.
            </Typography>
          </Box>

          <Box sx={{ textAlign: "center", marginTop: "40px" }}>
            <Typography variant="h4" sx={{ fontSize: "28px", fontWeight: 700 }}>
              Деталі по телефону:
            </Typography>
            <Typography
              variant="h3"
              sx={{ fontSize: "32px", fontWeight: 700, marginTop: "16px" }}
            >
              +38 (050) 000-00-00
            </Typography>
          </Box>
        </Box>

        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              fontSize: "28px",
              color: "#9B2915",
              textTransform: "uppercase",
            }}
          >
            Галерея
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "38px", md: "48px" }, fontWeight: 700 }}
          >
            Продаж запчастин
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "15px",
            justifyContent: "flex-start",
            marginTop: "48px",
          }}
        >
          {aboutUsImg.map((item, index) => (
            <Box
              key={index}
              sx={{
                border: "2px solid #FBB216",
                borderRadius: "12px",
                overflow: "hidden",
                padding: "5px",
              }}
            >
              <Image src={item.image} alt={"sto"} width={280} height={167} />
            </Box>
          ))}
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

export default MainTheme;
