const baseUrl = "http://localhost:8413/";

const servicePath = {
    teacherLogin: baseUrl + 'teacher/teaLogin',
    getAllStudent: baseUrl + 'stu/allStudent',
    addStudent: baseUrl + 'stu/addStudent',
    deleteStudent: baseUrl + 'stu/deleteStu',
    getStudentById: baseUrl + 'stu/getStudentById',
    updateStudent: baseUrl + 'stu/updateStu'

}

export default servicePath;