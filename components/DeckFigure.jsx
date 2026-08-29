import Image from 'next/image';

/**
 * Presents a deck slide as a framed infographic.
 * Clicking opens the full-resolution image in a new tab.
 */
export default function DeckFigure({ src, alt, caption, priority = false }) {
  return (
    <figure className="group">
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open full-size: ${alt}`}
        className="block rounded-2xl border border-slate-200 shadow-sm overflow-hidden bg-white hover:shadow-lg transition-shadow"
      >
        <Image
          src={src}
          alt={alt}
          width={2000}
          height={1125}
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1100px"
          className="w-full h-auto"
        />
      </a>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-slate-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
