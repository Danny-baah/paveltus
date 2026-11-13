import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export type CategoryFilter = 'all' | 'trockenbau' | 'maler' | 'abriss';

interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  categoryName: string;
  categories: CategoryFilter[];
}

const GALLERY_ITEMS: ProjectImage[] = [
  {
    id: 'bath',
    src: '/gallery_img_1_bath.jpg',
    alt: 'Moderne Badsanierung mit bodengleicher Dusche und LED-Lichtband',
    title: 'Exklusive Badsanierung',
    categoryName: 'Trockenbau & Sanierung',
    categories: ['trockenbau'],
  },
  {
    id: 'trock',
    src: '/gallery_img_2_trock.jpg',
    alt: 'Trockenbau nach Maß mit abgehängter Decke und Spachtelarbeiten',
    title: 'Innenausbau & Trockenbau',
    categoryName: 'Trockenbau',
    categories: ['trockenbau'],
  },
  {
    id: 'room',
    src: '/gallery_img_3_room.jpg',
    alt: 'Fertiggestellter Wohnraum mit Parkettboden und Akzentwand',
    title: 'Modernes Raumkonzept',
    categoryName: 'Malerarbeiten & Trockenbau',
    categories: ['trockenbau', 'maler'],
  },
  {
    id: 'abriss',
    src: '/gallery_img_4_abriss.jpg',
    alt: 'Fachgerechter Innenabriss und Entkernung mit Bauschuttentsorgung',
    title: 'Rückbau & Entkernung',
    categoryName: 'Abriss & Entrümpelung',
    categories: ['abriss'],
  },
  {
    id: 'maler',
    src: '/gallery_img_5_maler.jpg',
    alt: 'Professionelle Malerarbeiten und makelloser Innenanstrich',
    title: 'Präzise Malerarbeiten',
    categoryName: 'Malerarbeiten',
    categories: ['maler'],
  },
];

