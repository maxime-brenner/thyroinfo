import { faker } from '@faker-js/faker';

const title = faker.lorem.sentence(10);
const body = faker.lorem.paragraphs(3, '\n')

console.log(title, body);