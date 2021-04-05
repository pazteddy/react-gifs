import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategorias }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e)=>{
    // console.log(e.target.value);
    setInputValue(e.target.value);
  }
  const onHandleSubmit = (e) =>{
    // Evita que se recargue la pagina
      e.preventDefault();
      // console.log('onHandleSubmit ',inputValue);
      if(inputValue.trim().length > 2){
        setCategorias(cats => [inputValue,...cats]);
        setInputValue('');
      }
      
  };
  return (
    <form onSubmit={ onHandleSubmit }>
      <input 
        type="text" 
        name="" 
        id=""
        value={inputValue}
        onChange={ handleInputChange }
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategorias: PropTypes.func.isRequired
}
