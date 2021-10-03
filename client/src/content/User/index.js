import React from "react";
import { Container, Row, Toast, ToastContainer, Alert } from "react-bootstrap";
import Header from "../../components/Header";
function User() {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Row>
          {/* toast*/}
          <ToastContainer position="bottom-end" className="p-3">
            <Toast>
              <Toast.Header>
                <strong className="me-auto">
                  Your info is showing in the top here :D{" "}
                </strong>
              </Toast.Header>
              <Toast.Body>
                Woohoo, you're reading this text in a Toast!
              </Toast.Body>
            </Toast>
          </ToastContainer>
          {/* Alert */}
          <Alert variant="danger" onClose={() => null} dismissible>
            You connection is bad;
          </Alert>
        </Row>
      </Container>
    </React.Fragment>
  );
}
export default User;
