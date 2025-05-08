const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

const replicaapp=process.env.APP_NAME
// Serve static assets (CSS, JS, images)
app.use("/images", express.static(path.join(__dirname, "images")));
// Routes for any html pages created 


app.use('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
    console.log(`request is served by ${replicaapp}`)
})

// another html could have been like this  okay
// app.get("/projects", (req, res) => {
//   res.sendFile(path.join(__dirname, "projects.html"));
// });

app.listen(PORT, async () => {
  try {
    console.log(`${replicaapp}is listening on ${PORT}`);
  } catch (err) {
    console.log("Failed to listen ", err);
  }
});
