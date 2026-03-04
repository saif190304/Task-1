import React, { useState, useEffect } from 'react';
import './Counter.css';

const CountUpItem = ({ target, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            setCount(Math.floor(progress * target));

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [target, duration]);

    return <span>{count}</span>;
};

function Counter() {
    return (
        <div className="counter-sec text-white py-5">
            <div className="container text-center">
                <h2>Shipping & Logistics Services</h2>
                <p>Statistics prove that we are 100% devoted to our job of booking, <br />processing and transferring the
                    orders across the globe with minimum effort for our clients!</p>

                <div className="row row-cols-2 row-cols-md-4">
                    <div className="col">
                        <h2 className="fw-bold"><CountUpItem target={106} />+</h2>
                        <p>Connected Countries</p>
                    </div>
                    <div className="col">
                        <h2 className="fw-bold"><CountUpItem target={300} />k+</h2>
                        <p>Closed shipment</p>
                    </div>
                    <div className="col">
                        <h2 className="fw-bold"><CountUpItem target={80} />k+</h2>
                        <p>Satisfied clients</p>
                    </div>
                    <div className="col">
                        <h2 className="fw-bold"><CountUpItem target={25} />+</h2>
                        <p>Years Experience</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Counter;