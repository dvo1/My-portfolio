import React from 'react'
import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import Link from 'next/link';
import Image from "next/image";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import spin from '../../../public/assets/spin.png'

const ArticleCard = ({ item }: any) => {
  return (
    <Box sx={{
      width: { xs: '80%', md: '90%' },
      margin: 'auto',
    }}>
      <Link href={item?.path} target="_blank" >
        <Box sx={{
          cursor: 'pointer'
        }}>
          <Image
            src={item?.img}
            alt={item?.img}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
          />
        </Box>
      </Link>
    </Box>
  )
}

export default ArticleCard