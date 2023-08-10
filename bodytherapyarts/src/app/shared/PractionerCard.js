import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const PractionerCard = ({ practioner }) => {
  const {
    image,
    name,
  } = practioner;
  return (
    <Card>
      <CardImg
        width="100%"
          src={image}
        alt={name}
      />
      <CardImgOverlay>
        <CardTitle>{name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
};
export default PractionerCard;
