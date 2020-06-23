import request from "supertest";
import app from "../index";

const server = app.listen();

describe("login route", () => {
  afterAll(() =>{
    server.close();
  });

  it("should login", async () => {
    const response = await request.agent(server)
      .post("/login")
      .send({
        userId: 1,
        title: "test is cool",
      });
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({
      "user": "Dennis",
      "pass": "csdfd",
    });
  });
});
