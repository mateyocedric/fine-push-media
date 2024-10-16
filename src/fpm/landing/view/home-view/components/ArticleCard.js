import React from 'react'
import { m, useScroll } from 'framer-motion';
import { Card, CardContent, Typography, Stack, Grid } from '@mui/material'
import Image from 'src/components/image'
import { bgBlur, bgGradient, textGradient } from 'src/theme/css';
import { alpha, styled, useTheme } from '@mui/material/styles';

const StyledHeaderFeatured = styled(m.h4)(({ theme }) => ({
    padding: 0,
    marginTop: 8,
    lineHeight: 1,
    fontWeight: 900,
    marginBottom: 24,
    letterSpacing: 2,
    textAlign: 'start',
    backgroundSize: '400%',
    fontSize: `${80 / 16}rem`,
    cursor: 'pointer',
    fontFamily: theme.typography.fontSecondaryFamily,
    [theme.breakpoints.up('md')]: {
        fontSize: `${30 / 16}rem`,
    },
    transition: 'background 0.3s ease', // Optional: For smooth gradient transition
    '&:hover': {
        backgroundImage: `linear-gradient(
            300deg, 
            ${theme.palette.primary.light} 0%, 
            ${theme.palette.warning.main} 25%, 
            ${theme.palette.primary.main} 50%, 
            ${theme.palette.warning.main} 75%, 
            ${theme.palette.primary.main} 100%
        )`,
        backgroundClip: 'text',
        textFillColor: 'transparent',
    },
}));

const StyledHeaderArticle = styled(m.h5)(({ theme }) => ({
    padding: 0,
    marginTop: 8,
    lineHeight: 1,
    fontWeight: 900,
    marginBottom: 24,
    letterSpacing: 2,
    textAlign: 'start',
    backgroundSize: '400%',
    fontSize: `${80 / 16}rem`,
    cursor: 'pointer',
    fontFamily: theme.typography.fontSecondaryFamily,
    [theme.breakpoints.up('md')]: {
        fontSize: `${25 / 16}rem`,
    },
    transition: 'background 0.3s ease', // Optional: For smooth gradient transition
    '&:hover': {
        backgroundImage: `linear-gradient(
            300deg, 
            ${theme.palette.primary.light} 0%, 
            ${theme.palette.warning.main} 25%, 
            ${theme.palette.primary.main} 50%, 
            ${theme.palette.warning.main} 75%, 
            ${theme.palette.primary.main} 100%
        )`,
        backgroundClip: 'text',
        textFillColor: 'transparent',
    },
}));

const StyledHeaderSuggestion = styled(m.h5)(({ theme }) => ({
    cursor: 'pointer',
    transition: 'background 0.3s ease', // Optional: For smooth gradient transition
    '&:hover': {
        backgroundImage: `linear-gradient(
            300deg, 
            ${theme.palette.primary.light} 0%, 
            ${theme.palette.warning.main} 25%, 
            ${theme.palette.primary.main} 50%, 
            ${theme.palette.warning.main} 75%, 
            ${theme.palette.primary.main} 100%
        )`,
        backgroundClip: 'text',
        textFillColor: 'transparent',
    },
    backgroundSize: '400%',
    marginTop: 8,
    marginBottom: 24,
    fontWeight: 900,
    lineHeight: 1.2,
    letterSpacing: 0,
    fontSize: 'inherit', // Keep size consistent with the Typography variant
    fontFamily: theme.typography.fontSecondaryFamily,
}));

export const ArticleCard = () => {
    return (
        <Card
            sx={{
                backgroundColor: 'transparent',
                border: 'none',
                boxShadow: 'none',
            }}
        >
            <Image
                src='https://images4.alphacoders.com/134/thumb-1920-1347180.png'
                alt='Article Image'
                disabledEffect
                sx={{ borderRadius: 1, height: "20%", width: 1 }}
            />

            <Stack padding={1} spacing={1} mt={1}>
                <Typography variant='overline' color='primary'>
                    Master Plan
                </Typography>
                <StyledHeaderArticle
                    animate={{ backgroundPosition: '200% center' }}
                    transition={{
                        repeatType: 'reverse',
                        ease: 'linear',
                        duration: 20,
                        repeat: Infinity,
                    }}
                >
                    MASTER PLAN, Ep 10: The Master Planners’ Heist Of The Century
                </StyledHeaderArticle>
                <Typography variant='paragraph'>
                    If you thought the master planners would be content to end their assault on democracy with Citizens United, think again.
                </Typography>
                <Typography variant='overline' color='info'>
                    Hazel Pascual
                </Typography>
            </Stack>
        </Card>
    )
}

export const FeaturedCard = () => {
    return (
        <Card
            sx={{
                backgroundColor: 'transparent',
                border: 'none',
                boxShadow: 'none',
            }}
        >
            <Image
                src='https://images4.alphacoders.com/134/thumb-1920-1347180.png'
                alt='Article Image'
                disabledEffect
                sx={{ borderRadius: 1, height: 400, width: 1 }}
            />

            <CardContent>
                <Stack>
                    <Typography variant='overline' color='primary'>
                        Master Plan
                    </Typography>
                    <StyledHeaderFeatured
                        animate={{ backgroundPosition: '200% center' }}
                        transition={{
                            repeatType: 'reverse',
                            ease: 'linear',
                            duration: 20,
                            repeat: Infinity,
                        }}
                    >
                        MASTER PLAN, Ep 10: The Master Planners’ Heist Of The Century
                    </StyledHeaderFeatured>
                    {/* <Typography variant='h4'>
                        MASTER PLAN, Ep 10: The Master Planners’ Heist Of The Century
                    </Typography> */}
                    <Typography variant='paragraph'>
                        If you thought the master planners would be content to end their assault on democracy with Citizens United, think again.
                    </Typography>
                    <Typography variant='overline' color='info'>
                        Hazel Pascual
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}

export const SuggestionCard = () => {
    return (
        <Card
            sx={{
                backgroundColor: 'transparent',
                border: 'none',
                boxShadow: 'none',
                borderRadius: 0,
            }}
        >
            <Grid container spacing={1}>

                <Grid item xs={12} sm={12} lg={6}>
                    <Stack>
                        <Typography variant='overline' color='primary'>
                            Master Plan
                        </Typography>
                        <StyledHeaderSuggestion
                            animate={{ backgroundPosition: '200% center' }}
                            transition={{
                                repeatType: 'reverse',
                                ease: 'linear',
                                duration: 20,
                                repeat: Infinity,
                            }}
                        >
                            MASTER PLAN, Ep 10: The Master Planners’ Heist Of The Century
                        </StyledHeaderSuggestion>
                        <Typography variant='overline' color='info'>
                            Hazel Pascual
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={12} lg={6}>
                    <Image
                        src='https://images4.alphacoders.com/134/thumb-1920-1347180.png'
                        alt='Article Image'
                        disabledEffect
                        sx={{ height: 150, width: 1 }}
                    />
                </Grid>
            </Grid>

            {/* <Image
                src='https://images4.alphacoders.com/134/thumb-1920-1347180.png'
                alt='Article Image'
                disabledEffect
                sx={{ borderRadius: 1, height: 400, width: 1 }}
            />
            <Stack>
                <Typography variant='h6' color='primary'>
                    Master Plan
                </Typography>
                <Typography variant='h4'>
                    MASTER PLAN, Ep 10: The Master Planners’ Heist Of The Century
                </Typography>
                <Typography variant='paragraph'>
                    If you thought the master planners would be content to end their assault on democracy with Citizens United, think again.
                </Typography>
            </Stack> */}
        </Card>
    )
}