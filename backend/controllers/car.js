import { request, response } from "express";
import { Car } from '../models/carModel.js';


export const postCar = async(request,response,next)=>{
    try{
        if(
            !request.body.ownerOfTheCar ||
            !request.body.licensePlate ||
            !request.body.carModel ||
            !request.body.carColor
        ) {
            return response.status(400).send({
                message: 'Send all required fields:ownerOfTheCar,licensePlate,carModel,carColor',
            });
        }

        const newCar ={
            ownerOfTheCar:request.body.ownerOfTheCar,
            licensePlate: request.body.licensePlate ,
            carModel: request.body.carModel,
            carColor: request.body.carColor,
        };

        const car = await Car.create(newCar);
        return response.status(201).send(car);
     } catch (error){
            console.log(error.message);
            response.status(500).send({message: error.message})
     }
}
export const getCars = async(request,response,next)=>{
    try{
        const cars = await Car.find({});
        return response.status(200).json({
            count: cars.length,
            data: cars
        });
    } catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
}

export const getcar = async(request, response,next)=>{try{
    const{ id } = request.params; 


    const car = await Car.findById(id);
    
    return response.status(200).json(car);
     
} catch(error){
    console.log(error.message);
    response.status(500).send({message: error.message});
}}

export const putcar = async(request,response,next)=>{try{
    if(
        !request.body.ownerOfTheCar ||
        !request.body.licensePlate ||
        !request.body.carModel ||
        !request.body.carColor
    ) { 
        return response.status(400).send({
            message: 'Send all required fields:ownerOfTheCar,licensePlate,carModel,carColor',
        });
    }

    const{ id } = request.params; 


    const result = await Car.findByIdAndUpdate(id,request.body);

    if(!result){
        return response.status(404).json({message: 'Car not found'});
    }

    return response.status(200).send({message:'Car updated successfully'});
}catch(error){
    console.log(error.message);
    response.status(500).send({message: error.message})
}}

export const deletecar = async(request,response,next)=>{try{
    const { id } = request.params;

    const result = await Car.findByIdAndDelete(id);

    if (!result) {
        return response.status(404).json({message: 'Car is not found'});
    }
    return response.status(200).send({message:'Car is deleted successfully'});


}catch(error) {
    console.log(error.message);
    response.status(500).send({message: error.message});
}}