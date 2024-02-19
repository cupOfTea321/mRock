import { Box } from "@mui/material";

const MusItem = ({ item, title }) => {
  return (
    <Box
      sx={{
        background: "#8654CC",
        padding: "16px 32px 16px 32px",
        borderRadius: "100px",
        marginBottom: "16px",
        width: { md: "403px", xs: "300px" },
        height: { md: "56px", xs: "50px" },
      }}
    >
      {item}
    </Box>
  );
};

export default MusItem;
