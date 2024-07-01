// src/components/profile.js
import React, { useState, useEffect } from 'react';
import { fetchUserData, fetchActivityData, fetchAverageSessions, fetchPerformanceData } from '../services/api';
import '../assets/components/profile.scss';
import CardInfo from './cardInfo';

const Profile = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const [activityData, setActivityData] = useState([]);
  const [averageSessions, setAverageSessions] = useState([]);
  const [performanceData, setPerformanceData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await fetchUserData(userId);
        const activity = await fetchActivityData(userId);
        const averageSessions = await fetchAverageSessions(userId);
        const performance = await fetchPerformanceData(userId);
        setUserData(user);
        setActivityData(activity);
        setAverageSessions(averageSessions);
        setPerformanceData(performance);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [userId]);

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
        <div className='wrapper_left'></div>
        <div className='wrapper_right'>
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


/*
*<h1>Profil de l'utilisateur</h1>
      <div className="user-info">
        <h2>Informations de l'utilisateur</h2>
        <p>Prénom: </p>
        <p>Score du jour: {userData.todayScore * 100}%</p>
        <h3>Clés de données</h3>
        <ul>
          <li>Calories: {userData.keyData.calorieCount}</li>
          <li>Protéines: {userData.keyData.proteinCount}g</li>
          <li>Glucides: {userData.keyData.carbohydrateCount}g</li>
          <li>Lipides: {userData.keyData.lipidCount}g</li>
        </ul>
      </div>
      <div className="activity">
        <h2>Activité</h2>
        <ul>
          {activityData.map((session, index) => (
            <li key={index}>{session.day}: {session.kilogram} kg, {session.calories} calories</li>
          ))}
        </ul>
      </div>
      <div className="average-sessions">
        <h2>Sessions Moyennes</h2>
        <ul>
          {averageSessions.map((session, index) => (
            <li key={index}>Jour {session.day}: {session.sessionLength} minutes</li>
          ))}
        </ul>
      </div>
      <div className="performance">
        <h2>Performance</h2>
        <ul>
          {performanceData.data.map((item, index) => (
            <li key={index}>{performanceData.kind[item.kind]}: {item.value}</li>
          ))}
        </ul>
      </div>
*/