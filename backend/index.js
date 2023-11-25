import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Car } from './models/carModel.js';
import carsRoute from './routes/carsRoute.js';
import usersRoute from './routes/usersRoute.js'
import cors from 'cors';


const app = express();

app.use(express.json());
app.use(cors());





app.get('/', (request,response) => {
    console.log(request);
    return response.status(234).send('Welcome To The Car Park');
});

app.use('/cars',carsRoute);

app.use("/users", usersRoute);



mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log(`App is connected to database`);
        app.listen(PORT, () =>{
            console.log(`App is listening to port: ${PORT}`);
        });

    })
    .catch((error) => {
        console.log(error);

    });