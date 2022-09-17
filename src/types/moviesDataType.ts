export interface Category {
    id: string;
    title: string;
    link: string;
}

export interface Date {
    year: string;
    month: string;
    day: string;
}

export interface MoreInfo {
    about: string;
    cast: string[];
    genres: string[];
    feelings: string[];
    writer: string[];
    director: string[];
}

export interface Descriptions {
    episodes: any[];
    'more-info': MoreInfo;
}

export interface MovieType {
    id: string;
    name: string;
    'small-image': string;
    'large-image': string;
    'title-image': string;
    trailer: string;
    'trailer-duration': string;
    video: string;
    'match-score': string;
    'maturity-rating': string;
    seasons: string;
    date: Date;
    episodes: string;
    duration: string;
    descriptions: Descriptions;
}

export interface MoviesCollectionType {
    category: Category;
    Movies: MovieType[];
}