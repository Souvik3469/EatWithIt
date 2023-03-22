import React from "react";
import MenuCard from "./MenuCard";
import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.png";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const Menu = () => {
//   const dispatch = useDispatch();

  const addToCartHandler = (itemNum) => {
    // switch (itemNum) {
    //   case 1:
    //     dispatch({ type: "cheeseBurgerIncrement" });
    //     dispatch({ type: "calculatePrice" });
    //     toast.success("Added To Cart");
    //     break;
    //   case 2:
    //     dispatch({ type: "vegCheeseBurgerIncrement" });
    //     dispatch({ type: "calculatePrice" });
    //     toast.success("Added To Cart");
    //     break;
    //   case 3:
    //     dispatch({ type: "burgerWithFriesIncrement" });
    //     dispatch({ type: "calculatePrice" });
    //     toast.success("Added To Cart");
    //     break;

    //   default:
    //     dispatch({ type: "cheeseBurgerIncrement" });
    //     dispatch({ type: "calculatePrice" });
    //     toast.success("Added To Cart");
    //     break;
    // }
  };

  return (
    <section id="menu">
      <h1>MENU</h1>

      <div>
        <MenuCard
          itemNum={1}
          burgerSrc={pic1}
          price={200}
          title="Chicken Cheese Burger"
          handler={addToCartHandler}
          delay={0.1}
        />
        <MenuCard
          itemNum={2}
          burgerSrc={pic2}
          price={500}
          title="Drums of Heaven"
          delay={0.5}
          handler={addToCartHandler}
        />
        <MenuCard
          itemNum={3}
          burgerSrc={pic3}
          price={600}
          title="Margaritta chedder Pizza"
          delay={0.8}
          handler={addToCartHandler}
        />
      </div>
    </section>
  );
};

export default Menu;