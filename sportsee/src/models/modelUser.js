// src/models/models.js

class User {
  constructor(id, userInfos, todayScore, keyData) {
    this.id = id;
    this.userInfos = userInfos;
    this.todayScore = todayScore;
    this.keyData = keyData;
  }

  getFirstName(){
    return `${this.userInfos.firstName}`
  };
}

class ActivitySession {
  constructor(day, kilogram, calories) {
    this.day = day;
    this.kilogram = kilogram;
    this.calories = calories;
  }
}

class AverageSession {
  constructor(day, sessionLength) {
    this.day = day;
    this.sessionLength = sessionLength;
  }
}

class Performance {
  constructor(userId, kind, data) {
    this.userId = userId;
    this.kind = kind;
    this.data = data;
  }
}

export { User, ActivitySession, AverageSession, Performance };