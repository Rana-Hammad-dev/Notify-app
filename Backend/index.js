require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8001;

const cors = require("cors");
app.use(cors());
app.use(express.json());

app.use(cors({
    origin: "https://notify-app-six.vercel.app"
}));

// database connecting
const connecting = require("./Database/Connection/connection")

// routes
const notesRoute = require("./Routes/notes.routes");
app.use("/", notesRoute);


app.listen(PORT, () => { console.log(`Server Started at port ${PORT}`) });