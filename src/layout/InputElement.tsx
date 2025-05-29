import React, { ChangeEvent } from 'react';
import { TextField, Box, Typography, TextFieldProps, OutlinedInput } from '@mui/material';

interface InputElementProps extends Omit<TextFieldProps, 'variant'> {
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
                    fontSize: '0.875rem',
                    mt: 1.5,
                    borderRadius: 2,
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    color: 'white',
                    px: 0,
                    py: 0,
                    height: 48, // Or any value you prefer
                    '& input': {
                        padding: 0,
                        height: '100%',
                        boxSizing: 'border-box',
                    },
                }}
            />
        </Box>
    );
};

export default InputElement;
