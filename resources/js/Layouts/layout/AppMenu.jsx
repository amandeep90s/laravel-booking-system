import React from 'react';
import AppMenuitem from './AppMenuitem';
import { MenuProvider } from './context/menucontext';

const AppMenu = () => {
  const model = [
    {
      label: 'Home',
      items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: route('dashboard') }],
    },
    {
      label: 'Appointments',
      items: [
        { label: 'All Appoinments', icon: 'pi pi-calendar', to: '' },
        { label: 'Restrict Appoinments', icon: 'pi pi-calendar-times', to: '' },
      ],
    },
    {
      label: 'Appointment Reports',
      items: [
        { label: 'Daily', icon: 'pi pi-file-excel', to: route('reports.daily') },
        { label: 'Weekly', icon: 'pi pi-file-excel', to: route('reports.weekly') },
        { label: 'Monthly', icon: 'pi pi-file-excel', to: route('reports.monthly') },
      ],
    },
  ];

  return (
    <MenuProvider>
      <ul className="layout-menu">
        {model.map((item, i) => {
          return !item?.seperator ? (
            <AppMenuitem item={item} root={true} index={i} key={item.label} />
          ) : (
            <li className="menu-separator"></li>
          );
        })}
      </ul>
    </MenuProvider>
  );
};

export default AppMenu;
