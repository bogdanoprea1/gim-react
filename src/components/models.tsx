interface MenuItem {
  id: number;
  imgSrc: string;
  href: string;
  onClick: (href: string) => void; // Add this line
  activePanel: string;
  content: React.ReactNode;
}
