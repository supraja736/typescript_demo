import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.get("/user/:id", (req: Request, res: Response) => {
    const userId = req.params.id;

    res.send(`
        <h1>User Profile</h1>
        <p>You are viewing the profile for User ID:
        <strong>${userId}</strong></p>
    `);
});

app.get("/flights/:from/:to", (req: Request, res: Response) => {
    const { from, to } = req.params;

    res.send(`Searching for flights departing from <b>${from}</b> arriving at <b>${to}</b>.`);
});

app.get("/search", (req: Request, res: Response) => {
    const category = req.query.category;
    const sort = req.query.sort;

    res.json({
        message: "Search Results",
        filteringBy: category || "None",
        sortingBy: sort || "Default"
    });
});

app.listen(PORT, () => {
    console.log(`Dynamic server running at http://localhost:${PORT}`);
});