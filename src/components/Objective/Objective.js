import React from 'react';
import './Objective.css'

const Objective = () => {
    return (
        <div className='objective-container' id='objective'>
            <div className="objective-header">
                <h2 className='text-center'>Our Objective</h2>
            </div>
            <div className="objective-content container">
                <li>
                Creating a safe, judgement free, queer affirmative space for mental health counsealing.
                </li>
                <li>
                Normalising mental health issues by educating people about their condition, help them about their triggers, and <br /> develop healthy coping mechanisms. 
                </li>
                <li>
                Helping people understand mental health conditions better by providing information about mental health <br /> conditions through credible sources
                </li>
                <li>
                Charging the way people view mental health by encouraging people to seek help of a proffesional in case they <br /> are mentally or emotionally distressed
                </li>
                <li>
                Motivating people to question harmful taboos,myths and stereotypes and to open about lesser focused but <br /> important issues
                </li>
                
            </div>

        </div>
    );
};

export default Objective;