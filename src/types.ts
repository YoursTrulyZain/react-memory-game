import { ReactNode } from "react";

export interface GameLayoutProperties {
    children: [ReactNode, ReactNode]
}

export interface GameCardProperties {
    image: string,
    name: string
}

export interface AkatsukiCharacter {
    id: number,
    name: string;
    images: string[]; // Array of image URLs
  }