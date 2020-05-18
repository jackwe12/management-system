import React, {useEffect, useState} from 'react';
import {getAllStudent, deleteStudent} from '../../config/httpRouter';
import { Table, Input, Button, Modal, message} from 'antd';

const { Search } = Input;
const { confirm } = Modal;



const StudentList = () => {
  let dataSource = [

  ];
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);

  const studentListColumns = [
     
    {
      title: 'Order',
      dataIndex: 'order',
      key: 'order',
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
        render: (id) => <Button onClick={()=>deleteList(id)} >Delete</Button>,
      },
  ];


  //initialize the list, only active when first rendered
  useEffect(() => {    
    getList();
  }, [])


  //delete list and pop confirm
  function deleteList(id) {
    confirm({
      title: 'Do you want to delete these items?',
      content: 'When clicked the OK button, the data can never be recovered.',

      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 10);
          //if ok, delete list and update list & search list
          deleteStudent(id)
          .then(res => {
              message.success('delete successfully')
              let newData = data.filter( i => i.id !== id);
              //re-order
              newData.forEach((i, idx)=> i.order = idx + 1);
              //update list
              setData(newData);
              setSearchData(newData);
          })
          .catch( e => console.log(e))
        })
        .catch((e) => console.log(e));
      },
      
      onCancel() {},

    });
};
  function getList(){
    getAllStudent()
    .then(res => {
      res.data.datas.forEach((item , idx) => {
        dataSource.push({
          key: idx + 1,
          order:idx + 1,  
          id: item.student_id,
          address:item.adress,
          email:item.student_name,
          course:item.course_name,
          studentType:item.course_type,
          update_time:item.update_date,
          action: item.student_id,
        })
     });
     setData(dataSource);
     setSearchData(dataSource);
    })
    .catch((e)=>console.log(e));
  }





  const search = (value) => {
    
    const newData = searchData.filter((item) => {
        if(item.email.toLowerCase().includes(value.toLowerCase())) return true

        //if empty string, return all
        if (value === '') return true
    })
    //renew list
    setData(newData);
  }

    return (
        <>
            <Search placeholder="Search for student email" style={{width:300,'marginTop':100,'marginBottom':100}} onSearch={value => search(value)} enterButton />
            <Table columns={studentListColumns} dataSource={data} />
        </>    


    );
  
}







export default StudentList;