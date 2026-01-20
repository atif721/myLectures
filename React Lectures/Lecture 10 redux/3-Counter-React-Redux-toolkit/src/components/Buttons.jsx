import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";

const Buttons = () => {
  const dispatch = useDispatch();

  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };
  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };
  const handlePrivacy = () => {
    dispatch(privacyActions.toggle());
  };
  const handleAdd = () => {
    dispatch(
      counterActions.add({
        num: inputElement.current.value,
      })
    );
    inputElement.current.value = "";
  };
  const handleSubtract = () => {
    dispatch(counterActions.subtract(inputElement.current.value));
    inputElement.current.value = "";
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          onClick={handleIncrement}
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3">
          INCREASE
        </button>
        <button
          onClick={handleDecrement}
          type="button"
          className="btn btn-danger btn-lg px-4">
          DECREASE
        </button>
        <button
          onClick={handlePrivacy}
          type="button"
          className="btn btn-warning btn-lg px-4">
          PRIVACY TOGGLE
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-5">
        <div className="w-100 input-group mb-3 flex justify-content-center">
          <input
            type="text"
            ref={inputElement}
            className="form-control"
            placeholder="Enter Number"
          />
          <button
            onClick={handleAdd}
            className="mx-2 btn btn-info btn-large rounded-1"
            type="button"
            id="button-addon2">
            ADD
          </button>
          <button
            onClick={handleSubtract}
            className="btn btn-danger btn-large"
            type="button"
            id="button-addon2">
            Subtract
          </button>
        </div>
      </div>
    </>
  );
};
export default Buttons;
