import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import { ProductModel } from '../utils/product.model';
import { ErrorMessage, Form } from '../assets/styles/productCreationForm.styles';
import UploadButton from './UploadButton';

type ProductCreationFormProps = {
    initialData?: Partial<ProductModel>;
    isEditing?: boolean;
    onSubmit: (product: ProductModel) => void;
};

const ProductCreationForm: React.FC<ProductCreationFormProps> = ({ initialData, isEditing, onSubmit }) => {
    const [title, setTitle] = useState(initialData?.title || '');
    const [description, setDescription] = useState(initialData?.description || '');
    const [image, setImage] = useState<string | null>(initialData?.image || null);
    const [price, setPrice] = useState<number | ''>(initialData?.price || '');
    const [error, setError] = useState('');

    const handleUpload = (file: File | null) => {
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        } else {
            setImage(null);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!title || !price) {
            setError('Title or price is required');
            return;
        }

        try {
            onSubmit({ title, description, image: image || '', price: Number(price) });
            setTitle('');
            setDescription('');
            setImage(null);
            setPrice('');
            setError('');
        } catch (error: any) {
            if (error.response?.status === 413) {
                setError('Упс, что-то пошло не так... повторите попытку позже');
            } else {
                setError('Ошибка: не удалось создать продукт. Попробуйте еще раз.');
            }
        }
    };

    return isEditing ? (
        <Form onSubmit={handleSubmit}>
            <Input value={title} onChange={e => setTitle(e.target.value)} placeholder='Title' />
            <Input value={description} onChange={e => setDescription(e.target.value)} placeholder='Description' />
            <UploadButton onFileUpload={handleUpload} />
            <Input
                type='number'
                value={price}
                onChange={e => setPrice(e.target.value ? Number(e.target.value) : '')}
                placeholder='Price'
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <Button type='submit'>Save editing</Button>
        </Form>
    ) : (
        <Form onSubmit={handleSubmit}>
            <Input value={title} onChange={e => setTitle(e.target.value)} placeholder='Title' />
            <Input value={description} onChange={e => setDescription(e.target.value)} placeholder='Description' />
            <UploadButton onFileUpload={handleUpload} />
            <Input
                type='number'
                value={price}
                onChange={e => setPrice(e.target.value ? Number(e.target.value) : '')}
                placeholder='Price'
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <Button type='submit'>Create</Button>
        </Form>
    );
};

export default ProductCreationForm;
