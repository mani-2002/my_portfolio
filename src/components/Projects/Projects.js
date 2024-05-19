import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import project1 from "../../Assets/Projects/project1.png";
import project2 from "../../Assets/Projects/project2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project1}
              isBlog={false}
              title="Manipe"
              description="This is a Payment Web Application developed using ReactJS + NodeJS + MySQL. With this Payment Web Application a user can signup and login to his/her account and he can link his/her multiple bank accounts to his profile and he/she can select the primary account from the linked accounts and make transactions to the existing users via bank, mobile, upi and made payment transactions are recorded in the transaction history and admin can view his profile and he can manage the users by deleting them."
              ghLink="https://github.com/mani-2002/Manipe"
              demoLink="https://manipe1.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project2}
              isBlog={false}
              title="Book Store Management System"
              description="A Book Store Management System mainly focuses on CRUD Operations where a user can create a book,
              delete an existing book, update an existing book details, and view the book details retrieved from the
              database."
              ghLink="https://github.com/mani-2002/BSMS_Frontend"
              demoLink="https://bsms-frontend.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
