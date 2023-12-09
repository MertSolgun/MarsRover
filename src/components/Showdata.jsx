function Showdata({ photo }) {
  if (!photo) {
    return null;
  }

  const { img_src, earth_date, camera } = photo;
  const cameraFullName = camera.full_name;

  return (
    <div className="imgContainer">
      <img src={img_src} alt="" width="300px" />
      <div>Date: {earth_date}</div>
      <div>Camera Name: {cameraFullName}</div>
    </div>
  );
}

export default Showdata;
