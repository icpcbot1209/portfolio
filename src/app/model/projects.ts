export const projects: IProject[] = [
  {
    id: 'sports-exchange',
    title: 'Sports Exchange',
    description: 'Sports Marketplace',
    tech: ['Ionic', 'Angular', 'Node/Express', 'PostgreSQL', 'Firebase'],
    link: 'https://docs.google.com/presentation/d/11go0CfFNHy__OpP-2fbDiy2Y9LOlGd74IHY4Tj_otr4/edit?usp=sharing',
    thumbnail: 'assets/thumbs/sports-exchange.png',
  },
  {
    id: 'design-pad',
    title: 'Design Pad',
    description: '',
    tech: [''],
    link: 'https://docs.google.com/presentation/d/1MbXSr1O5mG8tElw3FnIGuA1VdwOKtt9n9LPvfkxM_Ys/edit?usp=sharing',
    thumbnail: 'assets/thumbs/design-pad-v2.png',
  },
  {
    id: 'html-editor',
    title: 'Html Editor',
    description: '',
    tech: [''],
    link: 'https://docs.google.com/presentation/d/13DYhlCIxiO3yYxNBThwL7lmBQNE0hlPeJDFMzGbSxOM/edit?usp=sharing',
    thumbnail: 'assets/thumbs/design-pad-v3.png',
  },
  {
    id: 'stock-trader',
    title: 'Stock Trader',
    description: 'Drag & Drop Stock Trader Builder',
    tech: ['Angular', 'Firebase', '.Net/C#', 'Alpaca', 'Stripe'],
    link: 'https://docs.google.com/presentation/d/1RrpLium8kxev-YNbzk0vDaoZwv4F9sh5V_odpAoUh_8/edit?usp=sharing',
    thumbnail: 'assets/thumbs/stock-trader.png',
  },
  {
    id: 'movie-site',
    title: 'Movie Epivore',
    description: 'Netflix like content provider',
    tech: ['React Native'],
    link: 'https://docs.google.com/presentation/d/1Bn86MyW7iHHowV6oEgez2uRolzu-QmHpvIPI-OYptHI/edit?usp=sharing',
    thumbnail: 'assets/thumbs/movie-epivore.png',
  },
  {
    id: 'design-pad-v1',
    title: 'HTML CSS Editor',
    description: 'React',
    tech: ['React', 'Material UI', 'AWS S3'],
    link: 'https://docs.google.com/presentation/d/16UqiR3aGVedcKx4DqthftnJuKZvI5lPPji3Aq-3n_z8/edit?usp=sharing',
    thumbnail: 'assets/thumbs/design-pad-v1.png',
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
