import express from "express";
import { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
    res.json({
        message: "Welcome to our API!",
        status: "Active",
        timestamp: new Date()
    });
});

app.get("/students", (req: Request, res: Response) => {
    const studentList = [
        { id: 101, name: "Alice", course: "MERN Stack" },
        { id: 102, name: "Bob", course: "Data Science" },
        { id: 103, name: "Charlie", course: "UI/UX" }
    ];

    res.json(studentList);
});

app.get("/product/:id", (req: Request, res: Response) => {
    const productId = req.params.id;

    res.json({
        requestedId: productId,
        category: "Electronics",
        inStock: true,
        tags: ["gadget", "new-arrival"]
    });
});

app.listen(PORT, () => {
    console.log(`JSON Server running at http://localhost:${PORT}`);
});