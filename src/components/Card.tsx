import { ReactNode } from "react";
interface CardProps {
  children: ReactNode;
}
function Card(props: CardProps) {
  const { children } = props;
  return (
    <div className="card border border-gray-200 rounded-lg shadow-sm w-90 p-6">
      {children}
    </div>
  );
}

export default Card;
