import { Button, Stack } from '@mui/material';
import { ReactNode, useState } from 'react';

type Option = {
    label: string;
    icon?: ReactNode;
    value: string | number;
};

type Props = {
    options: Option[];
    selected: string | number;
    onChange: (value: string | number) => void;
};

export default function SelectableButtonGroup({ options, selected, onChange }: Props) {
    return (
        <Stack spacing={1}>
            {options.map((option) => {
                const isActive = selected === option.value;

                return (
                    <Button
                        key={option.value}
                        startIcon={option.icon}
                        onClick={() => onChange(option.value)}
                        variant="outlined"
                        sx={{
                            justifyContent: 'flex-start',
                            borderRadius: '12px',
                            fontWeight: 600,
                            textTransform: 'none',
                            color: isActive ? 'white' : 'grey.400',
                            backgroundColor: isActive ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                            borderColor: isActive ? '#008080' : 'rgba(255, 255, 255, 0.08)',
                            boxShadow: isActive ? '0 0 0 1px #008080' : 'none',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                borderColor: '#008080',
                            },
                        }}
                    >
                        {option.label}
                    </Button>
                );
            })}
        </Stack>
    );
}
