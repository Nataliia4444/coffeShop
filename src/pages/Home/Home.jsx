import Delicious from "../../components/Delicious/Delicious";
import Hero from "../../components/Hero/Hero";
import Info from "../../components/Info/Info";
import Menu from "../../components/Menu/Menu";
import Order from "../../components/Order/Order";

function Home({ setListId }) {
  return (
    <>
      {<Hero />}
      <Delicious />
      <Order />
      <Menu setListId={setListId} />
      <Info />
    </>
  );
}
export default Home;
