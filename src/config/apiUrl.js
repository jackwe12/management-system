const baseUrl = "http://localhost:8413/";

const servicePath = {
    teacherLogin: baseUrl + 'teacher/teaLogin',
    getAllStudent: baseUrl + 'stu/allStudent',
    addStudent: baseUrl + 'stu/addStudent',
    deleteStudent: baseUrl + 'stu/deleteStu'

}

export default servicePath;