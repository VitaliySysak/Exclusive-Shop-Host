import styles from './Features.module.css';

export const Features = () => {
  const features = [
    {
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
      className: styles.deliveryIcon,
    },
    {
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
      className: styles.customerServiceIcon,
    },
    {
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
      className: styles.moneyBackIcon,
    },
  ];

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureItem}>
            <div className={`${styles.iconContainer} ${feature.className}`}></div>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
