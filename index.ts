import express from 'express';
import type { Request, Response } from 'express';

const app = express();
const PORT = 3000;

const db: string[] = ["admin", "usuario@ucb.com", "usuario2"];

app.get('/auth', (req: Request, res: Response) => {
    const user = req.query.user as string;

    if (!user) {
        res.status(400).json({ 
            status: "ERROR", 
            message: "Falta el user" 
        });
        return;
    }

    if (db.includes(user)) {
        res.json({ 
            status: "OK", 
            encontrado: true 
        });
    } else {
        res.json({ 
            status: "NO_EXISTE", 
            encontrado: false 
        });
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor activo en puerto ${PORT}`);
});