import { useEffect, useState } from "react";
import axios from "axios";
import Showdata from "./Showdata";

function GetData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=n3R9CH7zgG9UTC1jJTypFyuNO3Tj9MgzqDYmekve"
        );

        //objeyi change array..
        const photosArray = Object.values(response.data.photos);

        setData(photosArray);
      } catch (error) {
        alert("Api err", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data && (
        <div className="mainData">
          {data.map((photo, index) => (
            <Showdata key={index} photo={photo} />
          ))}
        </div>
      )}
    </div>
  );
}

export default GetData;
