const request = require("supertest");
const app = require("../app");
const { sequelize } = require("../models");
const { token } = require("../middleware/authenticateToken");

let your_secret_key;

beforeAll(async () => {
  const users = require("../data/users.json").map((user) => {
    delete user.id;
    user.createdAt = new Date();
    user.updatedAt = new Date();
    return user;
  });
  console.log("users", users);
});

afterAll(async () => {
  await sequelize.close();
});

describe("POST /register", () => {
  it("should return new user", async () => {
    const res = await request(app).post("/auth/register").send({
      username: "1112",
      email: "111112@gmail.com",
      password: "11112",
    });
    console.log("res", res);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("username", "email", "password");
  });
});

describe("POST /login", () => {
  it("should return access token", async () => {
    console.log("token", token);
    const res = await request(app).post("/auth/login").send({
      username: "admin",
      email: "admin1@gmail.com",
      password: "admin1",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "Logged in successfully!");
  });
});
