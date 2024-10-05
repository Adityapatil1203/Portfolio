import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";

function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image
              src="/man-svgrepo-com.svg"
              alt="man-svgrepo"
            />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! My name is <strong>Aditya Patil</strong>, and I am currently in the final year of my Bachelor's degree in Computer Engineering at <strong>SSBT's College Of Engineering and Technology</strong>. I am a full-stack developer with a specialization in the <strong>MERN stack</strong> (MongoDB, Express, React, and Node.js). My journey in software development has been driven by a deep passion for solving problems and building scalable, user-friendly applications.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              Throughout my academic and professional career, I have developed numerous projects that showcase my expertise in both <strong>frontend and backend development</strong>. I have worked on real-world projects like developing a social networking platform called `FriendyFy` and creating a complete e-commerce solution for `Indian Gems Oasis`. These experiences have strengthened my ability to deliver efficient and high-quality solutions in web development.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              Apart from my professional work, I am also passionate about <strong>Data Structures and Algorithms (DSA)</strong>, having solved over 800 problems on Leetcode. I enjoy pushing my limits through coding challenges and competitions, where I have achieved a 2-star rating on CodeChef and won first prize in a Codethon competition. 
              <div className="tagline2">
                Here are some of the technologies I frequently work with:
              </div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
