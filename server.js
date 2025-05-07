const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
// Serve static assets (CSS, JS, images)
app.use("/images", express.static(path.join(__dirname, "images")));
// Routes for any html pages created 
app.use('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
    console.log("request is served by the app")
})

app.listen(PORT, async () => {
  try {
    console.log(`server is listening on ${PORT}`);
  } catch (err) {
    console.log("Failed to listen ", err);
  }
});
