function Hello(){

  function fullName () {
    let name = "Atif";
    return `Welcome, ${name}`;
  }

  return <h3>
    Hello this is hello world {fullName()};
  </h3>
}

export default Hello;