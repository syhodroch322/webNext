"use client";
import { Button, ButtonProps } from "@mui/material";
import React from "react";

const MyButton = (props: ButtonProps) => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#FBB216",
        textTransform: "none",
        color: "black",
        fontSize: "20px",
        fontWeight: "600",
        borderRadius: "12px",
        px: "48px",
        py: "12px",
        ...props.sx,
      }}
      {...props}
    >
      {props.children}
    </Button>
  );
};

export default MyButton;
