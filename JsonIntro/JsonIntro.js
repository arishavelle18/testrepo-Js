function fetchBooks() {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        console.log(`Title: ${element.title}`);
        console.log(`Author: ${element.author}`);
        console.log(`Title: ${element.publicationYear}`);
      });
    })
    .catch((error) => {
      console.error(`Error fetching JSON data: ${error}`);
    });
}

fetchBooks();

//Json Totstring

const personJSON = {
  name: "karl",
  age: 30,
  email: "arishavelle18@gmail.com",
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA",
  },
  tags: ["JavaScript", "Node.js", "Web Development"],
  isStudent: false,
  workExperience: null,
};

const jsonString = JSON.stringify(personJSON);

console.log(jsonString);

const jsonStrings =
  '{"name": "John Doe", "age": 30, "isStudent": true,"email":"asdadasad","sda":["sds","sds","sdssds"],"address":{"sds":"sds"}}';
console.log(JSON.parse(jsonStrings));

console.log("Start");
setTimeout(function () {
  console.log("delayed message");
}, 500);
console.log("End");

function simulateAsyncOperation(callback) {
  setTimeout(function () {
    callback("data from simulate assync opera");
  }, 2000);
}

console.log("Start");
simulateAsyncOperation(function (data) {
  console.log("Data:", data);
  console.log("End of the program");
});
