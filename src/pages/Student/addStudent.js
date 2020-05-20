import React ,{useState, useEffect} from 'react';
import {
  Layout,
  Form,
  Select,
  Input,
  Button,
  message
} from 'antd';

import {addStudent, getStudentById, updateStudentById} from '../../config/httpRouter';

const { Option } = Select;
const { Content } = Layout;


export const addStudentForm = [
  { 
    type:'input',
    title:'Student Email',
    input:'student_email',
    message:'Student Email is required',
    placeholder:'Student Email',
  },
  { 
    type:'select',
    title:'Student Type',
    placeholder:'Select Student Type',
    input:'student_type',
    message:'Student Type is requited',
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
    type:'select',
    title:'Address',
    input:'address',
    placeholder:'Select address',
    message:'Address is required',
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
    message:'Course is required',
    mainOptions:[
      'Math', 'Physics'
    ],
    secondOptions:{
      Math: [
        {
        value: 1,
        input:'Test1',
      }, 
      { value: 2,
        input:'Test2'
      }],
      Physics: [
      {
        value:3,
        input:'Test3',
      }, 
      {
        value:4,
        input:'Test4',
      }]
    }


  }
]

const AddStudent = (props) => {
    let {location, history} = props;
    let id = getUrl();
    const [courses, setCourses] = useState([]);
    // const [second, setSecond] = useState();

    const [initial, setInitial] = useState({});
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    const handleSubjectChange = (value, secondOptions) => {
      //讓second出現選項
      setCourses(secondOptions[value]);
      //給定預設
      // setSecond(secondOptions[value][0])

    };
    // const onSecondChange = value => {
    //   //給second賦予值
    //   setSecond(value)
    // };

    const handleSubmit = e => {
      e.preventDefault();
      props.form.validateFields((err, values) => {
        if (!err) {
          // console.log('Received values of form: ', values);
          let id = getUrl();
          console.log(typeof id)
          if(id === 0)
            addStudentList(values);
          else
            updateStudent(id, values);      
        }
      });

    };

    function updateStudent(id, values){
      // console.log(values)
      let data = {
        student_name:values.student_email,
        student_type:values.student_type,
        course_id:values.course,
        adress:values.address,
        student_id:id
      }
      console.log(data)
      updateStudentById(data)
      .then(res=>{
        if (res.data.code === 1) return message.warn('Paramater incorrect')
        else if(res.data.code === 2) return message.warn('User has already existed')
        message.success('Update new student successfully!');
        props.form.resetFields();
        //push back
        history.push('/student/studentList')
      })
      .catch(e=>console.log(e))
    }
    function addStudentList(values){
      let data = {
        student_name:values.student_email,
        student_type:values.student_type,
        course_id:values.course,
        adress:values.address,
      }
      addStudent(data)
      .then(res=>{
        if (res.data.code === 1) return message.warn('Paramater incorrect')
        else if(res.data.code === 2) return message.warn('User has already existed')
        //code === 0
        message.success('Add new student successfully!');
        //antd -reset form
        props.form.resetFields();
      })
      .catch(e=>console.log(e))
    }

    function getStudentInfo(id){
      getStudentById(id)
      .then((res)=>{
        // console.log(res.data.datas);
        if (!res.data.datas.length) {
          message.warn('User not exists!');
          return history.push('/student/studentList');
        };
        let info = res.data.datas[0];
        console.log(info)
        let main;
        let secondOptions = addStudentForm[3].secondOptions;
        switch(info.course_id){
          case 1: 
          main = 'Math';
          break;
          case 2: 
          main = 'Math';
          break;
          case 3: 
          main = 'Physics';
          break;
          case 4: 
          main = 'Physics';
          break;
          default:
            break;
        }
        setCourses(secondOptions[main]);
        setInitial(
          {
            'student_email':info.student_name,
            //!!因為這邊 input & values不同，不可傳錯, 否則參數無效 i.e. '1' instead of 'Developer'
            'student_type': info.type_id,
            'course' : info.course_id,
            'address' : info.adress,
            'mainOption': main
        })

      })
    }

    function getUrl(){
      let url = location.pathname;
      let arr= url.split('/');
      //string => number
      let id = Number(arr.pop());
      return id
    }

    function cancel(){
      return history.push('/student/studentList');
    }

    useEffect(() => {
      let id = getUrl();
      if (id === 0) return 
      // console.log()
      // setSubmitBtn(false);
      getStudentInfo(id);     

    }, [])


    const { getFieldDecorator } = props.form;

    return (
        <Content style={{ margin: '0 16px' }}>
        <br/>
        <br/>
        <br/>

            <Form {...formItemLayout} id='addStudentForm' onSubmit={handleSubmit}>
            {addStudentForm.map( i => {
              switch(i.type){
                case 'input':
                  return (
                    <Form.Item key={i.title} label={i.title} {...formItemLayout}>
                    {getFieldDecorator(i.input, {
                      rules: [{ required: true, message: i.message }],
                      initialValue:initial[i.input]
                      })(
                      <Input placeholder={i.placeholder} />,
                      )}
                    </Form.Item>
                    );
                case 'select':
                    return(
                    <Form.Item label={i.title} key = {i.title}>
                      {getFieldDecorator(i.input, {
                        rules: [{ required: true, message: i.message }],
                        initialValue:initial[i.input]
                      })(
                        <Select  placeholder={i.placeholder}>
                        {i.options.map( j => {
                          return <Option value={j.value} key={j.value}>{j.input}</Option>
                        })}
                        </Select>,
                      )}
                    </Form.Item>
                    );
                case 'coordinate':
                    return(
                      <Form.Item key={i.title} label={i.title}>
                      {getFieldDecorator(i.mainOptions, {
                          rules: [{ required: true, message: i.message }],
                          initialValue: initial['mainOption']
                        })
                        (<Select
                          // defaultValue={}
                          style={{ width: 120 }}
                          onChange={(value)=>handleSubjectChange(value, i.secondOptions)}
                        >
                          {i.mainOptions.map(main => (
                            <Option key={main}>{main}</Option>
                          ))}
                        </Select>)}
                        {getFieldDecorator(i.input, {
                          rules: [{ required: true, message: i.message }],
                          initialValue:initial[i.input]
                        })
                        (<Select
                          style={{ width: 120 }}
                          // setFieldValue = {second}
                          // onChange={onSecondChange}
                        >
                          {courses.map( course => (
                            <Option key={course} value={course.value}>{course.input}</Option>
                          ))}
                        </Select>)}

                      </Form.Item>
                    );

                default:
                  break;
              }
            })}
            <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
              <Button type="primary" htmlType="submit" >
                {id === 0 ? 'Submit': 'Update'}
              </Button>
              {id !== 0 ? 
                <Button type="primary" style={{marginLeft:20}} onClick={cancel} >
                Cancel
              </Button>
              :<></>}

            </Form.Item>

            </Form>
        </Content> 
    );
  
}





//就是這方法改造，返回一個新的react component, 會提供
const WrappedDemo = Form.create({ name: 'validate_other' })(AddStudent);

export default WrappedDemo;