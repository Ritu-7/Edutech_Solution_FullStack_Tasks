use businessDB;

db.createCollection("companies");
db.createCollection("employees");

db.companies.insertOne({
  name: "Tech Solutions",
  industry: "Software",
  location: "Delhi"
});

db.employees.insertOne({
  name: "Ritika",
  email: "ritika@gmail.com",
  position: "Full Stack Developer",
  companyId: ObjectId()
});