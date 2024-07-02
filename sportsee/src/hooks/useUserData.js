import { useState, useEffect } from 'react';
import { fetchUserData, fetchActivityData, fetchAverageSessions, fetchPerformanceData } from '../services/api';

const useUserData = (userId) => {
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

  return { userData, activityData, averageSessions, performanceData };
};

export default useUserData;