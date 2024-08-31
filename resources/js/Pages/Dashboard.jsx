import DashboardInfoCard from '@/Components/DashboardInfoCard.jsx';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';

const Dashboard = ({ auth }) => {
  const menu1 = useRef(null);

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Dashboard</h2>}
    >
      <Head title="Dashboard" />

      <div className="grid">
        <DashboardInfoCard
          title="Orders"
          value="152"
          icon="map-marker"
          iconColor="blue"
          descriptionValue="24 new"
          descriptionText="since last visit"
        ></DashboardInfoCard>
        <DashboardInfoCard
          title="Revenue"
          value="GHS 2.100"
          icon="map-marker"
          iconColor="orange"
          descriptionValue="%52+"
          descriptionText="since last week"
        ></DashboardInfoCard>
        <DashboardInfoCard
          title="Customers"
          value="28441"
          descriptionValue="520"
          icon="inbox"
          iconColor="cyan"
          descriptionText="since last week"
        ></DashboardInfoCard>
        <DashboardInfoCard
          title="Comments"
          value="152 Unread"
          descriptionValue="85"
          icon="comment"
          iconColor="purple"
          descriptionText="responded"
        ></DashboardInfoCard>

        <div className="col-12 xl:col-6">
          <div className="card">
            <h5>Sales Overview</h5>
            {/* <Chart type="line" data={lineData} options={lineOptions} /> */}
          </div>
        </div>

        <div className="col-12 xl:col-6">
          <div className="card">
            <div className="justify-content-between align-items-center mb-5 flex">
              <h5>Best Selling Products</h5>
              <div>
                <Button
                  type="button"
                  icon="pi pi-ellipsis-v"
                  rounded
                  text
                  className="p-button-plain"
                  onClick={(event) => menu1.current?.toggle(event)}
                />
                <Menu
                  ref={menu1}
                  popup
                  model={[
                    { label: 'Add New', icon: 'pi pi-fw pi-plus' },
                    { label: 'Remove', icon: 'pi pi-fw pi-minus' },
                  ]}
                />
              </div>
            </div>
            <ul className="m-0 list-none p-0">
              <li className="flex-column md:align-items-center md:justify-content-between mb-4 flex md:flex-row">
                <div>
                  <span className="text-900 mb-1 mr-2 font-medium md:mb-0">Space T-Shirt</span>
                  <div className="text-600 mt-1">Clothing</div>
                </div>
                <div className="align-items-center mt-2 flex md:mt-0">
                  <div className="surface-300 border-round w-10rem lg:w-6rem overflow-hidden" style={{ height: '8px' }}>
                    <div className="h-full bg-orange-500" style={{ width: '50%' }} />
                  </div>
                  <span className="ml-3 font-medium text-orange-500">%50</span>
                </div>
              </li>
              <li className="flex-column md:align-items-center md:justify-content-between mb-4 flex md:flex-row">
                <div>
                  <span className="text-900 mb-1 mr-2 font-medium md:mb-0">Portal Sticker</span>
                  <div className="text-600 mt-1">Accessories</div>
                </div>
                <div className="align-items-center ml-0 mt-2 flex md:ml-8 md:mt-0">
                  <div className="surface-300 border-round w-10rem lg:w-6rem overflow-hidden" style={{ height: '8px' }}>
                    <div className="h-full bg-cyan-500" style={{ width: '16%' }} />
                  </div>
                  <span className="ml-3 font-medium text-cyan-500">%16</span>
                </div>
              </li>
              <li className="flex-column md:align-items-center md:justify-content-between mb-4 flex md:flex-row">
                <div>
                  <span className="text-900 mb-1 mr-2 font-medium md:mb-0">Supernova Sticker</span>
                  <div className="text-600 mt-1">Accessories</div>
                </div>
                <div className="align-items-center ml-0 mt-2 flex md:ml-8 md:mt-0">
                  <div className="surface-300 border-round w-10rem lg:w-6rem overflow-hidden" style={{ height: '8px' }}>
                    <div className="h-full bg-pink-500" style={{ width: '67%' }} />
                  </div>
                  <span className="ml-3 font-medium text-pink-500">%67</span>
                </div>
              </li>
              <li className="flex-column md:align-items-center md:justify-content-between mb-4 flex md:flex-row">
                <div>
                  <span className="text-900 mb-1 mr-2 font-medium md:mb-0">Wonders Notebook</span>
                  <div className="text-600 mt-1">Office</div>
                </div>
                <div className="align-items-center ml-0 mt-2 flex md:ml-8 md:mt-0">
                  <div className="surface-300 border-round w-10rem lg:w-6rem overflow-hidden" style={{ height: '8px' }}>
                    <div className="h-full bg-green-500" style={{ width: '35%' }} />
                  </div>
                  <span className="ml-3 font-medium text-green-500">%35</span>
                </div>
              </li>
            </ul>
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
