const logical = () => {
  let a = 5;
  if ((a = 10)) {
    //here a==10
    console.log(a);
  } else {
    console.log("num 10 is not defined");
  }
};

export default logical;
