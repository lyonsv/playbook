const Filters = ({makes, loading, selectedMake, handleChange}) => {
  if (!loading && makes) {
    return (
      <>
        {selectedMake && <h1>{selectedMake}</h1>}
        <label for="cars">Choose a car:</label>
        <select name="cars" id="cars" onChange={handleChange}>
          {makes.map(make => (
            <option value={make}>{make}</option>
          ))}
        </select>
      </>
    );
  }

  return <p>Loading...</p>;
};

export default Filters;
