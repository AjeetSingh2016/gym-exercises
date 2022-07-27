export const exercisesOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '734c98e533mshac21f9ea978fbbfp1b7b89jsnf6b8b2ba7dd1',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
export const fetchData = async (url, options)=>{

    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}

