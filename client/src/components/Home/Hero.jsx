import * as React from 'react';
import './bg.css'
import logo from '../../assets/Laundrylogo.svg'
const Hero = () => {


    return (
        <div>

            <div className="hero bg h-[500px]" >
                <img src={logo} alt="logo" className='w-[400px]' />
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Test Test</h1>
                        <p className="mb-5">Welcome to Dudee Laundry , your premier destination for all your laundry needs. We are thrilled to introduce ourselves as the newest addition to the vibrant and bustling laundromat scene in Chiangmai.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero