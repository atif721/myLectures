import styles from "./Items.module.css";

const Item = ({ foodItem }) => {
  return (
    <li className={`list-group-item ${styles["item-bg-set"]}`}>
      <span className={`${styles["item-span"]}`}>{foodItem}</span>
    </li>
  );
};

export default Item;
