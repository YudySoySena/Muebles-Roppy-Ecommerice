import React, { useState, useEffect } from "react";
import Catg from "./Catg";
import ShopCart from "./ShopCart";
import "./style.css";
import axios from "axios";

const Shop = ({ addToCart }) => {
  const [shopItems, setShopItems] = useState([]);

  useEffect(() => {
    const fetchShopItems = async () => {
      try {
        const response = await axios.get("http://localhost:4000/ProductItems");
        setShopItems(response.data);
      } catch (error) {
        console.error("Error fetching shop items:", error);
      }
    };

    fetchShopItems();
  }, []);

  return (
    <>
      <section className='shop background'>
        <div className='container d_flex'>
          <Catg />

          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left row f_flex'>
                <h2>Todos los productos</h2>
              </div>
            </div>
            <div className='product-content grid1'>
              <ShopCart addToCart={addToCart} shopItems={shopItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;