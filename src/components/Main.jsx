/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BsFillJournalBookmarkFill } from 'react-icons/bs';
import FormComponent from './FormComponent';
import { Container, Box, Typography, Grid, Paper, styled } from '@mui/material';
import Transection from './Transection';

function Main() {
    
    const datainnit = [
        {id: 1, title: 'ค่ารถ', amount: 120},
        {id: 2, title: 'ค่าประกัน', amount: 1000},
        {id: 3, title: 'ค่ากิน', amount: 5000},
    ]
    const [items, setItems] = useState(datainnit)

    const addNewItems = (newItem) => {
        setItems((prevItem) => {
            return [newItem, ...prevItem]
        })
    }

  return (
    <Box>
      <Box sx={{ bgcolor: '#1F2937' }}>
        <Container maxWidth='lg'>
          <Box
            sx={{ display: 'flex ', alignItems: 'center', paddingY: '1rem' }}
          >
            <Typography
              variant='h6'
              sx={{
                color: '#ffff',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                fontWeight: '700',
              }}
            >
              Recordin Income And Expenses
              <BsFillJournalBookmarkFill />
            </Typography>
            ;
          </Box>
        </Container>
      </Box>
      <Container maxWidth='lg'>
        <Typography
          variant='h4'
          sx={{ marginY: '1rem', fontWeight: '600', letterSpacing: '10px' }}
        >
          Income And Expenses
        </Typography>
        <Grid container spacing={2} sx={{marginTop: '2rem'}}>
          <Grid item xs={5}>
            <FormComponent addNewItems={addNewItems} />
          </Grid>
          <Grid item xs={7}>
            <Transection iteminnit={items} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Main;
