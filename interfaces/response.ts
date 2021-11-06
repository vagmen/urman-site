export interface IImage {
    id: string;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    url: string;
}

interface IWhy {
    id: string;
    text: string;
    video: string | null;
}

interface IEmployee {
    id: string;
    name: string;
    position: string;
    avatar: IImage;
    avatarV: IImage | null;
}

interface IStage {
    id: string;
    content: string;
    employee: IEmployee;
    image: IImage;
}

export interface IResponseServices {
    id: string;
    name: string;
    content: string;
    slug: string;
    employeeTitle: string;
    whyTitle: string;
    quote: string;
    quoteEmployee: number;
    stagesTitle: string;
    whyList: IWhy[];
    stages: IStage[];
    poster: IImage;
}

interface IAuthor {
    name: string;
    position: string;
    avatar: IImage;
}

export interface IResponseArticle {
    id: string;
    title: string;
    content: string;
    publishedAt: string;
    description: string;
    urlId: string;
    showInMainPage: boolean;
    author: IAuthor | null;
    poster: IImage;
    relatedArticles: IResponseArticle[];
    relatedServices: IResponseServices[];
}
