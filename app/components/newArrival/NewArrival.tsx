'use client';

import styles from './NewArrival.module.css'
import Image from "next/image";
import Rectangle from "@/public/images/upper-block-rectangle.png"

const NewArrival = () => {
    return (

    <div className={styles.wrapper}>
        <div className={styles.container}>
                <div className={styles.upperblock}>
                    <div className={styles.containerForRectangleText}>
                        <div className={styles.upperblockRectangle}>
                            <Image className={styles.rectangle} src={Rectangle} alt="Rectangle"></Image>
                        </div>
                        <div className={styles.upperblockText}>
                            Featured
                        </div>
                    </div>
                    
                </div>
                <div className={styles.newArrival}>
                        New Arrival
                </div>
            </div>
            </div>
    );
  };
  
  export default NewArrival;
  