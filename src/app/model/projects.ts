export const projects: IProject[] = [
  {
    id: 'sports-exchange',
    title: 'Sports Exchange',
    description: 'Sports Marketplace',
    tech: ['Ionic', 'Angular', 'Node/Express', 'PostgreSQL', 'Firebase'],
    link: 'https://docs.google.com/presentation/d/145VmC0jh_VKwRlNi7O2S3TIpKpTeLb2Srgb4kgDA-0g/edit?usp=sharing',
    thumbnail: 'assets/thumbs/sports-exchange.png',
  },
  {
    id: 'design-pad',
    title: 'Design Pad',
    description: '',
    tech: [''],
    link: 'https://docs.google.com/presentation/d/1hZaIcFlJlAVZ-7SpVNG57A3qI94Gw_nfAz0tP6kuzQM/edit?usp=sharing',
    thumbnail: 'assets/thumbs/design-pad-v2.png',
  },
  {
    id: 'html-editor',
    title: 'Html Editor',
    description: '',
    tech: [''],
    link: 'https://docs.google.com/presentation/d/1J5bUaVu4IgSCRQPtbl4JHL2ggYELDKvXC_7PvqQIs0I/edit?usp=sharing',
    thumbnail: 'assets/thumbs/design-pad-v3.png',
  },
  {
    id: 'stock-trader',
    title: 'Stock Trader',
    description: 'Drag & Drop Stock Trader Builder',
    tech: ['Angular', 'Firebase', '.Net/C#', 'Alpaca', 'Stripe'],
    link: 'https://docs.google.com/presentation/d/1MT7rb431Qk9RooknJFVq-w4e1oer9hBvJvQgZJyq-JI/edit?usp=sharing',
    thumbnail: 'assets/thumbs/stock-trader.png',
  },
  {
    id: 'nft-market',
    title: 'NFT Marketplace',
    description: '',
    tech: [''],
    link: 'paper-plane',
    thumbnail: '',
  },
  {
    id: 'zefr-slidshow',
    title: 'Zefr Slideshow',
    description: '',
    tech: [''],
    link: 'mail',
    thumbnail: '',
  },
  {
    id: 'leaflet-draw',
    title: 'Leaflet Map Draw',
    description: '',
    tech: [''],
    link: 'paper-plane',
    thumbnail: '',
  },
  {
    id: 'gig-people',
    title: 'Gig People',
    description: '',
    tech: [''],
    link: 'mail',
    thumbnail: '',
  },
  {
    id: 'leaflet-camera',
    title: 'Leaflet Surveyor',
    description: '',
    tech: [''],
    link: 'paper-plane',
    thumbnail: '',
  },
  {
    id: 'twilio-draw',
    title: 'Twillio Draw',
    description: 'Video Chat with Draw Tools',
    tech: [''],
    link: 'mail',
    thumbnail: '',
  },
  {
    id: 'ble-finder',
    title: 'AR BLE Finder',
    description: 'Android app to find a lost BLE using Augmented reality',
    tech: [''],
    link: 'paper-plane',
    thumbnail: '',
  },
  {
    id: '',
    title: 'DeckGL Windflow',
    description: '',
    tech: [''],
    link: 'mail',
    thumbnail: '',
  },
];

export interface IProject {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  thumbnail: string;
}
