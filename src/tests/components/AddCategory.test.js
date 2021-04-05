import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en el componente <AddCategory />', () => {
  const setCategorias = jest.fn();
  let wrapper = shallow(<AddCategory setCategorias= {setCategorias}/>);

  beforeEach( ()=> {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategorias= {setCategorias}/>);
  });
  test('Debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('Debe de cambiar la caja de texto ', () => {
    const input = wrapper.find('input');
    const value='Garfield';
    input.simulate('change',{ target:{ value }});

  });
  test('No se debe postear la infomacion', () => {
    wrapper.find('form').simulate('submit',{ preventDefault(){} });
    expect( setCategorias ).not.toHaveBeenCalled();
  });

  test('Debe llamar el setCategorias y limpiar la caja de texto ', () => {
    
    const value='Garfield';
    //Simular el inputChange
    const input = wrapper.find('input');
    input.simulate('change',{ target:{ value }});
    // Simular el Submit
    wrapper.find('form').simulate('submit',{ preventDefault(){} });
    // setCategorias debio ser llamado
    expect( setCategorias ).toHaveBeenCalled();
    //Verificar si se llamo con una funcion
    expect( setCategorias ).toHaveBeenCalledWith( expect.any(Function));
    //el valor del input debe estar vacio
    expect( input.text().trim() ).toBe( '' );
  });
  
  
  
  
})
