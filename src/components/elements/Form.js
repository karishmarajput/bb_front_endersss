import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./form.css";
(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init("jm5ORCma7dOyiC0Mv");
})();
function submitForm(e) {
  e.preventDefault();
  console.log(e);
  let formItems = document.getElementsByClassName("form-control");
  console.log(formItems[0].value);
  let name = formItems[0].value;
  let number = formItems[2].value;
  let email = formItems[3].value;
  let checkBox = document.getElementById("check-box-form");
  console.log(checkBox.checked);
  if (name === "" || email === "" || number === "") {
    alert("Please fill all the fields");
    return;
  }
  console.log(number)
  if (checkBox.checked) {
    
    emailjs.send("service_l7dzw0j","template_h9ej51e",{
      name: name,
      email: email,
      }).then(
      function () {
        console.log("SUCCESS!");
        alert("Thank you! we will get back to you soon");
      },
      function (error) {
        console.log("FAILED...", error);
        alert("Failed " + error.text);
      }
    );
  }
}
function BasicExample() {
  return (
    <div class="form-div" id="form-div">
      <Form>
        <h1>Apply Soon</h1>
        <h4>Experience growth like never before.</h4>
        <div className="form-row">
          <Form.Group className="mb-3 col-md-5" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control required type="text" placeholder="Enter Name" />
          </Form.Group>
          <Form.Group className="mb-3 col-md-6" controlId="formBasicEmail">
            <Form.Label>Birth Date</Form.Label>
            <Form.Control type="date" placeholder="Enter your Birth Date" />
          </Form.Group>
        </div>
        <div className="form-row">
          <Form.Group className="mb-3 col-md-5" controlId="formBasicEmail">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Mobile number"
            />
          </Form.Group>

          <Form.Group className="mb-3 col-md-6" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        </div>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter Address" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            id="check-box-form"
            label="Send me confirmation mail"
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={submitForm}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default BasicExample;
