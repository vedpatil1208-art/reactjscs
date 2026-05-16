import { useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import './ImageGallery.css';

export default function ImageGallery({ images, title }) {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <>
      <div className="gallery" id="image-gallery">
        <div className="gallery-main" onClick={() => setLightbox(true)}>
          <img src={images[current]} alt={`${title} - Image ${current + 1}`} className="gallery-main-img" />
          <div className="gallery-zoom"><ZoomIn size={20} /></div>
          <button className="gallery-nav gallery-prev" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous image">
            <ChevronLeft size={22} />
          </button>
          <button className="gallery-nav gallery-next" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next image">
            <ChevronRight size={22} />
          </button>
          <div className="gallery-counter">{current + 1} / {images.length}</div>
        </div>
        <div className="gallery-thumbs">
          {images.map((img, i) => (
            <button
              key={i}
              className={`gallery-thumb ${i === current ? 'active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`View image ${i + 1}`}
            >
              <img src={img} alt={`Thumbnail ${i + 1}`} />
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="lightbox animate-fade-in" onClick={() => setLightbox(false)} id="lightbox">
          <button className="lightbox-close" onClick={() => setLightbox(false)} aria-label="Close"><X size={24} /></button>
          <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous">
            <ChevronLeft size={32} />
          </button>
          <img src={images[current]} alt={`${title} - Full ${current + 1}`} className="lightbox-img animate-scale-in" onClick={(e) => e.stopPropagation()} />
          <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next">
            <ChevronRight size={32} />
          </button>
          <div className="lightbox-counter">{current + 1} / {images.length}</div>
        </div>
      )}
    </>
  );
}
