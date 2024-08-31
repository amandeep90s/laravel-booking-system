import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import PropTypes from 'prop-types';
import React from 'react';

const Dashboard = ({ auth }) => {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Dashboard</h2>}
    >
      <Head title="Dashboard" />

      <div className="grid">
        <div className="col-12 xl:col-12">
          <div className="card">
            <h5>{auth.user.name} Logged In</h5>
            {/* <Chart type="line" data={lineData} options={lineOptions} /> */}
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
};

export default Dashboard;
