import { Layout} from 'antd';
import React, {useEffect} from 'react';
import {getAllStudent} from '../../config/httpRouter';
import { Table, Input} from 'antd';
// import {studentListColumns as columns} from '../../data/studentData'

import useStudent from '../../hooks/useStudent'
const { Content } = Layout;
const { Search } = Input;



const StudentList = () => {
  const [dataSource, data, setData, searchData, setSearchData, studentListColumns] = useStudent();

  //initialize the list
  useEffect(() => {    

    getAllStudent()
    .then(res => {
      // console.log(res.data.datas);
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


    //?
   }, )



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
        <Content style={{ margin: '0 16px' }}>
            <div>
              <br/>
              <br/>
              <br/>
              <Search placeholder="Search for student email" style={{width:200}} onSearch={value => search(value)} enterButton />
              <br/>
              <br/>
              <br/>
            </div>
            <Table columns={studentListColumns} dataSource={data} />
        </Content> 


    );
  
}







export default StudentList;