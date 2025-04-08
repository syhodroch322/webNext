import { Box } from "@mui/material";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export const HeroImageBlock = ({ src, alt }: Props) => {
  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: "1240px",
        padding: "0 16px",
        width: "90%",
        height: { xs: "300px", md: "531px" },
        borderRadius: "24px",
        overflow: "hidden",
        margin: "24px auto",
      }}
    >
      <Image src={src} alt={alt} layout="fill" priority />
    </Box>
  );
};
