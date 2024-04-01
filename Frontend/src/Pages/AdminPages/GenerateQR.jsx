import React, { useState } from "react";
import { useRestaurant } from "../../Context/restaurantContext";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import toast from "react-hot-toast";
import QRCode from "qrcode.react";

const defaultTheme = createTheme();

const GenerateQR = () => {
  const { menu } = useRestaurant();
  const restaurantId = menu.restaurantId;
  // console.log("Restaurant ID:", restaurantId);
  const [tableNo, setTableNo] = useState("");
  const [qrUrl, setQrUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await fetch("/api/qr/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tableNo: parseInt(tableNo),
          restaurantId: restaurantId,
        }),
      });
      const data = await resp.json();
      if (resp.ok) {
        console.log("QR code generated successfully", data);
        toast.success("QR code generated successfully");
        setQrUrl(data.url); // Set the received URL
      } else {
        console.error("Failed to generate QR code:", data.message);
        toast.error("Failed to generate QR code");
      }
    } catch (error) {
      console.error("Error generating QR code:", error);
      toast.error("Error generating QR code");
    }
  };

  const handleDownloadQR = () => {
    if (qrUrl) {
      // Create a temporary link element
      const link = document.createElement("a");
      link.href = qrUrl;
      link.download = `qrcode_${tableNo}.png`; // Set the filename for download
      link.click(); // Trigger download
    }
  };

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container
          component="main"
          maxWidth="xs"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "80vh",
          }}
          className="wrapper"
        >
          <CssBaseline />
          <Box
            sx={{
              padding: "30px",
              width: "100%",
              borderRadius: "10px",
              boxShadow: "0px 0px 4px 0px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                Cooking your QR's
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="tableNo"
                  value={tableNo}
                  onChange={(e) => setTableNo(e.target.value)}
                  label="Table No"
                  autoFocus
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  style={{ backgroundColor: "#ff7549" }}
                  sx={{ mt: 3, mb: 2 }}
                >
                  Generate QR
                </Button>
              </Box>
              {qrUrl && (
                <Button
                  onClick={handleDownloadQR}
                  fullWidth
                  variant="contained"
                  style={{ backgroundColor: "#ff7549" }}
                  sx={{ mt: 3, mb: 2 }}
                >
                  Download QR
                </Button>
              )}
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default GenerateQR;
