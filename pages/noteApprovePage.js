class ApprovePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  handleCloseModal() {
    // console.log(`closeModal`, this.el);
    $(this.el).hide();
  }

  handleOpenModal() {
    // console.log(`closeModal`, this.el);
    $(this.el).show();
  }

  render() {
    return (
      <div>
        <button onClick={this.handleOpenModal}>M</button>
        <div
          className="modal"
          role="dialog"
          name="WaterApproveModal"
          style={{ overflow: "auto" }}
          ref={(el) => (this.el = el)}
        >
          <div className="modal-dialog modal-xl modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">หนังสืออนุญาตใช้น้ำ ผ.ย.32</h5>
                <button
                  type="button"
                  className="close m-b-0 m-t-0"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={this.handleCloseModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body">
                <div className="container">
                  <label className="mb-4 label label-inverse-info-border setstat">
                    สถานะ ::{" "}
                    <span id="setstatus" className="text-warning">
                      <b>...</b>
                    </span>
                  </label>
                  <label className="mb-4 label label-inverse-info-border setstat">
                    เหตุผล ::{" "}
                    <span id="setremark" className="text-warning">
                      <b>...</b>
                    </span>
                  </label>{" "}
                  {/*
                    <!-- Nav tabs -->*/}
                  <ul className="nav nav-tabs md-tabs" role="tablist" level="0">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#tab_approve_detail"
                        role="tab"
                        sort="1"
                      >
                        รายละเอียด
                      </a>
                      <div className="slide"></div>
                    </li>

                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#tab_approve_attach"
                        role="tab"
                        sort="2"
                      >
                        เอกสารแนบ
                      </a>
                      <div className="slide"></div>
                    </li>
                  </ul>
                  {/*
                    <!-- Tab panes -->

                    <!-- Tab panes -->*/}
                  <div className="tab-content card-block">
                    <div
                      className="tab-pane active"
                      name="tab_approve_detail"
                      id="tab_approve_detail"
                      role="tabpanel"
                      level="0"
                    >
                      <div className="form-row btn-action">
                        {" "}
                        {/*
                                <!--  m-b-15 -->*/}
                        <div className="form-group col-lg-12 col-md-12 col-sm-12">
                          <div className="btn-group-modal col-lg-12 col-md-12 col-sm-12">
                            {/*
                                        <?php if ($user_type !== '1') { ?>
                                        <button type="button" name="btn-edit" className="btn btn-warning col-lg-2 col-md-3 col-sm-12">
                                            <i className="fas fa-check-circle"></i>แก้ไข
                                        </button>

                                        <button type="button" name="btn-confirm" className="btn btn-info col-lg-2 col-md-3 col-sm-12">
                                            <i className="fas fa-check-circle"></i>ยืนยันข้อมูล
                                        </button>

                                        <?php if ($type == 3) { ?>
                                        <button type="button" name="btn-signature" className="btn btn-success col-lg-3 col-md-5 col-sm-12">
                                                <i className="fas fa-file-signature"></i>ลงนามหนังสืออนุญาต
                                            </button>
                                        <?php } ?>

                                        <button type="button" name="btn-renew" className="btn btn-primary col-lg-2 col-md-3 col-sm-12">
                                            <i className="fas fa-check-circle"></i>ต่อสัญญา
                                        </button>

                                        <button type="button" name="btn-delete" className="btn btn-danger col-lg-2 col-md-3 col-sm-12">
                                            <i className="fas fa-trash-alt"></i>ยกเลิก
                                        </button>
                                        <?php } ?> */}
                          </div>
                        </div>
                      </div>

                      <form name="frmAdd0">
                        <div className="form-row">
                          <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                            <label for="document_no">เลขที่หนังสืออนุญาต</label>
                            <input
                              type="text"
                              className="form-control"
                              name="document_no"
                              placeholder="เลขที่หนังสืออนุญาต"
                              inp--disabled="true"
                              disabled="true"
                            />
                          </div>
                          <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                            <label for="renew_contract">
                              ต่อสัญญา ครั้งที่
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="renew_contract"
                              placeholder="ต่อสัญญา ครั้งที่"
                              inp--disabled="true"
                              disabled="true"
                            />
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                            <label for="actual_approve_year">
                              จำนวนปีที่อนุญาต&nbsp;
                              <span style={{ color: "red" }}>(*)</span>
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              name="actual_approve_year"
                              placeholder="จำนวนปีที่อนุญาต"
                              min="1"
                              max="5"
                            />
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                            <label for="approve_date">
                              วันที่อนุญาต&nbsp;
                              <span style={{ color: "red" }}>(*)</span>
                            </label>
                            <input
                              type="text"
                              className="form-control datepicker"
                              name="approve_date"
                              placeholder="วันที่อนุญาต"
                              autocomplete="off"
                            />
                          </div>
                          <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                            <label for="approve_expire_date">
                              วันที่หมดสัญญา&nbsp;
                              <span style={{ color: "red" }}>(*)</span>
                            </label>
                            <input
                              type="text"
                              className="form-control datepicker"
                              name="approve_expire_date"
                              placeholder="วันที่หมดสัญญา"
                              autocomplete="off"
                            />
                          </div>
                        </div>
                      </form>

                      {/* <div className="form-row">
                        <div className="form-group col-md-12">
                          <ul className="nav nav-tabs md-tabs" level="1">
                            <li className="nav-item">
                              <a
                                className="nav-link active"
                                data-toggle="tab"
                                href="#tab_approve_user"
                                role="tab"
                                level="1"
                                sort="0"
                              >
                                ข้อมูลผู้ใช้น้ำ
                              </a>
                              <div className="slide"></div>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                data-toggle="tab"
                                href="#tab_approve_project"
                                role="tab"
                                level="1"
                                sort="1"
                              >
                                ข้อมูลโครงการ
                              </a>
                              <div className="slide"></div>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                data-toggle="tab"
                                href="#tab_approve_land"
                                role="tab"
                                level="1"
                                sort="2"
                              >
                                ข้อมูลที่ดิน
                              </a>
                              <div className="slide"></div>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link approve"
                                data-toggle="tab"
                                href="#tab_approve_plan"
                                role="tab"
                                level="1"
                                sort="3"
                              >
                                แบบแปลนและแผนผัง
                              </a>
                              <div className="slide"></div>
                            </li>
                          </ul>
                        </div>
                      </div> */}

                      <div className="form-row">
                        <div className="form-group col-md-12">
                          <div className="tab-content" name="myTabContent">
                            <div
                              className="tab-pane fade show active m-t-25"
                              name="tab_approve_user"
                              id="tab_approve_user"
                              role="tabpanel"
                              aria-labelledby="home-tab"
                              level="2"
                            >
                              <div className="form-row">
                                <div className="form-group col-md-12">
                                  <ul
                                    className="nav nav-tabs md-tabs"
                                    level="2"
                                  >
                                    <li className="nav-item">
                                      <a
                                        className="nav-link active"
                                        data-toggle="tab"
                                        href="#tab_approve_person"
                                        role="tab"
                                        level="2"
                                        sort="0"
                                      >
                                        ข้อมูลทั่วไป
                                      </a>
                                      <div className="slide"></div>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        className="nav-link"
                                        data-toggle="tab"
                                        href="#tab_approve_pipe"
                                        role="tab"
                                        level="2"
                                        sort="1"
                                      >
                                        วางท่อส่งน้ำ
                                      </a>
                                      <div className="slide"></div>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        className="nav-link"
                                        data-toggle="tab"
                                        href="#tab_approve_authorize"
                                        role="tab"
                                        level="2"
                                        sort="2"
                                      >
                                        มอบอำนาจ
                                      </a>
                                      <div className="slide"></div>
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div className="tab-content card-block">
                                <div
                                  className="tab-pane fade active show"
                                  name="tab_approve_person"
                                  id="tab_approve_person"
                                  role="tabpanel"
                                  level="2"
                                >
                                  <form name="frmAdd1">
                                    <div
                                      className="form-row"
                                      style={{
                                        fontSize: "13pt",
                                        color: "gray"
                                      }}
                                    >
                                      <strong className=" d-block mb-2 ml-1 my-auto">
                                        รายละเอียดของผู้ขอใช้น้ำ
                                      </strong>
                                    </div>
                                    <div className="progress progress-sm mb-4  mt-2">
                                      <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "20%" }}
                                        aria-valuenow="20"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>

                                    <div className="form-row">
                                      <div className="form-group col-xl-6 col-lg-6 col-md-8 sm-12 m-b-15">
                                        <label
                                          for="name"
                                          className="control-label"
                                        >
                                          ชื่อผู้ใช้น้ำ&nbsp;
                                          <span style={{ color: "red" }}>
                                            (*)
                                          </span>
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          name="name"
                                          placeholder="ชื่อผู้ใช้น้ำ"
                                          value=""
                                        />
                                      </div>
                                      <div className="form-group col-xl-3 col-lg-3 col-md-6 sm-12 m-b-15">
                                        <label
                                          for="user_type"
                                          className="control-label"
                                        >
                                          ประเภทผู้ใช้น้ำ&nbsp;
                                          <span style={{ color: "red" }}>
                                            (*)
                                          </span>
                                        </label>
                                        <select
                                          name="user_type"
                                          className="form-control select2"
                                        >
                                          <option value="">
                                            โปรดระบุประเภท
                                          </option>
                                          <option value="1">ส่วนราชการ</option>
                                          <option value="2">รัฐวิสาหกิจ</option>
                                          <option value="3">บุคคลธรรมดา</option>
                                          <option value="4">นิติบุคคล</option>
                                        </select>
                                      </div>
                                    </div>

                                    <div className="form-row">
                                      <div className="form-group col-xl-6 col-lg-6 col-md-8 sm-12 m-b-15">
                                        <label
                                          for="company_name"
                                          className="control-label"
                                        >
                                          ชื่อบริษัทจดทะเบียน
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          name="company_name"
                                          placeholder="ชื่อบริษัทจดทะเบียน"
                                          value=""
                                        />
                                      </div>
                                      {/*
                                                            <!-- <div className="form-group col-xl-6 col-lg-6 col-md-8 sm-12 m-b-15">
                                                                <label for="company_no" className="control-label">ออกโดยกระทรวงพาณิชย์</label>
                                                                <input type="text" className="form-control" name="company_no" placeholder="ออกโดยกระทรวงพาณิชย์" value="">
                                                            </div> -->*/}
                                      <div className="form-group col-xl-3 col-lg-3 col-md-6 sm-12 m-b-15">
                                        <label
                                          for="store_income"
                                          className="control-label"
                                        >
                                          จัดเก็บรายได้&nbsp;
                                          <span style={{ color: "red" }}>
                                            (*)
                                          </span>
                                        </label>{" "}
                                        {/*
                                                                <!-- <input type="text" className="form-control" name="store_income_name" placeholder="จัดเก็บรายได้" value=""> -->*/}
                                        <select
                                          name="store_income"
                                          className="form-control select2"
                                        >
                                          {/* <!-- <option value="">โปรดระบุ</option> --> */}
                                          <option value="true">
                                            จัดเก็บรายได้
                                          </option>
                                          {/* <!-- <option value="false">ไม่จัดเก็บรายได้</option> --> */}
                                        </select>
                                      </div>
                                      <div className="form-group col-xl-3 col-lg-3 col-md-6 sm-12 m-b-15">
                                        <label
                                          for="unit_price"
                                          className="control-label"
                                        >
                                          ราคาต่อหน่วย&nbsp;
                                          <span style={{ color: "red" }}>
                                            (*)
                                          </span>
                                        </label>{" "}
                                        {/*
                                                                <!-- <input type="text" className="form-control" name="unit_price" placeholder="ราคาต่อหน่วย" value=""> -->*/}
                                        <select
                                          name="unit_price"
                                          className="form-control select2"
                                        >
                                          <option value="">โปรดระบุ</option>
                                          <option value="0.5000">
                                            0.50 บาท
                                          </option>
                                          <option value="0.0246">
                                            0.0246 บาท
                                          </option>
                                          <option value="0.0064">
                                            0.0064 บาท
                                          </option>
                                        </select>
                                      </div>
                                    </div>

                                    <div className="form-row">
                                      <div className="form-group col-xl-2 col-lg-2 col-md-6 sm-12 m-b-15">
                                        <label
                                          for="address_no"
                                          className="control-label"
                                        >
                                          เลขที่
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          name="address_no"
                                          placeholder="เลขที่"
                                          value=""
                                        />
                                      </div>
                                      <div className="form-group col-xl-4 col-lg-4 col-md-6 sm-12 m-b-15">
                                        <label
                                          for="soi"
                                          className="control-label"
                                        >
                                          ซอย
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          name="soi"
                                          placeholder="ซอย"
                                          value=""
                                        />
                                      </div>
                                      <div className="form-group col-xl-2 col-lg-2 col-md-6 sm-12 m-b-15">
                                        <label
                                          for="village_no"
                                          className="control-label"
                                        >
                                          หมู่ที่
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          name="village_no"
                                          placeholder="หมู่ที่"
                                          value=""
                                        />
                                      </div>
                                      <div className="form-group col-xl-4 col-lg-4 col-md-6 sm-12 m-b-15">
                                        <label
                                          for="road"
                                          className="control-label"
                                        >
                                          ถนน
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          name="road"
                                          placeholder="ถนน"
                                          value=""
                                        />
                                      </div>
                                    </div>

                                    <div className="form-row">
                                      <div className="form-group col-xl-4 col-lg-4 col-md-6 sm-12 m-b-15">
                                        <label
                                          for="province_code"
                                          className="control-label"
                                        >
                                          จังหวัด&nbsp;
                                          <span style={{ color: "red" }}>
                                            (*)
                                          </span>
                                        </label>
                                        <select
                                          name="province_code"
                                          className="form-control select2"
                                        >
                                          <option value="">
                                            โปรดระบุจังหวัด
                                          </option>
                                        </select>
                                      </div>
                                      <div className="form-group col-xl-4 col-lg-4 col-md-6 sm-12 m-b-15">
                                        <label
                                          for="district_code"
                                          className="control-label"
                                        >
                                          เขต/อำเภอ&nbsp;
                                          <span style={{ color: "red" }}>
                                            (*)
                                          </span>
                                        </label>
                                        <select
                                          name="district_code"
                                          className="form-control select2"
                                        >
                                          <option value="">
                                            โปรดระบุแขวง/อำเภอ
                                          </option>
                                        </select>
                                      </div>
                                      <div className="form-group col-xl-4 col-lg-4 col-md-6 sm-12 m-b-15">
                                        <label
                                          for="subdistrict_code"
                                          className="control-label"
                                        >
                                          แขวง/ตำบล&nbsp;
                                          <span style={{ color: "red" }}>
                                            (*)
                                          </span>
                                        </label>
                                        <select
                                          name="subdistrict_code"
                                          className="form-control select2"
                                        >
                                          <option value="">
                                            โปรดระบุเขต/ตำบล
                                          </option>
                                        </select>
                                      </div>
                                    </div>

                                    <div className="form-row">
                                      <div className="form-group col-xl-3 col-lg-3 col-md-6 sm-12 m-b-15">
                                        <label
                                          for="offmobile"
                                          className="control-label"
                                        >
                                          โทรศัพท์&nbsp;
                                          <span style={{ color: "red" }}>
                                            (*)
                                          </span>
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          name="offmobile"
                                          placeholder="โทรศัพท์"
                                          value=""
                                        />
                                      </div>
                                      <div className="form-group col-xl-3 col-lg-3 col-md-6 sm-12 m-b-15">
                                        <label
                                          for="fax"
                                          className="control-label"
                                        >
                                          โทรสาร
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          name="fax"
                                          placeholder="โทรสาร"
                                          value=""
                                        />
                                      </div>
                                      <div className="form-group col-xl-6 col-lg-6 col-md-8 sm-12 m-b-15">
                                        <label
                                          for="email"
                                          className="control-label"
                                        >
                                          อีเมล์&nbsp;
                                          <span style={{ color: "red" }}>
                                            (*)
                                          </span>
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          name="email"
                                          placeholder="อีเมล์"
                                          value=""
                                        />
                                      </div>
                                    </div>

                                    <hr />

                                    <div
                                      className="form-row"
                                      style={{
                                        fontSize: "13pt",
                                        color: "gray"
                                      }}
                                    >
                                      <strong className=" d-block mb-2 ml-1 my-auto">
                                        สถานที่ติดตั้ง
                                      </strong>
                                    </div>
                                    <div className="progress progress-sm mb-4  mt-2">
                                      <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "20%" }}
                                        aria-valuenow="20"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>

                                    <div className="form-row">
                                      <div className="form-group col">
                                        <label
                                          for="at_km"
                                          className="control-label"
                                        >
                                          กิโลเมตรที่
                                        </label>
                                        <input
                                          type="text"
                                          name="at_km"
                                          className="form-control"
                                          placeholder="กิโลเมตรที่"
                                        />
                                      </div>
                                      <div className="form-group col">
                                        <label
                                          for="project_province_code"
                                          className="control-label"
                                        >
                                          จังหวัด&nbsp;
                                          <span style={{ color: "red" }}>
                                            (*)
                                          </span>
                                        </label>
                                        <select
                                          name="project_province_code"
                                          className="form-control select2"
                                        >
                                          <option value="">
                                            โปรดระบุจังหวัด
                                          </option>
                                        </select>
                                      </div>
                                      <div className="form-group col">
                                        <label
                                          for="project_district_code"
                                          className="control-label"
                                        >
                                          เขต/อำเภอ&nbsp;
                                          <span style={{ color: "red" }}>
                                            (*)
                                          </span>
                                        </label>
                                        <select
                                          name="project_district_code"
                                          className="form-control select2"
                                        >
                                          <option value="">
                                            โปรดระบุแขวง/อำเภอ
                                          </option>
                                        </select>
                                      </div>
                                      <div className="form-group col">
                                        <label
                                          for="project_subdistrict_code"
                                          className="control-label"
                                        >
                                          แขวง/ตำบล&nbsp;
                                          <span style={{ color: "red" }}>
                                            (*)
                                          </span>
                                        </label>
                                        <select
                                          name="project_subdistrict_code"
                                          className="form-control select2"
                                        >
                                          <option value="">
                                            โปรดระบุเขต/ตำบล
                                          </option>
                                        </select>
                                      </div>
                                    </div>

                                    <hr />

                                    <div
                                      className="form-row"
                                      style={{
                                        fontSize: "13pt",
                                        color: "gray"
                                      }}
                                    >
                                      <strong className=" d-block mb-2 ml-1 my-auto">
                                        พิกัด
                                      </strong>
                                    </div>
                                    <div className="progress progress-sm mb-4  mt-2">
                                      <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "20%" }}
                                        aria-valuenow="20"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>

                                    <div className="form-row">
                                      <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                                        <label for="latitude">ละติจูด</label>
                                        <input
                                          type="text"
                                          name="latitude"
                                          className="form-control"
                                          placeholder="ละติจูด"
                                        />
                                      </div>
                                      <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                                        <label for="longitude">ลองจิจูด</label>
                                        <input
                                          type="text"
                                          name="longitude"
                                          className="form-control"
                                          placeholder="ลองจิจูด"
                                        />
                                      </div>
                                    </div>

                                    <hr />

                                    <div
                                      className="form-row"
                                      style={{
                                        fontSize: "13pt",
                                        color: "gray"
                                      }}
                                    >
                                      <strong className=" d-block mb-2 ml-1 my-auto">
                                        ปริมาณใช้น้ำ
                                      </strong>
                                    </div>
                                    <div className="progress progress-sm mb-4  mt-2">
                                      <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "20%" }}
                                        aria-valuenow="20"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>

                                    <div className="form-row">
                                      <div className="form-group col-xl-6 col-lg-6 col-md-6 sm-12 m-b-15">
                                        <label
                                          for="number_hours"
                                          className="control-label"
                                        >
                                          ปริมาณน้ำที่จะใช้น้ำต่อชั่วโมง&nbsp;
                                          <span style={{ color: "red" }}>
                                            (*)
                                          </span>
                                        </label>
                                        <div className="input-group">
                                          <input
                                            type="text"
                                            className="form-control allownumericwithdecimal"
                                            name="number_hours"
                                            placeholder="วันละ"
                                            value=""
                                          />
                                          <div className="input-group-addon">
                                            ชม.
                                          </div>
                                        </div>
                                      </div>
                                      <div className="form-group col-xl-6 col-lg-6 col-md-6 sm-12 m-b-15">
                                        <label
                                          for="number_permonth"
                                          className="control-label"
                                        >
                                          ปริมาณน้ำที่จะใช้ต่อเดือน&nbsp;
                                          <span style={{ color: "red" }}>
                                            (*)
                                          </span>
                                        </label>
                                        <div className="input-group">
                                          <input
                                            type="text"
                                            className="form-control allownumericwithdecimal"
                                            name="number_permonth"
                                            placeholder="ไม่เกินเดือนละ"
                                            value=""
                                          />
                                          <div className="input-group-addon">
                                            ม.<sup>3</sup>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="form-group col-xl-3 col-lg-3 col-md-6 sm-12 m-b-15">
                                        <label
                                          for="water_type"
                                          className="control-label"
                                        >
                                          ประเภทการใช้น้ำ&nbsp;
                                          <span style={{ color: "red" }}>
                                            (*)
                                          </span>
                                        </label>
                                        <select
                                          name="water_type"
                                          className="form-control select2"
                                        >
                                          <option value="">
                                            โปรดระบุประเภท
                                          </option>
                                          <option value="10">ประปา</option>
                                          <option value="11">อุตสาหกรรม</option>
                                          <option value="12">สาธารณะ</option>
                                          <option value="13">อื่นๆ</option>
                                        </select>
                                      </div>
                                      <div className="form-group col-xl-8 col-lg-8 col-md-12 sm-12 m-b-15">
                                        <label
                                          for="store_income"
                                          className="control-label"
                                        >
                                          เพื่อกิจการ&nbsp;
                                          <span style={{ color: "red" }}>
                                            (*)
                                          </span>
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          name="to_operate"
                                          placeholder="เพื่อกิจการ"
                                          value=""
                                        />
                                      </div>
                                    </div>
                                  </form>
                                </div>

                                <div
                                  className="tab-pane fade"
                                  name="tab_approve_pipe"
                                  id="tab_approve_pipe"
                                  role="tabpanel"
                                  level="2"
                                >
                                  <form name="frmAdd7">
                                    <div
                                      className="form-row"
                                      style={{
                                        fontSize: "13pt",
                                        color: "gray"
                                      }}
                                    >
                                      {/* <strong className=" d-block mb-2 ml-1 my-auto">วางท่อ</strong>
                                                            <!-- <button type="button" className="btn btn-info add-card ml-auto mr-2">
                                                                <span className="feather icon-plus"></span> เพิ่มท่อ
                                                            </button> -->*/}
                                    </div>

                                    <div className="progress progress-sm mb-4  mt-2">
                                      <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "20%" }}
                                        aria-valuenow="20"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>

                                    <div className="form-row">
                                      <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                        <input
                                          type="hidden"
                                          value="1"
                                          name="total_pipe"
                                        />

                                        <div name="new_pipe">
                                          <div className="card">
                                            <div
                                              className="btn-group btn-group-sm"
                                              style={{
                                                position: "absolute",
                                                right: "8px",
                                                top: "8px"
                                              }}
                                            >
                                              <button
                                                type="button"
                                                className="btn btn-info add-card"
                                                style={{
                                                  top: "-1.8px",
                                                  left: "-10px"
                                                }}
                                              >
                                                <span className="feather icon-plus"></span>
                                              </button>
                                              <button
                                                type="button"
                                                className="btn btn-warning hide-tab"
                                              >
                                                <span className="feather icon-chevron-up"></span>
                                              </button>{" "}
                                              {/*
                                                                            <!-- <button type="button" className="btn btn-danger float-right remove">
                                                                                    <span className="feather icon-trash-2"></span>
                                                                            </button> -->*/}
                                            </div>

                                            <h5
                                              className="card-header hide-tab"
                                              data-name="ชุดท่อ"
                                            >
                                              ชุดท่อที่ 1
                                            </h5>

                                            <div className="card-body">
                                              <input
                                                type="hidden"
                                                value="1"
                                                name="total_sub_pipe_1"
                                              />
                                              <div className="form-row">
                                                <div
                                                  className="form-group col"
                                                  bak="col-xl-3 col-lg-3 col-md-6 col-sm-12"
                                                >
                                                  <label
                                                    for="pipe_size"
                                                    className="control-label text-xl-right text-lg-right text-md-right"
                                                  >
                                                    ขนาดท่อ&nbsp;
                                                    <span
                                                      style={{ color: "red" }}
                                                    >
                                                      (*)
                                                    </span>
                                                  </label>
                                                  <div className="input-group">
                                                    <input
                                                      type="hidden"
                                                      className="form-control pipe_id"
                                                      name="pipe_id_1_1"
                                                      placeholder="รหัสท่อส่งน้ำ"
                                                      value=""
                                                    />
                                                    <input
                                                      type="text"
                                                      className="form-control pipe_size allownumericwithdecimal"
                                                      name="pipe_size_1_1"
                                                      placeholder="ขนาดท่อ"
                                                      value=""
                                                    />
                                                    <div className="input-group-addon">
                                                      นิ้ว
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  className="form-group col"
                                                  bak="col-xl-3 col-lg-3 col-md-6 col-sm-12"
                                                >
                                                  <label
                                                    for="pipe_amount"
                                                    className="control-label text-xl-right text-lg-right text-md-right"
                                                  >
                                                    จำนวน&nbsp;
                                                    <span
                                                      style={{ color: "red" }}
                                                    >
                                                      (*)
                                                    </span>
                                                  </label>
                                                  <div className="input-group">
                                                    <input
                                                      type="text"
                                                      className="form-control pipe_amount allownumericwithdecimal"
                                                      name="pipe_amount_1_1"
                                                      placeholder="จำนวน"
                                                      value=""
                                                    />
                                                    <div className="input-group-addon">
                                                      ท่อ
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  className="form-group col"
                                                  bak="col-xl-3 col-lg-3 col-md-6 col-sm-10"
                                                >
                                                  <label
                                                    for="pump_maximum"
                                                    className="control-label text-xl-right text-lg-right text-md-right"
                                                  >
                                                    ปริมาตรน้ำสูงสุด&nbsp;
                                                    <span
                                                      style={{ color: "red" }}
                                                    >
                                                      (*)
                                                    </span>
                                                  </label>
                                                  <div className="input-group">
                                                    <input
                                                      type="text"
                                                      className="form-control pump_maximum allownumericwithdecimal"
                                                      name="pump_maximum_1_1"
                                                      placeholder="ปริมาตรน้ำสูงสุด"
                                                      value=""
                                                    />
                                                    <div className="input-group-addon">
                                                      ลบ.ม.
                                                    </div>
                                                  </div>
                                                </div>
                                                {/*
                                                                                <!-- <div className="form-group col-xl-3 col-lg-3 col-md-6 col-sm-1">
                                                                                    <label for="number_permonth" className="control-label" style="color: white;">xxxx</label>
                                                                                    <div className="input-group btn-group-sm">
                                                                                        <button type="button" className="btn btn-info add-pipe ml-auto">
                                                                                            <span className="feather icon-plus"></span>
                                                                                        </button>
                                                                                        &nbsp;
                                                                                        <button type="button" className="btn btn-danger remove">
                                                                                            <span className="feather icon-trash-2"></span>
                                                                                        </button>
                                                                                    </div>
                                                                                </div> -->*/}
                                              </div>

                                              <div className="form-row">
                                                <div className="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                  <label
                                                    for="setup_meter"
                                                    className="control-label text-xl-right text-lg-right text-md-right"
                                                  >
                                                    ติดตั้งมาตรวัดน้ำ
                                                  </label>
                                                  <select
                                                    name="setup_meter_1_1"
                                                    className="form-control select2 setup_meter"
                                                    tabindex="-1"
                                                    aria-hidden="true"
                                                  >
                                                    <option value="">
                                                      โปรดระบุ
                                                    </option>
                                                    <option value="true">
                                                      ติดตั้ง
                                                    </option>
                                                    <option value="false">
                                                      ไม่ติดตั้ง
                                                    </option>
                                                  </select>
                                                </div>
                                                <div className="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                  <label
                                                    for="meter_maximum"
                                                    className="control-label text-xl-right text-lg-right text-md-right"
                                                  >
                                                    อ่านค่าสูงสุด
                                                  </label>
                                                  <div className="input-group">
                                                    <input
                                                      type="text"
                                                      className="form-control meter_maximum allownumericwithdecimal"
                                                      name="meter_maximum_1_1"
                                                      disabled="disabled"
                                                      placeholder="อ่านค่าสูงสุด"
                                                      value=""
                                                    />
                                                    <div className="input-group-addon">
                                                      มม.
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </form>
                                </div>

                                <div
                                  className="tab-pane fade"
                                  name="tab_approve_authorize"
                                  id="tab_approve_authorize"
                                  role="tabpanel"
                                  level="2"
                                >
                                  <form name="frmAdd8">
                                    <div
                                      className="form-row"
                                      style={{
                                        fontSize: "13pt",
                                        color: "gray"
                                      }}
                                    >
                                      <strong className=" d-block mb-2 ml-1 my-auto">
                                        ผู้รับมอบอำนาจ
                                      </strong>
                                    </div>
                                    <div className="progress progress-sm mb-4  mt-2">
                                      <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "20%" }}
                                        aria-valuenow="20"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>

                                    <div className="form-row">
                                      <div className="form-group col-xl-6 col-lg-6 col-md-12 sm-12">
                                        <label
                                          for="authorize_name"
                                          className="control-label"
                                        >
                                          ชื่อ-สกุล
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          name="authorize_name"
                                          placeholder="ชื่อ-สกุล"
                                          value=""
                                        />
                                      </div>
                                      <div className="form-group col-xl-3 col-lg-3 col-md-6 sm-12">
                                        <label
                                          for="authorize_age"
                                          className="control-label"
                                        >
                                          อายุ
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          name="authorize_age"
                                          placeholder="อายุ"
                                          value=""
                                        />
                                      </div>
                                      <div className="form-group col-xl-3 col-lg-3 col-md-6 sm-12">
                                        <label
                                          for="authorize_nation"
                                          className="control-label"
                                        >
                                          สัญชาติ
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          name="authorize_nation"
                                          placeholder="สัญชาติ"
                                          value=""
                                        />
                                      </div>
                                    </div>
                                    <div className="form-row">
                                      <div className="form-group col-xl-4 col-lg-4 col-md-6 sm-12">
                                        <label
                                          for="authorize_tel"
                                          className="control-label"
                                        >
                                          โทรศัพท์
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          name="authorize_tel"
                                          placeholder="โทรศัพท์"
                                          value=""
                                        />
                                      </div>
                                    </div>

                                    <hr />

                                    <div
                                      className="form-row"
                                      style={{
                                        fontSize: "13pt",
                                        color: "gray"
                                      }}
                                    >
                                      <strong className=" d-block mb-2 ml-1 my-auto">
                                        ผู้มอบอำนาจ
                                      </strong>
                                    </div>
                                    <div className="progress progress-sm mb-4  mt-2">
                                      <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "20%" }}
                                        aria-valuenow="20"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>

                                    <div className="form-row">
                                      <div className="form-group col-xl-6 col-lg-6 col-md-12 sm-12">
                                        <label
                                          for="authorize2_name"
                                          className="control-label"
                                        >
                                          ชื่อ-สกุล
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          name="authorize2_name"
                                          placeholder="ชื่อ-สกุล"
                                          value=""
                                        />
                                      </div>
                                      <div className="form-group col-xl-3 col-lg-3 col-md-6 sm-12">
                                        <label
                                          for="authorize2_no"
                                          className="control-label"
                                        >
                                          หนังสือมอบอำนาจที่
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          name="authorize2_no"
                                          placeholder="หนังสือมอบอำนาจที่"
                                          value=""
                                        />
                                      </div>
                                      <div className="form-group col-xl-3 col-lg-3 col-md-6 sm-12">
                                        <label
                                          for="authorize2_date"
                                          className="control-label"
                                        >
                                          ลงวันที่
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control datepicker"
                                          name="authorize2_date"
                                          placeholder="ลงวันที่"
                                          value=""
                                          autocomplete="off"
                                        />
                                      </div>
                                    </div>
                                    <div className="form-row">
                                      <div className="form-group col-xl-4 col-lg-4 col-md-6 sm-12">
                                        <label
                                          for="authorize2_tel"
                                          className="control-label"
                                        >
                                          โทรศัพท์
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          name="authorize2_tel"
                                          placeholder="โทรศัพท์"
                                          value=""
                                        />
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>

                            <div
                              className="tab-pane fade m-t-25"
                              name="tab_approve_project"
                              id="tab_approve_project"
                              role="tabpanel"
                              aria-labelledby="profile-tab"
                              level="1"
                            >
                              <form name="frmAdd2">
                                <div
                                  className="form-row"
                                  style={{ fontSize: "13pt", color: "gray" }}
                                >
                                  <strong className=" d-block mb-2 ml-1 my-auto">
                                    หน่วยงานที่รับผิดชอบ
                                  </strong>
                                </div>
                                <div className="progress progress-sm mb-4  mt-2">
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "20%" }}
                                    aria-valuenow="20"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>

                                <div className="form-row">
                                  <div className="form-group col-lg-6 col-md-8 col-sm-12 m-b-15">
                                    <label for="department_code">
                                      สำนัก&nbsp;
                                      <span style={{ color: "red" }}>(*)</span>
                                    </label>
                                    <select
                                      name="department_code"
                                      className="form-control select2"
                                    >
                                      <option value="">โปรดระบุสำนัก</option>
                                    </select>
                                  </div>
                                  <div className="form-group col-lg-6 col-md-8 col-sm-12 m-b-15">
                                    <label for="project_code">
                                      โครงการ&nbsp;
                                      <span style={{ color: "red" }}>(*)</span>
                                    </label>
                                    <select
                                      name="project_code"
                                      className="form-control select2"
                                    >
                                      <option value="">โปรดระบุโครงการ</option>
                                    </select>
                                  </div>
                                </div>

                                <div className="form-row">
                                  <div className="form-group col">
                                    <label
                                      for="type_location_code"
                                      className="control-label"
                                    >
                                      <span>ประเภท</span>
                                    </label>
                                    <select
                                      name="type_location_code"
                                      className="form-control select2"
                                    >
                                      <option value="">โปรดระบุประเภท</option>
                                      <option value="1">แม่น้ำ</option>
                                      <option value="2">คลอง</option>
                                      <option value="3">อ่างเก็บน้ำ</option>
                                    </select>
                                  </div>
                                  <div className="form-group col">
                                    <label
                                      for="section"
                                      className="control-label"
                                    >
                                      <span>มาตรา</span>&nbsp;
                                      <span style={{ color: "red" }}>(*)</span>
                                    </label>
                                    <select
                                      name="section"
                                      className="form-control select2"
                                    >
                                      <option value="">โปรดระบุมาตรา</option>
                                      <option value="5">มาตรา 5</option>
                                      <option value="8">มาตรา 8</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="form-row">
                                  <div className="form-group col">
                                    <label
                                      for="project_type_name"
                                      className="control-label"
                                    >
                                      ชื่อทางน้ำชลประทาน&nbsp;
                                      <span style={{ color: "red" }}>(*)</span>
                                    </label>
                                    <select
                                      className="form-control auto select2"
                                      name="project_type_name"
                                    ></select>
                                    <input type="hidden" name="refer" />
                                  </div>
                                </div>

                                <div className="form-row">
                                  <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                                    <label for="waterway_law_year">
                                      ปีที่ประกาศราชกิจจาฯ
                                    </label>{" "}
                                    {/*
                                                        <!-- irrigation_water_year -->*/}
                                    <input
                                      type="text"
                                      name="waterway_law_year"
                                      className="form-control"
                                      placeholder="ปีที่ประกาศราชกิจจาฯ"
                                      disabled
                                      inp--disabled="true"
                                    />
                                  </div>
                                  <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                                    <label for="waterway_law_date">
                                      วันที่ประกาศราชกิจจาฯ
                                    </label>{" "}
                                    {/*
                                                        <!-- approve_notify_date -->*/}
                                    <input
                                      type="text"
                                      name="waterway_law_date"
                                      className="form-control datepicker"
                                      placeholder="วันที่ประกาศราชกิจจาฯ"
                                      disabled
                                      inp--disabled="true"
                                      autocomplete="off"
                                    />
                                  </div>
                                </div>
                                <div className="form-row">
                                  <div className="form-group col-xl-6 col-lg-6 col-md-12 sm-12 m-b-15">
                                    <label
                                      for="start"
                                      className="control-label"
                                    >
                                      จุดเริ่มต้น
                                    </label>
                                    <textarea
                                      className="form-control"
                                      name="start"
                                      rows="10"
                                      placeholder="จุดเริ่มต้น"
                                    ></textarea>
                                  </div>
                                  <div className="form-group col-xl-6 col-lg-6 col-md-12 sm-12 m-b-15">
                                    <label
                                      for="finish"
                                      className="control-label"
                                    >
                                      จุดสิ้นสุด
                                    </label>
                                    <textarea
                                      className="form-control"
                                      name="finish"
                                      rows="10"
                                      placeholder="จุดสิ้นสุด"
                                    ></textarea>
                                  </div>
                                </div>

                                <hr />

                                <div
                                  className="form-row"
                                  style={{ fontSize: "13pt", color: "gray" }}
                                >
                                  <strong className=" d-block mb-2 ml-1 my-auto">
                                    ช่องทางชำระเงิน
                                  </strong>
                                </div>
                                <div className="progress progress-sm mb-4  mt-2">
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "20%" }}
                                    aria-valuenow="20"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>

                                <div className="form-row">
                                  <div className="form-group col">
                                    <label
                                      for="payment_method"
                                      className="control-label"
                                    >
                                      ช่องทางชำระเงิน&nbsp;
                                      <span style={{ color: "red" }}>(*)</span>
                                    </label>
                                    <select
                                      name="payment_method"
                                      className="form-control select2"
                                    >
                                      <option value="">โปรดระบุ</option>
                                      <option value="1">
                                        ณ ที่ทำการโครงการ
                                      </option>
                                      <option value="2">
                                        ผ่านระบบอิเล็กทรอนิกส์
                                      </option>
                                      <option value="3">ผ่านระบบธนาคาร</option>
                                    </select>
                                  </div>
                                </div>

                                <div className="form-row payment_project">
                                  <div className="form-group col">
                                    <label
                                      for="payment_project"
                                      className="control-label"
                                    >
                                      โครงการ
                                    </label>
                                    <input
                                      type="text"
                                      name="payment_project"
                                      className="form-control"
                                      placeholder="โครงการ"
                                    />
                                  </div>
                                  <div className="form-group col">
                                    <label
                                      for="payment_province_code"
                                      className="control-label"
                                    >
                                      จังหวัด&nbsp;
                                      <span style={{ color: "red" }}>(*)</span>
                                    </label>
                                    <select
                                      name="payment_province_code"
                                      className="form-control select2"
                                    >
                                      <option value="">โปรดระบุจังหวัด</option>
                                    </select>
                                  </div>
                                  <div className="form-group col">
                                    <label
                                      for="payment_district_code"
                                      className="control-label"
                                    >
                                      เขต/อำเภอ&nbsp;
                                      <span style={{ color: "red" }}>(*)</span>
                                    </label>
                                    <select
                                      name="payment_district_code"
                                      className="form-control select2"
                                    >
                                      <option value="">
                                        โปรดระบุแขวง/อำเภอ
                                      </option>
                                    </select>
                                  </div>
                                  <div className="form-group col">
                                    <label
                                      for="payment_subdistrict_code"
                                      className="control-label"
                                    >
                                      แขวง/ตำบล&nbsp;
                                      <span style={{ color: "red" }}>(*)</span>
                                    </label>
                                    <select
                                      name="payment_subdistrict_code"
                                      className="form-control select2"
                                    >
                                      <option value="">โปรดระบุเขต/ตำบล</option>
                                    </select>
                                  </div>
                                </div>

                                <hr />
                                <div
                                  className="form-row"
                                  style={{ fontSize: "13pt", color: "gray" }}
                                >
                                  <strong className=" d-block mb-2 ml-1 my-auto">
                                    ผู้ลงนามหนังสืออนุญาต
                                  </strong>
                                </div>
                                <div className="progress progress-sm mb-4  mt-2">
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "20%" }}
                                    aria-valuenow="20"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                                <div className="form-row">
                                  <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                                    <label for="endorser_name">
                                      ชื่อผู้ลงนามหนังสืออนุญาตใช้น้ำ&nbsp;
                                      <span style={{ color: "red" }}>(*)</span>
                                    </label>{" "}
                                    {/*
                                                        <!-- project_header_name -->*/}
                                    <input
                                      type="text"
                                      name="endorser_name"
                                      className="form-control"
                                      placeholder="ชื่อผู้ลงนามหนังสืออนุญาตใช้น้ำ"
                                      is-edit="true"
                                    />
                                  </div>
                                  <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                                    <label for="endorser_position">
                                      ตำแหน่งผู้ลงนามหนังสืออนุญาตใช้น้ำ
                                    </label>
                                    <input
                                      type="text"
                                      name="endorser_position"
                                      className="form-control"
                                      placeholder="ตำแหน่งผู้ลงนามหนังสืออนุญาตใช้น้ำ"
                                      is-edit="true"
                                    />
                                  </div>
                                  <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                                    <label for="endorser_no">
                                      ผู้รับมอบหมายตามคำสั่งกรมชลประทานที่
                                    </label>
                                    <input
                                      type="text"
                                      name="endorser_no"
                                      className="form-control"
                                      placeholder="ผู้รับมอบหมายตามคำสั่งกรมชลประทานที่"
                                      is-edit="true"
                                    />
                                  </div>
                                </div>
                              </form>
                            </div>

                            <div
                              className="tab-pane fade"
                              name="tab_approve_land"
                              id="tab_approve_land"
                              role="tabpanel"
                              aria-labelledby="approve-land-tab"
                              level="1"
                            >
                              <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                {/*
                                                <!-- Nav tabs -->*/}
                                <ul
                                  className="nav nav-tabs md-tabs"
                                  role="tablist"
                                  level="2"
                                >
                                  <li className="nav-item">
                                    <a
                                      className="nav-link active"
                                      data-toggle="tab"
                                      href="#tab_approve_treasury"
                                      role="tab"
                                      aria-controls="tab_treasury"
                                      aria-selected="true"
                                      level="2"
                                    >
                                      ข้อมูลที่ดินราชพัสดุ
                                    </a>
                                    <div className="slide"></div>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link"
                                      data-toggle="tab"
                                      href="#tab_approve_land_other"
                                      role="tab"
                                      aria-controls="tab_land_other"
                                      aria-selected="false"
                                      level="2"
                                    >
                                      ข้อมูลที่ดินอื่นๆ
                                    </a>
                                    <div className="slide"></div>
                                  </li>
                                </ul>

                                {/*
                                                <!-- Tab panes -->*/}
                                <div className="tab-content card-block">
                                  <div
                                    className="tab-pane fade show active"
                                    name="tab_approve_treasury"
                                    id="tab_approve_treasury"
                                    role="tabpanel"
                                    aria-labelledby="approve-treasury-tab"
                                    level="2"
                                  >
                                    <form name="frmAdd3">
                                      <div className="form-row">
                                        <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                                          <label for="treasury_province">
                                            จังหวัดที่ดินราชพัสดุ
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            name="treasury_province"
                                            placeholder="จังหวัดที่ดินราชพัสดุ"
                                          />
                                        </div>
                                        <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                                          <label for="treasury_no">
                                            เลขที่หนังสือราชพัสดุ
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            name="treasury_no"
                                            placeholder="เลขที่หนังสือราชพัสดุ"
                                          />
                                        </div>
                                      </div>
                                      <div className="form-row">
                                        <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                                          <label for="treasury_date">
                                            วันที่ในหนังสือราชพัสดุ
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control datepicker"
                                            name="treasury_date"
                                            placeholder="วันที่ในหนังสือราชพัสดุ"
                                            value=""
                                            autocomplete="off"
                                          />
                                        </div>
                                        <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                                          <label for="treasury_compensate_fee">
                                            ค่าชดเชย
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control allownumericwithdecimal"
                                            name="treasury_compensate_fee"
                                            placeholder="ค่าชดเชย"
                                          />
                                        </div>
                                      </div>
                                      <div className="form-row">
                                        <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                                          <label for="treasury_survey_fee">
                                            ค่าตรวจสอบ
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control allownumericwithdecimal"
                                            name="treasury_survey_fee"
                                            placeholder="ค่าตรวจสอบ"
                                          />
                                        </div>
                                        <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                                          <label for="treasury_gauge_fee">
                                            ค่าธรรมเนียมรังวัด
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control allownumericwithdecimal"
                                            name="treasury_gauge_fee"
                                            placeholder="ค่าธรรมเนียมรังวัด"
                                          />
                                        </div>
                                      </div>
                                      <div className="form-row">
                                        <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                                          <label for="treasury_place">
                                            พื้นที่ทำการ(สาขา)
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            name="treasury_place"
                                            placeholder="พื้นที่ทำการ(สาขา)"
                                          />
                                        </div>
                                        <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                                          <label for="treasury_receipt_no">
                                            เลขที่ใบเสร็จ
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            name="treasury_receipt_no"
                                            placeholder="เลขที่ใบเสร็จ"
                                          />
                                        </div>
                                      </div>
                                      <div className="form-row">
                                        <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                                          <label for="treasury_receipt_date">
                                            วันที่ใบเสร็จ
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control datepicker"
                                            name="treasury_receipt_date"
                                            placeholder="วันที่ใบเสร็จ"
                                            value=""
                                            autocomplete="off"
                                          />
                                        </div>
                                      </div>
                                    </form>
                                  </div>

                                  <div
                                    className="tab-pane fade"
                                    name="tab_approve_land_other"
                                    id="tab_approve_land_other"
                                    role="tabpanel"
                                    aria-labelledby="approve-land-other-tab"
                                    level="2"
                                  >
                                    <form name="frmAdd4">
                                      <div className="form-row">
                                        <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                                          <label for="public_land_owner">
                                            ชื่อที่ดินสาธารณประโยชน์
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            name="public_land_owner"
                                            placeholder="ชื่อที่ดินสาธารณประโยชน์"
                                          />
                                        </div>
                                        <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                                          <label for="public_land_no">
                                            เลขที่หนังสือยินยอม
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            name="public_land_no"
                                            placeholder="เลขที่หนังสือยินยอม"
                                          />
                                        </div>
                                      </div>
                                      <div className="form-row">
                                        <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                                          <label for="public_land_date">
                                            วันที่ในหนังสือยินยอม
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control datepicker"
                                            name="public_land_date"
                                            placeholder="วันที่ในหนังสือยินยอม"
                                            value=""
                                            autocomplete="off"
                                          />
                                        </div>
                                      </div>
                                      <div className="form-row">
                                        <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                                          <label for="sao_land_owner">
                                            ชื่ออบต.
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            name="sao_land_owner"
                                            placeholder="ชื่ออบต"
                                          />
                                        </div>
                                        <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                                          <label for="sao_land_no">
                                            เลขที่หนังสือยินยอม อบต.
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            name="sao_land_no"
                                            placeholder="เลขที่หนังสือยินยอม อบต."
                                          />
                                        </div>
                                      </div>
                                      <div className="form-row">
                                        <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                                          <label for="sao_land_date">
                                            วันที่ในหนังสือยินยอม อบต.
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control datepicker"
                                            name="sao_land_date"
                                            placeholder="วันที่ในหนังสือยินยอม อบต."
                                            value=""
                                            autocomplete="off"
                                          />
                                        </div>
                                      </div>
                                      <div className="form-row">
                                        <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                                          <label for="md_land_owner">
                                            ชื่อสังกัดกรมเจ้าท่า
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            name="md_land_owner"
                                            placeholder="ชื่อสังกัดกรมเจ้าท่า"
                                          />
                                        </div>
                                        <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                                          <label for="md_land_no">
                                            เลขที่หนังสือยินยอม กรมเจ้าท่า
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            name="md_land_no"
                                            placeholder="เลขที่หนังสือยินยอม กรมเจ้าท่า"
                                          />
                                        </div>
                                      </div>
                                      <div className="form-row">
                                        <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                                          <label for="md_land_date">
                                            วันที่ในหนังสือยินยอม กรมเจ้าท่า
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control datepicker"
                                            name="md_land_date"
                                            placeholder="วันที่ในหนังสือยินยอม กรมเจ้าท่า"
                                            value=""
                                            autocomplete="off"
                                          />
                                        </div>
                                      </div>
                                      <div className="form-row">
                                        <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                                          <label for="another_land_owner">
                                            ชื่อที่ดินอื่นๆ
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            name="another_land_owner"
                                            placeholder="ชื่อที่ดินอื่นๆ"
                                          />
                                        </div>
                                        <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                                          <label for="another_land_no">
                                            เลขที่หนังสือยินยอม ที่ดินอื่นๆ
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            name="another_land_no"
                                            placeholder="เลขที่หนังสือยินยอม ที่ดินอื่นๆ"
                                          />
                                        </div>
                                      </div>
                                      <div className="form-row">
                                        <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                                          <label for="another_land_date">
                                            วันที่ในหนังสือยินยอม ที่ดินอื่นๆ
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control datepicker"
                                            name="another_land_date"
                                            placeholder="วันที่ในหนังสือยินยอม ที่ดินอื่นๆ"
                                            value=""
                                            autocomplete="off"
                                          />
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              className="tab-pane fade m-t-25"
                              name="tab_approve_plan"
                              id="tab_approve_plan"
                              role="tabpanel"
                              aria-Labelledby="approve-plan-tab"
                              level="1"
                            >
                              <form name="frmAdd5">
                                <div className="form-row">
                                  <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                                    <label for="layout_no">
                                      เลขที่แบบแปลนและแผนผัง
                                    </label>
                                    <input
                                      type="text"
                                      name="layout_no"
                                      className="form-control"
                                      placeholder="เลขที่แบบแปลนและแผนผัง"
                                    />
                                  </div>
                                  <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                                    <label for="layout_no">จำนวน (แผ่น)</label>
                                    <input
                                      type="text"
                                      name="layout_amount"
                                      className="form-control"
                                      placeholder="จำนวน (แผ่น)"
                                    />
                                  </div>
                                </div>

                                <div className="form-row">
                                  <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                                    <label for="part_of_project_name">
                                      ชื่อแผนที่รูปตัดของโครงการ
                                    </label>
                                    <input
                                      type="text"
                                      name="part_of_project_name"
                                      className="form-control"
                                      placeholder="ชื่อแผนที่รูปตัดของโครงการ"
                                    />
                                  </div>
                                  <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                                    <label for="part_of_project_no">
                                      เลขที่แผนที่รูปตัดของโครงการ
                                    </label>
                                    <input
                                      type="text"
                                      name="part_of_project_no"
                                      className="form-control"
                                      placeholder="เลขที่แผนที่รูปตัดของโครงการ"
                                    />
                                  </div>
                                </div>

                                <div className="form-row">
                                  <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                                    <label for="part_of_project_sheet_qty">
                                      จำนวนแผนที่รูปตัดของโครงการ(แผ่น)
                                    </label>
                                    <input
                                      type="text"
                                      name="part_of_project_sheet_qty"
                                      className="form-control"
                                      placeholder="จำนวนแผนที่รูปตัดของโครงการ(แผ่น)"
                                    />
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="float-right m-t-0 save-data">
                        <button
                          type="button"
                          className="btn btn-danger"
                          data-dismiss="modal"
                          onClick={this.handleCloseModal}
                        >
                          ยกเลิก
                        </button>
                        <button
                          type="button"
                          className="btn btn-success btn-save-data m-l-3"
                        >
                          บันทึก
                        </button>
                      </div>
                    </div>

                    <div
                      className="tab-pane"
                      name="tab_approve_attach"
                      id="tab_approve_attach"
                      role="tabpanel"
                      level="0"
                    >
                      <form
                        className="dropzone dz-clickable"
                        name="dropzone"
                        enctype="multipart/form-data"
                      >
                        <div className="dz-message" data-dz-message>
                          <span>
                            <i className="fa fa-cloud-upload"></i> <br />{" "}
                            เลือกหรือวางไฟล์ลงที่นี่
                          </span>
                        </div>
                      </form>
                      <div className="float-right m-t-10 upload-file">
                        {/*
                                <?php if ($user_type !== '1') { ?>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
                                <button type="button" className="btn btn-success btn-upload-file m-l-3">บันทึก</button>
                                <?php } ?> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                {/*
                <?php if ($user_type !== '1') { ?>
                <input type="hidden" name="action" value="insert">
                <input type="hidden" name="register_name">
                <button type="button" className="btn btn-danger" data-dismiss="modal">ยกเลิก</button>
                <button type="submit" className="btn btn-success btn-save">บันทึก</button>
                <?php } ?> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
