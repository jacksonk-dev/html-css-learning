import { NavLink as Link } from "react-router-dom";

const styles = {
  root: {
    width: "100%",
    margin: "16px auto 24px auto",
    display: "flex",
    justifyContent: "center",
    borderBottom: "2px solid #1565C0"
  },
  link: {
    position: "relative",
    top: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    padding: "8px 16px",
    color: "#000"
  },
  activeLink: {
    color: "#1565C0",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#1565C0 #1565C0 #fff #1565C0"
  }
};

export default function () {
  return (
    <div style={styles.root}>
      <Link
        to="/"
        style={({ isActive }) =>
          isActive
            ? {
                ...styles.link,
                ...styles.activeLink
              }
            : styles.link
        }
      >
        Home
      </Link>
      <Link
        to="About"
        style={({ isActive }) =>
          isActive
            ? {
                ...styles.link,
                ...styles.activeLink
              }
            : styles.link
        }
      >
        About
      </Link>
    </div>
  );
}
