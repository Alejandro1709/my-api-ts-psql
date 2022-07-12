import express from 'express';

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3030, () => console.log('Server is up and running on port 3030'));
