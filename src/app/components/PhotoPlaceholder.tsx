import { Camera } from "lucide-react";

interface PhotoPlaceholderProps {
  directive: string;
  aspectRatio?: string;
  className?: string;
  fallbackImage?: string;
}

export function PhotoPlaceholder({
  directive,
  aspectRatio = "aspect-video",
  className = "",
  fallbackImage,
}: PhotoPlaceholderProps) {
  if (fallbackImage) {
    return (
      <div className={`relative ${aspectRatio} ${className} overflow-hidden rounded-lg`}>
        <img
          src={fallbackImage}
          alt={directive}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative ${aspectRatio} ${className} overflow-hidden rounded-lg bg-[#1E3A5F]/5 border-2 border-dashed border-[#1E3A5F]/30 flex items-center justify-center`}
    >
      <Camera className="w-10 h-10 text-[#1E3A5F]/40" />
    </div>
  );
}