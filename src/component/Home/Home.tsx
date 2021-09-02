import "./Home.scss";
import React, { FC } from "react";

// Interface
interface Props {}

// Component
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Home: FC<Props> = (props) => {
  return (
    <section className="home">
      <div className="home__text">Iatu mind</div>
    </section>
  );
};

export default Home;
