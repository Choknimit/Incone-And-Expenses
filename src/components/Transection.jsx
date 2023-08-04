/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

import ItemsData from './ItemsData';

import { Stack, Pagination, Box, createTheme  } from '@mui/material'
import shadows from '@mui/material/styles/shadows';

function Transection({ iteminnit }) {
    const [itemInPage, setItemInPage] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    

    const pagination = (iteminnit) => {
        const itemPerPage = 8
        const pages = Math.ceil(iteminnit.length / itemPerPage) //? จำนวนข้อมูลทั้งหมดหารด้วยข้อมูลแต่ละหน้า Math.ceil เป็นการปัดเศษขึ้น

        const newItems = Array.from({length: pages}, (item, inx) => {
            const start = inx * itemPerPage
            return iteminnit.slice(start, start+itemPerPage)
        })
        // console.log('New Items: ', newItems)
        return newItems
    }
    useEffect(() => {
        const paginate = pagination(iteminnit)
        setItemInPage(paginate)
        setCurrentPage(0)
    }, [iteminnit])

    const handleChange = (e, newPage) => {
        // console.log(e, newPage)
        setCurrentPage(newPage - 1)
    }

    const theme = createTheme({
        palette: {
          primary: {
            main: '#0d47a1',
          },
          secondary: {
            main: '#f44336',
          },
        },
      });

    return (
      <Box>
          {itemInPage.length > 0 && itemInPage[currentPage].map((dataItem) => {
              return <ItemsData {...dataItem} key={dataItem.id} />
          })}
        <Stack spacing={2}>
            <Pagination  count={itemInPage.length} page={currentPage + 1} onChange={handleChange} variant="outlined" color="primary" shape="rounded" />
        </Stack>
      </Box>
    )
}  

export default Transection