import express, { Request, Response, NextFunction } from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

// Logging Middleware
app.use((req: Request, res: Response, next: NextFunction) => {
    const timestamp = new Date().toLocaleString();
    console.log(`[${timestamp}] ${req.method} ${req.url}`);
    next();
});

// Security Middleware
app.use((req: Request, res: Response, next: NextFunction) => {
    const userAgent = req.get("User-Agent");

    if (!userAgent) {
        return res.status(400).json({
            error: "Browser identification missing"
        });
    }

    next();
});

// Mock Database
let tasks = [
    { id: 1, title: "Learn Express" },
    { id: 2, title: "Master REST APIs" }
];

// GET
app.get("/tasks", (req: Request, res: Response) => {
    res.json(tasks);
});

// POST
app.post("/tasks", (req: Request, res: Response) => {
    const newTask = {
        id: req.body.id ?? tasks.length + 1,
        title: req.body.title
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
});

// PUT
app.put("/tasks/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const task = tasks.find(t => t.id === id);

    if (task) {
        task.title = req.body.title;
        res.json({
            message: "Task updated successfully",
            task
        });
    } else {
        res.status(404).json({
            error: "Task not found"
        });
    }
});

// DELETE
app.delete("/tasks/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id);

    tasks = tasks.filter(t => t.id !== id);

    res.json({
        message: `Task ${id} deleted`,
        remainingTasks: tasks
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`REST API Server running at http://localhost:${PORT}`);
});