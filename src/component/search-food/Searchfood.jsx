import React, { useEffect, useState } from 'react';
import './Search.css';
import { IoIosSearch } from "react-icons/io";
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';

export default function Searchfood() {


  const [food, strFood] = useState(null);
  const [name, setName] = useState("")


  const fetchdata = async (name) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
      const data = await response.json();
      strFood(data.meals)
    } catch (error) {
      console.log(error)
    }
  }

  const callfunction = async (e) => {
    const foodname = e.target.value;
    setName(foodname);
    fetchdata(foodname)
  }


  const emptyinput = () => {
    setName("")
  }


  // for displaying data during fetching and showing error 

  let foodlist = null;
  if (food != null) {
    foodlist = (
      <Row className='justify-content-around'>
        {/* <div className="foodlist"> */}
        {
          food.map((elem) => {
            const linkeditem = '/Foodinfo/' + elem.
              idMeal;
            // console.log(elem);
            return (
              <Card style={{ width: '18rem' }} className='card-content mb-4' key={elem.idMeal}>
                <Card.Img variant="top" src={elem.strMealThumb} />
                <Card.Body>
                  <Card.Title className='mb-3'>{elem.
                    strMeal
                  }</Card.Title>
                  <Link to={linkeditem} as={NavLink}>
                    <Button className='explore'>Explore
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            )
          })}
        {/* </div> */}
      </Row>
    )
  }
  else {
    foodlist = (
      <div className="foodlist d-flex justify-content-center mt-5">
        <h1 className='mx-auto'>No Data Found</h1>
      </div>
    )
  }

  // for displaying data in starting without fetching data 

  if (name == "") {
    foodlist = (
      <div className="foodlist d-flex justify-content-center mt-5">
        <h1 className='mx-auto'>Search for a food item</h1>
      </div>
    )

  }

  return (
    <div>
      <Container style={{ marginTop: '130px' }} className='search' fluid="md">
        <Row className='mb-5'>
          <Col>
            <div className="input-field ">
              <div className="input-side mx-auto px-3 py-2">
                <div className="input-icon">
                  <IoIosSearch size={26} className='icon-color' />
                </div>
                <div className="input">
                  <input type='text' placeholder='Search' className='' value={name} onChange={callfunction} autoFocus></input>
                </div>
                <div className="clear-btn">
                  <button className='p-2' onClick={emptyinput}>Clear</button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        {/* <Row> */}

        {foodlist}
        {/* </Row> */}
      </Container>
    </div>
  )
}
