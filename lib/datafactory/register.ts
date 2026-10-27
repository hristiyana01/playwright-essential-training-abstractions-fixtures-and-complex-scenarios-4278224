import { expect, request } from "@playwright/test" ;

export async function registerUser(email: string, password: string) {
const apiUrl = process.env.API_URL;
const createRequestContext = await request.newContext();
const response = await createRequestContext.post( apiUrl + "/users/register", {
    data: {
  first_name: "Test",
  last_name: "User",
  dob: "2001-01-01",
  phone: "3598865474",
  email: email,
  password: password,
  address: {
    street: "Test Street",
    city: "Test City",
    state: "Vienna",
    country: "AT",
    postal_code: "1010"
  }
}
});

expect(response.status()).toBe(200);
return response.status();
}