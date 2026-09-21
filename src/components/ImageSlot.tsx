import Image from 'next/image';
import type { ArtKind } from '@/config/media';
import { cn } from '@/lib/utils';
import { BusArt, CarArt, GarlandArt, InteriorArt, RoadArt } from './VehicleArt';

type Props = {
  /** Path in /public (e.g. /images/bus.jpg). When empty, an illustration placeholder is shown. */
  src?: string;
  alt: string;
  art: ArtKind;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** 'contain' shows the whole photo, 'cover' (default) fills the frame. */
  fit?: 'cover' | 'contain';
};

const sceneBackground: Record<ArtKind, string> = {
  sleeper: 'from-ink-700 via-ink to-night',
  seater: 'from-ink-700 via-ink to-night',
  car: 'from-ink-700 via-ink to-night',
  interior: 'from-ink-800 via-ink to-night',
  travel: 'from-[#1C3F66] via-ink to-night',
  wedding: 'from-[#3B2A14] via-ink to-night',
};

function Scene({ art }: { art: ArtKind }) {
  const vehicle = 'absolute bottom-[8%] left-1/2 w-[88%] max-w-[560px] -translate-x-1/2';
  return (
    <>
      <div className="absolute inset-x-0 bottom-0 h-[16%] bg-gradient-to-t from-night to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_45%_at_50%_85%,rgba(244,163,0,0.16),transparent)]" />
      {art === 'sleeper' && <BusArt variant="sleeper" className={vehicle} />}
      {art === 'seater' && <BusArt variant="seater" className={vehicle} />}
      {art === 'car' && <CarArt className={vehicle} />}
      {art === 'wedding' && (
        <>
          <GarlandArt className="absolute inset-x-[6%] top-[8%] w-[88%]" />
          <CarArt className={vehicle} />
        </>
      )}
      {art === 'interior' && <InteriorArt className="absolute inset-0 h-full w-full" />}
      {art === 'travel' && <RoadArt className="absolute inset-0 h-full w-full" />}
    </>
  );
}

export function ImageSlot({ src, alt, art, className, sizes = '(min-width: 1024px) 50vw, 100vw', priority, fit = 'cover' }: Props) {
  return (
    <div className={cn('relative overflow-hidden', src ? 'bg-white' : 'bg-ink', className)}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn('transition duration-700 ease-out group-hover:scale-[1.03]', fit === 'contain' ? 'object-contain' : 'object-cover')}
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className={cn(
            'absolute inset-0 bg-gradient-to-b transition duration-700 ease-out group-hover:scale-[1.04]',
            sceneBackground[art],
          )}
        >
          <Scene art={art} />
        </div>
      )}
    </div>
  );
}
