import {
  contactInfo,
  rentEquipment,
  serviceLinks,
} from "@/Pages/SecondPageComponents/const";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { autoLogos, stoImg } from "../const";
import Image from "next/image";

const MainInfo = () => {
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
          <Typography>
            Основний напрямок нашої станції - ремонт вантажівок Мерседес,
            Scania, DAF, MAN. Крім того, не виключається робота з вантажними
            автомобілями інших моделей.
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: "40px",
              marginTop: "35px",
              flexWrap: "wrap",
            }}
          >
            <Image
              src="/logosAuto/mercedes.svg"
              alt="mercedes"
              width={250}
              height={63}
            />
            <Image
              src="/logosAuto/scania.svg"
              alt="scania"
              width={192}
              height={66}
            />
            <Image src="/logosAuto/man.svg" alt="man" width={117} height={65} />
            <Image src="/logosAuto/daf.svg" alt="daf" width={160} height={66} />
          </Box>

          <Box sx={{ marginTop: "25px" }}>
            <Typography sx={{ fontSize: "18px", marginBottom: "30px" }}>
              СТО надає послуги з капітального ремонту двигунів, електропроводки
              автомобілів, діагностики автомобілів (включаючи комп'ютерну
              діагностику), ходової, трансмісії, рульового управління і рам.
            </Typography>
            <Typography sx={{ fontSize: "18px" }}>
              СТО має окремі ділянки: моторний, агрегатний,
              електроучасток, пункт по заміні мастил, ділянка ремонту ходової і
              ділянку регулювання кута установки (сходження) коліс.
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
            Послуги СТО
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
          {stoImg.map((item, index) => (
            <Box
              key={index}
              sx={{
                border: "2px solid #FBB216",
                borderRadius: "12px",
                overflow: "hidden",
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

        {/* Контакти */}
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

        {/* Оренда техніки */}
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

export default MainInfo;
