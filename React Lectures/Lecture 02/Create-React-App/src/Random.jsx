function Random(){

  let number = Math.round(Math.random() * 100);

  return <h1 className="bg-amber-400 w-50 h-10 items-center my-5 mx-auto p-2">
    Random number is : {number}
  </h1>
}

export default Random;