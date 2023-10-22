import React from "react";

import "./Card.css";

const Card: React.FC<React.PropsWithChildren<{ className: string }>> = ({
  className,
  children,
}) => <div className={`card ${className}`}>{children}</div>;

export default Card;
