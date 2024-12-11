import React from 'react';
import Trainer1 from '../assets/trainer1.jpg';
import Trainer2 from '../assets/trainer2.jpg';



function About() {
    return (
        <div className='about'>
            <section className="about-header">
                <h1>About Hidden Figures Fitness</h1>
                <p>
                    Dolore culpa eiusmod sint ullamco dolor dolor pariatur laborum in eiusmod. Do sint non do irure. Commodo tempor elit ex sunt elit exercitation ipsum velit amet sunt adipisicing et in. Proident consequat nostrud reprehenderit cillum velit incididunt. Enim voluptate exercitation ipsum sint ut. Consectetur deserunt Lorem ex voluptate.
                </p>
            </section>
            {/*Mission Section */}
            <section>
                <h2>Our Mission</h2>
                <p>
                    Non excepteur in do nulla Lorem veniam ad. Est ullamco ipsum cupidatat voluptate dolor eu officia eiusmod aute mollit. Qui culpa officia occaecat elit occaecat Lorem sit occaecat anim officia ut quis. Mollit consectetur ullamco ad reprehenderit incididunt.
                </p>
            </section>
            {/* Team Section */}
            <section>
                <h2>Our Team</h2>
                <div className='team-members'>
                    <div className='team-member'>
                    

                        <img src={Trainer1}className="team-img" alt='Trainer 1' />
                     
                        <h3>Bob Smith</h3>
                        <p>Certified Trainer</p>
                    </div>
                    <div className='team-member'>
                        <img src={Trainer2} alt='Trainer 2' />
                        <h3>Jane Doe</h3>
                        <p>Certified Trainer</p>
                    </div>
                </div>
            </section>
            {/*Value Section */}
            <section>
                <h2>Our Core Values</h2>
                <ul>
                    <li><strong>Empower:</strong> Non excepteur in do nulla Lorem veniam ad.</li>
                    <li><strong>Inclusivity:</strong> Non excepteur in do nulla Lorem veniam ad.</li>
                    <li><strong>Growth:</strong> Non excepteur in do nulla Lorem veniam ad.</li>
                </ul>
            </section>

        </div>
    )
}

export default About;