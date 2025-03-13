function Card() {
  return (
    <div className="card border border-gray-200 rounded-lg shadow-sm w-90 p-6">
      <CardBody />
    </div>
  );
}
export function CardBody() {
  return (
    <>
      <div className="card-body">
        <h3 className="text-3xl">Card Title</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          consectetur doloribus libero repudiandae sit officia numquam quis
          doloremque assumenda omnis adipisci incidunt molestiae, inventore
          quibusdam, iste magni, deleniti temporibus sapiente.
        </p>
      </div>
    </>
  );
}
export default Card;
