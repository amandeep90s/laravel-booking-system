import React from 'react';
import { Head } from '@inertiajs/react';
import HomeLayout from '@/Layouts/HomeLayout.jsx';
import Callout from '@/Components/Callout.jsx';

const ContactUs = () => {
  return (
    <HomeLayout>
      <Head title="Contact Us" />
      <Callout title="Contact Us" link={route('contact-us')} />
      <div>
        <h1>Coming Soon</h1>
      </div>
    </HomeLayout>
  );
};

export default ContactUs;
