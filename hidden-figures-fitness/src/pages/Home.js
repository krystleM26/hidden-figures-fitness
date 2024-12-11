import React from 'react';
import '../styles/Home.css';
const Home = () => {
  return (
    <div className='home'>
      <section className='hero'>
        <h1>Welcome to To Hidden Figures</h1>
        <p>Your fitness journey starts here. Get stronger,healthier, and happier</p>
        <button className='cta-btn'>Join Now</button>
      </section>
      {/* Introduction Section */}
      <section className='introduction'>

        <h2>About Us</h2>
        <p>
         Laboris ex nisi est sunt esse eu. 
         Sunt ex in in ipsum consectetur nulla adipisicing veniam ullamco.
          Tempor voluptate ad nisi tempor commodo laborum 
          consectetur labore laborum voluptate dolore esse.
           Commodo amet laborum laboris aute veniam consequat sit 
           exercitation veniam id voluptate quis exercitation irure. 
           Adipisicing deserunt aliqua cillum consectetur voluptate 
           nulla consectetur elit commodo nostrud exercitation.
        </p>
      

      </section>

    {/* Classes Section */}
    <section className="classes">
      <h2>Our Classes</h2>
      <div className="class-cards">
          <div className="card">
            <h3>Yoga</h3>
            <p>Find your inner peace and flexibility with our yoga sessions.</p>
          </div>
          <div className="card">
            <h3>HIIT</h3>
            <p>High-intensity interval training to boost your stamina and burn calories.</p>
          </div>
          <div className="card">
            <h3>Strength Training</h3>
            <p>Build muscle and improve your overall strength with guided workouts.</p>
          </div>
        </div>
    </section>

     {/* Call to Action Section */}
     <section className="cta">
        <h2>Start Your Fitness Journey Today</h2>
        <p>Sign up now and get your first month free!</p>
        <button className="cta-btn">Get Started</button>
      </section>

   </div>
  )
};

export default Home;
