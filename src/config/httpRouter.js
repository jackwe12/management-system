import http from './axiosSetting';
import servicePath from './apiUrl';

// export const teacherLogin = (name, password) => http.post(servicePath.teacherLogin, {name:name, password:password});
// export const teacherLogin = (data) => http.post(servicePath.teacherLogin, {name:data.username, password:data.password});
export const teacherLogin = (data) => http.post(servicePath.teacherLogin, data);
export const getAllStudent = () => http.get(servicePath.getAllStudent);
export const addStudent = (data) => http.post(servicePath.addStudent, data);
export const deleteStudent = (id) => http.get(servicePath.deleteStudent + `?student_id=${id}` );