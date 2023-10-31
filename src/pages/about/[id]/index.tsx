import { useParams } from "react-router-dom";

export default function About() {
  const { id } = useParams();
  return <div>Hello About ID: {id}</div>;
}
