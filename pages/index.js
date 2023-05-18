import Head from "next/head";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList.jsx";
import axios from "axios";
export default function Home({ pizzaList }) {
  return (
    <div>
      <Head>
        <title>Pizza restaurant</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList pizzaList={pizzaList} />
    </div>
  );
}
export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
    },
  };
};
