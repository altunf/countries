export interface Countries {
  code: string;
  name: string;
  currency: string;
  languages: Languages;
  continent: Continent;
  emoji: string;
}

export interface Languages {
  name: string;
}

export interface Continent {
  name: string;
}
