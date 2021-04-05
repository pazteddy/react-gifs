import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGifs', () => {
  test('Debe de retornar el estado inicial', () => {
    // Isntalar la libreria +
    const { result } = renderHook ( () => useFetchGifs('Heroe Academia'));
    const { data, loading } = result.current;
    // const { data:images,loading } = useFetchGifs('Heroe Academia');
    expect( data ).toEqual([]);
    expect( loading ).toBe(true);
  })
  
  
})
