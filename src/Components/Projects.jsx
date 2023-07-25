import React from "react";
import weather from "../assets/Weather.png";
import logIn from "../assets/logIn.png";
import face from "../assets/FaceRecog.jpg";
import todo from "../assets/Todo.png";
import "../Components/Project.css";

const Projects = () => {
  return (
    <div className="flex justify-between items-center height-[120px] py-15 mt-0 mb-20">
      <div className="card" id="projects">
        <img src={weather} alt="weather" />
        <div>
          <h4>Card Title</h4>
          <p className="font-light">
            This project is built using React.js, and it uses the useState hook
            to manage component state efficiently.The project incorporates API
            calls to fetch and interact with data from external sources,
            facilitated by the Axios package. and OpenWeather API.
            <span className="font-bold text-[#00df9a]">
              <a
                target="blank"
                href="https://github.com/akash15ingh/weatherApp-ReactJS"
              >
                Git-Repo
              </a>
            </span>
          </p>
        </div>
      </div>
      <div className="card" id="projects">
        <img src={logIn} alt="logInForm" />
        <div>
          <h4>Card Title</h4>
          <p className="font-light">
            This project is developed using React.js using the useState hook.
            The page has a stylish app background and features a toggle option,
            allows users to switch between Registration and Login.They can
            register or if they have account can login.This enhances the UX.
            <span className="font-bold text-[#00df9a]">
              <a
                target="blank"
                href="https://github.com/akash15ingh/LogIn-Registration-ReactJs"
              >
                Git-Repo
              </a>
            </span>
          </p>
        </div>
      </div>
      <div className="card" id="projects">
        <img src={face} alt="face" />
        <div>
          <h4>Card Title</h4>
          <p className="font-light">
            The project uses the Face Recognition API, which analyses and
            detects facial expressions in real-time. By accessing the webcam on
            the host system, the application can capture live video input. The
            Face Recognition API processes this video stream, and interprets the
            subject's facial expressions as they occur.
            <span className="font-bold text-[#00df9a]">
              <a
                target="blank"
                href="https://github.com/akash15ingh/Face-Expression-detector-Javascript"
              >
                Git-Repo
              </a>
            </span>
          </p>
        </div>
      </div>
      <div className="card" id="projects">
        <img src={todo} alt="todo" />
        <div>
          <h4>Card Title</h4>
          <p className="font-light">
            This project is developed using React, making efficient use of the
            useState hook to manage the state of daily tasks. With a focus on
            delivering an enhanced UX, the application provides a seamless and
            intuitive interface for users to add and remove their daily tasks
            effortlessly.
            <span className="font-bold text-[#00df9a]">
              <a
                target="blank"
                href="https://github.com/akash15ingh/Todo-List-React-JS"
              >
                Git-Repo
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
