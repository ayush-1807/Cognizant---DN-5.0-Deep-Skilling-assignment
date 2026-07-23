import officeImg from "./office.jpg";

function App() {

  const office = {
    name: "Smart Office",
    rent: 55000,
    address: "Bhubaneswar"
  };

  const offices = [
    { name: "Tech Park", rent: 55000, address: "Bhubaneswar" },
    { name: "Business Hub", rent: 75000, address: "Patna" },
    { name: "Corporate Tower", rent: 65000, address: "Delhi" }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Office Space Rental App</h1>

      <img src={officeImg} alt="Office" width="350" />

      <h2>Name : {office.name}</h2>
      <h3 style={{ color: office.rent < 60000 ? "red" : "green" }}>
        Rent : {office.rent}
      </h3>
      <h3>Address : {office.address}</h3>

      <hr />

      <h2>Office List</h2>

      {offices.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <p style={{ color: item.rent < 60000 ? "red" : "green" }}>
            Rent : {item.rent}
          </p>
          <p>Address : {item.address}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;