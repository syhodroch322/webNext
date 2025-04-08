import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import {
  servicesData,
  rentEquipment,
  contactInfo,
  serviceLinks,
} from "../const";
import MyButton from "@/components/MyButton";

const ServicesPage = () => {
  return (
    <Box
      sx={{
        maxWidth: "1240px",
        margin: "0 auto",
        padding: "40px 0px",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 4,
        alignItems: "flex-start",
      }}
    >
      <Box flex={1} display="flex" flexDirection="column" gap={4}>
        {servicesData.map((service, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              padding: "34px",
              borderRadius: "24px",
              backgroundColor: "#DAE0E5",
            }}
          >
            <Image
              src={service.image}
              alt={service.title}
              width={365}
              height={292}
              style={{
                borderRadius: "24px",
                objectFit: "cover",
              }}
            />
            <Box display="flex" flexDirection="column">
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: "22px", md: "28px" },
                  fontWeight: 700,
                }}
              >
                {service.title}
              </Typography>
              <Typography fontWeight={500}>{service.phone}</Typography>
              <Typography sx={{ fontSize: "18px" }}>
                {service.description}
              </Typography>
              <Box mt={2} display="flex" gap={2} flexWrap="wrap">
                <MyButton>Замовити</MyButton>
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: "#DAE0E5",
                    textTransform: "none",
                    border: "2px solid #0A0A0A",
                    color: "black",
                    fontSize: "20px",
                    fontWeight: "600",
                    borderRadius: "12px",
                    px: "48px",
                    py: "12px",
                  }}
                >
                  Контакти
                </Button>
              </Box>
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

        <Box
          sx={{ backgroundColor: "#F5F5F5", borderRadius: "24px", padding: 2 }}
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
      </Box>
    </Box>
  );
};

export default ServicesPage;
