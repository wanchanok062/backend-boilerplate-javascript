const fs = require('fs');

const generateUsersData = (count) => {
  const users = [];
  for (let i = 0; i < count; i++) {
    users.push({
      user_name: `user${i}`,
      name: `User ${i}`,
      user_email: `user${i}@example.com`,
      create_date: new Date().toISOString()
    });
  }
  return users;
};

const usersData = generateUsersData(100000);

fs.writeFileSync('users.json', JSON.stringify(usersData, null, 2));