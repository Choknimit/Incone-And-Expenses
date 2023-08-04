/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { styled, Paper, Box, Grid, Pagination, Stack  } from '@mui/material'
import './ItemData.css'

// eslint-disable-next-line react/prop-types
function ItemsData({ title, amount, option }) {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    const amountFormat = typeof amount === 'number' && !isNaN(amount) ? amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2}) : '';
    const symbol = option === 'income' ? '+' : '-'
    const status = option === 'income' ? 'income' : 'expenses'

  return (
    <Grid sx={{display: 'flex', marginBottom: '1rem', }} >
        <Item sx={{display: 'flex', justifyContent: 'space-between', width: '100%', }} className={status} >
            {title}
            <span>{symbol}{amountFormat}฿</span>
        </Item>
        
    </Grid>
  )
}   

export default ItemsData