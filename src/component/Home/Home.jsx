import React, { useState, useEffect } from 'react'
import { Col, Container, Form, Nav, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DemoCarousel from './DemoCarousel';
import { LiaFilterSolid } from "react-icons/lia";
import './Home.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, NavLink } from 'react-router-dom';

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"></link>
import { food } from './content api/contentapi';

export default function Home() {


    // filter method =
    const [filter, setFilter] = useState(false);

    const filterdata = () => {
        setFilter(!filter);
    }
    // select 
    const [foodCuisine, setFoodCuisine] = useState('');
    const handleFoodCuisineChange = (event) => {
        setFoodCuisine(event.target.value);
    };

    // input 
    const [number, setNumber] = useState('10');

    const handletimetaken = (event) => {
        const max = event.target.value;
        if (max > 60) {
            alert("Number should be less then 60")
            return;
        }
        setNumber(event.target.value)
    }

    const [datas, setDatas] = useState([]);

    const fetchdatas = async () => {
        const data = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        const response = await data.json();
        setDatas(response.categories);
        // return response.categories;
    }



    useEffect(() => {
        // dispatch(getAllData())
        var datas = fetchdatas();
    }, [])


    return (
        <div className='Main'>
            <DemoCarousel />
            <Container className='mt-4'>
                <Row className='align-items-center'>
                    <Col className='category'>
                        <h2>
                            Categories
                        </h2>
                    </Col>
                    <Col className='d-flex justify-content-end d-block d-md-none'>
                        <div className="filter-content">
                            <div className="filter-abc">
                                <div className="filter-insider d-flex" onClick={filterdata}>
                                    <p className='filter-text'>More</p>
                                </div>

                                <div className={`${filter ? 'visible' : 'hidden'} filter-def p-3`}>
                                    <ul className='  overflow-auto category'>
                                        {food.map((elem, index) => {
                                            const links = '/Foodname/' + elem.title;
                                            return (
                                                <li key={index}>
                                                    <Link className='display-items mb-2' to={links} as={NavLink}>{elem.title}</Link>
                                                    <br></br>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>


                        </div>

                    </Col>
                </Row>
                <hr></hr>
                <Row className=''>
                    <Col sm={2} className='d-none d-md-block'>
                        <ul className='p-0  overflow-auto category'>
                            {food.map((elem, index) => {
                                // console.log(elem);
                                const links = '/Foodname/' + elem.title;
                                return (
                                    <li key={index}>
                                        <Link className='display-items mb-2' to={links} as={NavLink}>{elem.title}</Link>
                                        {/* <li key={elem.id} className='display-items mb-2' onClick={sidefooditems}>{elem.title}</li> */}
                                        <br></br>
                                    </li>
                                )
                            })}
                        </ul>
                    </Col>
                    <Col sm={10} >
                        <div className="food-content">
                            <Row className='justify-content-around  gy-3'>
                                {
                                    datas.map((elem) => {
                                        const id = elem.strCategory;
                                        const linkedpage = '/Explore/' + id;
                                        return (
                                            <Card style={{ width: '18rem' }} className='card-content1 mb-5' key={elem.strCategory}>
                                                <Card.Img variant="top" src={elem.strCategoryThumb} />
                                                <Card.Body>
                                                    <Card.Title className='mb-3'>{elem.strCategory}</Card.Title>
                                                    <Link to={linkedpage} as={NavLink}>
                                                        <Button className='explore'>Explore
                                                        </Button>
                                                    </Link>
                                                </Card.Body>
                                            </Card>
                                        )
                                    })
                                }
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div >
    )
}
