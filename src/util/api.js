/*
 *  write all api in one place
 *  
 */ 
'use strict';

// the base uri for request
const base = 'http://127.0.0.1:7001';

// all home api in one place
// arrow func for yield single api
const homeApi = (id) => ({
  news: '/home/news',
  events: '/home/events',
  getSingleNews: `/home/news/${id}`,
  getSingleEvent: `/home/events/${id}`,
});

// all user api in one place
const userApi = {
  login: '/users/login',
  changePassword: '/users/changePassword',
  getProfile: '/users/profile',
  updateProfile: '/users/profile',
};

// export all api in one place
export {
  base,
  homeApi,
  userApi,
}