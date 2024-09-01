import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import PropTypes from 'prop-types';
import React from 'react';

const Weekly = ({ auth }) => {
  const { data, setData, post, processing, errors, reset } = useForm({
    date: '',
  });

  const submit = async (e) => {
    e.preventDefault();

    post(route('reports.weekly-create'), {
      onSuccess: () => reset('date'),
    });
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Appointment Weekly Report</h2>}
    >
      <Head title="Appointment Weekly Report" />

      <div className="grid">
        <div className="col-12 xl:col-12">
          <div className="card">
            <h5>Generate Weekly Report of Appoinments</h5>

            <form onSubmit={submit}>
              <div className="border-b border-gray-900/10 pb-12">
                <div className="mt-10">
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
                      disabled={processing}
                      required
                    />

                    <InputError message={errors.date} className="mt-2" />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-6">
                <PrimaryButton
                  className="home-two-btn-bg group inline-flex border-[#4A7DFF] bg-[#4A7DFF] py-2"
                  disabled={processing}
                >
                  <span className="font-inter relative z-10 text-base capitalize text-white transition-all duration-300 group-hover:text-[#4A7DFF]">
                    Generate
                  </span>
                </PrimaryButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

Weekly.propTypes = {
  auth: PropTypes.object.isRequired,
};

export default Weekly;
