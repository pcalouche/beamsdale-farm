import React from 'react';
import {CardBody, Container} from 'reactstrap';

const AboutUs = () => {
  return (
    <Container className="AboutUs">
      <CardBody>
        <h2 className="text-center">About Our Farm</h2>
        <p className="text-justify">
          Our farm has been in our family since the early 1800s. My grandfather, David Elliott Beam, established Beamsdale Farm and Hatchery in 1950.
          About 3 years ago, my family and I decided to build on the farm property and add in chickens. We have cows, chickens, horses, and lots of vegetables.
          Our chickens get plenty of sunlight and range of the pastures for fresh grass and other nature they like to grub on. Our cows are pasture raised their entire life.
        </p>
        <p className="text-justify">
          Our chickens are fed a high protein diet and plenty of water. Depending on the season, they dine on many types of fruits and vegetables.
          They love kale, watermelon, cantaloupe, lettuce, spinach, lavender, corn and many other seasonal foods. They aren’t fed anything artificial.
        </p>
        <h2 className="text-center">About Our Menu</h2>
        <p className="text-justify">
          All foods are made with our farm fresh eggs, fresh garden vegetables, herbs that we grow on the farm.
          We use as much fresh produce as we can, depending on the season.
        </p>
        <p className="text-justify">
          Growing up, I enjoyed many summers with my parents and grandparents at our farm. Much of my summers
          were spent in the kitchen with my grandmother Ruth. My Grandmother was born in 1914 and taught me how
          to make everything scratch made and fresh. We spent much of our time chatting about why we use fresh
          ingredients and we don’t waste a thing! We cooked and prepared everything from cakes, pies, to fresh
          salads, breads, soups and of course all the meats. What I learned from her can never be taught in a
          class or read online. I will always cherish the times with my Grandmother and I hope that you will
          enjoy the wholesome, farm fresh recipes as well.
        </p>
        <p className="text-justify">
          Foods that many consume today are prepared with artificial ingredients, whether it be to increase
          the amount of protein, decrease carbs or just to sweeten with something other than sugar. Our bodies
          are made to digest and absorb naturally derived products. Taste the difference in our farm fresh foods!
        </p>
      </CardBody>
    </Container>
  );
};

export default AboutUs;