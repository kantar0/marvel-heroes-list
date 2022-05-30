export interface User {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  id: number;
}

type ItemProps = {
  resourceURI: string;
  name: string;
  type?: string;
};


export interface CharacterCategory {
  available: number;
  collectionURI: string;
  items: ItemProps[];
  returned: number;
}

export type Characters = Characters[Character];

export interface Character {
  id: number;
  name: string;
  description: string;
  modified: string;
  resourceURI: string;
  urls: [
    {
      type: string;
      url: string;
    }
  ];
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: CharacterCategory;
  stories: CharacterCategory;
  events: CharacterCategory;
  series: CharacterCategory;
}

export interface Comic {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: [
    {
      type: string;
      language: string;
      text: string;
    }
  ];
  resourceURI: string;
  urls: [
    {
      type: string;
      url: string;
    }
  ];
  series: {
    resourceURI: string;
    name: string;
  };
  variants: [
    {
      resourceURI: string;
      name: string;
    }
  ];
  collections: [
    {
      resourceURI: string;
      name: string;
    }
  ];
  collectedIssues: [
    {
      resourceURI: string;
      name: string;
    }
  ];
  dates: [
    {
      type: string;
      date: string;
    }
  ];
  prices: [
    {
      type: string;
      price: number;
    }
  ];
  thumbnail: {
    path: string;
    extension: string;
  };
  images: [
    {
      path: string;
      extension: string;
    }
  ];
  creators: {
    available: number;
    collectionURI: string;
    items: [
      {
        resourceURI: string;
        name: string;
        role: string;
      }
    ];
    returned: number;
  };
  characters: {
    available: number;
    collectionURI: string;
    items: [
      {
        resourceURI: string;
        name: string;
        role: string;
      }
    ];
    returned: number;
  };
  stories: {
    available: number;
    collectionURI: string;
    items: [
      {
        resourceURI: string;
        name: string;
        type: string;
      }
    ];
    returned: number;
  };
  events: {
    available: number;
    collectionURI: string;
    items: [
      {
        resourceURI: string;
        name: string;
      }
    ];
    returned: number;
  };
}



