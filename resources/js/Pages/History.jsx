import React from 'react';
import { Head } from '@inertiajs/react';
import HomeLayout from '@/Layouts/HomeLayout.jsx';
import Callout from '@/Components/Callout.jsx';

const History = () => {
  return (
    <HomeLayout>
      <Head title="History" />
      <Callout title="History" link={route('history')} />
      <div>
        <h1>Coming Soon</h1>
      </div>
    </HomeLayout>
  );
};

export default History;
