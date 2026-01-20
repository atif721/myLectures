import styles from "./Items.module.css";

const Item = ({ foodItem }) => {
  const handleBuyItem = () => {
    console.log(`${foodItem} being bought`);
  };
  return (
    <li className={`list-group-item ${styles["item-bg-set"]}`}>
      <span className={`${styles["item-span"]}`}>{foodItem}</span>
      <button
        className={`${styles.buy_button} btn btn-info`}
        onClick={handleBuyItem}>
        Buy
      </button>
    </li>
  );
};

export default Item;

// method-2
/*
  const handleBuyItem = (foodItem) => {
    console.log(`${foodItem} being bought`);
  };
  return (
    <li className={`list-group-item ${styles["item-bg-set"]}`}>
      <span className={`${styles["item-span"]}`}>{foodItem}</span>
      <button
        className={`${styles.buy_button} btn btn-info`}
        onClick={() => {
          handleBuyItem(foodItem);
        }}>
        Buy
      </button>
    </li>
  );
*/

//checking event
/*
  const handleBuyItem = (event) => {
  console.log(event);
    console.log(`${foodItem} being bought`);
  };
  return (
    <li className={`list-group-item ${styles["item-bg-set"]}`}>
      <span className={`${styles["item-span"]}`}>{foodItem}</span>
      <button
        className={`${styles.buy_button} btn btn-info`}
        onClick={(event) => {
          handleBuyItem(event)
        }}>
        Buy
      </button>
    </li>
  );
*/
