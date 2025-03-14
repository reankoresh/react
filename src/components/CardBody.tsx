interface CardBodyProps {
  title: string;
  description: string;
}
function CardBody(props: CardBodyProps) {
  const { title, description } = props;
  return (
    <>
      <div className="card-body">
        <h3 className="text-3xl">{title}</h3>
        <p>{description}</p>
      </div>
    </>
  );
}
export default CardBody;
