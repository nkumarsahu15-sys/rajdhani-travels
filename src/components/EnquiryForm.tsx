'use client';

import { useId, useState } from 'react';
import { Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { enquiryPurposes, enquiryVehicles, seatCapacityChoices, type VehicleKey } from '@/data/services';
import { telUrl, whatsappUrl } from '@/lib/utils';
import { Button } from './Button';
import { WhatsAppIcon } from './icons';

const field =
  'w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-[15px] text-ink placeholder:text-steel/60 transition duration-200 focus:border-marigold focus:outline-none focus:ring-2 focus:ring-marigold/40';
const labelClass = 'mb-1.5 block text-sm font-semibold text-ink';

export type EnquiryPreset = { vehicle?: VehicleKey };

/**
 * Simple enquiry form. There is no backend: on submit the details are
 * written into a WhatsApp message to Rajdhani Travels.
 */
export function EnquiryForm({ preset }: { preset?: EnquiryPreset }) {
  const uid = useId();
  const [vehicle, setVehicle] = useState<VehicleKey | ''>(preset?.vehicle ?? '');
  const [purpose, setPurpose] = useState('');
  const [capacity, setCapacity] = useState('');
  const [sent, setSent] = useState(false);

  const id = (name: string) => `${uid}-${name}`;

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (key: string) => String(data.get(key) ?? '').trim();
    const vehicleLabel = enquiryVehicles.find((v) => v.key === vehicle)?.label;

    const details: Array<[string, string]> = [
      ['Name', get('name')],
      ['Phone', get('phone')],
      ['Vehicle', vehicleLabel ?? ''],
      [vehicle === 'car' ? 'Purpose' : 'Booking type', purpose],
      ['Seating capacity', capacity],
      ['Travel date', get('date')],
      ['Details', get('details')],
    ];
    const lines = [
      siteConfig.whatsappGreeting,
      '',
      ...details.filter(([, value]) => value).map(([label, value]) => `${label}: ${value}`),
    ];

    window.open(whatsappUrl(siteConfig.primaryWhatsapp, lines.join('\n')), '_blank', 'noopener,noreferrer');
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={id('name')} className={labelClass}>
            Your name
          </label>
          <input id={id('name')} name="name" required autoComplete="name" className={field} placeholder="Full name" />
        </div>
        <div>
          <label htmlFor={id('phone')} className={labelClass}>
            Phone number
          </label>
          <input
            id={id('phone')}
            name="phone"
            type="tel"
            inputMode="tel"
            required
            autoComplete="tel"
            pattern="[0-9+ ]{10,15}"
            title="Enter a valid phone number"
            className={field}
            placeholder="Mobile number"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={id('vehicle')} className={labelClass}>
            Vehicle
          </label>
          <select
            id={id('vehicle')}
            required
            value={vehicle}
            onChange={(e) => {
              setVehicle(e.target.value as VehicleKey | '');
              setPurpose('');
              setCapacity('');
            }}
            className={field}
          >
            <option value="">Select a vehicle</option>
            {enquiryVehicles.map((v) => (
              <option key={v.key} value={v.key}>
                {v.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={id('purpose')} className={labelClass}>
            {vehicle === 'car' ? 'Purpose' : 'Booking type'}
          </label>
          <select
            id={id('purpose')}
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            disabled={!vehicle}
            className={`${field} disabled:opacity-60`}
          >
            <option value="">{vehicle ? 'Select an option' : 'Choose a vehicle first'}</option>
            {vehicle &&
              enquiryPurposes[vehicle].map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
          </select>
        </div>
      </div>

      {vehicle === 'seater' && (
        <div>
          <label htmlFor={id('capacity')} className={labelClass}>
            Seating capacity
          </label>
          <select id={id('capacity')} value={capacity} onChange={(e) => setCapacity(e.target.value)} className={field}>
            <option value="">Select seating capacity</option>
            {seatCapacityChoices.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      )}

      <div>
        <label htmlFor={id('date')} className={labelClass}>
          Travel date
        </label>
        <input id={id('date')} name="date" type="date" className={field} />
      </div>

      <div>
        <label htmlFor={id('details')} className={labelClass}>
          Trip details
        </label>
        <textarea
          id={id('details')}
          name="details"
          rows={3}
          className={field}
          placeholder="Tell us about your requirement"
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button type="submit" variant="whatsapp" size="lg" icon={<WhatsAppIcon />} className="sm:flex-1">
          SEND ON WHATSAPP
        </Button>
        <Button href={telUrl(siteConfig.phones.booking.tel)} variant="light" size="lg" icon={<Phone className="h-4 w-4" aria-hidden />}>
          CALL NOW
        </Button>
      </div>

      <p className="text-sm text-steel" role="status">
        {sent
          ? 'WhatsApp should have opened with your enquiry. If it did not, please use the Call Now button.'
          : 'Your enquiry opens in WhatsApp so you can send it directly to Rajdhani Travels.'}
      </p>
    </form>
  );
}
