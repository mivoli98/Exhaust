import React from 'react';
import Select from 'react-select';

const SortedPrice = () => {
    const options = [
        { value: 'Default', label: 'Default' },
        { value: 'LowToHigh', label: 'Low to High' },
        { value: 'HighToLow', label: 'High to Low' }
      ]
  return (
    <div>
      <Select options={options} />
    </div>
  )
}

export default SortedPrice
