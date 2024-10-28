export interface ProductModel {
    id?: number;
    title: string;
    price: number;
    category?: string;
    description: string;
    image: string;
    rating?: {
        rate: number;
        count: number;
    };
}
