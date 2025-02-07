import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import './food.css';
import { IoMdAdd } from "react-icons/io";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../saveRedux/saveSlice';
import { TiTick } from "react-icons/ti";

import toast from 'react-hot-toast';

export default function Foodinfo() {
    const id = useParams();

    const [arr, setArr] = useState(null);

    const carted = useSelector((state) => state.cart.carts);
    const dispatch = useDispatch();


    const getdata = async (foodname) => {
        try {
            const data = await fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${foodname}`);
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
    }, []);


    const savereceipe = (elem) => {
        dispatch(addToCart(elem));
        toast.success("Receipe Added To Cart")
    }

    const allready = () => {
        toast("Remove it from Cart")

    }


    if (arr != null) {
        return (
            <Container className='food-content-details'>
                <Row className='justify-content-around  '>
                    {
                        arr.map((elem) => {
                            return (
                                <React.Fragment key={elem.idMeal}>
                                    <Col md={4} key={elem.idMeal}>
                                        <img src={elem.strMealThumb} className='img-fluid food-image'></img>
                                        <div className="social-media mt-3 d-flex">
                                            <div className="facebook me-2">
                                                <RiFacebookFill style={{ color: '#fff' }} />
                                            </div>
                                            <div className="twitter me-2">
                                                <FaTwitter style={{ color: '#fff' }} />
                                            </div>
                                            <div className="google me-2">
                                                <FaGoogle style={{ color: '#fff' }} />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="food-details mt-2">
                                            <div className="meal-head">
                                                <h5 className='meal-name'>{elem.strMeal}</h5>
                                                <div className="meal-region d-flex align-items-center">
                                                    <div className="meal-point me-2">
                                                        <div className="meal-dot"></div>
                                                    </div>
                                                    <div className="meal-area mt-2">
                                                        <p className='mb-0'> {elem.strArea}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="save-btn mt-3">
                                                {carted.some((item) => item.idMeal === elem.idMeal) ? (
                                                    <button className='btn' onClick={allready} >Saved<TiTick size={24} color='green'/></button>
                                                ) : (
                                                    <button className='btn btn-primary' onClick={() => savereceipe(elem)}> save <IoMdAdd /></button>
                                                )}
                                            </div>
                                            <div className="meal-instruct mt-4">
                                                <h3>How to make the Meal</h3>
                                                <p>{elem.strInstructions}</p>
                                            </div>
                                            <div className="ingredients">
                                                <h3>
                                                    INGREDIENTS
                                                </h3>
                                                <p>{elem.strIngredient1},{elem.strIngredient2},{elem.strIngredient3},{elem.strIngredient4},{elem.strIngredient5},{elem.strIngredient6},{elem.strIngredient7},{elem.strIngredient8},{elem.strIngredient9},{elem.strIngredient10},{elem.strIngredient11}</p>
                                            </div>
                                            <div className="video">
                                                <a href={elem.strYoutube}>Watch Youtube Video</a>
                                            </div>
                                        </div>
                                    </Col>
                                </React.Fragment>
                            )
                        })
                    }
                </Row>
            </Container>
        )

    }
}