export const ProjectGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filtered items based on active category
  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.categories.includes(activeFilter));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  }, []);

  const showPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : filteredItems.length - 1));
  }, [lightboxIndex, filteredItems.length]);

  const showNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! < filteredItems.length - 1 ? prev! + 1 : 0));
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  return (
    <section
      id="unsere-projekte"
      className="relative w-full bg-[#FFFFFF] py-16 sm:py-20 lg:py-28 px-5 sm:px-10 lg:px-16"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-[1360px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-14">
          <span className="text-xs sm:text-[13px] font-extrabold tracking-[0.2em] text-[#021861] uppercase block mb-3">
            UNSERE PROJEKTE
          </span>
          <h2
            id="gallery-heading"
            className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#021861] tracking-[-0.03em] leading-[1.18] mb-4 sm:mb-5"
          >
            Ausgewählte <span className="text-[#DE1110]">Projekte</span> im Überblick.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Entdecken Sie eine Auswahl unserer realisierten Arbeiten – von Innenausbau über
            Malerarbeiten bis hin zu Rückbau und Sanierung.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10 sm:mb-14">
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`px-6 py-2.5 rounded-full text-xs sm:text-[13px] font-bold transition-all duration-200 cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[#021861] text-white shadow-md shadow-[#021861]/15'
                : 'bg-[#F5F7FC] text-[#021861] hover:bg-[#ebf0fc]'
            }`}
          >
            Alle Projekte
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('trockenbau')}
            className={`px-6 py-2.5 rounded-full text-xs sm:text-[13px] font-bold transition-all duration-200 cursor-pointer ${
              activeFilter === 'trockenbau'
                ? 'bg-[#021861] text-white shadow-md shadow-[#021861]/15'
                : 'bg-[#F5F7FC] text-[#021861] hover:bg-[#ebf0fc]'
            }`}
          >
            Trockenbau
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('maler')}
            className={`px-6 py-2.5 rounded-full text-xs sm:text-[13px] font-bold transition-all duration-200 cursor-pointer ${
              activeFilter === 'maler'
                ? 'bg-[#021861] text-white shadow-md shadow-[#021861]/15'
                : 'bg-[#F5F7FC] text-[#021861] hover:bg-[#ebf0fc]'
            }`}
          >
            Malerarbeiten
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('abriss')}
            className={`px-6 py-2.5 rounded-full text-xs sm:text-[13px] font-bold transition-all duration-200 cursor-pointer ${
              activeFilter === 'abriss'
                ? 'bg-[#021861] text-white shadow-md shadow-[#021861]/15'
                : 'bg-[#F5F7FC] text-[#021861] hover:bg-[#ebf0fc]'
            }`}
          >
            Abriss &amp; Entrümpelung
          </button>
        </div>

        {/* ================= EDITORIAL ASYMMETRICAL IMAGE GRID ================= */}
        {activeFilter === 'all' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
            {/* LEFT COLUMN: Large Featured Vertical Image (Card 0: Bathroom) */}
            <div className="lg:col-span-4 h-full">
              <div
                onClick={() => openLightbox(0)}
                className="group relative w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-lg shadow-[#021861]/5 bg-slate-100 cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-[#021861]/15"
              >
                <img
                  src={GALLERY_ITEMS[0].src}
                  alt={GALLERY_ITEMS[0].alt}
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#021861]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-xs font-extrabold text-[#DE1110] uppercase tracking-wider mb-1">
                    {GALLERY_ITEMS[0].categoryName}
                  </span>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white">{GALLERY_ITEMS[0].title}</h3>
                    <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMNS: 2x2 Grid of 4 Images (Cards 1..4) */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {/* Card 1: Trockenbau room */}
              <div
                onClick={() => openLightbox(1)}
                className="group relative w-full aspect-[16/10] sm:aspect-auto sm:h-[245px] lg:h-[248px] rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-lg shadow-[#021861]/5 bg-slate-100 cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-[#021861]/15"
              >
                <img
                  src={GALLERY_ITEMS[1].src}
                  alt={GALLERY_ITEMS[1].alt}
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#021861]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-[11px] font-extrabold text-[#DE1110] uppercase tracking-wider mb-0.5">
                    {GALLERY_ITEMS[1].categoryName}
                  </span>
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-white">{GALLERY_ITEMS[1].title}</h3>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <ZoomIn className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Modern Room */}
              <div
                onClick={() => openLightbox(2)}
                className="group relative w-full aspect-[16/10] sm:aspect-auto sm:h-[245px] lg:h-[248px] rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-lg shadow-[#021861]/5 bg-slate-100 cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-[#021861]/15"
              >
                <img
                  src={GALLERY_ITEMS[2].src}
                  alt={GALLERY_ITEMS[2].alt}
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#021861]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-[11px] font-extrabold text-[#DE1110] uppercase tracking-wider mb-0.5">
                    {GALLERY_ITEMS[2].categoryName}
                  </span>
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-white">{GALLERY_ITEMS[2].title}</h3>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <ZoomIn className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Abriss */}
              <div
                onClick={() => openLightbox(3)}
                className="group relative w-full aspect-[16/10] sm:aspect-auto sm:h-[245px] lg:h-[248px] rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-lg shadow-[#021861]/5 bg-slate-100 cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-[#021861]/15"
              >
                <img
                  src={GALLERY_ITEMS[3].src}
                  alt={GALLERY_ITEMS[3].alt}
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#021861]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-[11px] font-extrabold text-[#DE1110] uppercase tracking-wider mb-0.5">
                    {GALLERY_ITEMS[3].categoryName}
                  </span>
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-white">{GALLERY_ITEMS[3].title}</h3>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <ZoomIn className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4: Maler roller */}
              <div
                onClick={() => openLightbox(4)}
                className="group relative w-full aspect-[16/10] sm:aspect-auto sm:h-[245px] lg:h-[248px] rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-lg shadow-[#021861]/5 bg-slate-100 cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-[#021861]/15"
              >
                <img
                  src={GALLERY_ITEMS[4].src}
                  alt={GALLERY_ITEMS[4].alt}
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#021861]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-[11px] font-extrabold text-[#DE1110] uppercase tracking-wider mb-0.5">
                    {GALLERY_ITEMS[4].categoryName}
                  </span>
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-white">{GALLERY_ITEMS[4].title}</h3>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <ZoomIn className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Filtered View (Clean grid of matching items) */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="group relative w-full aspect-[16/11] rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-lg shadow-[#021861]/5 bg-slate-100 cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-[#021861]/15"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#021861]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-xs font-extrabold text-[#DE1110] uppercase tracking-wider mb-1">
                    {item.categoryName}
                  </span>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ================= LIGHTBOX MODAL ================= */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Projektfoto Detailansicht"
          className="fixed inset-0 z-50 bg-[#021861]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 select-none"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Schließen (Esc)"
            className="absolute top-5 right-5 sm:top-7 sm:right-7 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-6 h-6 stroke-[2.2]" />
          </button>

          {/* Previous Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Vorheriges Bild"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 active:scale-95 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-7 h-7 stroke-[2.5]" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Nächstes Bild"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 active:scale-95 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronRight className="w-7 h-7 stroke-[2.5]" />
          </button>

          {/* Image & Caption Container */}
          <div
            className="relative max-w-4xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-[16px] overflow-hidden shadow-2xl bg-black/20">
              <img
                src={filteredItems[lightboxIndex].src}
                alt={filteredItems[lightboxIndex].alt}
                className="max-w-full max-h-[72vh] object-contain rounded-[16px]"
              />
            </div>

            {/* Caption bar */}
            <div className="w-full flex items-center justify-between text-white mt-4 px-2">
              <div>
                <span className="text-xs font-extrabold text-[#DE1110] uppercase tracking-wider block">
                  {filteredItems[lightboxIndex].categoryName}
                </span>
                <h4 className="text-lg font-bold text-white leading-tight">
                  {filteredItems[lightboxIndex].title}
                </h4>
              </div>
              <span className="text-xs font-semibold text-white/60 tracking-widest bg-white/10 px-3 py-1 rounded-full">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

