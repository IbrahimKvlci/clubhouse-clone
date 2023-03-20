import React from 'react'
import style from "../style/dailyInfoCard.module.css"
import data from "../data/dailyCard.json"

function DailyInfoCard() {
  return (
    <div className={style.dailyCard}>
        {data.map((item)=>{
            <div>
                <span>{item.time}</span>
            </div>
        })}
    </div>
  )
}

export default DailyInfoCard