import app from "../../app";
import request from "supertest";

describe("Test GET /launches", () => {
  test("It should respond with 200 success", async () => {
    const response = await request(app).get("/api/v1/launches").expect(200);
    // expect(response.statusCode).toBe(200);
  });
});
