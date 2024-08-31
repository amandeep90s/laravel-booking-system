import React from 'react';

export default function DashboardInfoCard({
  title,
  value,
  icon = '',
  iconColor = '',
  descriptionValue = '',
  descriptionText = '',
}) {
  const iconClass = `pi pi-${icon} text-${iconColor}-500 text-xl`;
  const iconBackgroundClass = `flex align-items-center justify-content-center bg-${iconColor}-100 border-round`;

  return (
    <div className="col-12 lg:col-6 xl:col-3">
      <div className="card mb-0">
        <div className="justify-content-between mb-3 flex">
          <div>
            <span className="text-500 mb-3 block font-medium">{title}</span>
            <div className="text-900 text-xl font-medium">{value}</div>
          </div>
          <div className={iconBackgroundClass} style={{ width: '2.5rem', height: '2.5rem' }}>
            <i className={iconClass} />
          </div>
        </div>
        <span className="font-medium text-green-500">{descriptionValue}</span>
        <span className="text-500"> {descriptionText}</span>
      </div>
    </div>
  );
}
