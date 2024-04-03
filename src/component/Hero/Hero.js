import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div class="container">
      <section class="hero">
        <div class="hero-left">
          <h2 class="hero-title">Football League</h2>
          <p class="hero-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, nulla
            accusamus! Totam distinctio velit, quia illo exercitationem omnis
            quos quae non laborum ipsum repellendus labore.
          </p>
          <p class="hero-button">Explore</p>
        </div>
        <div class="hero-right">
          <img src="https://img.freepik.com/premium-vector/ball-with-three-spotting-stripe-football-league-logo_8296-13.jpg" alt="hero-img" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
