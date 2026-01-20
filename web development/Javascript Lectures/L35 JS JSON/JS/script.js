// syntax for JSON

const person =
  '{"name": "Atif", "age": 20, "dept": "CSE", "skills": ["C","C++","JavaScript"]}';

// JSON parse

// console.log(person);
const parse = JSON.parse(person);
// console.log(parse);

const jsonString = '{"name":"Atif","birth":"2004-12-21","city":"Rajshahi"}';

// console.log(jsonString);

const myObj = JSON.parse(jsonString, function (key, value) {
  if (key === "birth") {
    return new Date(value);
  }
  return value;
});

// console.log(myObj);
const myObj2 = JSON.stringify(myObj);
// console.log(myObj2);

// JSON Server example

async function fetchData() {
  const response = await fetch("/L35 JS JSON/data.txt");
  //   const data = await response.json();
  const textData = await response.text();
  const data = JSON.parse(textData);
  console.log(data);
}

fetchData();

// JSON HTML dynamic table
async function change_mysSelect(sel) {
  const dbParam = JSON.stringify({ table: sel, limit: 20 });

  const response = await fetch(
    "https://www.w3schools.com/js/json_demo_html_table.php",
    {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      body: "x=" + dbParam,
    }
  );
}
