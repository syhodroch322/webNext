import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React from "react";
import { faqData } from "../const";
import { ExpandMore } from "@mui/icons-material";

const FAQ = () => {
  return (
    <Box
      sx={{
        maxWidth: "823px",
        mx: "auto",
        marginTop: "100px",
        marginBottom: "100px",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: "#9B2915",
          textAlign: "center",
          fontWeight: 700,
          fontSize: { xs: "18px", md: "24px" },
          textTransform: "uppercase",
        }}
      >
        ЦІКАВИТЬ БІЛЬШЕ ДЕТАЛЕЙ?
      </Typography>
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          fontWeight: 800,
          fontSize: { xs: "36px", md: "48px" },
        }}
      >
        Поширені запитання
      </Typography>

      {faqData.map((item, index) => (
        <Accordion
          key={index}
          sx={{
            border: "2px solid #FBB216",
            borderRadius: "12px",
            mb: 2,
            boxShadow: "none",
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMore sx={{ color: "#FBB216" }} />}
          >
            <Typography fontWeight={600}>{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#333", fontSize: "16px" }}>
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;
