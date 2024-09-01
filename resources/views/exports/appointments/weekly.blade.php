<table aria-label="daily report">
  <thead>
    <tr>
      <th>Serial Number</th>
      <th>Name</th>
      <th>Aadhaar Number</th>
      <th>Mobile Number</th>
      <th>Address Line 1</th>
      <th>Address Line 2</th>
      <th>State</th>
      <th>District</th>
      <th>Block</th>
      <th>Number Of Visitors</th>
      <th>Visit Purpose</th>
      <th>Visit Description</th>
      <th>Visit Date</th>
      <th>Visit Time</th>
      <th>Guests List</th>
    </tr>
  </thead>
  <tbody>
    @foreach ($data as $item)
      <tr>
        <td>{{ $item->serialNumber }}</td>
        <td>{{ $item->name }}</td>
        <td>{{ $item->aadhaarNumber }}</td>
        <td>{{ $item->mobileNumber }}</td>
        <td>{{ $item->addressLine1 }}</td>
        <td>{{ $item->addressLine2 }}</td>
        <td>{{ $item->state }}</td>
        <td>{{ $item->district }}</td>
        <td>{{ $item->block }}</td>
        <td>{{ $item->numberOfVisitors }}</td>
        <td>{{ $item->visitPurpose }}</td>
        <td>{{ $item->visitDescription }}</td>
        <td>{{ $item->visitDate }}</td>
        <td>{{ $item->visitTime }}</td>
        <td>{{ $item->guestsList }}</td>
      </tr>
    @endforeach
  </tbody>
</table>
