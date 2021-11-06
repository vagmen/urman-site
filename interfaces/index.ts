interface IFaqItem {
    id: string;
    question: string;
    answer: string;
}

export interface IFaqList {
    list: IFaqItem[];
    className?: string;
}
