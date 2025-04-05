import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { stats } from "./const";

const SomeNumbers = () => {
  return (
    <Box
      sx={{
        maxWidth: "1240px",
        width: "100%",
        margin: "24px auto",
      }}
    >
      <Box>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "32px", md: "48px" },
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Трохи цифр
        </Typography>
      </Box>
      <Box sx={{ marginTop: "48px" }}>
        <Grid container spacing={2} display="flex" justifyContent="center">
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  textAlign: "start",
                  padding: "30px",
                  borderRadius: "32px",
                  backgroundColor: "#EB8724",
                  boxShadow: 1,
                  width: "295px",
                  height: "284px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: "60px", md: "80px" },
                    fontWeight: 300,
                    color: "#0A0A0A",
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "19px", md: "24px" },
                    color: "#0A0A0A",
                    lineHeight: "130%",
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default SomeNumbers;
