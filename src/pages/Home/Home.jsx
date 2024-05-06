import Delicious from "../../components/Delicious/Delicious";
import Hero from "../../components/Hero/Hero";
import Info from "../../components/Info/Info";
import Menu from "../../components/Menu/Menu";
import Order from "../../components/Order/Order";

function Home() {
  return (
    <>
      {<Hero />}
      <Delicious />
      <Order />
      <Menu />
      <Info />
    </>
  );
}
export default Home;
