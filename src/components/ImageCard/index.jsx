function ImageCard({ image, id }) {
  return (
    <div id={id} className="card w-20 grayscale xsm:w-16 xsm:p-1">
      <img src={image} />
    </div>
  );
}

export default ImageCard;
