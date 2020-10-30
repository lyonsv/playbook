const Filters = ({filterName, data, loading, selected, handleChange}) => {
  if (data) {
    return (
      <div>
        <label for={filterName}>Choose a car:</label>
        <select name={filterName} id={filterName} onChange={handleChange}>
          {data.map(item => (
            <option value={item.id}>{item.name}</option>
          ))}
        </select>
      </div>
    );
  }

  return null;
};

export default Filters;
