let list = document.querySelector(".list");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => fn(data));

function fn(data) {
  data.map((item) => {
    let userInfo = document.createElement("li");
    userInfo.innerHTML = `
    <li>
    <h2><span>Name</span>: ${item.name}</h2>
    <h3><span>Address</span>: ${item.address.street} </h3>
    <h4><span>Email</span>: ${item.email} </h4>
    <h4><span>Number</span>: ${item.phone}<h4>
    </li>
    
    `;
    list.appendChild(userInfo);
    console.log(item);
  });
}
