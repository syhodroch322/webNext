import MyButton from "@/components/MyButton";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const OurServices = () => {
  return (
    <Box
      sx={{
        maxWidth: "1240px",
        width: "100%",
        margin: "100px auto",
        padding: "50px 50px",
        backgroundColor: "#272E36",
        borderRadius: "32px",
      }}
    >
      <Box>
        <Typography
          sx={{
            color: "#FFFDFD",
            textAlign: "center",
            fontSize: { xs: "36px", md: "48px" },
            fontWeight: 700,
          }}
        >
          Наші послуги
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: "48px",
          display: "flex",
          gap: "50px",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Image
          src="/ourservisecimages/ourser2.svg"
          alt="ourserv1"
          width={520}
          height={324}
          style={{ width: "100%", height: "auto", maxWidth: 520 }}
        ></Image>
        <Box>
          <Typography
            variant="h3"
            sx={{ color: "#FFFDFD", fontSize: { xs: "26px", md: "32px" } }}
          >
            Послуги крана-маніпулятора
          </Typography>
          <Typography
            variant="body1"
            fontWeight={500}
            sx={{
              color: "#FBB216",
              fontSize: { xs: "18px", md: "24px" },
              lineHeight: "140%",
              marginTop: "12px",
            }}
          >
            <a
              href="tel:+380991234567"
              style={{ textDecoration: "none", color: "#FBB216" }}
            >
              +38 (099) 123-45-67
            </a>
          </Typography>
          <Typography
            sx={{ color: "white", fontSize: "18px", marginTop: "12px" }}
          >
            • Перевезення будівельних матеріалів, контейнерів, гаражів, кіосків,
            блок-кімнат, верстатів і практично всіх габаритних конструкцій, де
            потрібен автокран або кран-маніпулятор.
            <br /> • Посадка дерев і чагарників. <br /> • Монтаж/демонтаж
            обладнання, в т.ч. у виробничих приміщеннях, де обмежені можливості
            під'їзду. <br /> • Послуги крана-маніпулятора з грейфером
          </Typography>
          <Box sx={{ display: "flex", gap: 4, marginTop: "32px" }}>
            <MyButton>Детальніше</MyButton>

            <Button
              variant="outlined"
              sx={{
                backgroundColor: "#272E36",
                textTransform: "none",
                border: "2px solid #FBB216",
                color: "#FBB216",
                fontSize: "20px",
                fontWeight: "600",
                borderRadius: "12px",
                px: "48px",
                py: "12px",
              }}
            >
              Замовити
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          marginTop: "100px",
          display: "flex",
          gap: "50px",
          flexDirection: { xs: "column", md: "row-reverse" },
        }}
      >
        <Image
          src="/ourservisecimages/ourser3.svg"
          alt="ourserv1"
          width={520}
          height={324}
          style={{ width: "100%", height: "auto", maxWidth: 520 }}
        ></Image>
        <Box>
          <Typography
            variant="h3"
            sx={{ color: "#FFFDFD", fontSize: { xs: "26px", md: "32px" } }}
          >
            Послуги евакуатора
          </Typography>
          <Typography
            variant="body1"
            fontWeight={500}
            sx={{
              color: "#FBB216",
              fontSize: { xs: "18px", md: "24px" },
              lineHeight: "140%",
              marginTop: "12px",
            }}
          >
            <a
              href="tel:+380991234567"
              style={{ textDecoration: "none", color: "#FBB216" }}
            >
              +38 (099) 123-45-67
            </a>
          </Typography>
          <Typography
            sx={{ color: "white", fontSize: "18px", marginTop: "12px" }}
          >
            Залежно від ситуації ми виконуємо евакуацію різними способами:
            <br /> - жорстка зчіпка <br /> - часткове навантаження <br /> -
            повне навантаження <br /> Ви завжди можете розраховувати на
            оперативну допомогу при евакуації автомобіля в Харкові, Харківській
            області та по Україні.
          </Typography>
          <Box sx={{ display: "flex", gap: 4, marginTop: "32px" }}>
            <MyButton>Детальніше</MyButton>

            <Button
              variant="outlined"
              sx={{
                backgroundColor: "#272E36",
                textTransform: "none",
                border: "2px solid #FBB216",
                color: "#FBB216",
                fontSize: "20px",
                fontWeight: "600",
                borderRadius: "12px",
                px: "48px",
                py: "12px",
              }}
            >
              Замовити
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          marginTop: "100px",
          display: "flex",
          gap: "50px",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Image
          src="/ourservisecimages/ourser1.svg"
          alt="ourserv1"
          width={520}
          height={324}
          style={{ width: "100%", height: "auto", maxWidth: 520 }}
        ></Image>
        <Box>
          <Typography
            variant="h3"
            sx={{ color: "#FFFDFD", fontSize: { xs: "26px", md: "32px" } }}
          >
            Послуги СТО
          </Typography>
          <Typography
            variant="body1"
            fontWeight={500}
            sx={{
              color: "#FBB216",
              fontSize: { xs: "18px", md: "24px" },
              lineHeight: "140%",
              marginTop: "12px",
            }}
          >
            <a
              href="tel:+380991234567"
              style={{ textDecoration: "none", color: "#FBB216" }}
            >
              +38 (099) 123-45-67
            </a>
          </Typography>
          <Typography
            sx={{ color: "white", fontSize: "18px", marginTop: "12px" }}
          >
            Основний напрямок нашої станції - ремонт вантажівок Mercedes,
            Scania, DAF, MAN. Крім того, не виключається робота з вантажними
            автомобілями інших моделей.
            <br />
            СТО надає послуги з капітального ремонту двигунів, електропроводки
            автомобілів, діагностики автомобілів (включаючи комп'ютерну
            діагностику), ходової, трансмісії, рульового управління і рам.
          </Typography>
          <Box sx={{ display: "flex", gap: 4, marginTop: "32px" }}>
            <MyButton>Детальніше</MyButton>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "#272E36",
                textTransform: "none",
                border: "2px solid #FBB216",
                color: "#FBB216",
                fontSize: "20px",
                fontWeight: "600",
                borderRadius: "12px",
                px: "48px",
                py: "12px",
              }}
            >
              Замовити
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          marginTop: "100px",
          display: "flex",
          gap: "50px",
          flexDirection: { xs: "column", md: "row-reverse" },
        }}
      >
        <Image
          src="/ourservisecimages/ourser5.svg"
          alt="ourserv1"
          width={520}
          height={324}
          style={{ width: "100%", height: "auto", maxWidth: 520 }}
        ></Image>
        <Box>
          <Typography
            variant="h3"
            sx={{ color: "#FFFDFD", fontSize: { xs: "26px", md: "32px" } }}
          >
            Продаж автозапчастин
          </Typography>
          <Typography
            variant="body1"
            fontWeight={500}
            sx={{
              color: "#FBB216",
              fontSize: { xs: "18px", md: "24px" },
              lineHeight: "140%",
              marginTop: "12px",
            }}
          >
            <a
              href="tel:+380991234567"
              style={{ textDecoration: "none", color: "#FBB216" }}
            >
              +38 (099) 123-45-67
            </a>
          </Typography>
          <Typography
            sx={{ color: "white", fontSize: "18px", marginTop: "12px" }}
          >
            Залежно від ситуації ми виконуємо евакуацію різними способами:
            <br /> - жорстка зчіпка <br /> - часткове навантаження <br /> -
            повне навантаженн <br /> Ви завжди можете розраховувати на
            оперативну допомогу при евакуації автомобіля в Харкові, Харківській
            області та по Україні.
          </Typography>
          <Box sx={{ display: "flex", gap: 4, marginTop: "32px" }}>
            <MyButton>Детальніше</MyButton>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "#272E36",
                textTransform: "none",
                border: "2px solid #FBB216",
                color: "#FBB216",
                fontSize: "20px",
                fontWeight: "600",
                borderRadius: "12px",
                px: "48px",
                py: "12px",
              }}
            >
              Замовити
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          marginTop: "100px",
          display: "flex",
          gap: "50px",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Image
          src="/ourservisecimages/ourser4.svg"
          alt="ourserv1"
          width={520}
          height={324}
          style={{ width: "100%", height: "auto", maxWidth: 520 }}
        ></Image>
        <Box>
          <Typography
            variant="h3"
            sx={{ color: "#FFFDFD", fontSize: { xs: "26px", md: "32px" } }}
          >
            Обслуговування КМУ
          </Typography>
          <Typography
            variant="body1"
            fontWeight={500}
            sx={{
              color: "#FBB216",
              fontSize: { xs: "18px", md: "24px" },
              lineHeight: "140%",
              marginTop: "12px",
            }}
          >
            <a
              href="tel:+380991234567"
              style={{ textDecoration: "none", color: "#FBB216" }}
            >
              +38 (099) 123-45-67
            </a>
          </Typography>
          <Typography
            sx={{ color: "white", fontSize: "18px", marginTop: "12px" }}
          >
            Наша компанія виконує технічне обслуговування, діагностику та ремонт
            маніпуляторів. <br /> У нас ви можете придбати різні б/у
            крани-маніпулятори (Atlas, Hiab, PALFINGER, FASSI) і встановити на
            шасі вашого автомобіля.
          </Typography>
          <Box sx={{ display: "flex", gap: 4, marginTop: "32px" }}>
            <MyButton>Детальніше</MyButton>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "#272E36",
                textTransform: "none",
                border: "2px solid #FBB216",
                color: "#FBB216",
                fontSize: "20px",
                fontWeight: "600",
                borderRadius: "12px",
                px: "48px",
                py: "12px",
              }}
            >
              Замовити
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OurServices;
