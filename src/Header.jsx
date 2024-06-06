import { useContext, useState } from "react";
import Moon from "./assets/icons/moon.svg";
import Logo from "./assets/logo.svg";
import Ring from "./assets/ring.svg";
import ShoppingCart from "./assets/shopping-cart.svg";
import CartDetails from "./cine/CartDetails";
import { MovieContext } from "./context";
export default function Header() {

  const [showCart, setShowCart] = useState(false);

  // context using

  const { cartData } = useContext(MovieContext);
  console.log(cartData);

  // function implementation

  const handleCartShow = () => {
    setShowCart(true);
  }
  return (
    <header>
      {
        showCart && <CartDetails onClose={() => setShowCart(false)} />
      }
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={Logo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Moon} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={handleCartShow}
            >
              <img
                src={ShoppingCart}
                width="24"
                height="24"
                alt="" />
              {
                cartData.length > 0 && <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center">{cartData.length}</span>
              }
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
