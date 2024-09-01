import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { appConstants } from '@/constants/application';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import axios from 'axios';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Table from './Table';

const Monthly = ({ auth }) => {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { data, setData, errors } = useForm({
    date: '',
    visitPurpose: '',
  });

  const submit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data: response } = await axios.post(route('reports.monthly-create'), data);
      if (!response.message) {
        setAppointments(response);
        setError('');
        setIsLoading(false);
      } else {
        setAppointments([]);
        setError(response.message);
        setIsLoading(false);
      }
    } catch (error) {
      setError('Something went wrong! Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Appointment Monthly Report</h2>}
    >
      <Head title="Appointment Monthly Report" />

      <div className="grid">
        <div className="col-12 xl:col-12">
          <div className="card">
            <h5>Generate Monthly Report of Appoinments</h5>

            {error && <p className="m-0 text-red-600">{error}</p>}

            <form onSubmit={submit}>
              <div className="border-b border-gray-900/10 pb-3">
                <div className="mt-5 flex flex-col gap-3 md:flex-row">
                  <div className="sm:w-1/2">
                    <InputLabel htmlFor="date" value="Select Date" required={true} />

                    <TextInput
                      id="date"
                      type="date"
                      name="date"
                      value={data.date}
                      className="mt-1 block w-full"
                      autoComplete="date"
                      onChange={(e) => setData('date', e.target.value)}
                      disabled={isLoading}
                      required
                    />

                    <InputError message={errors.date} className="mt-2" />
                  </div>
                  <div className="sm:w-1/2">
                    <InputLabel htmlFor="visitPurpose" value="Purpose of Visit" />

                    <select
                      id="visitPurpose"
                      name="visitPurpose"
                      value={data.visitPurpose}
                      className="mt-1 block w-full rounded-md border-gray-300 p-2 leading-6 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      onChange={(e) => setData('visitPurpose', e.target.value)}
                      disabled={isLoading}
                    >
                      <option value="">Select</option>
                      <option value={appConstants.GENERAL}>General Meet &amp; Greet</option>
                      <option value={appConstants.COMPLAINTS}>Complaints</option>
                      <option value={appConstants.OFFICIAL}>Official Meetings/Visit</option>
                    </select>

                    <InputError message={errors.visitPurpose} className="mt-2" />
                  </div>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-end gap-x-6">
                <PrimaryButton
                  className="home-two-btn-bg group inline-flex border-[#4A7DFF] bg-[#4A7DFF] py-2"
                  disabled={isLoading}
                >
                  <span className="font-inter relative z-10 text-base capitalize text-white transition-all duration-300 group-hover:text-[#4A7DFF]">
                    Search
                  </span>
                </PrimaryButton>
              </div>
            </form>

            {appointments.length > 0 && <Table appointments={appointments} />}
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

Monthly.propTypes = {
  auth: PropTypes.object.isRequired,
};

export default Monthly;
