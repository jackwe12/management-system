export const homeMenu = [
    {   //single menu
        menuType: 0,
        iconType:'home',
        title:'Home Page',
        menuItem:[
            {
                link:'/',
            },
        ],
    },
    {   
        //submenu
        iconType:'calendar',
        title:'Manage Students',
        menuItem:[
            {
                link:'/student/studentList',
                item:'Student List'
            },
            {
                link:'/student/addStudent',
                item:'Add New Student'
            }
        ],
    },
    {
        iconType:'book',
        title:'Manage Courses',
        menuItem:[
            {
                link:'/course/courseList',
                item:'Course List'
            },
            {
                link:'/course/addCourse',
                item:'Add New Course'
            },
            {
                link:'/course/courseType',
                item:'Course Type'
            }
        ], 
    },
    {
        iconType:'contacts',
        title:'Manage Interview',
        menuItem:[
            {
                link:'/interview/interviewArrangement',
                item:'Interview Arrangement'
            }
        ],       
    },
    {
        iconType:'user',
        title:'Manage teacher',
        menuItem:[
            {
                link:'/teacher/teacherList',
                item:'Teacher List'
            },
            {
                link:'/teacher/addTeacher',
                item:'Add New Teacher'
            }
        ],       
    }
]

