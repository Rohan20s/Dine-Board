// import Image from "next/image";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="container bg-light p-5">
      <div className="row">
        <div>
        <h1 className="col-6">home page</h1>
        </div>
        <div className="col-6">
          <h2>some data</h2>
        </div>
      </div>
      <h1 className="text-primary">Welcome to Next.js + Bootstrap!</h1>
      <button className="btn btn-warning">Click Me</button>
    </div>
  );
}
