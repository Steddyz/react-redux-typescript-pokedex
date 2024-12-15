import React, { FC } from "react";

import cl from "./Footer.module.css";
import { FaGithub } from "react-icons/fa";

const Footer: FC = () => {
  return (
    <div className={cl.footer}>
      <div className={cl.author}>Steddyz</div>
      <div className={cl.about}>
        <a href="https://github.com/Steddyz" target="_blank">
          <FaGithub />
        </a>
      </div>
      <div>About</div>
    </div>
  );
};

export default Footer;
