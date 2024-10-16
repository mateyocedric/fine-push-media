'use client';

import { useState, useEffect } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useSettingsContext } from '../context';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function SwitchMode() {
    const { themeMode, onUpdate } = useSettingsContext();
    const [isDarkMode, setDarkMode] = useState(themeMode === 'dark');

    const toggleDarkMode = (checked) => {
        const mode = checked ? 'dark' : 'light';
        setDarkMode(checked);
        onUpdate('themeMode', mode);
    };

    useEffect(() => {
        setDarkMode(themeMode === 'dark');
    }, [themeMode]);

    return (
        <FormGroup>
            <FormControlLabel
                control={
                    <DarkModeSwitch
                        checked={isDarkMode}
                        onChange={(checked) => toggleDarkMode(checked)}
                    />
                }
            />
        </FormGroup>
    );
}
