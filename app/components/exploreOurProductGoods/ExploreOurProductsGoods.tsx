import styles from "./exploreOurProductGoods.module.css";
import AddToCartButton from "../addToCart/AddToCartButton";

const ExploreOurProductsGoods = () => {
  return (
    <div className={styles.container}>
      <div className={styles.good}>
        <div className={styles.frame}>
          <div className={styles.goodImage}>
            <div className={styles.discount}>-40%</div>
          </div>

          <AddToCartButton />
        </div>
        <div className={styles.description}>
          <div className={styles.goodName}>HAVIT HV-G92 Gamepad</div>
          <div className={styles.goodPrice}>
            <div className={styles.newPrice}>$120</div>
            <div className={styles.oldPrice}>$160</div>
          </div>
          <div className={styles.rating}>stars:88</div>
        </div>
      </div>

      <div className={styles.good}>
        <div className={styles.frame}>
          <div className={styles.goodImage}>
            <div className={styles.discount}>-40%</div>
          </div>

          <AddToCartButton />
        </div>
        <div className={styles.description}>
          <div className={styles.goodName}>AK-900 Wired Keyboard</div>
          <div className={styles.goodPrice}>
            <div className={styles.newPrice}>$960</div>
            <div className={styles.oldPrice}>$160</div>
          </div>
          <div className={styles.rating}>stars:88</div>
        </div>
      </div>

      <div className={styles.good}>
        <div className={styles.frame}>
          <div className={styles.goodImage}>
            <div className={styles.discount}>-40%</div>
          </div>

          <AddToCartButton />
        </div>
        <div className={styles.description}>
          <div className={styles.goodName}>HAVIT HV-G92 Gamepad</div>
          <div className={styles.goodPrice}>
            <div className={styles.newPrice}>$120</div>
            <div className={styles.oldPrice}>$160</div>
          </div>
          <div className={styles.rating}>stars:88</div>
        </div>
      </div>

      <div className={styles.good}>
        <div className={styles.frame}>
          <div className={styles.goodImage}>
            <div className={styles.discount}>-40%</div>
          </div>

          <AddToCartButton />
        </div>
        <div className={styles.description}>
          <div className={styles.goodName}>AK-900 Wired Keyboard</div>
          <div className={styles.goodPrice}>
            <div className={styles.newPrice}>$960</div>
            <div className={styles.oldPrice}>$160</div>
          </div>
          <div className={styles.rating}>stars:88</div>
        </div>
      </div>
    </div>
  );
};

export default ExploreOurProductsGoods;
