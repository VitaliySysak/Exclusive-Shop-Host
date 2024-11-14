import styles from './ViewAllButton.module.css'


const ViewAllButton = () => {
    
    return (
        <div className={styles.container}>
            <button className={styles.viewAll}>
                View All Products
            </button>
        </div>
    );
  };
  
  export default ViewAllButton;
  