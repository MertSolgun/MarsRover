import { useEffect, useState } from "react";
import axios from "axios";
import Showdata from "./Showdata";

function GetData() {
  const [data, setData] = useState([]);
  const [respo, setRespo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const filterCameras = (cameraName) => {
    const filteredPhotos = respo.data.photos.filter(
      (photo) => photo.camera.name === cameraName
    );
    setData(filteredPhotos);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=n3R9CH7zgG9UTC1jJTypFyuNO3Tj9MgzqDYmekve"
        );

        setRespo(response);
      } catch (error) {
        alert("Api err", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div>
      <div className="buttonDiv">
        <button onClick={() => filterCameras("FHAZ")}>FHAZ</button>
        <button onClick={() => filterCameras("NAVCAM")}>NAVCAM</button>
        <button onClick={() => filterCameras("MAST")}>MAST</button>
        <button onClick={() => filterCameras("CHEMCAM")}>CHEMCAM</button>
        <button onClick={() => filterCameras("RHAZ")}>RHAZ</button>
      </div>
      <div className="selectCamera">
        <p> Select a camera angle to view images taken by Curiosity on Mars.</p>
        <div>
          <a
            href="https://mars.nasa.gov/mars2020/spacecraft/rover/cameras/"
            className="infoCamera"
          >
            İnformation about cameras
          </a>
        </div>
      </div>

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
