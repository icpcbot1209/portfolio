export const projects: IProject[] = [
  {
    id: 'b2bexchange',
    title: 'B2BExchange',
    description: 'Sports Marketplace',
    tech: ['Ionic', 'Angular', 'Node/Express', 'PostgreSQL', 'Firebase'],
    icon: 'mail',
  },
  {
    id: 'stock-market',
    title: 'StockMarket',
    description: 'Drag & Drop Stock Trading Flow Builder',
    tech: ['Angular', 'Firebase', '.Net/C#', 'Alpaca', 'Stripe'],
    icon: 'paper-plane',
  },
  {
    id: 'design-pad',
    title: 'Design Pad',
    description: '',
    tech: [''],
    icon: 'mail',
  },
  {
    id: 'html-editor',
    title: 'Html Editor',
    description: '',
    tech: [''],
    icon: 'mail',
  },
  {
    id: 'nft-market',
    title: 'NFT Marketplace',
    description: '',
    tech: [''],
    icon: 'paper-plane',
  },
  {
    id: 'zefr-slidshow',
    title: 'Zefr Slideshow',
    description: '',
    tech: [''],
    icon: 'mail',
  },
  {
    id: 'movie-site',
    title: 'Movie Epivore',
    description: 'Netflix like content provider',
    tech: [''],
    icon: 'mail',
  },
  {
    id: 'leaflet-draw',
    title: 'Leaflet Map Draw',
    description: '',
    tech: [''],
    icon: 'paper-plane',
  },
  {
    id: 'gig-people',
    title: 'Gig People',
    description: '',
    tech: [''],
    icon: 'mail',
  },
  {
    id: 'leaflet-camera',
    title: 'Leaflet Surveyor',
    description: '',
    tech: [''],
    icon: 'paper-plane',
  },
  {
    id: 'twilio-draw',
    title: 'Twillio Draw',
    description: 'Video Chat with Draw Tools',
    tech: [''],
    icon: 'mail',
  },
  {
    id: 'ble-finder',
    title: 'AR BLE Finder',
    description: 'Android app to find a lost BLE using Augmented reality',
    tech: [''],
    icon: 'paper-plane',
  },
  {
    id: '',
    title: 'DeckGL Windflow',
    description: '',
    tech: [''],
    icon: 'mail',
  },
];

export interface IProject {
  id: string;
  title: string;
  description: string;
  tech: string[];
  icon: string;
}
