import axios from 'axios';
import { User, ActivitySession, AverageSession, Performance } from '../models/modelUser';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchUserData = async (userId) => {
  const response = await axios.get(`${BASE_URL}/user/${userId}`);
  const { id, userInfos, todayScore, keyData } = response.data.data;
  return new User(id, userInfos, todayScore, keyData);
};

export const fetchActivityData = async (userId) => {
  const response = await axios.get(`${BASE_URL}/user/${userId}/activity`);
  return response.data.data.sessions.map(session => new ActivitySession(session.day, session.kilogram, session.calories));
};

export const fetchAverageSessions = async (userId) => {
  const response = await axios.get(`${BASE_URL}/user/${userId}/average-sessions`);
  return response.data.data.sessions.map(session => new AverageSession(session.day, session.sessionLength));
};

export const fetchPerformanceData = async (userId) => {
  const response = await axios.get(`${BASE_URL}/user/${userId}/performance`);
  const { userId: id, kind, data } = response.data.data;
  return new Performance(id, kind, data);
};
