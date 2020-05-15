import React ,{useState} from 'react';
import {addStudentForm as form} from '../../data/studentData'
import {
  Layout,
  Form,
  Select,
  Input,
  Button,
  message
} from 'antd';
import {addStudent} from '../../config/httpRouter';

const { Option } = Select;
const { Content } = Layout;

// const provinceData = ['Zhejiang', 'Jiangsu'];
// const cityData = {
//   Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
//   Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
// };

const AddStudent = (props) => {

    const [courses, setCourses] = useState([]);
    const [second, setSecond] = useState();

    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const handleSubjectChange = (value, secondOptions) => {
      console.log(value, secondOptions)
      //讓second出現選項
      setCourses(secondOptions[value]);
      //給定預設
      setSecond(secondOptions[value][0])

    };
    const onSecondChange = value => {
      //給second賦予值
      setSecond(value)
    };

    const handleSubmit = e => {
      e.preventDefault();
      props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);

          if (!values.student_email || !values.student_type || !values.course || !values.address) return message.warn('must not empty', 2000)
          let data = {
            student_name:values.student_email,
            student_type:values.student_type[0],
            course_id:values.course,
            adress:values.address[0],
          }
          addStudent(data)
          .then(res=>{
            console.log(res)
          })
          .catch(e=>console.log(e))
        }
      });

    };

 

    const { getFieldDecorator } = props.form;

    return (
        <Content style={{ margin: '0 16px' }}>
        <br/>
        <br/>
        <br/>

            <Form {...formItemLayout} onSubmit={handleSubmit}>
            {form.map( i => {
              switch(i.type){
                case 'input':
                  return (
                    <Form.Item key={i.title} label={i.title} {...formItemLayout}>
                    {getFieldDecorator(i.input, {
                        rules: [
                          { message: {} },
                        ],
                      })(
                      <Input placeholder={i.placeholder} />,
                      )}
                    </Form.Item>
                    );
                case 'multiple':
                    return(
                    <Form.Item key={i.title} label={i.title}>
                      {getFieldDecorator(i.input, {
                          initialvalue:''
                      })(
                      <Select mode="multiple" placeholder={i.placeholder}>
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
                        <Select
                          // defaultValue={}
                          style={{ width: 120 }}
                          onChange={(value)=>handleSubjectChange(value, i.secondOptions)}
                        >
                          {i.mainOptions.map(main => (
                            <Option key={main}>{main}</Option>
                          ))}
                        </Select>
                        {getFieldDecorator(i.input, {
                        })
                        (<Select
                          style={{ width: 120 }}
                          // value={second}
                          setFieldValue = {second}
                          onChange={onSecondChange}
                        >
                          {courses.map( course => (
                            <Option key={course}>{course}</Option>
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
                Submit
              </Button>
            </Form.Item>

            </Form>
        </Content> 
    );
  
}






const WrappedDemo = Form.create({ name: 'validate_other' })(AddStudent);

export default WrappedDemo;