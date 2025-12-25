const FilterCafes = ({ onChange }) => {
  const options = [
    { name: "Все", code: "All" },
    { name: "Арбатская", code: "Arbat" },
    { name: "Александровский сад", code: "Alexanders Garden" },
    { name: "Московская", code: "Moscow" },
    { name: "Парк Культуры", code: "Culture" },
    { name: "Театральная", code: "Theater" },
  ];

  return (
    <div className='controls'>
      <select name="subway" id="subway" onChange={(e) => onChange(e.target.value)}>
        {options.map(option => (
          <option key={option.code} value={option.code}>{option.name}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterCafes;