import Link from "next/link";
import Layout from "../components/Layout";
import Button from "@mui/material/Button";

const IndexPage = () => {
  const handleClick = async () => {
    const response = await fetch("/api/add-items");
    const data = await response.json();
    console.log(data.message);
  };

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>123 Hello Next.js 👋</h1>
      <Button variant="contained" onClick={handleClick}>
        Add Items
      </Button>
      <p>
        <Link href="/about">About</Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
