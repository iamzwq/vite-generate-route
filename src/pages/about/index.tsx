import { Outlet, Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <div>Hello About</div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="12">详情</Link>
            </li>
            <li>
              <Link to="about-sub">sub</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}
