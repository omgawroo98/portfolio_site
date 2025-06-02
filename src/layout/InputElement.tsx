import React, { ChangeEvent } from 'react';
import { TextField, Box, Typography, OutlinedInput, OutlinedInputProps } from '@mui/material';

interface InputElementProps extends Omit<OutlinedInputProps, 'variant'> {
    label: string;
    description?: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputElement: React.FC<InputElementProps> = ({
    label,
    description,
    value,
    onChange,
    ...props
}) => {
    return (
        <Box sx={{ width: '100%', maxWidth: 400, px: 2 }}>
            <Typography variant="h3" fontWeight="medium" color="white">
                {label}
            </Typography>
            <Typography variant="caption" color="white" sx={{ opacity: 0.5 }}>
                {description}
            </Typography>
            <OutlinedInput
                fullWidth
                value={value}
                onChange={onChange}
                sx={{
                    fontSize: '1.5rem',
                    mt: 1.5,
                    borderRadius: 2,
                    backgroundColor: '#141414',
                    color: 'white',
                    px: 1,
                    py: 1,
                    alignItems: 'center',
                    minHeight: '2.7rem',
                    height: 'auto',
                    '& input': {
                        padding: 0,
                        height: '100%',
                        boxSizing: 'border-box',
                    },
                }}
                {...props}
            />
        </Box>
    );
};

export default InputElement;
