import React from "react";
import { Table, Badge } from "react-bootstrap";

class OpenInvoicesTable extends React.Component {
  render() {
    return (
      <div className="card mb-4">
        <div className="card-body">
          <div className="card-header">
            <h5 className="card-title">Open Invoices</h5>
          </div>

          <Table responsive striped hover>
            <thead>
              <tr>
                <th>Invoice Id</th>
                <th>Customer</th>
                <th>Ship</th>
                <th>Price</th>
                <th>Stats</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>80020</td>
                <td>Amber Gibs</td>
                <td>Australia</td>
                <td>
                  <strong>$8,070</strong>
                </td>
                <td>
                  <Badge bg="success">Progress</Badge>
                </td>
              </tr>
              <tr>
                <td>80021</td>
                <td>Carl Roland</td>
                <td>Bangladesh</td>
                <td>
                  <strong>$9,070</strong>
                </td>
                <td>
                  <Badge bg="danger">On hold</Badge>
                </td>
              </tr>

              <tr>
                <td>80022</td>
                <td>Amber Gibs</td>
                <td>Brazil</td>
                <td>
                  <strong>$10,070</strong>
                </td>
                <td>
                  <Badge bg="warning">Open</Badge>
                </td>
              </tr>

              <tr>
                <td>80023</td>
                <td>Paul Wilson</td>
                <td>Canada</td>
                <td>
                  <strong>$11,070</strong>
                </td>
                <td>
                  <Badge bg="success">Progress</Badge>
                </td>
              </tr>

              <tr>
                <td>80024</td>
                <td>Lauren Cox</td>
                <td>China</td>
                <td>
                  <strong>$12,070</strong>
                </td>
                <td>
                  <Badge bg="success">Progress</Badge>
                </td>
              </tr>

              <tr>
                <td>80025</td>
                <td>Jessie Barnett</td>
                <td>Germany</td>
                <td>
                  <strong>$15,070</strong>
                </td>
                <td>
                  <Badge bg="success">Progress</Badge>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default OpenInvoicesTable;
