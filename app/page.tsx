import Features from "./components/features/features";
import FlashSaleGoods from "./components/flashSalesGoods/FlashSaleGoods";
import NewArrival from "./components/newArrival/NewArrival";
import NewArrivalItems from "./components/newArrivalItems/newArrivalItems";
import Categories from "./components/categories/Categories";
import Line from "./components/line/Line";
import Slider from "./components/sliderOnHeader/Slider";
import ViewAllButton from "./components/viewAllButton/ViewAllButton";
import BestSellProducts from "./components/bestSellProducts/bestSellProducts";

function Home() {
  return (
    <div>
      <Slider />
      <FlashSaleGoods />
      <Line />
      <Categories />
      <Line />
      <BestSellProducts />;
      <Line />
      <NewArrival />
      <NewArrivalItems />
      <Features />
      <ViewAllButton />
    </div>
  );
}

export default Home;
