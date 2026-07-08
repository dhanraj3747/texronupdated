import { cn } from "@/app/components/ui/utils";

export interface GalleryImage {
  src: string;
  alt: string;
  category?: string;
}

export function FluidGallery({ images, className }: { images: GalleryImage[], className?: string }) {
  if (!images || images.length === 0) return null;

  return (
    <div className={cn("grid grid-cols-2 gap-4 md:gap-6", className)}>
      {images.map((img, idx) => (
        <div 
          key={idx} 
          className="group relative overflow-hidden rounded-xl bg-[#111] transition-all hover:shadow-lg"
          style={{ height: "320px" }}
        >
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
          {img.category && (
            <div className="absolute top-3 left-3 bg-[#1E3A5F]/90 backdrop-blur-sm text-white text-[10px] font-[var(--font-mono)] px-2.5 py-1 rounded shadow-sm uppercase tracking-wider">
              {img.category}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}