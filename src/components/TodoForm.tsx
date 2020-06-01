import React from 'react';
<<<<<<< HEAD
import { Input, Button, Form, Switch } from 'antd';
import {postTodo} from "../services/todoService";

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};

const tailLayout = {
    wrapperCol: {offset: 8, span: 8},
}
interface TodoFormInterface{
    reload(): void;
}
const TodoForm = (props: TodoFormInterface) => {
    const [form] = Form.useForm();


    const onFinish = (values: any) => {
        console.log(values);
        postTodo(values).then(() =>props.reload());
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
            <Form.Item name="title" label="title" rules={[{required: true}]}>
                <Input/>
            </Form.Item>
            <Form.Item name="description" label="description" rules={[{required: true}]}>
                <Input.TextArea/>
            </Form.Item>
            <Form.Item name="complete" label="Complete" valuePropName="checked" initialValue={false}>
                <Switch/>
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                <Button htmlType="button" onClick={onReset}>
                    Reset
                </Button>
            </Form.Item>
        </Form>
    );
}
=======
import {Input, Button, Form, Switch} from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
};

const TodoForm = () => {
        const [form] = Form.useForm();

        const onFinish = (values: any) => {
            console.log(values);
        };

        const onReset = () => {
            form.resetFields();
        };

        return (
            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
                <Form.Item name="title" label="Title" rules={[{ required: true}]}>
                    <Input />
                </Form.Item>
                <Form.Item name="descrpition" label="Description" rules={[{ required: true}]}>
                    <Input.TextArea />
                </Form.Item>
                <Form.Item name="complete" label="Complete"  valuePropName="checked" initialValue={false}>
                    <Switch />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button htmlType="button" onClick={onReset}>
                        Reset
                    </Button>
                </Form.Item>
            </Form>
        );
}

>>>>>>> origin/dev
export default TodoForm;