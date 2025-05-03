import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <>
    <Image src='eclipse.svg' alt='' className='circ' width={30} height={30}/>
    <div className='num'> 
        <p>1</p>
    </div>
    <div className='header'>
        <p className='title'>Agenda/Topic</p>
        <p className='codigo'> SAAS-0000</p>
    </div>
    <Image src='jira.svg' alt='' className='logo' width={30} height={30}/>
  </>
  )
}

export default Header