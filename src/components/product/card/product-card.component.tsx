import React, { memo, FC } from 'react';
import { ProductModel } from '../../../utils/product.model';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Description from '../../Description';

type ProductCardProps = ProductModel;

const ProductCard: FC<ProductCardProps> = ({ title, price, description, image }) => {
    return (
        <Card sx={{ width: 600, display: 'flex', alignItems: 'center', margin: '15px 0' }}>
            <CardMedia component='img' sx={{ width: 150 }} image={image} title={title} />
            <CardContent sx={{ width: 300, flex: '1 0 auto' }}>
                <Typography component='div' variant='h5' style={{ marginBottom: 25 }}>
                    {title}
                </Typography>
                <Description text={description}></Description>
            </CardContent>
            <Typography component='span' color='yellowgreen'>
                {price}$
            </Typography>
        </Card>
    );
};

export default memo(ProductCard);
