import { useState } from "react";
import "./styles.css";

function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

export function Header() {
  const [activeLink, setActiveLink] = useState("");

  const handleSetActiveLink = (link: string) => {
    setActiveLink(link);
    scrollToSection(link);
  };
  return (
    <div className="header stickey">
      <p className={`lgh4`} onClick={() => handleSetActiveLink("home")}>
        Sweet Potato Pie
      </p>

      <div className="header-right p1">
        <p
          className={`p1 ${activeLink === "home" ? "active-link" : ""}`}
          onClick={() => handleSetActiveLink("home")}
        >
          home
        </p>
        <p
          className={`p1 ${activeLink === "partnerships" ? "active-link" : ""}`}
          onClick={() => handleSetActiveLink("partnerships")}
        >
          partnerships
        </p>
        <p
          className={`p1 ${activeLink === "about" ? "active-link" : ""}`}
          onClick={() => handleSetActiveLink("about")}
        >
          about
        </p>
        <p
          className={`p1 ${activeLink === "contact" ? "active-link" : ""}`}
          onClick={() => handleSetActiveLink("contact")}
        >
          contact
        </p>
      </div>
    </div>
  );
}
