import React, { useState, useEffect } from "react";
import './Landing.css'
import './Dashboard.css'
import Navbar from '../components/Navbar'

const Landing = () => {

    return (
            <><Navbar />
            <a name="home"></a><div class="intro-header">
                <div class="bg-overlay">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="intro-message">
                                    <h1>Hi, I'm Jifeng Li</h1>
                                    <h3>Nice to meet you!</h3>
                                    <hr class="intro-divider" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div></div></>
    );
};

export default Landing;