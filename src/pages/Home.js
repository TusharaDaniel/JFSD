// pages/Home.js
import React from 'react';
import '../styles/Home.css'; // Import the updated CSS file
import logo from '../images/m&m.jpg';
import pic from '../images/assa.jpeg';
import aliceImage from '../images/doc1.jpeg';
import johnImage from '../images/doc2.jpeg';
import emilyImage from '../images/doc3.jpeg';

const Home = () => {
    return (
        <div className="home-container">
            <img src={logo} alt="MindMentor" className="logo" />
            <br/><br/><br/><br/>
            <h1>Welcome to MindMentor</h1>
            <p>Your one-stop solution for mental well-being.</p>

            <div className="content-container">
                <div className="importance-section">
                    <h2>Importance of Maintaining Mental Health</h2>
                    <p>
                        Mental health is essential for overall well-being. It affects how we think, feel, and act. 
                        Maintaining good mental health allows individuals to cope with the stresses of life, work productively, 
                        and contribute to their communities.
                    </p>
                    <h3>How We Can Help</h3>
                    <p>
                        At MindMentor, we provide resources, counseling services, and support groups to assist you on your mental health journey. 
                        Our trained professionals are here to guide you through challenges and promote a healthier mindset.
                    </p>
                    <button className="learn-more-btn">Learn More</button>
                </div>

                <div className="faq-section">
                    <h2>Frequently Asked Questions</h2>
                    <ul>
                        <li><strong>What is MindMentor?</strong> - A platform for mental health resources and support.</li>
                        <li><strong>How can I join a support group?</strong> - You can register on our website and select a group.</li>
                        <li><strong>Are the services confidential?</strong> - Yes, we prioritize your privacy and confidentiality.</li>
                    </ul>
                    <button className="learn-more-btn">Learn More</button>
                </div>
            </div>

            {/* Cards Section */}
            <div className="cards-section">
                <h2>Learn About Mental Health Issues</h2>
                <div className="card-container">
                    <div className="card">
                        <h3>What is ADHD?</h3>
                        <p>Attention-Deficit/Hyperactivity Disorder (ADHD) is a neurodevelopmental disorder characterized by inattention, hyperactivity, and impulsiveness.</p>
                    </div>
                    <div className="card">
                        <h3>What is Stress?</h3>
                        <p>Stress is the body's reaction to any change that requires an adjustment or response, leading to physical, mental, or emotional strain.</p>
                    </div>
                    <div className="card">
                        <h3>What is PTSD?</h3>
                        <p>Post-Traumatic Stress Disorder (PTSD) is a mental health condition triggered by experiencing or witnessing a traumatic event.</p>
                    </div>
                </div>
                <button className="browse-more-btn">Browse More</button>

                <div className="how-to-deal-card">
                    <h2>How Do We Deal With Them?</h2>
                    <p>We provide tailored resources and support to help individuals cope with ADHD,
                         stress, and PTSD, including counseling, therapy, and self-help tools.
                         Treatment for ADHD and PTSD typically includes medication, therapy, or 
                         a combination of both. But there are also lifestyle 
                         changes and different types of therapy that can help you manage both conditions, 
                         such as neurofeedback and/or meditation.</p>
                    <p>
                        <h3>For ADHD</h3>
                        Adding therapy to an ADHD treatment plan can help some people better 
                        cope with daily challenges, gain confidence, or manage impulsive and risky behaviors. Therapy is especially helpful if 
                        ADHD co-occurs with other mental disorders, such as anxiety, depression, conduct problems, or substance use disorders.
                    </p>
                    <img src={pic} alt="ADHD Illustration" className="adhd-image" /> {/* Add the ADHD image */}
                    <button className="learn-more-btn">Learn More About Dealing with ADHD</button>
                </div>

                {/* Updated Card for Psychologists */}
                <div className="psychologists-card">
                    <h2>We Collaborate with Top Psychologists</h2>
                    <p>At MindMentor, we utilize the expertise of top psychologists to ensure our users receive the best possible guidance and support in their mental health journey. Their experience and knowledge allow us to provide tailored assistance that meets your unique needs.</p>
                    <p>Our psychologists are well-versed in various therapeutic techniques and approaches, enabling them to address a wide range of mental health issues effectively. They are dedicated to creating a safe and supportive environment where individuals can openly discuss their challenges and work towards healing.</p>
                    <p>By working with leading experts, we aim to empower our users with the tools and strategies necessary for managing their mental health and achieving lasting well-being.</p>

                    {/* Embedded Cards for Psychologists */}
                    <div className="embedded-cards">
                        <div className="embedded-card">
                            <h3>Dr. Alice Smith</h3>
                            <img src={aliceImage} alt="Dr. Alice Smith" className="doctor-image" /> {/* Image for Dr. Alice Smith */}
                            <p>Specializes in Cognitive Behavioral Therapy (CBT) and works with individuals dealing with anxiety and depression.</p>
                        </div>
                        <div className="embedded-card">
                            <h3>Dr. John Doe</h3>
                            <img src={johnImage} alt="Dr. John Doe" className="doctor-image" />
                            <p>Focuses on trauma-informed care and helps clients navigate through their PTSD experiences.</p>
                        </div>
                        <div className="embedded-card">
                            <h3>Dr. Emily Johnson</h3>
                            <img src={emilyImage} alt="Dr. Emily Johnson" className="doctor-image" />
                            <p>An expert in ADHD, offering personalized strategies to help clients improve focus and reduce impulsivity.</p>
                        </div>
                    </div>
                </div>

                {/* About Us Section */}
                <div className="about-us-card">
                    <h2>About Us</h2>
                    <p>
                        MindMentor is a mental health support platform created with the vision to offer a safe, accessible, and holistic approach to mental well-being.
                        Founded by mental health professionals, our platform has grown to become a comprehensive resource for individuals seeking mental health guidance.
                        We aim to break the stigma surrounding mental health by providing easy access to resources, expert counseling, and support groups.
                    </p>
                    <p>
                        Over the years, we have successfully helped thousands of individuals from various backgrounds to overcome challenges like anxiety, stress, ADHD,
                        depression, and PTSD. Our expert team of counselors, psychologists, and mental health practitioners collaborate with users to create tailored solutions
                        that cater to their specific needs. Whether it's through individual counseling, support groups, or therapeutic exercises, we ensure that our users have
                        all the tools they need to foster mental resilience and growth.
                    </p>
                    <p>
                        MindMentor also plays a pivotal role in mental health awareness, conducting regular workshops, podcasts, and webinars to educate communities about
                        mental health issues and self-care practices. Our mission is to create a world where mental health is prioritized and individuals feel empowered to
                        seek the help they need without fear or hesitation.
                    </p>
                    <p>
                        Our platform is designed to provide a seamless experience, offering users access to a wide range of self-help resources, virtual therapy sessions, 
                        and peer support groups, all within one click. At MindMentor, your mental well-being is our priority, and we are here to guide you every step of the way.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
