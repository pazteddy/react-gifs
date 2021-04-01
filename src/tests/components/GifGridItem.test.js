import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";
describe(" Pruebas de <GifGridItem/>", () =>{
  const title = 'Un título';
  const url = 'https://localhost/algo.jpg';
  const wrapper = shallow(<GifGridItem title={title} url={url}/>);
  test('Debe mostrar correctamente <GifGridItem/>', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test('debe tener un parrafo con el title', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });

  test('Debe tener la imagen igual al url y el alt de los props', () => {
    const img = wrapper.find('img');
    // Para obtener una sola propiedad
    //console.log( img.prop('src'));
    // Obtener todas las propiedas
    //console.log( img.props());
    expect(img.props().src).toBe(url);
    expect(img.props().alt).toBe(title);
  });
  
  test('debe tener animate__fadeIn', () => {
    const div = wrapper.find('div');
    //animate__fadeIn
    const className = div.prop('className');
    expect(className.includes('animate__fadeIn')).toBe(true);
  });
  
  
  

});