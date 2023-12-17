import * as React from "react";
import Icon from "./icons";

const Footer = () => {
  return (
    <div className=" mt-4 text-primary p-3  border-t border-secondary ">
      <div className="text-xs">
        <span className="text-accent hidden inline-block mr-1  ">
          {" "}
          <Icon icon="app" size={8} />
        </span>{" "}
        Maintained by the Sparticle{" "}
        <a
          target={"_blank"}
          rel={"noopener noreferrer"}
          className="underlipne inline-block border-accent border-b hover:text-accent"
          href="https://www.sparticle.com/"
        >
          {" "}
          Team.
        </a>
      </div>
    </div>
  );
};
export default Footer;
