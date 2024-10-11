"use client";

import PropTypes from 'prop-types';
import dynamic from "next/dynamic";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { useResponsive } from 'src/hooks/use-responsive';

import ComingSoonWallet from 'src/lottie/coming-soon-currency.json';
import Logo from 'src/components/logo';

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
// ----------------------------------------------------------------------

export default function ComingSoonLayout({ children }) {
    const mdUp = useResponsive('up', 'md');

    const renderContent = (
        <Stack
            sx={{
                width: 1,
                mx: 'auto',
                maxWidth: 600,
                px: { xs: 2, md: 8 },
            }}
        >
            <Logo
                sx={{
                    mt: { xs: 2, md: 8 },
                    mb: { xs: 10, md: 8 },
                }}
            />
            {children}

            {!mdUp && (
                <Lottie
                    loop
                    autoplay
                    rendererSettings={{
                        preserveAspectRatio: "xMidYMid slice",
                    }}
                    animationData={ComingSoonWallet}
                    isClickToPauseDisabled
                    height="100%"
                    width="100%"
                />
            )}
        </Stack>
    );

    const renderSection = (
        <Stack flexGrow={1} sx={{ position: 'relative' }}>
            <Box
                sx={{
                    top: 16,
                    left: 16,
                    objectFit: 'cover',
                    position: 'absolute',
                    width: 'calc(100% - 32px)',
                    height: 'calc(100% - 32px)',
                }}
            >
                <Lottie
                    loop
                    autoplay
                    rendererSettings={{
                        preserveAspectRatio: "xMidYMid slice",
                    }}
                    animationData={ComingSoonWallet}
                    isClickToPauseDisabled
                    height="100%"
                    width="100%"
                />

            </Box>
        </Stack>
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
                    position: 'absolute'
                },
            }}
        >
            {renderContent}

            {mdUp && renderSection}
        </Stack>
    );
}



ComingSoonLayout.propTypes = {
    children: PropTypes.node,
};