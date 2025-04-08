import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { rentEquipmentCards } from "../const";
import Image from "next/image";
import {
  contactInfo,
  rentEquipment,
  serviceLinks,
} from "@/Pages/SecondPageComponents/const";

const RentCrainew = () => {
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
      <Box
        sx={{
          display: "grid",
          flex: 1,
          height: "auto",
          gap: 2,
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr",
            lg: "1fr 1fr",
          },
        }}
      >
        {rentEquipmentCards.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              padding: "24px",
              borderRadius: "24px",
              backgroundColor: "#DAE0E5",
            }}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={402}
              height={254}
              style={{
                borderRadius: "24px",
                objectFit: "cover",
              }}
            />
            <Typography variant="h6" fontWeight={700}>
              {item.title}
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              {item.specs.map((line, i) => (
                <li key={i}>
                  <Typography fontSize={14}>{line}</Typography>
                </li>
              ))}
            </Box>
            <Box
              display="flex"
              gap={2}
              mt="auto"
              sx={{ flexDirection: "column" }}
            >
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "#FBB216",
                  borderRadius: "12px",
                  color: "#000",
                  fontWeight: 600,
                }}
              >
                Замовити
              </Button>
              <Button
                fullWidth
                variant="outlined"
                sx={{
                  borderColor: "#0A0A0A",
                  color: "#000",
                  fontWeight: 600,
                  borderRadius: "12px",
                }}
              >
                Детальніше
              </Button>
            </Box>
          </Box>
        ))}
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

export default RentCrainew;
