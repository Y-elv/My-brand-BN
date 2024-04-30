import app from "../../../index";
import chaiHttp from "chai-http";
import chai, { expect } from "chai";



chai.use(chaiHttp);
const router = () => chai.request(app);
describe("Admin Test Cases", () => {
  it("Should be able to login", (done) => {
    router()
      .post("/api/v1/login")
      .send({
       
        email: "mugishaelvis456@gmail.com",
        password: "123",
      })
      .end((error, response) => {
        expect(response.body).to.be.a("object");

        done(error);
      });
  });
});
