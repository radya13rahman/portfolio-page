import imgSlideshowImage from "./1c04b4f1a2f7ad2a5dc6c84ea8ada26539758123.webp";

export default function SlideshowImage() {
  return (
    <div className="relative size-full" data-name="Slideshow - Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSlideshowImage} />
    </div>
  );
}