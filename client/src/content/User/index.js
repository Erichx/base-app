import React from "react";
import { Alert, Container, Row } from "react-bootstrap";
import DataTable from "react-data-table-component";
import Header from "../../components/Header";


function User() {
  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Year",
      selector: (row) => row.year,
    },
  ];

  const data = [
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
  ];

  return (
    <React.Fragment>
      <Header />
      <Container>
        <Row>
          {/* Alert */}
          <Alert variant="danger" onClose={() => null} dismissible>
            You connection is bad;
          </Alert>
          <DataTable columns={columns} data={data} />
        </Row>
      </Container>
    </React.Fragment>
  );
}
export default User;
