import MyButton from "@/components/MyButton";
import { Box, Typography, Button } from "@mui/material";

const AboutUs = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 4,
        maxWidth: "1240px",
        margin: "100px auto",
        padding: "0 16px",
        alignItems: "stretch",
      }}
    >
      <Box
        sx={{
          flex: 1,
          borderRadius: "24px",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "relative",
            borderRadius: "24px",
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/T66k46uf_0Y"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "24px",
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "28px", md: "38px", lg: "48px" },
            marginBottom: "16px",
          }}
        >
          Про нас
        </Typography>

        <Typography
          variant="body1"
          sx={{ marginBottom: "24px", fontSize: { xs: "14px", md: "18px" } }}
        >
          Наша організація гарантує замовникам комплексне, якісне,
          висококваліфіковане обслуговування. Ми надаємо послуги спеціальної
          техніки. Займаємося організацією транспортування,
          навантаження-розвантаження габаритних і негабаритних вантажів. <br />
          <br />
          Телефонуйте нам! І будьте впевнені, що Ви звернулися до професіоналів.
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <MyButton>Детальніше</MyButton>

          <Button
            variant="outlined"
            sx={{
              backgroundColor: "white",
              textTransform: "none",
              border: "2px solid #FBB216",
              color: "black",
              fontSize: "20px",
              fontWeight: "600",
              borderRadius: "12px",
              px: "48px",
              py: "12px",
              ml: { xs: 0, md: 2 },
              mt: { xs: 2, md: 0 },
            }}
          >
            Контакти
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
