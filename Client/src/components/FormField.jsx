import React, { useRef } from 'react';
import { preview } from '../assets';

const FormField = ({ labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe }) => {
  const ref = useRef(null);

  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label
          htmlFor={name}
          className='block text-sm font-medium text-gray-900'
          onClick={() => {
            ref.current.value = '';
          }}
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type='button'
            onClick={handleSurpriseMe}
            className='font-semibold text-xs bg-[#EcECF1] py-1 px-2 rounded-[5px] text-black'
          >
            Surprise me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-[#6469ff] focus:border-[#6469ff]  block w-full p-3'
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        ref={ref}
      />
    </div>
  );
};

export default FormField;
