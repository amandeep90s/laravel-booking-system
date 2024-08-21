import React from 'react';
import { Head } from '@inertiajs/react';
import HomeLayout from '@/Layouts/HomeLayout.jsx';
import Callout from '@/Components/Callout.jsx';

const Appointment = () => {
  return (
    <HomeLayout>
      <Head title="Appointment" />
      <Callout title="Appointment" link={route('appointment')} />
      <div>
        <h1>Coming Soon</h1>
      </div>
    </HomeLayout>
  );
};

export default Appointment;
