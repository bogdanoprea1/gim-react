interface MenuItem {
  id: number;
  imgSrc: string;
  href: string;
  onClick: (href: string) => void; // Add this line
  activePanel: string;
  content: React.ReactNode;
  title: string;
}

interface IDropdownItem {
  id: number;
  label: string;
  gifs: string[]; // Assuming gifs are represented by their URL strings
}

interface IDropdownProps {
  items: IDropdownItem[];
}

interface FullScreenGifProps {
  src: string;
  alt: string;
  className?: string;
}
