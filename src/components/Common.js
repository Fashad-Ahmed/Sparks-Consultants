import React from 'react';
import './home.css';
import illus from '../images/Humaaans - 2 Characters.png';
import { NavLink } from 'react-router-dom';


const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className='container-fluid nav_bg'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>{props.name}
                                        <strong className="brandName">Spark Consultants</strong></h1>
                                    <h2 id="team" className="my-3">
                                        The Team of Experienced Agents to grow your Buisness.
                </h2>
                                    <div className="mt-3">
                                        <NavLink to={props.visit} id="btn" className="btn btn-outline-primary ">{props.btname}</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={props.imgsrc} className="img-fluid-animated" id="ima" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Common;
