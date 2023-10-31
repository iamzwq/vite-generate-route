import { Outlet, Link } from "react-router-dom";

export default function BasicLayout() {
  return (
    <>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          height: 60,
          padding: "0 24px",
          background: "#f3f4f6",
          boxShadow:
            "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        }}
      >
        <ul style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <li>
            <Link to="/home">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
