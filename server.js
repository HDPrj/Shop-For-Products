const express = require("express")
const path = require("path")

const app = express()

app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
)

app.use(
    "/css",
    express.static(path.join(__dirname, "public/src/css"))
  )
app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
)
app.use("/js", express.static(path.join(__dirname, "node_modules/jquery/dist")))
app.use("/js", express.static(path.join(__dirname, "node_modules/popper.js/dist")))
app.use("/js", express.static(path.join(__dirname, "public/src/js")))


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"))
})

app.listen(5000, () => {
  console.log("Listening on port " + 5000)
})