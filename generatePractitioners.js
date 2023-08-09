const faker = require("faker");

// Function to generate fake practitioner information
function generatePractitioners(count) {
  const practitioners = [];

  for (let i = 0; i < count; i++) {
    const practitioner = {
      name: faker.name.findName(),
      specialty: faker.lorem.word(),
      about: faker.lorem.paragraph(),
      contact: {
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
      },
    };
    practitioners.push(practitioner);
  }

  return practitioners;
}

// Generate 5 fake practitioners
const fakePractitioners = generatePractitioners(5);

// Print the generated fake practitioners
console.log(JSON.stringify(fakePractitioners, null, 2));
