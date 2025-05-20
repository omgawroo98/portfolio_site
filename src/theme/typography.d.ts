import '@mui/material/styles';
import '@mui/material/Typography';

declare module '@mui/material/styles' {
    interface Palette {
        surface: Palette['primary'];
    }

    interface PaletteOptions {
        surface?: PaletteOptions['primary'];
    }

    interface TypographyVariants {
        nav: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        nav?: React.CSSProperties;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        nav: true;
    }
}
