import { OHRIProgrammeSummaryTiles, getReportingCohort } from '@ohri/openmrs-esm-ohri-commons-lib';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { covid19PositiveClients, covidOutcomesCohortUUID, covidVaccinatedClients } from '../../../constants';
import { Outcomes } from './outcome-list-tile.component';

function CovidSummaryTiles({ launchWorkSpace }) {
  const { t } = useTranslation();
  const [activeClientsCount, setActiveClientsCount] = useState(100);
  const [covidVaccinatedClientsCount, setCovidVaccinatedClients] = useState(0);
  const [covid19PositiveClientsCount, setCovid19PositiveClientsCount] = useState(0);
  const [PeopleWithCovidOutcome, setPeopleWithCovidOutcome] = useState(0);

  useEffect(() => {
    getReportingCohort(covidVaccinatedClients).then((data) => {
      setCovidVaccinatedClients(data.members.length);
    });
    getReportingCohort(covid19PositiveClients).then((data) => {
      setCovid19PositiveClientsCount(data.members.length);
    });
    getReportingCohort(covidOutcomesCohortUUID).then((data) => {
      setPeopleWithCovidOutcome(data.members.length);
    });
  }, []);
  const tiles = useMemo(
    () => [
      {
        title: t('assessments', 'Assessments'),
        linkAddress: '#',
        subTitle: t('testsConducted', 'Completed assessments'),
        value: activeClientsCount,
      },
      {
        title: t('cases', 'Cases'),
        linkAddress: '#',
        subTitle: t('peopleTestedPositive', 'People tested positive'),
        value: covid19PositiveClientsCount,
      },
      {
        title: t('vaccinations', 'Vaccinations'),
        linkAddress: '#',
        subTitle: t('peopleVaccinated', 'People vaccinated'),
        value: covidVaccinatedClientsCount,
      },
      {
        title: t('outcomes', 'Outcomes'),
        linkAddress: '#',
        subTitle: t('PeopleWithCovidOutcome', 'People with covid outcome'),
        value: PeopleWithCovidOutcome,
      },
    ],
    [],
  );
  return <OHRIProgrammeSummaryTiles tiles={tiles} />;
}

export default CovidSummaryTiles;
