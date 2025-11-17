import React from "react";
import ReactIcon from "../../assets/Icons/ReactIcon";
import ReactRouterIcon from "../../assets/Icons/ReactRouterIcon";
import TailwindIcon from "../../assets/Icons/TailwindIcon";
import NodeIcon from "../../assets/Icons/NodeIcon";
import ExpressIcon from "../../assets/Icons/ExpressIcon";
import LinkedInIcon from "../../assets/Icons/LinkedInIcon";
import GitHubIcon from "../../assets/Icons/GitHubIcon";
const AboutPage = () => {
  return (
    <div>
      <div className="">
        <h1 className="text-3xl font-semibold mb-4 text-[#8254f8]">
          About Page
        </h1>
        <p>
          Hello there! I'm
          <span className="text-[#8254f8]"> Ayesha Manzoor</span>, the
          passionate developer behind this website. With a keen eye for detail
          and a love for crafting seamless digital experiences, I set out to
          create a unique and user-friendly online shopping platform.
        </p>
      </div>

      <div className="">
        <h1 className="text-3xl font-semibold mb-4 text-[#8254f8]">
          Frameworks and Technologies Used
        </h1>
        <p>
          In the development of this website, I've harnessed the power of the
          following frameworks and technologies to create a modern, single-page
          application (SPA):
        </p>
        <div className="flex justify-evenly">
          <ReactIcon
            size={60}
            className="text-[#a8a196] hover:text-[#149ECA] mr-2"
          />
          <ReactRouterIcon
            size={60}
            className="text-[#a8a196] hover:text-[#F44250] mr-2"
          />
          <TailwindIcon
            size={60}
            className="text-[#a8a196] hover:text-[#38BDF8] mr-2"
          />
        </div>
      </div>

      <div className="">
        <h1 className="text-3xl font-semibold mb-4 text-[#8254f8]">
          A Glimpse into the Backend:
        </h1>
        <p>
          While my expertise primarily lies in frontend development, I've
          integrated Node.js and Express.js on the backend to ensure a robust
          and efficient server-side infrastructure. This combination allows for
          smooth communication between the frontend and the server, ensuring a
          seamless user experience.
        </p>
        <div className="flex justify-evenly">
          <NodeIcon
            size={60}
            className="text-[#a8a196] hover:text-[#83CD29] mr-2"
          />
          <ExpressIcon
            size={60}
            className="text-[#a8a196] hover:text-[#000000] mr-2"
          />
        </div>
      </div>

      <div className="">
        <h1 className="text-3xl font-semibold mb-4 text-[#8254f8]">
          Let's Connect
        </h1>
        <p>
          Explore the website, discover the offerings, and if you have any
          questions or suggestions, I'm here to listen. Your journey through
          this online shopping experience is as important to me as it is to you.
          Happy exploring!
        </p>
        <div className="flex justify-evenly">
          <LinkedInIcon
            size={60}
            className="text-[#a8a196] hover:text-[#0077b5] mr-2"
            href="https://www.linkedin.com/in/ayesha-manzoor-7a0910278/"
          />
          <GitHubIcon
            size={60}
            className="text-[#a8a196] hover:text-black dark:hover:text-white mr-2"
            href="https://github.com/Ayesha731"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
