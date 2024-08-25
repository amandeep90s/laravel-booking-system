import Callout from '@/Components/Callout.jsx';
import HomeLayout from '@/Layouts/HomeLayout.jsx';
import { Head } from '@inertiajs/react';
import React from 'react';

const AboutUs = () => {
  return (
    <HomeLayout>
      <Head title="About Us" />
      <Callout title="About Us" link={route('about-us')} />
      <div className="py-5 text-center">
        <h1 className="text-main-black text-34 sm:text-48 w-full text-center font-semibold">Under Development</h1>
      </div>
    </HomeLayout>
  );
};

export default AboutUs;
