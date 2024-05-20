import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import { ProductModel } from '../utils/product.model';
import { ErrorMessage, Form } from '../assets/styles/productCreationForm.styles';

type ProductCreationFormProps = {
    onSubmit: (product: Partial<ProductModel>) => void;
};

const ProductCreationForm: React.FC<ProductCreationFormProps> = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title) {
            setError('Title is required');
            return;
        }
        onSubmit({ title, description });
        setTitle('');
        setDescription('');
        setError('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input value={title} onChange={e => setTitle(e.target.value)} placeholder='Title' />
            <Input value={description} onChange={e => setDescription(e.target.value)} placeholder='Description' />
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <Button type='submit'>Create</Button>
        </Form>
    );
};

export default ProductCreationForm;
