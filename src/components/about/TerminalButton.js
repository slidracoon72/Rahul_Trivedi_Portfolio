import React from 'react';
import { Box, Button } from '@mui/material';
import classNames from 'classnames';
import Style from "./Terminal.module.scss";
import { info } from "../../info/Info";

function TerminalButton({ onClick, children }) {
    const firstName = info.firstName.toLowerCase()
    return (
        <Box component={'section'} className={classNames(Style.terminal, Style.shadowed)}
            width={{ xs: '80%', md: '50%' }} borderRadius={'0.5rem'} mb={'4rem'}>
            <Box 
                sx={{ 
                    backgroundColor: '#8c8c8c',
                    position: 'relative',
                    textAlign: 'center'
                }} 
                p={'0.5rem'} 
                borderRadius={'0.5rem 0.5rem 0 0'}
                fontSize={'1rem'}
            >
                <Box sx={{ position: 'absolute', left: '0.5rem', top: '50%', transform: 'translateY(-50%)' }}>
                    <i className={classNames("fa fa-circle", Style.red)} />
                    <i className={classNames("fa fa-circle", Style.amber)} />
                    <i className={classNames("fa fa-circle", Style.green)} />
                </Box>
                resume
            </Box>
            <Box py={{ xs: '1rem', md: '2rem' }} px={{ xs: '2rem', md: '3rem' }} borderRadius={'0 0 0.5rem 0.5rem'}
                sx={{ backgroundColor: '#27242f' }} fontSize={'1.5rem'} fontFamily={'Courier New, Courier, monospace'}>
                <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd resume/download
                </p>
                <Button className={classNames("resume", Style.button)} onClick={onClick}
                    style={{
                        width: '100%',
                        textAlign: 'center',
                        backgroundColor: 'transparent',
                        color: info.baseColor,
                        textTransform: 'none',
                        fontSize: '1.2rem',
                        fontFamily: 'Courier New, Courier, monospace',
                        border: '1px solid white',
                        transition: 'background-color 0.3s, color 0.3s',
                        '&:hover': {
                            backgroundColor: 'wheat',
                            color: '#fff',
                            cursor: 'pointer',
                        }
                    }}>
                    {children}
                </Button>
            </Box>
        </Box>
    );
}

export default TerminalButton;