import React from 'react';
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe(" Pruebas de <GifGrid/>", () =>{
  const categoria = 'Heroe Academia';
  test('Debe mostrar correctamente <GifGrid/>', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading : true
    });
    const wrapper = shallow(<GifGrid categoria={categoria}/>);
    expect( wrapper ).toMatchSnapshot();
  });
  test('Deben mostrar items cuando se cargan imágenes useFecthGifs', () => {
    const gifs=[{
      id:'ABC',
      url: 'https//localhost/cosa.gif',
      title:'Cualquier cosa'
    }]
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading : false
    });
    const wrapper = shallow(<GifGrid categoria={categoria}/>);
    expect(wrapper).toMatchSnapshot();
    expect( wrapper.find('p').exists()).toBe(false);
    expect( wrapper.find('GifGridItem').length).toBe( gifs.length );
  });
  
});