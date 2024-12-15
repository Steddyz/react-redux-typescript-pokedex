import React, { FC } from "react";

import cl from "./AboutPage.module.css";

const AboutPage: FC = () => {
  return (
    <div className={cl.about}>
      <h1 className={cl.title}>О нас</h1>
      <hr />
      <p className={cl.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
};

export default AboutPage;
