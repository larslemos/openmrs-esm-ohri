import React from 'react';
import { useTranslation } from 'react-i18next';
import { EmptyState } from '@ohri/openmrs-esm-ohri-commons-lib';

interface EnhancedAdherenceCounsellingListProps {
  patientUuid: string;
}

const EnhancedAdherenceCounsellingList: React.FC<EnhancedAdherenceCounsellingListProps> = ({ patientUuid }) => {
  const { t } = useTranslation();
  const headerTitle = t('enhancedAdherenceCounselling', 'Enhanced Adherence Counselling');

  return (
    <>
      <EmptyState displayText={headerTitle} headerTitle={headerTitle} />
    </>
  );
};

export default EnhancedAdherenceCounsellingList;
