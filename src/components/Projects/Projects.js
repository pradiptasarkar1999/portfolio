import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Recent Projects </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=""
              title="Banking Transaction Monitoring System"
              description="Developed an AI-powered fraud detection system using Spring Boot and AWS Lambda. Implemented XGBoost and deep learning models to enhance fraud detection with a 20% reduction in false positives."
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=""
              title="Big Data Analysis Using Spark"
              description="Processed large-scale datasets for an e-commerce platform using PySpark and Hadoop, improving data processing efficiency by 40%."
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=""
              title="Enterprise-Grade API Gateway"
              description="Built a Spring Boot-based API Gateway with enhanced security (OAuth2, JWT) and optimized system response times."
              ghLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
