import { Typography } from '@mui/material';
import React, { FC, useCallback, useMemo, useState } from 'react';

const DEFAULT_MAX_LENGTH = 150;

type DescriptionProps = {
    text: string;
    maxLength?: number;
};

const Description: FC<DescriptionProps> = ({ text, maxLength = DEFAULT_MAX_LENGTH }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const isTextLong = useMemo(() => text.length > maxLength, [text, maxLength]);

    const displayedText = useMemo(() => {
        return isTextLong && !isExpanded ? text.slice(0, maxLength) + '...' : text;
    }, [text, maxLength, isTextLong, isExpanded]);

    const toggleExpansion = useCallback(() => {
        setIsExpanded(prev => !prev);
    }, []);

    return (
        <Typography component='article' variant='subtitle2' color='text.secondary' style={{ lineHeight: 1.1 }}>
            <p>{displayedText}</p>
            {isTextLong && <button onClick={toggleExpansion}>{isExpanded ? 'Hide Details' : 'Show Details'}</button>}
        </Typography>
    );
};

export default Description;
