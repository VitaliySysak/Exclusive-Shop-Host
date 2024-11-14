import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Gamepad1 from "@/public/images/goods/gamepad_view_1.png";
import Gamepad from "@/public/images/goods/main-gamepad.png";
import Stars from "@/public/images/stars.png";
import BlueCircle from "@/public/images/blue-circle.png";
import RedCircle from "@/public/images/red-circle.png";
import Plus from "@/public/images/plus.png";
import Minus from "@/public/images/minus.png";
import Heart from "@/public/images/heart.png";
import Delivery from "@/public/images/delivery.png";
import Return from "@/public/images/return.png";

interface GoodsPageProps {
  params: {
    id: string;
  };
}

const Good = ({ /*params*/ }: GoodsPageProps) => {
  // const { id } = params;
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.goodName}>
        Account / Gaming / <strong>HavicHV G-92 Gamepad</strong>
      </h2>
      <div className={styles.goodContainer}>
        <div className={styles.goodsColumn}>
          <Image className={styles.smallImages} src={Gamepad1} alt="good" />
          <Image className={styles.smallImages} src={Gamepad1} alt="good" />
          <Image className={styles.smallImages} src={Gamepad1} alt="good" />
          <Image className={styles.smallImages} src={Gamepad1} alt="good" />
        </div>
        <Image className={styles.mainImage} src={Gamepad} alt="good" />
        <div className={styles.goodDescriptionContainer}>
          <h2 className={styles.goodTitle}>Havic HV G-92 Gamepad</h2>
          <div className={styles.goodStats}>
            <Image className={styles.stars} src={Stars} alt="stars" />
            <p>(150 Reviews)</p>
            <p>|</p>
            <p>In Stock</p>
          </div>
          <h2 className={styles.price}>$192.00</h2>
          <p>
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>
          <hr />
          <div className={`${styles.goodConfig} ${styles.goodColor}`}>
            <h3>Colours: </h3>
            <Image className={styles.circles} src={BlueCircle} alt="color" />
            <Image className={styles.circles} src={RedCircle} alt="color" />
          </div>
          <div style={{ maxWidth: "250px" }} className={styles.goodConfig}>
            <h3>Size: </h3>
            <div className={styles.sizeBox}>XS</div>
            <div className={styles.sizeBox}>S</div>
            <div className={styles.sizeBox}>M</div>
            <div className={styles.sizeBox}>L</div>
            <div className={styles.sizeBox}>XL</div>
          </div>
          <div className={styles.goodConfig}>
            <div className={styles.goodQuantityContainer}>
              <button className={styles.removeButton}>
                <Image
                  className={styles.addAndRemoveIcons}
                  src={Minus}
                  alt="minus"
                />
              </button>
              <div className={styles.counter}>1</div>
              <button className={styles.addButton}>
                <Image
                  className={styles.addAndRemoveIcons}
                  src={Plus}
                  alt="plus"
                />
              </button>
            </div>
            <div className={styles.buyNowButton}>Buy Now</div>
            <div className={styles.heartContainer}>
              <Image className={styles.heartIcon} src={Heart} alt="heart" />
            </div>
          </div>
          <div className={styles.deliveryOptionContainer}>
            <div className={styles.deliveryBlock}>
              <Image
                className={styles.deliveryIcons}
                src={Delivery}
                alt="delivery"
              />
              <div>
                <h2 className={styles.deliveryTitle}>Free Delivery</h2>
                <p className={styles.deliveryDescription}>
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className={styles.deliveryBlock}>
              <Image
                className={styles.deliveryIcons}
                src={Return}
                alt="delivery"
              />
              <div>
                <h2 className={styles.deliveryTitle}>Return Delivery</h2>
                <p className={styles.deliveryDescription}>
                  Free 30 Days Delivery Returns. Details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Good;
