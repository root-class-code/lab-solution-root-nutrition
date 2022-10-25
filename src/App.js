import logo from './logo.svg';
import './App.css';
import foodsJson from  './foods.json';
import { Card, Row, Col, Divider, Input, Button } from  'antd';
import {useEffect, useState} from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import FoodBoxClass from './components/FoodBoxClass';

function App() {




  const [foods, setFoods] = useState (foodsJson)
  const [filteredFoods, setFilteredFoods] = useState (foodsJson)
  const [showForm, setShowForm] = useState(false)

  // useEffect(() => {
  //   console.log('App Component Updated After the first render')
  // }, [foods])

  function handleShowForm(){
    setShowForm(!showForm)
  }

  function handleAddFood(values){
    setFoods([values, ...foods])
    setFilteredFoods([values, ...foods])
  }

  function handleDelete(index){
    let clonedFoods = structuredClone(foods)
    clonedFoods.splice(index, 1)
    setFoods(clonedFoods)
    setFilteredFoods(clonedFoods)
  }

  function handleSearch(event){
    let text = event.target.value;
    let newFoods = foods.filter((food) => {
      return food.name.toLowerCase().includes(text.toLowerCase())
    })
    setFilteredFoods(newFoods)
  }

  return (
    <div className="App">
     {showForm && <AddFoodForm handleAddFood={handleAddFood}/>} 
    
    <Button onClick={handleShowForm}> Hide Form / Add New Food </Button>

    <Search handleSearch={handleSearch}/>

    <Divider>Food List</Divider>

    <Row style={{ width: '100%', justifyContent: 'center', flexWrap: "wrap"}}>
      {
        filteredFoods.map((food, i) => {
          return (
           <FoodBoxClass
              key={`${i}${food.image}`} 
              food={food} 
              index={i}
              handleDelete={handleDelete}
            />
          )
        })
      }
      {
        !filteredFoods.length && (
          <h2>No Foods to show</h2>
        )
      }
    </Row>
  </div>
  );
}

export default App;
