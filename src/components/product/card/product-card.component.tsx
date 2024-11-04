import { memo, FC, useState } from 'react';
import { ProductModel } from '../../../utils/product.model';
import { Button, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import Description from '../../Description';
import ImageModal from '../../ImageModal';
import DeleteButton from '../../DeleteButton';

type ProductCardProps = ProductModel & {
    onDelete: () => void;
    onEdit: () => void;
    onAddToCart: () => void;
};

const ProductCard: FC<ProductCardProps> = ({
    title,
    price,
    description,
    image,
    isEditable,
    onDelete,
    onEdit,
    onAddToCart,
}) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Card
                sx={{
                    position: 'relative',
                    width: 600,
                    display: 'flex',
                    alignItems: 'center',
                    margin: '15px 0',
                    padding: '15px 15px',
                }}
            >
                <CardMedia
                    component='img'
                    sx={{ width: 150, cursor: 'pointer' }}
                    image={image}
                    title={title}
                    onClick={handleOpen}
                />
                <CardContent sx={{ width: 300, flex: '1 0 auto' }}>
                    <Typography component='div' variant='h5' style={{ marginBottom: 25 }}>
                        {title}
                    </Typography>
                    <Description text={description}></Description>
                    <Button style={{ marginTop: 15 }} onClick={onAddToCart} variant='contained' color='primary'>
                        Add to cart
                    </Button>
                </CardContent>
                <Typography component='span' color='yellowgreen'>
                    {price}$
                </Typography>
                <DeleteButton onClick={onDelete} />
                {isEditable && (
                    <IconButton
                        aria-label='edit'
                        color='warning'
                        onClick={onEdit}
                        sx={{ position: 'absolute', bottom: 15, right: 15 }}
                    >
                        Edit
                    </IconButton>
                )}
            </Card>

            <ImageModal open={open} image={image} title={title} onClose={handleClose}></ImageModal>
        </>
    );
};

export default memo(ProductCard);
