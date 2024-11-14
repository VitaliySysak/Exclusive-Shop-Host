import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import gamepad from "@/public/images/gamepad.png";
import NextBreadcrumb from "../components/NextBreadcrumb/NextBreadcrumb";

const Cart = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.switcher}>
          <NextBreadcrumb homeElement={"Home"} separator={<span> / </span>} activeClasses="font-bold" containerClasses="flex" listClasses="hover:underline mx-2"
            capitalizeLinks
          />
        </div>
        <div className={styles.productInfoContainer}>
          <div className={styles.productInfoHeader}>
            <div className={styles.productInfoHeaderText}>Product</div>
            <div className={styles.productInfoHeaderText}>Price</div>
            <div className={styles.productInfoHeaderText}>Quantity</div>
            <div className={styles.productInfoHeaderText}>Subtotal</div>
          </div>
        </div>
        <div className={styles.productsInCart}>
          <div className={styles.productsInCartHeader}>
            <div className={styles.productInfoHeaderText}>
              <div className={styles.cartImageContainer}>
                <Image className={styles.cartImage} src={"../../public/images/gamepad.png"} alt="gamepad" />
              </div>
              <div className={styles.cartGoodName}>H1 Gamepad</div>
            </div>
            <div className={styles.productInfoHeaderText}>$650</div>
            <div className={styles.productInfoHeaderText}>
              <input type="number" className={styles.inputForQuantity} defaultValue="1" />
            </div>
            <div className={styles.productInfoHeaderText}>$650</div>
          </div>
        </div>
        <div className={styles.productsInCart}>
          <div className={styles.productsInCartHeader}>
            <div className={styles.productInfoHeaderText}>
              <div className={styles.cartImageContainer}>
                <Image className={styles.cartImage} src={gamepad} alt="gamepad" />
              </div>
              <div className={styles.cartGoodName}>H1 Gamepad</div>
            </div>
            <div className={styles.productInfoHeaderText}>$550</div>
            <div className={styles.productInfoHeaderText}>
              <input type="number" className={styles.inputForQuantity} defaultValue="1" />
            </div>
            <div className={styles.productInfoHeaderText}>$1100</div>
          </div>
        </div>
        <div className={styles.twoButtons}>
          <div>
            <button className={styles.ReturnToShop}>Return To Shop</button>
          </div>
          <div>
            <button className={styles.UpdateCart}>Update Cart</button>
          </div>
        </div>
        <div className={styles.couponAndCartTotalContainer}>
          <div className={styles.couponCodeInputAndButton}>
            <input type="text" placeholder="Coupon Code" className={styles.couponCodeInput} />
            <button className={styles.applyCouponBtn}>Apply Coupon</button>
          </div>
          <div className={styles.cartTotalBox}>
            <div className={styles.carTotalText}>Cart Total</div>
            <div className={styles.NameAndValue}>
              <div>Subtotal:</div>
              <div>$1750</div>
            </div>
            <hr className={styles.line} />
            <div className={styles.NameAndValue}>
              <div>Shipping:</div>
              <div>Free</div>
            </div>
            <hr className={styles.line} />
            <div className={styles.NameAndValue}>
              <div>Total:</div>
              <div>$1750</div>
            </div>
            <button className={styles.ProceesToCheckoutBtn}>Procees to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
