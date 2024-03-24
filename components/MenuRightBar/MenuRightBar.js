"use client"

import React from 'react'
import style from './MenuRightBar.module.css'
const  MenuRightBar = ({content,menu})  => {
    
    const chunkArray = (items, size) => {
        return Array.from({ length: Math.ceil(items.length / size) }, (_, index) =>
            items.slice(index * size, index * size + size)
        );
    };
    const columns = chunkArray(content, parseInt(((content.length) / 3)) +1);
    
    return (
   
        <>
        
        {
            columns.map((col, index) => (
                <div className={style.row} key={col+index}>
                    {col.map((item,index)=>(
                    <div className={style.innerDiv} key={item+index}>
                        
                     {console.log(`/Assets/menu/${menu}/${item.name}.png`)}
                        <img className={style.img} src={`/Assets/menu/${menu}/${item.img}.png`} alt={item.img}/>
                        
                       <h5 className={style.itemHeading}>{item.img}</h5>
                    </div>
))}
                </div>))
        }
        </>
    )
}


export default MenuRightBar