import React from "react";
import { Box } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

export const HorizontalScrollContainer: React.FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        overflowX: "auto",
        p: 1,
        whiteSpace: "nowrap",
        "&::-webkit-scrollbar": { height: 8 },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#888",
          borderRadius: 4,
        },
        "&::-webkit-scrollbar-thumb:hover": { backgroundColor: "#555" },
      }}
    >
      {children}
    </Box>
  );
};
