const messages = [
  'SLEEPER BUSES',
  'SEATER BUSES',
  'CAR RENTAL',
  'AC & NON-AC',
  'TICKET BOOKING',
  'FULL BUS RENTAL',
  'TOURIST TRIPS',
  'WEDDINGS & EVENTS',
];

function Track({ hidden }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden}>
      {messages.map((m) => (
        <li key={m} className="flex items-center">
          <span className="board-glow px-8 font-display text-sm font-bold tracking-[0.3em] text-marigold sm:text-base">
            {m}
          </span>
          <span className="h-1.5 w-1.5 rotate-45 bg-marigold/50" />
        </li>
      ))}
    </ul>
  );
}

/** A scrolling bus-style destination board. Uses only services the company provided. */
export function DestinationBoard() {
  return (
    <div className="relative overflow-hidden border-y border-marigold/25 bg-black py-4" role="marquee" aria-label="Sleeper Buses, Seater Buses and Car Rental">
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        <Track />
        <Track hidden />
      </div>
      <div className="led-dots pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent" />
    </div>
  );
}
