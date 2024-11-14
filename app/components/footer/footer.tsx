import styles from './footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.containerForElements}>
                <h1 className={styles.mainTextInFooter}>Exclusive</h1>
                <Link href='' className={styles.SubscribeTextInFooter}>Subscribe</Link>
                <h2 className={styles.textInFooter}>Get 10% off your first order</h2>
                <div className={styles.emailContainer}>
                    <input type="email" placeholder="Enter your email" className={styles.inputInFooter}></input>
                    <button type="submit" className={styles.emailButton}>
                    </button>
                </div>
            </div>

            <div className={styles.containerForElements}>
                <h1 className={styles.mainTextInFooter}>Support</h1>
                <Link href='' className={styles.textInFooter}>111 Bijoy sarani, Dhaka,<br />  DH 1515, Bangladesh.</Link>
                <h2 className={styles.textInFooter}>exclusive@gmail.com</h2>
                <h2 className={styles.textInFooter}>+88015-88888-9999</h2>
            </div>

            <div className={styles.containerForElements}>
                <h1 className={styles.mainTextInFooter}>Account</h1>
                <Link href='' className={styles.textInFooter}>My Account</Link>
                <div className={styles.containerForLoginAndRegisterInFooter}>            
                    <Link href='' className={styles.textInFooter}>login </Link>
                    <div> / </div>
                    <Link href='' className={styles.textInFooter}> Register</Link>
                </div>
                <Link href='' className={styles.textInFooter}>Cart</Link>
                <Link href='' className={styles.textInFooter}>Wishlist</Link>
                <Link href='' className={styles.textInFooter}>Shop</Link>
            </div>

            <div className={styles.containerForElements}>
                <h1 className={styles.mainTextInFooter}>Quick Links</h1>
                <Link href='' className={styles.textInFooter}>Privacy Policy</Link>
                <Link href='' className={styles.textInFooter}>Terms Of Use</Link>
                <Link href='' className={styles.textInFooter}>FAQ</Link>
                <Link href='' className={styles.textInFooter}>Contact</Link>
            </div>

            <div className={styles.containerForElements}>
                <h1 className={styles.mainTextInFooter}>Download App</h1>
                <h1 className={styles.AdvirstmentTextInFooter}>Save $3 with App New User Only</h1>
                <div className={styles.gridContainer}>
                    <div className={styles.gridItemQRCode}></div>
                    <div className={styles.gridItemAppStore}></div>
                    <div className={styles.gridItemPlayMarket}></div>
                </div>
                <div className={styles.containerSocialMedia}>
                    <div className={styles.facebookLogoInFooter}></div>
                    <div className={styles.twiterLogoInFooter}></div>
                    <div className={styles.instagramLogoInFooter}></div>
                    <div className={styles.inLogoInFooter}></div>
                </div>
            </div>
            
            
            
        </div>
    </footer>
  );
}
