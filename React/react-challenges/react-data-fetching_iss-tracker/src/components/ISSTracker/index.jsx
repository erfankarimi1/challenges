import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

async function fetcher (url) {
  const res = await fetch(url)
  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.')
    // Attach extra info to the error object.
    error.info = await res.json()
    error.status = res.status
    throw error
  }
  return res.json()
}


const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function ISSTracker() {
  const {data: coords, mutate, error, isLoding} = useSWR(URL, fetcher,{ refreshInterval: 1000 });
  console.log(coords);
  if (isLoding ){
    return <h1 >Loading....</h1>
}
if(error || !coords){
  return <h1>Something went wrong</h1>
}

  //Render Data


  // const [coords, setCoords] = useState({
  //   longitude: 0,
  //   latitude: 0,
  // });

  // async function getISSCoords() {
  //   try {
  //     const response = await fetch(URL);
  //     if (response.ok) {
  //       const data = await response.json();
  //       setCoords({ longitude: data.longitude, latitude: data.latitude });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     getISSCoords();
  //   }, 5000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  //  }, []);

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
         onRefresh={mutate}
      />
    </main>
  );
}
