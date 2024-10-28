import { FC } from 'react';
import { Modal } from '@mui/material';
import { ProductModel } from '../utils/product.model';
import ProductCreationForm from './ProductCreationForm';

type ProductEditFormProps = {
    product: ProductModel | null;
    open: boolean;
    onClose: () => void;
    onSave: (updatedProduct: ProductModel) => void;
};

const ProductEditForm: FC<ProductEditFormProps> = ({ product, open, onClose, onSave }) => {
    if (!product) return null;

    const handleSubmit = async (updatedData: Partial<ProductModel>) => {
        onSave({ ...product, ...updatedData });
        onClose();
    };

    return (
        <Modal open={open} onClose={onClose}>
            <div style={{ padding: '20px', backgroundColor: '#fff', margin: '50px auto', width: '400px' }}>
                <ProductCreationForm initialData={product} isEditing onSubmit={handleSubmit} />
            </div>
        </Modal>
    );
};

export default ProductEditForm;
