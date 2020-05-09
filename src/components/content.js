import React, {Suspense}from 'react';
import {Route, Switch} from 'react-router-dom';
import {Spin} from 'antd';

const  StudentList = React.lazy(() => import('../pages/Student/studentList'));
const  AddStudent = React.lazy(() => import('../pages//Student/addStudent'));
const  CourseList = React.lazy(() => import('../pages//Course/course'));
const  CourseType = React.lazy(() => import('../pages//Course/courseType'));
const  AddCourse = React.lazy(() => import('../pages//Course/addCourse'));
const  InterviewArrangement = React.lazy(() => import('../pages//Interview/interview'));
const  AddTeacher = React.lazy(() => import('../pages//Teacher/addTeacher'));
const  TeacherList = React.lazy(() => import('../pages//Teacher/teacher'));


function RouteContent () {
    return(
     
        <Suspense fallback = {<div><Spin tip="Loading..."/> </div>}>
            <Switch>
                <Route path="/student/studentList" component = {StudentList} />
                <Route path="/student/addStudent" component = {AddStudent} />
                <Route path="/course/courseList" component = {CourseList} />
                <Route path="/course/addCourse" component = {AddCourse} />
                <Route path="/course/courseType" component = {CourseType} />
                <Route path="/interview/interviewArrangement" component = {InterviewArrangement} />
                <Route path="/teacher/addTeacher" component = {AddTeacher} />
                <Route path="/teacher/teacherList" component = {TeacherList} />
                <Route path="/" />
            </Switch> 
        </Suspense>


    )
}



export default RouteContent;