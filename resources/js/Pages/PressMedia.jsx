import Callout from '@/Components/Callout.jsx';
import HomeLayout from '@/Layouts/HomeLayout.jsx';
import { Head } from '@inertiajs/react';
import React from 'react';

const PressMedia = () => {
  return (
    <HomeLayout>
      <Head title="Press Media" />
      <Callout title="Press / Media" link={route('press-media')} />
      <div className="pt-[130px] text-center">
        <h1 className="text-main-black text-34 sm:text-48 w-full text-center font-semibold">Under Development</h1>
      </div>
    </HomeLayout>
  );
};

export default PressMedia;
