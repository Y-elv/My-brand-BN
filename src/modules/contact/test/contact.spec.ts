import app from "../../../index";
import chaiHttp from "chai-http";
import chai, { expect } from "chai";
import sinon from "sinon";
import sendEmail from "../repository/contactRepository";

chai.use(chaiHttp);
const router = () => chai.request(app);

describe("Contact Test Cases", () => {
  it("Should be able to send a message", (done) => {
    router()
      .post("/api/v1/contact")
      .send({
        name: "Elvis",
        email: "testuser@gmail.com",
        message: "Hiiii",
      })
      .end((error, response) => {
        expect(response.body).to.be.a("object");
       

        done(error);
      });
  });

  it("Should n't be able to send a message", (done) => {
    router()
      .post("/api/v1/contact")
      .send({
        name: "Elvis",
        email: "testuser@gmail.com",
        message: "Hiiii",
      })
      .end((error, response) => {
        expect(response.body).to.be.a("object");
        expect(response.body).to.have.property("status");
        expect(response.body).to.have.property("message");
        expect(response.body.status).to.equal(false);
        expect(response.body.message).to.equal(
          "An error occurred while sending the email."
        );

        done(error);
      });
  });
});
