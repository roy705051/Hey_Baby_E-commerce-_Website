import WarningIcon from '@mui/icons-material/Warning';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import * as React from 'react';
import Box from '@mui/joy/Box';
import Alert from '@mui/joy/Alert';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';

export default function AlertVariousStates() {
  const items = [
    
    { title: 'You are not signed in !!', color: 'warning', icon: <WarningIcon /> },
    
  ];

  return (
    <Box sx={{ display: 'flex', gap: 2, width: '100%', flexDirection: 'column' }}>
      {items.map(({ title, color, icon }) => (
        <Alert
          key={title}
          sx={{ alignItems: 'flex-start' }}
          startDecorator={React.cloneElement(icon, {
            sx: { mt: '2px', mx: '4px' },
            fontSize: 'xl2',
          })}
          variant="soft"
          color={color}
          endDecorator={
            <IconButton variant="soft" size="sm" color={color}>
              <CloseRoundedIcon />
            </IconButton>
          }
        >
          <div>
            <Typography fontWeight="lg" mt={0.25}>
              {title}
            </Typography>
            <Typography fontSize="sm" sx={{ opacity: 0.8 }}>
              Redirecting you to signin page
            </Typography>
          </div>
        </Alert>
      ))}
    </Box>
  );
}