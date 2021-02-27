/* eslint-disable react/require-render-return */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Form, FormGroup, Label } from 'reactstrap';
import { activateAuthLayout } from '../../../store/actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { MDBDataTable } from 'mdbreact';
import { DataType } from 'app/containers/InitialDeclaration/types';

interface Props {}

interface State {
  numberOfYear: number;
  isGoing: boolean;
  activateAuthLayout: boolean;
}

class FormBasic extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfYear: 2021,
      activateAuthLayout: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = e => {
    const target = e.target;

    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    return this.setState({ ...this.state, [name]: value });
  };

  componentDidMount() {
    this.setState({ activateAuthLayout: false });
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col md="12">
            <Card>
              <CardBody>
                <h4 className="card_title">Starting Year</h4>
                <Form>
                  <form className="form-inline">
                    <div className="form-group">
                      <label>
                        Year:
                        <input
                          name="numberOfYear"
                          type="number" // tăng số bằng mũi tên
                          value={this.state.numberOfYear}
                          onChange={this.handleInputChange}
                          className="form-control mx-sm-3"
                        />
                      </label>

                      <button
                        type="button"
                        className="btn-fixed-w mr-2 btn btn-primary"
                      >
                        Xác Nhận
                      </button>

                      <button
                        type="button"
                        className="btn-fixed-w mr-2 btn btn-primary"
                      >
                        Hủy Bỏ
                      </button>
                    </div>
                  </form>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default withRouter<any, any>(
  connect(null, { activateAuthLayout })(FormBasic),
);
