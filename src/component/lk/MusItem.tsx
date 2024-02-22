import {Box, Typography} from "@mui/material";

const MusItem = ({ item, title }) => {
  return (
      <>
          <Typography sx={{
              paddingLeft: '32px'
          }}>
              {title}
          </Typography>
          <Box
              sx={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  background: "#8654CC",
                  padding: "16px 32px 16px 32px",
                  borderRadius: "100px",
                  marginBottom: "16px",
                  width: { md: "403px", xs: "300px" },
                  height: { md: "56px", xs: "50px" },
                  // color: title && 'red'
              }}
          >
              { item }
          </Box>
      </>

  );
};

export default MusItem;
