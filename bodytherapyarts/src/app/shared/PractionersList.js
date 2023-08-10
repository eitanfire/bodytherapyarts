import { PRACTIONERS } from "./PRACTIONERS";
import { Col, Row } from 'reactstrap';
import PractionerCard from "./PractionerCard";

const PractionersList = () => {
  return (
    <Row className="ms-auto">
      {PRACTIONERS.map((practioner) => {
        return (
          <Col md="5" className="m-4" key={practioner.id}>
            <PractionerCard practioner={practioner} />
          </Col>
        );
      })}
    </Row>
  );
};

export default PractionersList;
