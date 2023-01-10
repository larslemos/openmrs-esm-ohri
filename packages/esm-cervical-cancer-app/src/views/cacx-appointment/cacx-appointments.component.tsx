import React from 'react';
import { useTranslation } from 'react-i18next';
import { EmptyStateComingSoon } from '@ohri/openmrs-esm-ohri-commons-lib';

interface CacxAppointmentsListProps {
  patientUuid: string;
}

const CacxAppointmentsList: React.FC<CacxAppointmentsListProps> = ({ patientUuid }) => {
  const { t } = useTranslation();
  const headerTitle = t('cacxAppointments', 'CaCx Appointments');

  return (
    <>
      <EmptyStateComingSoon displayText={headerTitle} headerTitle={headerTitle} />
    </>
  );
};

export default CacxAppointmentsList;
