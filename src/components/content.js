import React, {Suspense}from 'react';
import {BrowserRouter as  Route, Switch} from 'react-router-dom';
import {Spin} from 'antd';
const  StudentList = React.lazy(() => import('./Student/studentList'));
const  AddStudent = React.lazy(() => import('./Student/addStudent'));
const  CourseList = React.lazy(() => import('./Course/course'));
const  CourseType = React.lazy(() => import('./Course/courseType'));
const  AddCourse = React.lazy(() => import('./Course/addCourse'));
const  InterviewArrangement = React.lazy(() => import('./Interview/interview'));
const  AddTeacher = React.lazy(() => import('./Teacher/addTeacher'));
const  TeacherList = React.lazy(() => import('./Teacher/teacher'));


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