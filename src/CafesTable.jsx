import { useState, useEffect } from 'react';
import FilterCafes from './FilterCafes';

const CafesTable = () => {
  const [selectedSubway, setSelectedSubway] = useState('All');
  const [cafes, setCafes] = useState([]);

  useEffect(() => {
    fetch('/cafes')
      .then(res => res.json())
      .then(data => setCafes(data.cafes || data));
  }, []);

  const filteredCafes = selectedSubway === 'All' ? cafes : cafes.filter(cafe => cafe.subwayCode === selectedSubway);

  return (
    <div className="cafesTable">
      <FilterCafes onChange={setSelectedSubway} />
      <ul className="cardsList">
        {filteredCafes.map(cafe => (
          <li key={cafe.id} className="card">
            <img src={cafe.img || 'https://via.placeholder.com/150'} alt="" />
            <h2>{cafe.name}</h2>
            <p>{cafe.desc}</p>
            <p>{cafe.address}</p>
            <p>Subway: {cafe.subwayCode}</p>
            <p>{cafe.workTime}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CafesTable;