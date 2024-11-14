import styles from "./Header.module.css";
import Image from "next/image";
import Vector from "@/public/images/vector.png";
import Heart from "@/public/images/heart.png";
import Cart from "@/public/images/cart.png";
import Search from "@/public/images/search.png";
import AccountImageAcc from "@/public/images/account-image.png";
import PackgImageAcc from "@/public/images/packg-image-acc.png";
import CancelImageAcc from "@/public/images/cancel-image-acc.png";
import StarImageAcc from "@/public/images/star-image-acc.png";
import LogoutImageAcc from "@/public/images/log-out-image-acc.png";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className={styles.bar}>
        <div className={styles.text}>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link className={styles.shopNow} href="">
            Shop Now{" "}
          </Link>
        </div>
        <div></div>
        <div className={styles.languageSelector}>
          <div className={styles.language}>English</div>
          <Image className={styles.vector} src={Vector} alt="vector"></Image>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.navBarContainer}>
          <div className={styles.brandName}>Exclusive</div>
          <div className={styles.nuvButonsContainer}>
            <Link href="/" className={styles.nuvButons}>
              Home
            </Link>
            <Link href="" className={styles.nuvButons}>
              About
            </Link>
            <Link href="" className={styles.nuvButons}>
              Contact
            </Link>
            <div className={styles.dropdownAccount}>
              <button className={styles.mainMenuAccButton}>Account</button>
              <div className={styles.accDropdownChild}>
                <div className={styles.containerForMenu}>
                  <Image src={AccountImageAcc} alt="Your Account" />
                  <Link href="">Manage my account</Link>
                </div>
                <div className={styles.containerForMenu}>
                  <Image src={PackgImageAcc} alt="Your order" />
                  <Link href="/dwdw">My order</Link>
                </div>
                <div className={styles.containerForMenu}>
                  <Image src={CancelImageAcc} alt="Your cancellations" />
                  <Link href="">My cancellations</Link>
                </div>
                <div className={styles.containerForMenu}>
                  <Image src={StarImageAcc} alt="Your reviews" />
                  <Link href="">My reviews</Link>
                </div>
                <div className={styles.containerForMenu}>
                  <Image src={LogoutImageAcc} alt="Log out" />
                  <Link href="">Log out</Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.flex}>
            <div className={styles.inputContainer}>
              <input className={styles.inputSearhFooter} type="text" placeholder="What are you looking for?" />
              <button type="submit" className={styles.emailButton}>
                <Image className={`${styles.icons} ${styles.search}`} src={Search} alt="Search" />
              </button>
            </div>
            <Image className={styles.icons} src={Heart} alt="heart"></Image>
            <Link href="/cart">
              <Image className={styles.icons} src={Cart} alt="cart"></Image>
            </Link>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Header;
