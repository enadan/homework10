// TODO: Write code to define and export the Employee class
class Employee {
  constructor(...args) {
    this.name = args[0];
    this.id = args[1];
    this.email = args[2];
  }

  getName() { return this.name; }
  getId() { return this.id; }
  getEmail() { return this.email; }
  getRole() { return "Employee"; }

}

module.exports = Employee;
