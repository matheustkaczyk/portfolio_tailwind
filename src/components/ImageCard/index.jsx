function ImageCard({ image, id }) {
  return (
    <div id={id} className="card w-20 grayscale">
      <img src={image} />
    </div>
  );
}

export default ImageCard;
