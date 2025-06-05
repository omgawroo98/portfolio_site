// components/SectionSeparator.tsx
import { Box, useTheme } from '@mui/material';

const SectionSeparator = () => {
    const theme = useTheme()

    return (
        <Box
            sx={{
                width: '100%',
                height: '6rem',
                background: theme.palette.background.default,
                zIndex: 2,
            }}
        />
    );
};

export default SectionSeparator;
