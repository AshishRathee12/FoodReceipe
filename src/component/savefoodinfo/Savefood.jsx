import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './save.css';
import { FaTrashCan } from "react-icons/fa6";
import { MdRemoveShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { clearall, deleteFromCart } from '../saveRedux/saveSlice';
import toast from 'react-hot-toast';
export default function Savefood() {


    // const { carts } = useSelector((state) => state.allcart);

    const carted = useSelector((state) => state.cart.carts);
    const dispatch = useDispatch()

    const clearcart = () => {
        dispatch(clearall())
    }


    const removeitems=(elem)=>{
        dispatch(deleteFromCart(elem))
        toast("Receipe Removed")
    }

    return (
        <Container fluid="md">
            <Row className='added-items justify-content-center'>
                <div className="cart">
                    <div className="cart-header d-flex justify-content-between p-2">
                        <div className="cart-heading">
                            <h4>Saved Items ({carted.length})</h4>
                        </div>
                        <button className="empty-cart d-flex align-items-center justify-content-center px-2" onClick={clearcart}>
                            <FaTrashCan className='me-2' size={20} />
                            <span className="empty-title">
                                Emtpy Cart</span>
                        </button>
                    </div>
                    <div className="cart-body">
                        {carted.length == 0 ? <table className='table cartis-empty mt-4'>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="cart-empty">
                                            <MdRemoveShoppingCart size={60} color='grey' />
                                            <p className='nodata'>Your Cart Is Empty</p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table> :
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th>Product</th>
                                        <th>Name</th>
                                        <th>YouTube Link</th>
                                        <th>View Receipe</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {carted.map((elem) => {
                                        const linked = "/Foodinfo/" + elem.idMeal
                                        return (
                                            
                                                <tr key={linked}>
                                                    <td>
                                                        <button className='recep-delete' onClick={()=>removeitems(elem)}> <FaTrashCan className='me-2' size={18} /></button>
                                                    </td>
                                                    <td>
                                                        <div className="recep-img">
                                                            <img src={elem.strMealThumb} alt="product" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="recep-name">
                                                            <p className=''>{elem.strMeal}</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="youtbelink">
                                                            <a href={elem.strYoutube} target="_blank">Watch</a>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <button>
                                                            <NavLink to={linked} as={NavLink}>view
                                                            </NavLink></button>
                                                    </td>
                                                </tr>
                                        )
                                    })}
                                </tbody>
                            </table>}
                    </div>
                </div>
            </Row>
        </Container>
    )
}
