export const projects: IProject[] = [
  {
    id: 'sports-exchange',
    title: 'Sports Exchange',
    description: 'Sports Marketplace',
    tech: ['Ionic', 'Angular', 'Node/Express', 'PostgreSQL', 'Firebase'],
    link: 'https://docs.google.com/presentation/d/145VmC0jh_VKwRlNi7O2S3TIpKpTeLb2Srgb4kgDA-0g/edit?usp=sharing',
    thumbnail:
      'https://drive.google.com/file/d/1cCiJs10DLdsq3Wc_3mb5vGvI2AVhSrui/view?usp=sharing',
  },
  {
    id: 'design-pad',
    title: 'Design Pad',
    description: '',
    tech: [''],
    link: 'https://docs.google.com/presentation/d/1hZaIcFlJlAVZ-7SpVNG57A3qI94Gw_nfAz0tP6kuzQM/edit?usp=sharing',
    thumbnail:
      'https://drive.google.com/file/d/1l-KkLMjKb-skfivyDceCr1OAuy-PFal0/view?usp=sharing',
  },
  {
    id: 'html-editor',
    title: 'Html Editor',
    description: '',
    tech: [''],
    link: 'https://docs.google.com/presentation/d/1J5bUaVu4IgSCRQPtbl4JHL2ggYELDKvXC_7PvqQIs0I/edit?usp=sharing',
    thumbnail:
      'https://drive.google.com/file/d/1ZfFofiAm9ffTSXX5U4H7g9qrEwRK7M6J/view?usp=sharing',
  },
  {
    id: 'movie-site',
    title: 'Movie Epivore',
    description: 'Netflix like content provider',
    tech: ['React Native'],
    link: 'https://docs.google.com/presentation/d/1JqlUsyRdCJQomvZaN9NzU-ghxhsEzEsJwvh2ceOtXjE/edit?usp=sharing',
    thumbnail:
      'https://drive.google.com/file/d/1yBaJAExrfhhRhhIg6sVYANdokL47t_yI/view?usp=sharing',
  },
  {
    id: 'stock-market',
    title: 'Stock Market',
    description: 'Drag & Drop Stock Trading Flow Builder',
    tech: ['Angular', 'Firebase', '.Net/C#', 'Alpaca', 'Stripe'],
    link: 'paper-plane',
    thumbnail: '',
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
