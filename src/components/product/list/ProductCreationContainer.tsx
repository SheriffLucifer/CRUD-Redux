import React, { useState } from 'react';
import CreateButton from '../../CreateButton';
import Modal from '../../Modal';
import ProductCreationForm from '../../ProductCreationForm';
import { useDispatch } from 'react-redux';
import { addProductAction } from '../../../store/product/product.slice';
import { ProductModel } from '../../../utils/product.model';

const ProductCreationContainer: React.FC = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const dispatch = useDispatch();

    const handleModalOpen = () => setModalVisible(true);
    const handleModalClose = () => setModalVisible(false);

    const randomId = () => {
        const number = Math.floor(Math.random() * 10000);
        return number;
    };

    const handleSubmit = (product: ProductModel) => {
        const newProduct = { ...product, id: randomId() };
        dispatch(addProductAction(newProduct));
        handleModalClose();
    };

    return (
        <>
            <CreateButton onClick={handleModalOpen} />
            <Modal title='Create Product' visible={modalVisible} onClose={handleModalClose}>
                <ProductCreationForm onSubmit={handleSubmit} />
            </Modal>
        </>
    );
};

export default ProductCreationContainer;
