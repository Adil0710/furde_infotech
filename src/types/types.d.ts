import { StaticImageData } from "next/image";

export interface ServiceCard {
  image: StaticImageData;
  title: string;
  descriptionLines: string[];
}

export interface ITService {
  image: StaticImageData;
  title: string;
  link: string;
  backgroundImage: StaticImageData;
  description: string;
  descriptionvm: string;
  cards: ServiceCard[];
}
