import express from "express";
const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
    res.send("<h1>Welcome SVECW!</h1><p>You have reached the Home Page.</p>");
});
app.get("/about", (req, res) => {
    res.send("This server was built as a learning exercise for Express.js.");
});
app.get("/api/status", (req, res) => {
    res.json({
        active: true,
        version: "1.0.0",
        message: "The server is healthy and responding!"
    });
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
