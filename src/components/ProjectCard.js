import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, webUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a className="proj-imgbx d-block" href={webUrl} target="_blank">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </a>
    </Col>
  )
}
