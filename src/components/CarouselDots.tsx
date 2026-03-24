'use client';

type CarouselDotsProps = {
  totalSlides: number;
  currentSlide: number;
};

export function CarouselDots({ totalSlides, currentSlide }: CarouselDotsProps) {
  return (
    <div className="flex gap-2 justify-center items-center py-2">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <div
          key={index}
          className={`transition-all duration-300 rounded-full ${
            index === currentSlide
              ? 'w-7 h-2 bg-[#1480DB]'
              : 'w-2 h-2 bg-gray-300'
          }`}
          aria-label={`Slide ${index + 1}`}
        />
      ))}
    </div>
  );
}
