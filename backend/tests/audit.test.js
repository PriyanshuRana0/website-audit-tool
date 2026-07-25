const request = require("supertest");
const app = require("../app");

describe("Website Audit API", () => {

    test("should return audit report for a valid URL", async () => {

        const res = await request(app)
            .post("/api/audit")
            .send({
                url: "https://example.com"
            });

        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("status");
        expect(res.body).toHaveProperty("title");
        expect(res.body).toHaveProperty("wordCount");
    });

    test("should return 400 for invalid URL", async () => {

        const res = await request(app)
            .post("/api/audit")
            .send({
                url: "abc"
            });

        expect(res.statusCode).toBe(400);
        expect(res.body.error).toBe("Invalid URL.");
    });

    test("should return 400 when URL is missing", async () => {

        const res = await request(app)
            .post("/api/audit")
            .send({});

        expect(res.statusCode).toBe(400);
        expect(res.body.error).toBe("URL is required.");
    });

});