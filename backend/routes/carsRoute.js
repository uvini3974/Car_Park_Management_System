import express from 'express';
import { Car } from '../models/carModel.js';
import { deletecar, getCars, getcar, postCar, putcar } from '../controllers/car.js';


const router = express.Router();

router.post('/', postCar);

router.get('/',getCars);

router.get('/:id',getcar);

router.put('/:id', putcar);

router.delete('/:id', deletecar);

export default router;