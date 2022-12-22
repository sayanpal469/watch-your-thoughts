import React from 'react';
import './Services.css'

const Services = () => {
    return (
        <div className='service-container' id='services'>
            <div className="service-header">
                <h2>Services</h2>
            </div>
            <div className="service-sub-header">
                <h1>Psychological Counselling & <span className='highlight'>Psychotherapy</span></h1>
                <p className='text-center text-para-services'>We provide face to face and online services via video calls, voice calls and chats.</p>
            </div>
            <section className='service-section'>
                <div className="left-personal">
                    <div className="content-service">
                    <div className="personal-header">
                        <h2 className='text-center'>Personal Issues</h2>
                    </div>
                    <div className="personal-points">
                        <p>Self improvement</p>
                        <p>Exam support</p>
                        <p>Love-Relationship</p>
                        <p>Traumatic Experience</p>
                        <p>Family issues</p>
                        <p>Concentration</p>
                        <p>procrastination</p>
                        <p>LGBTQ</p>
                        <p>Abuse</p>
                        <p>Loneliness</p>
                        <p>Parenting</p>
                        <p>Others</p>
                    </div>
                    </div>
                </div>
                <div className="right-work">
                    <div className="content-service">
                    <div className="work-header">
                        <h2 className='text-center'>Work Issues</h2>
                    </div>
                    <div className="work-points">
                        <div className="first">
                            <p>Work Stress</p>
                            <p>Role Conflict</p>
                            <p>Workplace relationships</p>
                            <p>Time management</p>
                            <p>Toxic work environment</p>
                            <p>Others</p>
                        </div>
                        <div className="second">
                            <p>Workshops</p>
                            <p>Role Conflict</p>
                            <p>Workplace relationships</p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;