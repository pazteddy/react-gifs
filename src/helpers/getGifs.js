export const getGifs = async( categoria )=>{

  const url= `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categoria) }&limit=10&api_key=2rPsp0GvJxUDllDQN4BjIlb8YV9N6VM0`;
  const resp = await fetch(url);
  const {data} = await resp.json();
  //console.log(data);
  const gifs = data.map( img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  });
  //console.log(gifs);
  return gifs;
};