import axios from 'axios';
import {
  mockUserData,
  mockActivityData,
  mockAverageSessions,
  mockPerformanceData,
} from '../mocks/mockData';
import { User, ActivitySession, AverageSession, Performance } from '../models/modelUser';

const USE_MOCK = process.env.REACT_APP_USE_MOCK === 'true';
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchUserData = async (userId) => {
  if (USE_MOCK) {
    const { id, userInfos, todayScore, keyData } = mockUserData;
    return new User(id, userInfos, todayScore, keyData);
  }
  const response = await axios.get(`${BASE_URL}/user/${userId}`);
  const { id, userInfos, todayScore, keyData } = response.data.data;
  return new User(id, userInfos, todayScore, keyData);
};

export const fetchActivityData = async (userId) => {
  if (USE_MOCK) {
    return mockActivityData.sessions.map(session => new ActivitySession(session.day, session.kilogram, session.calories));
  }
  const response = await axios.get(`${BASE_URL}/user/${userId}/activity`);
  return response.data.data.sessions.map(session => new ActivitySession(session.day, session.kilogram, session.calories));
};

export const fetchAverageSessions = async (userId) => {
  if (USE_MOCK) {
    return mockAverageSessions.sessions.map(session => new AverageSession(session.day, session.sessionLength));
  }
  const response = await axios.get(`${BASE_URL}/user/${userId}/average-sessions`);
  return response.data.data.sessions.map(session => new AverageSession(session.day, session.sessionLength));
};

export const fetchPerformanceData = async (userId) => {
  if (USE_MOCK) {
    const { userId: id, kind, data } = mockPerformanceData;
    return new Performance(id, kind, data);
  }
  const response = await axios.get(`${BASE_URL}/user/${userId}/performance`);
  const { userId: id, kind, data } = response.data.data;
  return new Performance(id, kind, data);
};
