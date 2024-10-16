'use client';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { alpha, styled } from '@mui/material/styles';

import { _socials } from 'src/_mock';
import { textGradient } from 'src/theme/css';
import ComingSoonForm from 'src/fpm/coming-soon-v2/components/ComingSoonForm';
import ComingSoonFlipClock from 'src/fpm/coming-soon-v2/components/ComingSoonFlipClock';

import Iconify from 'src/components/iconify';

const StyledTextGradient = styled(m.span)(({ theme }) => ({
    ...textGradient(
        `300deg, ${theme.palette.grey[0]} 0%, ${theme.palette.grey[100]} 25%, ${theme.palette.grey[500]} 50%, ${theme.palette.primary.main} 75%, ${theme.palette.primary.main} 100%`
    ),
    backgroundSize: '400%',
    fontWeight: 900,
    lineHeight: 1.2,
    letterSpacing: 0,
    fontSize: 'inherit', // Keep size consistent with the Typography variant
    fontFamily: theme.typography.fontSecondaryFamily,
}));

const ComingSoonV2 = () => (

    <Stack>
        {/* <ComingSoonFlipClock /> */}
        <Stack direction='column'>
            <Typography variant='overline' color='primary'>
                Stay tuned
            </Typography>
            <Box>
                <Typography variant='h2' sx={{ fontWeight: 900 }}>
                    Get coverage of{' '}
                    <StyledTextGradient
                        animate={{ backgroundPosition: '200% center' }}
                        transition={{
                            repeatType: 'reverse',
                            ease: 'linear',
                            duration: 20,
                            repeat: Infinity,
                        }}
                    >
                        crypto news
                    </StyledTextGradient>{' '}
                    and current headlines
                </Typography>
            </Box>

        </Stack>
        
        <Typography variant="paragraph" mt={2}>
            Our website is under construction. We&apos;ll be here soon with our new awesome site.
        </Typography>

        <Box
            sx={{
                width: '100%'
            }}
        >
            <ComingSoonForm />
        </Box>


        <Box mt={10}>
            <ComingSoonFlipClock />
            <Stack spacing={1} alignItems="center" justifyContent="start" direction="row" mt={2}>
                {_socials.map((social) => (
                    <IconButton
                        key={social.name}
                        sx={{
                            color: 'white',
                            '&:hover': {
                                bgcolor: alpha(social.color, 0.08),
                            },
                        }}
                    >
                        <Iconify icon={social.icon} />
                    </IconButton>
                ))}
            </Stack>
        </Box>
    </Stack>


)

export default ComingSoonV2