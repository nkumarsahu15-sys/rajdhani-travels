/** All service content, exactly as provided by Rajdhani Travels. */

export const sleeper = {
  slug: '/sleeper-buses',
  name: 'Sleeper Buses',
  title: 'Luxury Sleeper Buses',
  subtitle: 'AC & Non-AC Sleeper Buses Available',
  description:
    'Our sleeper buses are suitable for comfortable long-distance travel, tourist trips, group travel and rental requirements.',
  facilities: [
    'AC & Non-AC Sleeper Buses',
    'Comfortable Sleeper Berths',
    'Individual Cabin/Private Sleeper Space',
    'USB Charging Port',
    'Charging Point',
    'Reading/Individual Lights',
    'Blanket Facility',
    'Water Bottle Facility',
    'Comfortable Sleeping Arrangement',
    'Clean & Well-Maintained Interiors',
  ],
  bookingOptions: [
    { title: 'Ticket Booking', text: 'Book individual seats/tickets for your journey.' },
    { title: 'Full Bus Rental', text: 'Book the complete sleeper bus for your group.' },
    { title: 'Tourist Booking', text: 'Book a sleeper bus for tourist trips and tours.' },
    {
      title: 'Private Group Travel',
      text: 'Complete bus available for family, friends, company or group travel.',
    },
  ],
  statement:
    'Whether you need a single ticket or an entire sleeper bus on rent, Rajdhani Travels provides suitable options according to your requirement.',
};

export const seater = {
  slug: '/seater-buses',
  name: 'Seater Buses',
  title: 'Luxury AC & Non-AC Seater Buses',
  description:
    'We provide different types and seating capacities of seater buses for groups, tours, weddings, school & college trips, corporate travel, tourist purposes and rental requirements.',
  seatHeadline: 'All types of Seater Buses available from 16-Seater to 56-Seater.',
  seatOptions: [16, 17, 25, 26, 32, 36, 40, 46],
  seatNote:
    'Urbania, Force Traveller and other seating capacity options are also available according to requirement.',
  facilities: [
    'AC & Non-AC Options',
    'USB Charging Port at Each Seat',
    'Individual Charging Facility',
    'RGB Ambient Lighting',
    'Proper Interior Lighting',
    'Comfortable Inclined/Reclining Seats',
    'Television',
    'Music System',
    'Comfortable Seating Arrangement',
    'Clean & Well-Maintained Interiors',
  ],
  bookingOptions: [
    'Full Bus Rental',
    'Tourist Trips',
    'Family Tours',
    'Group Travel',
    'Wedding & Event Transportation',
    'School & College Trips',
    'Corporate Tours',
    'Picnic & Outstation Trips',
    'Private Group Requirements',
  ],
  statement:
    'You can book a seater bus on rental basis for any travel, tour, event or group transportation requirement.',
};

export const car = {
  slug: '/car-rental',
  name: 'Car Rental',
  title: 'Cars Available on Rent',
  description:
    'Rajdhani Travels also provides car rental services for personal, family, business, tourist and special occasions.',
  options: [
    '5-Seater Cars',
    '5-Seater Non-AC Cars',
    '7-Seater Cars',
    'Luxury Cars',
    'Premium Cars',
    'Clean & Well-Maintained Cars',
  ],
  optionsNote:
    'Cars are available according to your requirement, whether you need a comfortable family car, premium/luxury car or a vehicle for a special occasion.',
  perfectFor: [
    'Family Travel',
    'Outstation Trips',
    'Tourist Travel',
    'Business Travel',
    'Airport/Local Requirements',
    'Wedding Functions',
    'Marriage Ceremonies',
    'Special Events',
    'VIP & Premium Requirements',
  ],
  wedding: {
    title: 'Wedding Car Rental',
    text: 'Make your special day more memorable with our Wedding & Luxury Car Rental Service.',
    intro: 'Luxury and premium cars can be booked specially for:',
    audiences: ['Wedding', 'Bride & Groom', 'Family', 'Guests', 'Functions', 'Special Events'],
  },
};

export const whyChoose = [
  {
    title: 'Comfortable Travel',
    text: 'Vehicles selected according to your group size and travel requirements.',
  },
  {
    title: 'Multiple Options',
    text: 'Choose from Sleeper Buses, Seater Buses and Cars.',
  },
  {
    title: 'AC & Non-AC',
    text: 'Different AC and Non-AC options available.',
  },
  {
    title: 'Rental & Ticket Booking',
    text: 'Book individual sleeper tickets or rent a complete bus for your group.',
  },
  {
    title: 'Tourist & Private Trips',
    text: 'Vehicles available for tourist trips, family tours, group travel and private requirements.',
  },
  {
    title: 'Clean & Maintained Vehicles',
    text: 'We aim to provide clean, comfortable and well-maintained vehicles.',
  },
  {
    title: 'Flexible Group Options',
    text: 'Vehicle options available for small as well as large groups.',
  },
];

export const bookFor = [
  'Tourist Trips',
  'Family Tours',
  'Group Travel',
  'Weddings',
  'Events',
  'School Trips',
  'College Trips',
  'Corporate Tours',
  'Outstation Travel',
  'Private Rental',
];

export const socialFollow = {
  title: 'Follow Now on Instagram',
  button: 'FOLLOW NOW ON INSTAGRAM',
  intro: 'Follow Rajdhani Travels on social media for:',
  items: [
    'New Bus Updates',
    'Travel Videos',
    'Offers',
    'New Vehicles',
    'Travel Reels',
    'Booking Updates',
  ],
};

export type VehicleKey = 'sleeper' | 'seater' | 'car';

export const enquiryVehicles: { key: VehicleKey; label: string }[] = [
  { key: 'sleeper', label: 'Sleeper Bus' },
  { key: 'seater', label: 'Seater Bus' },
  { key: 'car', label: 'Car Rental' },
];

export const enquiryPurposes: Record<VehicleKey, string[]> = {
  sleeper: sleeper.bookingOptions.map((o) => o.title),
  seater: seater.bookingOptions,
  car: car.perfectFor,
};

export const seatCapacityChoices = [
  ...seater.seatOptions.map((n) => `${n}-Seater`),
  'Urbania',
  'Force Traveller',
  'Other capacity',
];
