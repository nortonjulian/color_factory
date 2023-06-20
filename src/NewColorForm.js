import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function NewColorForm() {
  const [colorName, setColorName] = useState('');
  const [colorHex, setColorHex] = useState('');
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (colorName.trim() === '' || colorHex.trim() === '') {
      alert('Please enter a color name and hex value.');
      return;
    }

    setColorName('');
    setColorHex('');


    history.push('/colors');
  };

  return (
    <div>
      <h2>New Color Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Color Name:
          <input
            type="text"
            value={colorName}
            onChange={(e) => setColorName(e.target.value)}
          />
        </label>
        <label>
          Color Hex:
          <input
            type="color"
            value={colorHex}
            onChange={(e) => setColorHex(e.target.value)}
          />
        </label>
        <button type="submit">Add Color</button>
      </form>
    </div>
  );
}

export default NewColorForm;
