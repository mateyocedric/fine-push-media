import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useResponsive } from 'src/hooks/use-responsive';
import { useCountdownDate } from 'src/hooks/use-countdown';

import Logo from 'src/components/logo';
// ----------------------------------------------------------------------

export default function ComingSoonLayout({ children, image }) {
    const mdUp = useResponsive('up', 'md');

    const { days, hours, minutes, seconds } = useCountdownDate(new Date('07/07/2025 21:30'));
    const renderContent = (
        <Stack
            sx={{
                width: 1,
                mx: 'auto',
                maxWidth: 480,
                px: { xs: 2, md: 8 },
            }}
        >
            <Logo
                sx={{
                    mt: { xs: 2, md: 8 },
                    mb: { xs: 10, md: 8 },
                }}
            />

            <Card
                sx={{
                    py: { xs: 5, md: 0 },
                    px: { xs: 3, md: 0 },
                    boxShadow: { md: 'none' },
                    overflow: { md: 'unset' },
                    bgcolor: { md: 'background.default' },
                }}
            >
                {children}
            </Card>
        </Stack>
    );

    const renderSection = (
        <Stack flexGrow={1} sx={{ position: 'relative' }}>
            {/* Video section */}
            <Box
                component="video"
                autoPlay
                loop
                muted
                playsInline
                alt="Coming Soon!"
                src="/assets/video/coming_soon.mp4"
                sx={{
                    top: 16,
                    left: 16,
                    objectFit: 'cover',
                    position: 'absolute',
                    width: 'calc(100% - 32px)',
                    height: 'calc(100% - 32px)',
                }}
            />

            {/* Centered Countdown Timer */}

            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)', // Center horizontally and vertically
                    width: { xs: '100%', md: '70%', lg: '100%' },
                }}
            >
                <Stack
                    spacing={4} // Control spacing between items
                    alignItems="center"
                    justifyContent="center"
                >
                    <Typography variant="h1" color='white'>
                        Coming Soon
                    </Typography>
                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        spacing={1} // Control spacing between items

                    >
                        <Grid item md={12} lg={2}>
                            <TimeBlock label="Days" value={days} />
                        </Grid>
                        <Grid item md={12} lg={2}>
                            <TimeBlock label="Hours" value={hours} />
                        </Grid>
                        <Grid item md={12} lg={2}>
                            <TimeBlock label="Minutes" value={minutes} />
                        </Grid>
                        <Grid item md={12} lg={2}>
                            <TimeBlock label="Seconds" value={seconds} />
                        </Grid>
                    </Grid>
                </Stack>
            </Box >
        </Stack >
    );

    return (
        <Stack
            component="main"
            direction="row"
            sx={{
                minHeight: '100vh',
                position: 'relative',
                '&:before': {
                    width: 1,
                    height: 1,
                    zIndex: -1,
                    content: "''",
                    position: 'absolute',
                    backgroundSize: 'cover',
                    opacity: { xs: 0.24, md: 0 },
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    backgroundImage: 'url(/assets/background/overlay_4.jpg)',
                },
            }}
        >
            {renderContent}

            {mdUp && renderSection}
        </Stack>
    );
}

const TimeBlock = ({ label, value }) => (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 2,
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
            borderRadius: 2,
            width: { xs: '20vh', md: '100%', lg: '90%' },
            height: { xs: '20vh', md: '100%', lg: '20vh' },
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // shadow effect
            backdropFilter: 'blur(10px)', // blur effect
            WebkitBackdropFilter: 'blur(10px)', // Safari support for blur
        }}
    >
        {/* Value */}
        <Box
            sx={{
                color: 'white',
                fontWeight: 'bold',
                typography: 'h2',
            }}
        >
            {value}
        </Box>

        <Box
            sx={{
                color: 'white',
                typography: 'h4',
            }}
        >
            {label}
        </Box>
    </Box>
);


TimeBlock.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string,
};

ComingSoonLayout.propTypes = {
    children: PropTypes.node,
    image: PropTypes.string,
};
