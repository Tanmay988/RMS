// Imports
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const bodyParser = require("body-parser");
const connectWithDB = require("./config/db");
const cookieParser = require("cookie-parser");
// const indexWebroutes = require('./routes/web/index')
const userAuthroutes = require("./routes/authRoutes");
// const paymentWebRoutes = require('./routes/web/paymentRoutes');
// const cartWebroutes = require('./routes/web/cartRoutes');
// const qrcodeWebRoutes = require('./routes/web/qrRoutes');
// const restaurantWebRoutes = require('./routes/web/restaurantRoutes')

// Create an instance of express app
const app = express();
// Set port
const port = process.env.PORT || "3000";

// Configure bodyParser
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

// Connect to MongoDB
connectWithDB();

// Web Routes

app.use("/api/auth", userAuthroutes);
// app.use("/viewmenu",indexWebroutes);
// app.use('/payment', paymentWebRoutes);
// app.use('/cart' ,cartWebroutes);
// app.use('/scan' ,qrcodeWebRoutes);
// app.use('/restaurant' , restaurantWebRoutes);

// Listen app on given port
app.listen(port, () => {
  console.info(`[STATUS] App listening on port ${port}`);
});
