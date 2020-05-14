import React, {useState} from 'react';
import { Button, Modal} from 'antd';
import {deleteStudent} from '../config/httpRouter';


const { confirm } = Modal;

 const useStudent = () =>{
    let dataSource = [

    ];
  
    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState([]);

    function showConfirm(id) {
        confirm({
          title: 'Do you want to delete these items?',
          content: 'When clicked the OK button, the data can never be recovered.',
    
          onOk() {
            return new Promise((resolve, reject) => {
              setTimeout(Math.random() > 0.5 ? resolve : reject, 10);

              deleteStudent(id)
              .then(res => {
                  let newData = data.filter( i => i.id !== id);
                  setData(newData);
              })
              .catch( e => console.log(e))
            })
            .catch((e) => console.log(e));
          },
          
          onCancel() {},
    
        });
    };

    const studentListColumns = [
     
        {
          title: 'Order',
          dataIndex: 'order',
          key: 'order',
        //   render: text => <a>{text}</a>,
        },
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Student Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Current Course',
          dataIndex: 'course',
          key: 'course',
        },
        {
          title: 'Student Type',
          dataIndex: 'studentType',
          key: 'studentType',
        },
        {
          title: 'Update Time',
          dataIndex: 'update_time',
          key: 'update_time',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (id) => <Button onClick={()=>showConfirm(id)}  >Delete</Button>,
          },
      ];


    return [dataSource, data, setData, searchData, setSearchData, studentListColumns, showConfirm]
}



export default useStudent;