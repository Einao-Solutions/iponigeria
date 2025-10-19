// place files you want to import through the `$lib` alias in this folder.
export interface Service {
  title: string;
  description: string;
  icon: any;
  link?: string;
}

export interface Feature {
  text: string;
}

export interface Stat {
  value: string;
  label: string;
}