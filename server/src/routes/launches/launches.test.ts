import app from "../../app";
import request from "supertest";

describe("Test GET /launches", () => {
  test("It should respond with 200 success", async () => {
    const response = await request(app)
      .get("/api/v1/launches")
      .expect("Content-Type", /json/)
      .expect(200);
    // expect(response.statusCode).toBe(200);
  });
});

describe("Test POST /launches", () => {
  test("It should respond with 201 created", async () => {
    const newLaunch = {
      mission: "Test Mission",
      rocket: "Test Rocket",
      target: "Kepler-442 b",
      launchDate: "January 4, 2028",
    };

    const response = await request(app)
      .post("/api/v1/launches")
      .send(newLaunch)
      .expect("Content-Type", /json/)
      .expect(201);

    const requestDate = new Date(newLaunch.launchDate).valueOf();
    const responseDate = new Date(response.body.data.launchDate).valueOf();
    expect(responseDate).toBe(requestDate);

    expect(response.body.data).toMatchObject({
      mission: "Test Mission",
      rocket: "Test Rocket",
      target: "Kepler-442 b",
    });
  });

  test("It should catch missing required properties", async () => {
    const newLaunch = {
      mission: "Test Mission",
      rocket: "Test Rocket",
      target: "Kepler-442 b",
    };

    const response = await request(app)
      .post("/api/v1/launches")
      .send(newLaunch)
      .expect(400);
  });

  test("It should catch invalid launch date", async () => {
    const newLaunch = {
      mission: "Test Mission",
      rocket: "Test Rocket",
      target: "Kepler-442 b",
      launchDate: "Invalid Date",
    };

    const response = await request(app)
      .post("/api/v1/launches")
      .send(newLaunch)
      .expect(400);
  });
});
