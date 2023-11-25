import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import CarsTable from '../components/home/CarsTable';
import CarsCard from '../components/home/CarsCard';

const Home = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');
  const [licensePlateSearch, setLicensePlateSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:8080/cars')
      .then((Response) => {
        setCars(Response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleLicensePlateSearch = () => {
    const results = cars.filter((car) =>
      car.licensePlate.toLowerCase() === licensePlateSearch.toLowerCase()
    );
    setSearchResults(results);
  };

  const tableStyle = {
    backgroundColor: 'white',
  };

  const textColor = {
    color: 'your_desired_color', 
  };

  return (
    <div
      className='p-4'
      style={{
        backgroundColor:'blueviolet',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <div className='flex justify-center items-center gap-x-4'>
        <button
          className='bg-sky-300 hover-bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('table')}
        >
          <span style={textColor}>cars</span>
        </button>
        <button
    className='bg-sky-300 hover-bg-sky-600 px-4 py-1 rounded-lg'
    onClick={() => setShowType('table')}
  >
    <span style={textColor}>Table</span>
  </button>

  
    <Link to='/'>
      <button style={{ margin: '0 500px' }}
        className='bg-sky-700 hover-bg-sky-600 px-4 py-1 rounded-lg'
      >
        <span style={textColor}>LOG OUT</span>
      </button>
    </Link>
  
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8' style={textColor}>
          Cars List
        </h1>
        <Link to='/cars/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
      <div className='mb-4'>
        <input
          type='text'
          placeholder='Search by License Plate'
          value={licensePlateSearch}
          onChange={(e) => setLicensePlateSearch(e.target.value)}
        />
        <button
          className='bg-sky-300 hover-bg-sky-600 px-4 py-1 rounded-lg'
          onClick={handleLicensePlateSearch}
        >
          <span style={textColor}>Search</span>
        </button>
      </div>
      {loading ? (
        <Spinner />
      ) : searchResults.length > 0 ? (
        showType === 'table' ? (
          <CarsTable cars={searchResults} style={tableStyle} />
        ) : (
          <CarsCard cars={searchResults} />
        )
      ) : showType === 'table' ? (
        <CarsTable cars={cars} style={tableStyle} />
      ) : (
        <CarsCard cars={cars} />
      )}
    </div>
  );
};

export default Home;
