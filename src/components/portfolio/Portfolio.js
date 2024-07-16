import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";

export default function Portfolio({ innerRef }) {
    return (
        <Box id={'portfolio'} ref={innerRef} mt={'3rem'}>
            <Grid container spacing={2} justifyContent={'center'}>
                {info.portfolio.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        {/* <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} /> */}
                        <PortfolioBlock image={project.image} techstack={project.techstack} source={project.source} title={project.title} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
