const User = require("../models/users");

const addTestUser = async () => {
  try {
    const user = new User({ name: "Sam", email: "sam@example.com" });
    await user.save();
    console.log("Sample user inserted");
  } catch (error) {
    console.error("Error adding user:", error.message);
  }
};

module.exports = addTestUser;
