import * as React from 'react';
import Alert from '@mui/joy/Alert';
import AspectRatio from '@mui/joy/AspectRatio';
import IconButton from '@mui/joy/IconButton';
import Box from '@mui/joy/Box';
import LinearProgress from '@mui/joy/LinearProgress';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Check from '@mui/icons-material/Check';
import Close from '@mui/icons-material/Close';

export default function AlertInvertedColors() {
  return (
    <Stack spacing={2} sx={{ maxWidth: 400 }}>
      <Alert
        size="lg"
        color="success"
        variant="solid"
        invertedColors
        startDecorator={
          <AspectRatio
            variant="solid"
            ratio="1"
            sx={{
              minWidth: 40,
              borderRadius: '50%',
              boxShadow: '0 2px 12px 0 rgb(0 0 0/0.2)',
            }}
          >
            <div>
              <Check fontSize="xl2" />
            </div>
          </AspectRatio>
        }
        endDecorator={
          <IconButton
            variant="plain"
            sx={{
              '--IconButton-size': '32px',
              transform: 'translate(0.5rem, -0.5rem)',
            }}
          >
            <Close />
          </IconButton>
        }
        sx={{ alignItems: 'flex-start', overflow: 'hidden' }}
      >
        <Box>
          <Typography level="body1" fontWeight="lg">
            Success
          </Typography>
          <Typography level="body3">
            please Wait !!!!!! donot close the page
          </Typography>
        </Box>
        <LinearProgress
          variant="soft"
          value={40}
          sx={(theme) => ({
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            color: `rgb(${theme.vars.palette.success.lightChannel} / 0.72)`,
            '--LinearProgress-radius': '0px',
          })}
        />
      </Alert>
    </Stack>
  );
}
