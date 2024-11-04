export interface ProductModel {
    id?: number;
    title: string;
    price: number;
    category?: string;
    description: string;
    image: string;
    isEditable?: boolean;
    rating?: {
        rate: number;
        count: number;
    };
}
