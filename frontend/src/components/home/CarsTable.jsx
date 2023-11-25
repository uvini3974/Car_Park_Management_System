import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';


const CarsTable = ({ cars }) => {
  return (
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
    <thead>
      <tr>
        <th style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px' }}>No</th>
        <th style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px' }}>Owner Of The Car</th>
        <th style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px' }}>License Plate</th>
        <th style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px' }}>Car Model</th>
        <th style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px' }}>Car Color</th>
        <th style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px' }}>Operation</th>
      </tr>
    </thead>
    <tbody>
      {cars.map((car, index) => (
        <tr key={car._id}>
          <td style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px', textAlign: 'center' }}>
            {index + 1}
          </td>
          <td style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px', textAlign: 'center' }}>
            {car.ownerOfTheCar}
          </td>
          <td style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px', textAlign: 'center' }}>
            {car.licensePlate}
          </td>
          <td style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px', textAlign: 'center' }}>
            {car.carModel}
          </td>
          <td style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px', textAlign: 'center' }}>
            {car.carColor}
          </td>
          <td style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '4px', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
              <Link to={`/cars/details/${car._id}`}>
                <BsInfoCircle className='text-2xl text-blue-800' />
              </Link>
              <Link to={`/cars/edit/${car._id}`}>
                <AiOutlineEdit className='text-2xl text-yellow-600' />
              </Link>
              <Link to={`/cars/delete/${car._id}`}>
                <MdOutlineDelete className='text-2xl text-pink-600' />
              </Link>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default CarsTable