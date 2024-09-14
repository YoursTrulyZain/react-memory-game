export interface GameContainerProperties {
    characterArray: AkatsukiCharacter[]
}

export interface GameCardProperties {
    id: number,
    image: string,
    name: string,
    setSelectedID: (id: number) => void,
    setGameStarted: (state: boolean) => void;
}

export interface AkatsukiCharacter {
    id: number,
    name: string;
    images: string[]; // Array of image URLs
  }