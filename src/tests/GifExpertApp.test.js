import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Prueba de funcionalidad <GifExpertApp/>', () => {
  test('Debe mostrarse correctamente <GifExpertApp/>', () => {
    const wrapper= shallow(<GifExpertApp/>);
    expect( wrapper ).toMatchSnapshot();
  });

  test(' Debe mostrar una lista de categorias ', () => {
    const categorias = ['Heores Academia', 'Garfield'];
    const wrapper= shallow(<GifExpertApp defaultCategorias={ categorias }/>);
    expect(wrapper).toMatchSnapshot();
    expect( wrapper.find('GifGrid').length).toBe(categorias.length);

  });
  

});
