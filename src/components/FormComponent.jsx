/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Box,
  Container,
  TextField,
  Stack,
  Paper,
  styled,
  Grid,
  Button,
  FormControlLabel,
  Radio,
} from '@mui/material';

import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'

function FormComponent({ addNewItems }) {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [option, setOption] = useState('')
    const [valid, setValid] = useState(false)

    const FieldTitle = (e) => {
        // console.log(e.target.value)
        setTitle(e.target.value)
    }
    const FieldAmount = (e) => {
        // console.log(e.target.value)
        setAmount(e.target.value)
    }

    const selectOption = (e) => {
        setOption(e.target.value)
        // console.log(e.target.value)
    }

    const submitForm =(event) => {
        // console.log(event.target.value);
        event.preventDefault()
        const itemData = {
            id: uuidv4(),
            title: title,
            amount: Number(amount),
            option: option,
        }
        // if(itemData.title === '') {
        //     return setMessageError('**กรุณากรอกข้อมูลรายการ')
        // } else if (itemData.amount === 0) {
        //     return setMessageError('**กรุณากรอกตัวเลขจำนวนเลขห้ามเป็นศูนย์')
        // } else if (itemData.option === '') {
        //     return setMessageError('**กรุณาเลือกรายรับหรือรายจ่าย')
        // }
        console.log(itemData)
        addNewItems(itemData)
        setTitle('')
        setAmount(0)
        setOption('')
    }

    useEffect(() => {
        const checkData = title.trim().length > 0 && amount !== 0 && option !== ''
        setValid(checkData)
    }, [title, amount, option])
  return (
    <form onSubmit={submitForm}>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '1rem', backgroundColor: '#ffffff'}} className="box-shadows" >
            <TextField
                id='outlined-textarea'
                label='ชื่อรายการ'
                placeholder='ระบุชื่อรายการของคุณ'
                size='small'
                sx={{ width: '100%' }}
                type='text'
                value={title}
                onChange={FieldTitle}
                error={!title}
                helperText={!title ? '*Required': ''}
            />

            <TextField
                // id='outlined-textarea'
                label='รายรับ/รายจ่าย'
                placeholder='(+รายรับ / -รายจ่าย)'
                size='small'
                sx={{ width: '100%' }}
                type="number"
                value={amount}
                onChange={FieldAmount}
                error={!amount}
                helperText={!amount ? '*Required': ''}
            />

            <Box sx={{ display: 'flex', height: '6px' }}>
                <FormControlLabel size='small' value='income' error={!option} checked={option === 'income'} onChange={selectOption} control={<Radio />} label='รายรับ' />
                <FormControlLabel size='small' value='expenses' error={!option} checked={option === 'expenses'} onChange={selectOption} control={<Radio />} label='รายจ่าย' />
            </Box>
            <Button variant='contained' type='submit' disabled={!valid}>เพิ่มรายการ</Button>
        </Box>
    </form>
  );
}

export default FormComponent;