// import { Modal, Button } from 'antd';
// import React from 'react';
// import {deleteStudent} from '../config/httpRouter';
// import useStudent from '../hooks/useStudent'
// const { confirm } = Modal;

// function showConfirm(id) {
//   // const [] = useStudent();

//     confirm({
//       title: 'Do you want to delete these items?',
//       content: 'When clicked the OK button, the data can never be recovered.',

//       onOk() {
//         return new Promise((resolve, reject) => {
//           setTimeout(Math.random() > 0.5 ? resolve : reject, 10);
//           console.log(id);
//           // deleteStudent(id);
//         })
//         .catch((e) => console.log(e));
//       },
      
//       onCancel() {},

//     });
// };


export const addStudentForm = [
  { 
    type:'input',
    title:'Student Email',
    input:'student_email',
    message:'',
    placeholder:'Student Email',
  },
  { 
    type:'multiple',
    title:'Student Type',
    placeholder:'Select multiple Student Type',
    input:'student_type',
    message:'',
    options:[
      {
        value: 1,
        input: 'Developer'
      },
      {
        value: 2,
        input: 'Tester'
      }
    ],
  },
  { 
    type:'multiple',
    title:'Address',
    input:'address',
    placeholder:'Select multiple address',
    message:'',
    options:[
      {
        value: 'New Zeeland',
        input: 'New Zeeland'
      },
      {
        value: 'Australia',
        input: 'Australia',
      },
      {
        value: 'China',
        input: 'China',
      },
      {
        value: 'US',
        input: 'US'
      }
    ],
  },
  { 
    type:'coordinate',
    title:'Course',
    input:'course',
    message:'',
    mainOptions:[
      'Math', 'Physics'
    ],
    secondOptions:{
      Math: ['Test1', 'Test2'],
      Physics: ['Test3', 'Test4']
    }


  }
]