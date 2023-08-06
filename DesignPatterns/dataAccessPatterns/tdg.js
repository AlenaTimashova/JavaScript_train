/*
In JavaScript, a Table Data Gateway is a design pattern that provides an interface to access and manage data in a
 relational database table. It encapsulates the database interactions and provides methods to perform CRUD
 (Create, Read, Update, Delete) operations on the table.
 */
class UserTableGateway {
    constructor() {
        // Initialize necessary resources or connections
    }

    insert(user) {
        // Insert a new user into the database table
        // e.g., execute SQL INSERT statement
        console.log(`Inserting user: ${user}`);
    }

    getById(id) {
        // Retrieve a user from the database table by their ID
        // e.g., execute SQL SELECT statement with WHERE condition
        console.log(`Retrieving user with ID ${id}`);
        // ... query the database and return the result
    }

    update(user) {
        // Update an existing user in the database table
        // e.g., execute SQL UPDATE statement
        console.log(`Updating user: ${user}`);
    }

    delete(id) {
        // Delete a user from the database table by their ID
        // e.g., execute SQL DELETE statement with WHERE condition
        console.log(`Deleting user with ID ${id}`);
    }

    getAll() {
        // Retrieve all users from the database table
        // e.g., execute SQL SELECT statement without any condition
        console.log('Retrieving all users');
        // ... query the database and return the result
    }
}

// Usage
const userGateway = new UserTableGateway();

const newUser = { id: 1, name: 'John Doe' };

userGateway.insert(newUser); // Inserting user: { id: 1, name: 'John Doe' }

const user = userGateway.getById(1); // Retrieving user with ID 1
console.log(user);

user.name = 'Jane Smith';
userGateway.update(user); // Updating user: { id: 1, name: 'Jane Smith' }

userGateway.delete(1); // Deleting user with ID 1

const users = userGateway.getAll(); // Retrieving all users
console.log(users);
