const ErrorMessage = ({ items }) => {
  let emptyMessage = items.length === 0 ? <h3>No food items available.</h3> : null;

  // let emptyMessage2 = foodItems.length === 0 && <h3>No food items available.</h3>;
  return <> {emptyMessage}</>;
};
export default ErrorMessage;
