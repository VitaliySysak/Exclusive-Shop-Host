import styles from "./CategoriesGoods.module.css";
import Image from "next/image";
import Phone from "@/public/images/phone-logo-for-categories.png";
import PC from "@/public/images/pc-logo-for-categories.png";
import Camera from "@/public/images/photo-logo-for-categories.png";
import Watch from "@/public/images/watch-logo-for-categories.png";
import HeadPhones from "@/public/images/headphones-logo-for-categories.png";
import Gaming from "@/public/images/gamepad-logo-for-categories.png";

const CategoriesGoods = () => {
  return (
    <div className={styles.container}>
      <div className={styles.good}>
        <div className={styles.frame}>
          <div className={styles.discount}>
            <Image className={styles.phone} src={Phone} alt="Phone" />
            Phones
          </div>
        </div>
      </div>
      <div className={styles.good}>
        <div className={styles.frame}>
          <div className={styles.discount}>
            <Image className={styles.phone} src={PC} alt="PC" />
            Computers
          </div>
        </div>
      </div>
      <div className={styles.good}>
        <div className={styles.frame}>
          <div className={styles.discount}>
            <Image className={styles.phone} src={Watch} alt="Phone" />
            Watches
          </div>
        </div>
      </div>
      <div className={styles.good}>
        <div className={styles.frame}>
          <div className={styles.discount}>
            <Image className={styles.phone} src={Camera} alt="Phone" />
            Cameras
          </div>
        </div>
      </div>
      <div className={styles.good}>
        <div className={styles.frame}>
          <div className={styles.discount}>
            <Image className={styles.phone} src={HeadPhones} alt="Phone" />
            HeadPhones
          </div>
        </div>
      </div>
      <div className={styles.good}>
        <div className={styles.frame}>
          <div className={styles.discount}>
            <Image className={styles.phone} src={Gaming} alt="Phone" />
            Gaming
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesGoods;
