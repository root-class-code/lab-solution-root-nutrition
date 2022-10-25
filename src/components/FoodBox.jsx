import React, { useEffect } from 'react'
import { Button, Card } from 'antd';
const { Meta } = Card;

function FoodBox(props) {

  // useEffect(() => {
  //   console.log('FoodBox Component Rendered')
  // })

   // useEffect(() => {
  //   console.log('FoodBox Component Mounted')
  // }, [])

  // useEffect(() => {
  //   console.log('FoodBox Component Rendered when foods updated')
  // }, [foods])

  // useEffect(() => {
  //   return () => {
  //     console.log('FoodBox Component Unmounted')
  //   }
  // }, [])


  const {food, handleDelete, index} = props  
  return (
    <Card
    hoverable
    style={{
      width: 240,
      margin: 10,
    }}
    cover={<img alt="example" src={food.image}  />}
  >
    <Meta title={food.name} description={`Calories: ${food.calories}`} />
    <Button onClick={() => { handleDelete(index)  }} type="primary">Delete</Button>
  </Card>
  )
}

export default FoodBox