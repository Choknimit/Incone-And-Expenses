/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
/* eslint-disable no-unused-vars */
import React from 'react'

import ItemsData from './ItemsData';

function Transection({ iteminnit }) {
    return (
      <div>
          {iteminnit.map((dataItem) => {
              return <ItemsData {...dataItem} key={dataItem.id} />
          })}
      </div>
    )
}  

export default Transection