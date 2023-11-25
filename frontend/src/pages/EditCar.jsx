import React, { useState, useEffect } from 'react'
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditCar = () => {
  const [ownerOfTheCar, setOwnerOfTheCar] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carColor, setCarColor] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:8080/cars/${id}`)
      .then((response) => {
        setOwnerOfTheCar(response.data.ownerOfTheCar);
        setLicensePlate(response.data.licensePlate);
        setCarModel(response.data.carModel);
        setCarColor(response.data.carColor);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert('An error. Plz check console');
        console.log(error);
      });
  }, [])

  const handleEditCar = () => {
    const data = {
      ownerOfTheCar,
      licensePlate,
      carModel,
      carColor,
    };
    setLoading(true);
    axios
      .put(`http://localhost:8080/cars/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Car Edited successfully', { variant: 'success' });
        navigate('/home');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4' style={{ backgroundColor: 'lightblue' }}>
      <BackButton />
      <h1 className='text-3xl my-4'>Edit Car</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Owner Of The Car  </label>
          <input
            type='text'
            value={ownerOfTheCar}
            onChange={(e) => setOwnerOfTheCar(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />

          <label className='text-xl mr-4 text-gray-500'>License Plate     </label>
          <input
            type='text'
            value={licensePlate}
            onChange={(e) => setLicensePlate(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />

          <label className='text-xl mr-4 text-gray-500'>Car Model  </label>
          <input
            type='text'
            value={carModel}
            onChange={(e) => setCarModel(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />

          <label className='text-xl mr-4 text-gray-500'>Car Color   </label>
          <input
            type='text'
            value={carColor}
            onChange={(e) => setCarColor(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>

        <button className='p-2 bg-sky-300 m-8' onClick={handleEditCar}>
          Save
        </button>
      </div>
    </div>
  )
}

export default EditCar
