import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Category/Explore.css'
import { Link, NavLink } from 'react-router-dom';

export default function Foodname() {
    const id = useParams();

    const [arr, setArr] = useState(null);

    const getdata = async (foodname) => {
        try {
            const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodname}`);
            const response = await data.json();
            setArr(response.meals);
        }
        catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        const foodname = id.id
        getdata(foodname);
    }, [])

    if (arr != null) {
        return (
            <Container className='navbar-space'>
                <Row className='justify-content-around'>
                    {
                        arr.map((elem) => {
                            const linkeditem = '/foodinfo/' + elem.
                                idMeal;
                            return (
                                <Card style={{ width: '18rem' }} className='card-content mb-4' key={elem.strCategory}>
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
                </Row>
            </Container>
        )
    }
    else{
        return(
            <p className='loading-data'>
                loading Data please wait
            </p>
        )
    }

}
