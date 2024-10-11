/* eslint-disable import/no-extraneous-dependencies */


'use client';

import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { yupResolver } from '@hookform/resolvers/yup';

import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

import { CreateSubscribedNewsLetter } from 'src/graph/news-letter';

import FormProvider, { RHFTextField } from 'src/components/hook-form';
// ----------------------------------------------------------------------

export default function ComingSoonForm() {

    const { enqueueSnackbar } = useSnackbar();

    const [subscribeNewsletter, { loading: subscribeNewsletterIsLoading }] = useMutation(CreateSubscribedNewsLetter,{
        onCompleted: () => {
            enqueueSnackbar('Thank you for subscribing!', { variant: 'success' });
        },
        onError: () => {
            enqueueSnackbar('You already subscribed', { variant: 'warning' });
        }
    });

    const LoginSchema = Yup.object().shape({
        email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    });

    const defaultValues = {
        email: '',
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
            subscribeNewsletter({
                variables: {
                    data: {
                        email: data.email,
                    }
                }
            })
            
        } catch (err) {
            enqueueSnackbar('Server error', { variant: 'error' });
        }
    });

    const renderForm = (
        <Stack direction='row' spacing={2.5} mt={2}>
            <RHFTextField
                name="email"
                placeholder="Enter your email here"
                fullWidth
                //   variant="filled"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <LoadingButton
                                color="primary"
                                size="large"
                                type="submit"
                                variant="contained"
                                loading={subscribeNewsletterIsLoading}
                            >
                                Subscribe now
                            </LoadingButton>
                        </InputAdornment>
                    ),
                    sx: {
                        backgroundColor: 'white', // Default background
                        color: 'black', // Default text color
                        pr: 0.5,
                        [`&:hover`]: {
                            backgroundColor: 'whitesmoke', // Change background on hover
                        },
                        [`& .MuiInputBase-input`]: {
                            color: 'black', // Text input color
                        },
                        [`&.Mui-focused`]: {
                            backgroundColor: 'whitesmoke', // Change background when typing (focused)
                            boxShadow: (theme) => theme.customShadows.z20,
                            transition: (theme) =>
                                theme.transitions.create(['box-shadow', 'background-color'], {
                                    duration: theme.transitions.duration.shorter,
                                }),
                            [`& .${outlinedInputClasses.notchedOutline}`]: {
                                border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.32)}`,
                            },
                        },
                    },
                }}
            />

        </Stack>
    );

    return (
        <FormProvider methods={methods} onSubmit={onSubmit}>
            {renderForm}
        </FormProvider>
    );
}