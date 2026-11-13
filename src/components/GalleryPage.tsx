import React, { useEffect } from 'react';
import { GalleryHero } from './GalleryHero';
import { ProjectGallery } from './ProjectGallery';
import { BeforeAfterSection } from './BeforeAfterSection';
import { CtaBannerSection } from './CtaBannerSection';
import { Footer } from './Footer';

export const GalleryPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#FFFFFF] text-slate-900 selection:bg-[#DE1110] selection:text-white overflow-x-hidden">
      <main>
        {/* Section 1: Gallery Hero */}
        <GalleryHero />

        {/* Section 2: Project Gallery with Category Filters & Lightbox */}
        <ProjectGallery />

        {/* Section 3: Vorher & Nachher Draggable Comparison Slider */}
        <BeforeAfterSection />

        {/* Section 4: Final CTA Banner (from Homepage) */}
        <div className="bg-[#FFFFFF] pt-4 sm:pt-8 pb-12 sm:pb-16 px-4 sm:px-8 max-w-[1440px] mx-auto">
          <CtaBannerSection />
        </div>
      </main>

      {/* Section 5: Shared Footer */}
      <Footer />
    </div>
  );
};

export default GalleryPage;

