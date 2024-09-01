import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';

const Table = ({ appointments }) => {
  return (
    <div className="mt-3 overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Serial Number
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Date & Time
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Aadhaar Number
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Mobile Number
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Address</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">State</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">District</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Block</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Visitors</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Purpose</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Guests</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {appointments.map((appointment) => (
            <tr key={appointment.serialNumber}>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">{appointment.serialNumber}</td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                {moment(appointment.visitDate).format('DD/MM/YYYY')} <br />{' '}
                {moment(appointment.visitTime, 'HH:mm:ss').format('hh:mm A')}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">{appointment.name}</td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">{appointment.aadhaarNumber}</td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">{appointment.mobileNumber}</td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                {appointment.addressLine1}
                {appointment.addressLine2 && appointment.addressLine2 !== 'NA' && <br />}
                {appointment.addressLine2 && appointment.addressLine2 !== 'NA' && appointment.addressLine2}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">{appointment.state}</td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">{appointment.district}</td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">{appointment.block}</td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">{appointment.numberOfVisitors}</td>
              <td className="whitespace-nowrap px-6 py-4 text-sm capitalize text-gray-900">
                {appointment.visitPurpose}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">{appointment.visitDescription}</td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                {appointment.guestsList !== '[]'
                  ? JSON.parse(appointment.guestsList).map((guest, index) => (
                      <div key={`${index}-${guest.guestAadhaar}`}>
                        <span className="font-semibold">Guest {index + 1}</span> <br />
                        Name : {guest.guestName} <br />
                        Mobile: {guest.guestMobile} <br />
                        Aadhaar {guest.guestAadhaar}
                      </div>
                    ))
                  : 'No guests'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  appointments: PropTypes.array.isRequired,
};

export default Table;
