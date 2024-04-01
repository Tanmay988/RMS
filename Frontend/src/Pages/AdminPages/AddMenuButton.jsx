import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import toast from "react-hot-toast";
const defaultTheme = createTheme();

const AddMenuButton = () => {
  const { restaurantId } = useParams();
  // console.log("restaurantId", restaurantId);
  const [itemDescription, setItemDescription] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await fetch("/api/menu/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          restaurantId,
          itemName,
          itemPrice,
          itemDescription,
          itemCategory,
        }),
      });

      const data = await resp.json();
      if (resp.ok) {
        // console.log("added menu items", data);
        toast.success("Item added successfully");
        window.history.back();
      }
    } catch (error) {
      console.error("Error adding menu items:", error);
      toast.error("Error in adding menu items");
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
                Update Menu Items
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
                  id="itemName"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  label="Item Name"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="itemDescription"
                  value={itemDescription}
                  onChange={(e) => setItemDescription(e.target.value)}
                  label="Item Description"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="itemPrice"
                  value={itemPrice}
                  onChange={(e) => setItemPrice(e.target.value)}
                  label="Item Price"
                  autoFocus
                />

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="itemPrice"
                  value={itemCategory}
                  onChange={(e) => setItemCategory(e.target.value)}
                  label="Item Category"
                  autoFocus
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  style={{ backgroundColor: "#ff7549" }}
                  sx={{ mt: 3, mb: 2 }}
                >
                  Add Item
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default AddMenuButton;
