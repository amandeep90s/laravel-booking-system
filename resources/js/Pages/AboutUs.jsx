import React from 'react';
import { Head } from '@inertiajs/react';
import HomeLayout from '@/Layouts/HomeLayout.jsx';
import Callout from '@/Components/Callout.jsx';

const AboutUs = () => {
  return (
    <HomeLayout>
      <Head title="About Us" />
      <Callout title="About Us" link={route('about-us')} />
      <div>
        <h1>Coming Soon</h1>
      </div>
    </HomeLayout>
  );
};

export default AboutUs;
