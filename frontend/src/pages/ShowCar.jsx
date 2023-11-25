import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowCar = () => {
  const [car, setCar] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8080/cars/${id}`)
      .then((response) => {
        setCar(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4" style={{ backgroundColor: 'lightblue' }}>
      <BackButton />
      <h1 className="text-3xl my-4">Car Details</h1>
      {loading ? (
        <Spinner />
      ) : (
        <table className="border-2 border-sky-400 rounded-lg">
          <tbody>
            <tr>
              <td className="text-xl mr-4 text-gray-400">ID</td>
              <td>{car._id}</td>
            </tr>
            <tr>
              <td className="text-xl mr-4 text-gray-400">OwnerOfTheCar</td>
              <td>{car.ownerOfTheCar}</td>
            </tr>
            <tr>
              <td className="text-xl mr-4 text-gray-400">License Plate</td>
              <td>{car.licensePlate}</td>
            </tr>
            <tr>
              <td className="text-xl mr-4 text-gray-400">Car Model</td>
              <td>{car.carModel}</td>
            </tr>
            <tr>
              <td className="text-xl mr-4 text-gray-400">Car Color</td>
              <td>{car.carColor}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ShowCar;
