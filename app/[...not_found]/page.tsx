import styles from "./page.module.css";
import Link from "next/link";
import NextBreadcrumb from "../components/NextBreadcrumb/NextBreadcrumb";

const page404 = () => {
  return (
    <>
      <div className={styles.Container}>
        <div className={styles.routerHistoryContainer}>
          <NextBreadcrumb
            homeElement={"Home"}
            separator={<span> / </span>}
            activeClasses="font-bold"
            containerClasses="flex"
            listClasses="hover:underline mx-2"
            capitalizeLinks
          />
        </div>

        <div className={styles.mainTextContainer}>
          <h1>404 Not Found</h1>
          <h2>Your visited page not found. You may go home page.</h2>
          <Link className={styles.homeButton} href="/" passHref>
            Back to home page
          </Link>
        </div>
      </div>
    </>
  );
};

export default page404;
