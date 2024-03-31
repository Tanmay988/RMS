import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const defaultTheme = createTheme();

const UpdateMenuForm = () => {
  const navigate = useNavigate();
  const param = useParams();
  const { id: restaurantId, name: itemName } = param;
  const [itemDescription, setItemDescription] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [ItemName, setItemName] = useState("");

  //   console.log("param:", param);

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const resp = await fetch(`/api/menu/edit/${restaurantId}/${itemName}`, {
          method: "GET",
        });
        const data = await resp.json();

        if (resp.ok) {
          const { itemDescription, itemPrice, itemName } = data.message;
          setItemDescription(itemDescription);
          setItemPrice(itemPrice);
          setItemName(itemName);
        }
      } catch (error) {
        console.error("Error fetching item details:", error);
      }
    };

    fetchItemDetails();
  }, [restaurantId, itemName]);

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const resp = await fetch("/api/menu/edit", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          restaurantId,
          itemName,
          itemDescription,
          itemPrice,
        }),
      });
      const data = await resp.json();
      if (resp.ok) {
        console.log("Item updated successfully:", data);
        navigate("/admin/updatemenu");
      } 
    } catch (error) {
      console.error("Error updating item:", error);
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
                  value={ItemName}
                  onChange={(e) => setItemDescription(e.target.value)}
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

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  style={{ backgroundColor: "#ff7549" }}
                  sx={{ mt: 3, mb: 2 }}
                >
                  Update Menu
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default UpdateMenuForm;