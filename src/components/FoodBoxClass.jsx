import React, { Component } from 'react'
import { Button, Card } from 'antd';
const { Meta } = Card;

class FoodBoxClass extends Component {

  componentDidMount(){
    console.log('Fooxbox Rendered First time')
  }  

  componentDidUpdate(){
    console.log('Fooxbox Updated')
  }

  componentWillUnmount(){
      console.log('Fooxbox unmounted')
  }

  render() {
    const {food, handleDelete, index} = this.props  
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
}

export default FoodBoxClass