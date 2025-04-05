"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { faqList } from "./const";
import { ExpandMore } from "@mui/icons-material";

const FAQ = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <Box sx={{ maxWidth: "1240px", width: "100%", margin: "100px auto" }}>
      <Box>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "32px", md: "48px" },
            textAlign: "center",
          }}
        >
          Поширені запитання
        </Typography>
      </Box>
      <Box sx={{ maxWidth: "823px", margin: "64px auto" }}>
        {faqList.map((item, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            sx={{
              border: "2px solid #FBB216",
              borderRadius: "19px",
              boxShadow: "none",
              marginBottom: "16px",
              "&::before": { display: "none" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
              sx={{ fontWeight: 600 }}
            >
              <Typography>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {item.answer || "Відповідь уточнюється..."}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FAQ;
