import Callout from '@/Components/Callout.jsx';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import HomeLayout from '@/Layouts/HomeLayout.jsx';
import { Head, useForm } from '@inertiajs/react';
import { useMask } from '@react-input/mask';
import React, { useState } from 'react';

const Appointment = ({ status }) => {
  const aadhaarInputRef = useMask({ mask: '____ ____ ____', replacement: { _: /\d/ } });
  const mobileInputRef = useMask({ mask: '____________', replacement: { _: /\d/ } });

  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    aadhaarNumber: '',
    mobileNumber: '',
    addressLine1: '',
    addressLine2: '',
    state: '',
    district: '',
    block: '',
    numberOfVisitors: '',
    visitPurpose: '',
    visitDescription: '',
    visitDate: '',
    visitTime: '',
    guestsList: [],
  });

  const [guestsList, setGuestsList] = useState([]);

  const submit = (e) => {
    e.preventDefault();
  };

  const addGuest = () => {
    setGuestsList([...guestsList, { id: guestsList.length + 1, name: '', mobile: '', aadhaar: '' }]);
  };

  const removeGuest = (id) => {
    setGuestsList(guestsList.filter((guest) => guest.id !== id));
  };

  const handleGuestChange = (id, key, value) => {
    const updatedGuestsList = guestsList.map((guest) => {
      if (guest.id === id) {
        return { ...guest, [key]: value };
      }

      return guest;
    });

    setGuestsList(updatedGuestsList);
  };

  return (
    <HomeLayout>
      <Head title="Appointment" />
      <Callout title="Appointment" link={route('appointment')} />

      <section className="py-16 md:pt-[130px]">
        <div className="theme-container mx-auto grid w-full grid-cols-7 gap-y-16 lg:grid-cols-12 lg:gap-x-[70px] lg:gap-y-0">
          <div className="col-span-12">
            <div className="border-purple/10 rounded-[10px] border p-4 md:p-[50px]">
              <h1 className="text-main-black pb-6 text-center text-[30px] font-semibold tracking-tight">
                Book an Appointment
              </h1>
              {status && <div className="mb-[30px] text-green-600">{status}</div>}
              <p className="text-paragraph mb-[30px]">
                Required fields are marked <span className="text-red-600">*</span>
              </p>

              <form onSubmit={submit}>
                <div className="space-y-12">
                  <div className="border-b border-gray-900/10 pb-12">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <InputLabel htmlFor="name" value="Name" required={true} />

                        <TextInput
                          id="name"
                          type="text"
                          name="name"
                          value={data.name}
                          className="mt-1 block w-full"
                          autoComplete="username"
                          onChange={(e) => setData('name', e.target.value)}
                          maxLength={50}
                          required
                        />

                        <InputError message={errors.name} className="mt-2" />
                      </div>

                      <div className="sm:col-span-3">
                        <InputLabel htmlFor="aadhaarNumber" value="Aadhaar Number" required={true} />

                        <TextInput
                          id="aadhaarNumber"
                          type="text"
                          name="aadhaarNumber"
                          value={data.aadhaarNumber}
                          className="mt-1 block w-full"
                          autoComplete="off"
                          onChange={(e) => setData('aadhaarNumber', e.target.value)}
                          maxLength={14}
                          ref={aadhaarInputRef}
                          required
                        />

                        <InputError message={errors.aadhaarNumber} className="mt-2" />
                      </div>

                      <div className="sm:col-span-3">
                        <InputLabel htmlFor="addressLine1" value="Address Line 1" required={true} />

                        <TextInput
                          id="addressLine1"
                          type="text"
                          name="addressLine1"
                          value={data.addressLine1}
                          className="mt-1 block w-full"
                          autoComplete="off"
                          onChange={(e) => setData('addressLine1', e.target.value)}
                          required
                        />

                        <InputError message={errors.addressLine1} className="mt-2" />
                      </div>

                      <div className="sm:col-span-3">
                        <InputLabel htmlFor="addressLine2" value="Address Line 2" />

                        <TextInput
                          id="addressLine2"
                          type="text"
                          name="addressLine2"
                          value={data.addressLine2}
                          className="mt-1 block w-full"
                          autoComplete="off"
                          onChange={(e) => setData('addressLine2', e.target.value)}
                        />

                        <InputError message={errors.addressLine2} className="mt-2" />
                      </div>

                      <div className="sm:col-span-3">
                        <InputLabel htmlFor="mobileNumber" value="Mobile Number" required={true} />

                        <TextInput
                          id="mobileNumber"
                          type="text"
                          name="mobileNumber"
                          value={data.mobileNumber}
                          className="mt-1 block w-full"
                          autoComplete="off"
                          onChange={(e) => setData('mobileNumber', e.target.value)}
                          maxLength={12}
                          ref={mobileInputRef}
                          required
                        />

                        <InputError message={errors.mobileNumber} className="mt-2" />
                      </div>

                      <div className="sm:col-span-3">
                        <InputLabel htmlFor="state" value="State" required={true} />

                        <TextInput
                          id="state"
                          type="text"
                          name="state"
                          value={data.state}
                          className="mt-1 block w-full"
                          autoComplete="off"
                          onChange={(e) => setData('state', e.target.value)}
                          required
                        />

                        <InputError message={errors.state} className="mt-2" />
                      </div>

                      <div className="sm:col-span-3">
                        <InputLabel htmlFor="district" value="District" required={true} />

                        <TextInput
                          id="district"
                          type="text"
                          name="district"
                          value={data.district}
                          className="mt-1 block w-full"
                          autoComplete="off"
                          onChange={(e) => setData('district', e.target.value)}
                          required
                        />

                        <InputError message={errors.district} className="mt-2" />
                      </div>

                      <div className="sm:col-span-3">
                        <InputLabel htmlFor="block" value="Block" />

                        <TextInput
                          id="block"
                          type="text"
                          name="block"
                          value={data.block}
                          className="mt-1 block w-full"
                          autoComplete="off"
                          onChange={(e) => setData('block', e.target.value)}
                        />

                        <InputError message={errors.block} className="mt-2" />
                      </div>

                      <div className="sm:col-span-3">
                        <InputLabel htmlFor="visitPurpose" value="Purpose of Visit" required={true} />

                        <select
                          id="visitPurpose"
                          name="visitPurpose"
                          value={data.visitPurpose}
                          className="mt-1 block w-full rounded-md border-gray-300 p-2 leading-6 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                          onChange={(e) => setData('visitPurpose', e.target.value)}
                          required
                        >
                          <option value="">Select</option>
                          <option value="1">General Meet &amp; Greet</option>
                          <option value="2">Complaints</option>
                          <option value="3">Official Meetings/Visit</option>
                        </select>

                        <InputError message={errors.visitPurpose} className="mt-2" />
                      </div>

                      <div className="sm:col-span-3">
                        <InputLabel htmlFor="numberOfVisitors" value="Number of Visitors" required={true} />

                        <TextInput
                          id="numberOfVisitors"
                          type="number"
                          name="numberOfVisitors"
                          value={data.numberOfVisitors}
                          className="mt-1 block w-full"
                          autoComplete="off"
                          onChange={(e) => setData('numberOfVisitors', e.target.value)}
                          required
                        />

                        <InputError message={errors.numberOfVisitors} className="mt-2" />
                      </div>

                      <div className="sm:col-span-3">
                        <InputLabel htmlFor="visitDate" value="Visit Date" required={true} />

                        <TextInput
                          id="visitDate"
                          type="date"
                          name="visitDate"
                          value={data.visitDate}
                          className="mt-1 block w-full"
                          autoComplete="off"
                          onChange={(e) => setData('visitDate', e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          required
                        />

                        <InputError message={errors.visitDate} className="mt-2" />
                      </div>

                      <div className="sm:col-span-3">
                        <InputLabel htmlFor="visitTime" value="Visit Time" required={true} />

                        <select
                          id="visitTime"
                          name="visitTime"
                          value={data.visitTime}
                          className="mt-1 block w-full rounded-md border-gray-300 p-2 leading-6 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                          onChange={(e) => setData('visitTime', e.target.value)}
                          required
                        >
                          <option value="">Select</option>
                        </select>

                        <InputError message={errors.visitTime} className="mt-2" />
                      </div>

                      <div className="col-span-full">
                        <InputLabel htmlFor="visitDescription" value="Visit Description" required={true} />

                        <textarea
                          id="visitDescription"
                          name="visitDescription"
                          value={data.visitDescription}
                          className="mt-1 block min-h-36 w-full resize-none rounded-md border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                          onChange={(e) => setData('visitDescription', e.target.value)}
                          required
                        />

                        <InputError message={errors.visitDescription} className="mt-2" />
                      </div>

                      <div className="col-span-full flex items-center justify-between">
                        <span className="text-paragraph">More than one visitor?</span>
                        <button
                          type="button"
                          onClick={addGuest}
                          className="home-two-btn-bg group inline-flex border-[#4A7DFF] bg-[#4A7DFF] py-1 text-white focus:outline-none"
                        >
                          <span className="font-inter relative z-10 text-base capitalize text-white transition-all duration-300 group-hover:text-[#4A7DFF]">
                            Add Guest
                          </span>
                        </button>
                      </div>

                      {guestsList.map((guest) => (
                        <React.Fragment key={guest.id}>
                          <div className="sm:col-span-2 sm:col-start-1">
                            <InputLabel htmlFor={`guestName-${guest.id}`} value={`Name ${guest.id}`} required={true} />

                            <TextInput
                              id={`guestName-${guest.id}`}
                              type="text"
                              name={`guestName-${guest.id}`}
                              value={guest.name}
                              className="mt-1 block w-full"
                              autoComplete="off"
                              onChange={(e) => handleGuestChange(guest.id, 'name', e.target.value)}
                              maxLength={50}
                              required
                            />

                            <InputError message={errors.name} className="mt-2" />
                          </div>

                          <div className="sm:col-span-2">
                            <InputLabel
                              htmlFor={`guestMobile-${guest.id}`}
                              value={`Mobile ${guest.id}`}
                              required={true}
                            />

                            <TextInput
                              id={`guestMobile-${guest.id}`}
                              type="text"
                              name={`guestMobile-${guest.id}`}
                              value={guest.mobile}
                              className="mt-1 block w-full"
                              autoComplete="off"
                              onChange={(e) => handleGuestChange(guest.id, 'mobile', e.target.value)}
                              maxLength={12}
                              ref={mobileInputRef}
                              required
                            />

                            <InputError message={errors.name} className="mt-2" />
                          </div>

                          <div className="sm:col-span-2">
                            <InputLabel
                              htmlFor={`guestAadhaar-${guest.id}`}
                              value={`Aadhaar No ${guest.id}`}
                              required={true}
                            />

                            <TextInput
                              id={`guestAadhaar-${guest.id}`}
                              type="text"
                              name={`guestAadhaar-${guest.id}`}
                              value={guest.aadhaar}
                              className="mt-1 block w-full"
                              autoComplete="off"
                              onChange={(e) => handleGuestChange(guest.id, 'aadhaar', e.target.value)}
                              maxLength={14}
                              ref={aadhaarInputRef}
                              required
                            />

                            <InputError message={errors.name} className="mt-2" />
                          </div>

                          <div className="sm:col-span-2">
                            <button
                              type="button"
                              onClick={() => removeGuest(guest.id)}
                              className="home-two-btn-bg group m-0 inline-flex border-[#dc2626] bg-[#dc2626] py-1 text-white focus:outline-none"
                            >
                              <span className="font-inter relative z-10 text-base capitalize text-white transition-all duration-300 group-hover:text-[#dc2626]">
                                Remove
                              </span>
                            </button>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                  <PrimaryButton
                    className="home-two-btn-bg group inline-flex border-[#4A7DFF] bg-[#4A7DFF] py-2"
                    disabled={processing}
                  >
                    <span className="font-inter relative z-10 text-base capitalize text-white transition-all duration-300 group-hover:text-[#4A7DFF]">
                      Confirm Visit
                    </span>
                  </PrimaryButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </HomeLayout>
  );
};

export default Appointment;
