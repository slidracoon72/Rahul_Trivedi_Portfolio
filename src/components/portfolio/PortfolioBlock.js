import React from 'react';
import IconLink from "./IconLink";
import { Box } from "@mui/material";

function PortfolioBlock(props) {
   const { image, techstack, source, title } = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} marginLeft={'10px'} marginRight={'10px'}>
         <Box component={'img'} src={image} margin={1} borderRadius={'15px'} alt={'mockup'} />
         <h1 style={{ fontSize: '2rem', textAlign: 'center' }} >{title}</h1>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
            alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <Box p={1} fontSize={'0.7em'} textAlign={'center'}>
               <p>{techstack}</p>
            </Box>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={source} title={'Source Code'} icon={'fa fa-code'} />
            </Box>
         </Box>
      </Box>
   );
}

export default PortfolioBlock;