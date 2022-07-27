import React from 'react'

import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

export const Navbarr = () => {

  const navigate = useNavigate()

  const handleLogout = () => {
    console.log('log out');
    navigate('/login')
  }

  const items = [
    {
      label: 'Women',
      icon: 'pi pi-fw pi-file',
      command: () => navigate('/women')
    },
    {
      label: 'Men',
      icon: 'pi pi-fw pi-file',
      command: () => navigate('/men')
    },
    {
      label: 'Kids',
      icon: 'pi pi-fw pi-file',
      command: () => navigate('/kids')
    },
    {
      label: 'Coupons',
      icon: 'pi pi-fw pi-file',
      command: () => navigate('/coupons')
    },
  ];

  const end = <Button
    icon="pi pi-user"
    className="p-button-rounded p-button-primary"
    aria-label="User"
    onClick={ handleLogout }
  />

    const start = <div><b>Clothing store</b></div>

  return (
    <>
      <Menubar model={items} start={start} end={end}/>
    </>
  )
}
