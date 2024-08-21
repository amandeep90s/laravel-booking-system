import React from 'react';
import { Head } from '@inertiajs/react';
import HomeLayout from '@/Layouts/HomeLayout.jsx';
import Callout from '@/Components/Callout.jsx';

const PressMedia = () => {
  return (
    <HomeLayout>
      <Head title="Press Media" />
      <Callout title="Press / Media" link={route('press-media')} />
      <div>
        <h1>Coming Soon</h1>
      </div>
    </HomeLayout>
  );
};

export default PressMedia;
