import Card from "./Card";
import CardBody from "./CardBody";

function GridList() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card>
        <CardBody title="Hello World" description="This is a description" />
      </Card>
      <Card>
        <CardBody title="Hello World" description="This is a description" />
      </Card>
      <Card>
        <CardBody title="Hello World" description="This is a description" />
      </Card>
    </div>
  );
}
export default GridList;
