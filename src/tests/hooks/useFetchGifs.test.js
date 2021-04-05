import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGifs', () => {
  test('Debe de retornar el estado inicial', async() => {
    // Isntalar la libreria +
    const { result, waitForNextUpdate } = renderHook ( () => useFetchGifs('sHeroe Academia'));
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect( data ).toEqual([]);
    expect( loading ).toBe(true);
  });

  test('Debe retornar un arreglo de imgs y loading en False', async() => {
    const { result, waitForNextUpdate } = renderHook ( () => useFetchGifs('Heroe Academia'));
    await waitForNextUpdate();

    const { data, loading } = result.current;
    expect( data.length ).toEqual(10);
    expect( loading ).toBe(false);
    
  })
  
  
  
})
