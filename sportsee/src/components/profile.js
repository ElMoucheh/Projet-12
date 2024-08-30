import React from 'react';
import useUserData from '../hooks/useUserData';
import '../assets/components/profile.scss';

import ActivityChart from './activityChart';
import SessionDurationChart from './sessionDurationChart';
import PerformanceRadarChart from './performanceRadarChart';
import ScoreChart from './scoreChart';
import CardInfo from './cardInfo';

const Profile = ({ userId }) => {
  const { userData, activityData, averageSessions, performanceData, error } = useUserData(userId);

  if (error) {
    return <div className="error"><p>Nos services sont momentanément indisponibles</p></div>;
  }

  if (!userData) {
    return <div className='loading'>
            <p>Chargement</p>
          </div>;
  }

  return (
    <div id="profile">
      <div className='header'>
        <h1>Bonjour <span className='name'>{userData.getFirstName()}</span></h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <div className='container'>
        <div className='wrapper-left'>
          <div className='wrap-activity'>
            <ActivityChart data={activityData} />
          </div>
          <div className='wrap'>
            <div className='chart-container'>
              <SessionDurationChart data={averageSessions} />
            </div>
            <div className='chart-container'>
              <PerformanceRadarChart data={performanceData.data} />
            </div>
            <div className='chart-container'>
              <ScoreChart score={userData.todayScore} />
            </div>
          </div>
        </div>
        <div className='wrapper-right'>
          <CardInfo type="Calories" value={userData.keyData.calorieCount} />
          <CardInfo type="Protéines" value={userData.keyData.proteinCount} />
          <CardInfo type="Glucides" value={userData.keyData.carbohydrateCount} />
          <CardInfo type="Lipides" value={userData.keyData.lipidCount} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
