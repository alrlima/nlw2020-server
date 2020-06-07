import express from "express";
import cors from 'cors';
import routes from './routes';
import path from 'path';
import { errors } from 'celebrate';

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.text());

app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

const porta = 3333;
app.listen(porta);
console.log("servidor ativo: ", "http://localhost:" + porta);
