import React, { ReactElement } from 'react';
import { Box, SxProps, Theme } from '@mui/material';

type DisplayIconProps = {
  icon: string;
  alt?: string;
  size?: number;
  sx?: SxProps<Theme>;
};

const DisplayIcon: React.FC<DisplayIconProps> = ({ icon, alt = '', size = 24, sx = {} }) => {
    return (
      <Box
        component="img"
        src={icon}
        alt={alt}
        sx={{
          width: size,
          height: size,
          objectFit: 'contain',
          display: 'inline-block',
          ...sx,
        }}
      />
    );
};

export default DisplayIcon;
