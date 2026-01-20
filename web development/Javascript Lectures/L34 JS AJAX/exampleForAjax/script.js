function sendRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
      // handle application error
      if (xhr.status >= 400) {
        reject(
          `There was an application error. Status : ${this.status} ${this.statusText}`
        );
      } else {
        resolve(this.response);
      }
    };

    xhr.onerror = function () {
      reject("There was an error");
    };

    xhr.open(method, url);

    xhr.responseType = "json";

    xhr.send(data);
  });

  return promise;
}

function getData() {
  sendRequest("GET", "https://jsonplaceholder.typicode.com/todos/1")
    .then((responseData) => {
      console.log(responseData);
    })
    .catch((err) => {
      console.log(err);
    });
}
function setData() {
  sendRequest(
    "POST",
    "https://jsonplaceholder.typicode.com/posts",
    JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    })
  ).then((responseData) => {
    console.log(responseData);
  });
}

const getButton = document.getElementById("get");
const setButton = document.getElementById("send");

getButton.addEventListener("click", getData);
setButton.addEventListener("click", setData);
