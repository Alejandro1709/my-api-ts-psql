import express, { Request, Response } from 'express';

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello API');
});

app.listen(3030, () => console.log('Server is up and running on port 3030'));
