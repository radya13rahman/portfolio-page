import imgSlideshowImage from "./d60b360a8251a7bbb27835bb086f1e7f52381580.webp";

export default function SlideshowImage() {
  return (
    <div className="relative size-full" data-name="Slideshow - Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSlideshowImage} />
    </div>
  );
}