const obj1 = `{
    "name": "Surya",
    "age": 24,
    "phone": 6394846889,
    "address": {
        "city": "Maharajganj",
        "state": "Uttar Pradesh"
    }
}`;

const objResult1 = JSON.parse(obj1);
console.log("Parsed data of JSON -> ", objResult1);

const obj2 = {
  name: "Surya",
  age: 24,
  phone: 6394846889,
  address: {
    city: "Maharajganj",
    state: "Uttar Pradesh",
  },
};

const objResult2 = JSON.stringify(obj2);
console.log("Converted JSON Data = ",objResult2);
