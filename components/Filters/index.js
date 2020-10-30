const Filters = ({filterName, data, selected, handleChange}) => {
  if (data) {
    return (
      <div>
        <label htmlFor={filterName}>Choose a car:</label>
        <select name={filterName} id={filterName} onChange={handleChange}>
          <option value="">
            Select a {filterName}...
          </option>
          {data.map(item => (
            <option key={item.id} value={item.id}>{item.name}</option>
          ))}
        </select>
      </div>
    );
  }

  return null;
};

export default Filters;
