/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { Component, useState } from 'react';
import {
  Row,
  Col,
  Card,
  CardBody,
  ButtonGroup,
  Button,
  DropdownMenu,
  ButtonDropdown,
  DropdownItem,
  DropdownToggle,
  FormGroup,
} from 'reactstrap';
import { activateAuthLayout } from '../../../store/actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { MDBDataTable } from 'mdbreact';

interface Props {}

interface State {
  toggle: boolean;
  activateAuthLayout: any;
  menu: boolean;
}

class DataTable extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      toggle: false,
      activateAuthLayout: false,
      menu: false,
    };
    this.toggle = this.toggle.bind(this);
    // this.dropdownOpen = this.dropdownOpen.bind(this);
  }

  toggle = () => {
    this.setState(prevState => ({
      menu: !prevState.menu,
    }));
  };

  componentDidMount() {
    this.setState({ activateAuthLayout: false });
  }

  render() {
    const data = {
      columns: [
        {
          label: 'Mã TK',
          field: 'name',
          sort: 'asc',
          width: 150,
        },
        {
          label: 'Tên Tài Khoản',
          field: 'position',
          sort: 'asc',
          width: 270,
        },
        {
          label: 'Dư nợ đầu năm',
          field: 'name',
          sort: 'asc',
          width: 200,
        },
        {
          label: 'Dư có đầu năm',
          field: 'name',
          sort: 'asc',
          width: 200,
        },
        {
          label: 'N Tệ',
          field: 'name',
          sort: 'asc',
          width: 200,
        },
        {
          label: 'T Hạn',
          field: 'name',
          sort: 'asc',
          width: 200,
        },
        {
          label: 'Loại',
          field: 'name',
          sort: 'asc',
          width: 200,
        },
        {
          label: 'C Tiết',
          field: 'name',
          sort: 'asc',
          width: 200,
        },
      ],
      rows: [
        {
          name: 'Tiger Nixon',
          position: 'System Architect',
          office: 'Edinburgh',
          age: '61',
          date: '2011/04/25',
          salary: '$320',
        },
        {
          name: 'Garrett Winters',
          position: 'Accountant',
          office: 'Tokyo',
          age: '63',
          date: '2011/07/25',
          salary: '$170',
        },
        {
          name: 'Yuri Berry',
          position: 'Chief Marketing Officer (CMO)',
          office: 'New York',
          age: '40',
          date: '2009/06/25',
          salary: '$675',
        },
        {
          name: 'Caesar Vance',
          position: 'Pre-Sales Support',
          office: 'New York',
          age: '21',
          date: '2011/12/12',
          salary: '$106',
        },
        {
          name: 'Doris Wilder',
          position: 'Sales Assistant',
          office: 'Sidney',
          age: '23',
          date: '2010/09/20',
          salary: '$85',
        },
        {
          name: 'Angelica Ramos',
          position: 'Chief Executive Officer (CEO)',
          office: 'London',
          age: '47',
          date: '2009/10/09',
          salary: '$1',
        },
        {
          name: 'Gavin Joyce',
          position: 'Developer',
          office: 'Edinburgh',
          age: '42',
          date: '2010/12/22',
          salary: '$92',
        },
        {
          name: 'Jennifer Chang',
          position: 'Regional Director',
          office: 'Singapore',
          age: '28',
          date: '2010/11/14',
          salary: '$357',
        },
        {
          name: 'Brenden Wagner',
          position: 'Software Engineer',
          office: 'San Francisco',
          age: '28',
          date: '2011/06/07',
          salary: '$206',
        },
        {
          name: 'Fiona Green',
          position: 'Chief Operating Officer (COO)',
          office: 'San Francisco',
          age: '48',
          date: '2010/03/11',
          salary: '$850',
        },

        {
          name: 'Zenaida Frank',
          position: 'Software Engineer',
          office: 'New York',
          age: '63',
          date: '2010/01/04',
          salary: '$125',
        },
        {
          name: 'Zorita Serrano',
          position: 'Software Engineer',
          office: 'San Francisco',
          age: '56',
          date: '2012/06/01',
          salary: '$115',
        },
      ],
    };

    return (
      <>
        <React.Fragment>
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <h4 className="card_title">Declaration List of Accounts</h4>
                  <div className="datatable_container">
                    <MDBDataTable responsive bordered data={data} />
                  </div>

                  <form>
                    <fieldset>
                      <div className="row">
                        <div className="stretched_card col-lg-10">
                          <Col>
                            {' '}
                            <input type="text" className="form-control" placeholder="Mã TK" />
                          </Col>

                          <Col className="col-lg-6">
                            {' '}
                            <input type="text" className="form-control" placeholder="Tên TK" />
                          </Col>

                          <Col>
                            {' '}
                            <input type="text" className="form-control" placeholder="Số Dư Nợ Đầu Năm "/>
                          </Col>

                          <Col>
                            {' '}
                            <input type="text" className="form-control" placeholder="Số Dư Có Đầu Năm"/>
                          </Col>
                        </div>

                        <div className="stretched_card d-block-mob col-lg-2">
                          <Row>
                            <Col>
                              <h5>
                                <label>Phân Loại thời hạn</label>
                              </h5>
                            </Col>
                          </Row>
                        </div>
                      </div>

                      <div className="row">
                        <div className="stretched_card col-lg-10">
                          <Col className="col-lg-8">
                            {' '}
                            <div className="checkbox">
                              <h4>
                                <h5>
                                  <input type="checkbox" /> Có ghi chép số tiền
                                  ngoại tệ cho tài khoản này{' '}
                                </h5>
                              </h4>
                            </div>
                          </Col>

                          <Col>
                            {' '}
                            <input type="text" className="form-control" placeholder="Số Dư nợ nguyên tệ đầu năm" />
                          </Col>

                          <Col>
                            {' '}
                            <input type="text" className="form-control" placeholder="Số Dư có nguyên tệ đầu năm"/>
                          </Col>
                        </div>

                        <div className="stretched_card d-block-mob col-lg-2">
                          <Row>
                            <Col className="form-inline">
                              {' '}
                              <label>N/D/K</label>
                              <input type="text" className="form-control" />
                            </Col>
                          </Row>
                        </div>
                      </div>

                      <div className="cardbody">
                        <h5 className="card_title">
                          Phân Loại Tính chất của Tài Khoản: Bạn cần khai báo ấn
                          định trước khi mở Chi Tiết Câp 1 hoặc nhập Phát Sinh
                          cho Tài Khoản này
                        </h5>
                        <div className="row">
                          <div className="stretched_card col-lg-6">
                            <Col className="form-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                              />
                              <h5>
                                {' '}
                                1.Tài Khoản Thông Thường chỉ chép số phát sinh
                                theo tiền{' '}
                              </h5>
                            </Col>
                          </div>

                          <div className="stretched_card col-lg-6">
                            <Col className="form-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                              />
                              <h5>
                                3. Tồn Kho: ghi chép số lượng nhập xuất tồn,
                                theo dõi cho từng kho hàng
                              </h5>
                            </Col>
                          </div>
                        </div>

                        <div className="row">
                          <div className="stretched_card col-lg-6">
                            <Col className="form-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                              />
                              <h5>
                                {' '}
                                2. Khách Hàng ghi sắn thông tin Khách Hàng để
                                nhập liệu nhanh
                              </h5>
                            </Col>
                          </div>

                          <div className="stretched_card col-lg-6">
                            <Col className="form-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                              />
                              <h5>
                                4. Nhập Xuất: Ghi chép số lượng nhập xuất tồn,
                                nhưng không có kho hàng
                              </h5>
                            </Col>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <div className="reply_btn pull-right mb-mob-3">
            <Button
              type="button"
              color="primary"
              className="btn-fixed-w mb-3 mr-2"
            >
              <i className="ion-ios-conform"></i>
              Add-More
            </Button>
            <Button
              type="button"
              color="danger"
              className="btn-fixed-w mb-3 mr-2"
            >
              <i className="ion-ios-trash"></i>
              End
            </Button>
          </div>
        </React.Fragment>
      </>
    );
  }
}

export default DataTable;
