fetch("https://docs.google.com/spreadsheets/d/1Sdmr60rcZeBCa2ofswUr9mxIreIj71W9HYM1RRhvfMM/export?format=csv&gid=1698922910")
  .then(res => res.text())
  .then(csv => {
    console.log(csv);
  });
