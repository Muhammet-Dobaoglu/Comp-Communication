import React from 'react'

export default function Personel(props) {
    let renderList = props.plist.map(p=>{
        return <li>{p.id} {p.Ad} {p.maas}</li>
       })
  return (
    <>
    <h3>{props.baslik}</h3>
    <hr/>
    <ul>
        {renderList}
    </ul>
    
    </>
  )
}


