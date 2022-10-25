import { Button, Form, Input } from 'antd'
import React from 'react'

function AddFoodForm({handleAddFood}) {
  return (
    <Form onFinish={handleAddFood} >
         <Form.Item 
           label="Name"
           name="name">
            <Input  placeholder={'Add Food Name'}   />
        </Form.Item>
        <Form.Item 
           label="Servings"
           name="servings">
            <Input name="servings"  placeholder={'Add Food servings'}  />
        </Form.Item>
        <Form.Item
            label="Image"
            name="image" >
            <Input name="image" placeholder={'Add Food image'}  />
        </Form.Item>
        <Form.Item 
        label="Calories"
        name="calories">
            <Input  placeholder={'Add Food calories'}  />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
    </Form>
  )
}

export default AddFoodForm