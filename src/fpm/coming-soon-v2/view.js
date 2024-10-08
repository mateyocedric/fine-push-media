'use client';

import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { alpha } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useBoolean } from 'src/hooks/use-boolean';
import { _socials } from 'src/_mock';
import Iconify from 'src/components/iconify';
import FormProvider, { RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function ComingSoonV2View() {


    const LoginSchema = Yup.object().shape({
        email: Yup.string().required('Email is required').email('Email must be a valid email address'),
        password: Yup.string().required('Password is required'),
    });

    const defaultValues = {
        email: '',
        password: '',
    };

    const methods = useForm({
        resolver: yupResolver(LoginSchema),
        defaultValues,
    });

    const {
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    const onSubmit = handleSubmit(async (data) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 500));
            console.info('DATA', data);
        } catch (error) {
            console.error(error);
        }
    });

    const renderHead = (
        <Typography variant="h2">
            Coverage of breaking news and current headlines from
            New York.
        </Typography>
    );

    const renderForm = (
        <Stack spacing={2.5} mt={5}>
            <Typography variant="h4">
                Get notified when we get live!
            </Typography>
            <RHFTextField name="email" label="Email address" />

            <LoadingButton
                fullWidth
                color="inherit"
                size="large"
                type="submit"
                variant="contained"
                loading={isSubmitting}
                endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
                sx={{ justifyContent: 'space-between', pl: 2, pr: 1.5 }}
            >
                Submit
            </LoadingButton>
        </Stack>
    );

    return (
        <FormProvider methods={methods} onSubmit={onSubmit}>
            {renderHead}

            {renderForm}

            <Stack spacing={1} alignItems="center" justifyContent="center" direction="row" mt={5}>
                {_socials.map((social) => (
                    <IconButton
                        key={social.name}
                        sx={{
                            color: social.color,
                            '&:hover': {
                                bgcolor: alpha(social.color, 0.08),
                            },
                        }}
                    >
                        <Iconify icon={social.icon} />
                    </IconButton>
                ))}
            </Stack>
        </FormProvider>
    );
}