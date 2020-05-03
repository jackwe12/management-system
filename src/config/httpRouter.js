import http from './axiosSetting';
import servicePath from './apiUrl';

export const teacherLogin = (name, password) => http.post(servicePath.teacherLogin, {name:name, password:password});