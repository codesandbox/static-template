class ProjectComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isTabShow: props.isTabShow
    };

    // This binding is necessary to make `this` work in the callback
  }

  componentDidMount() {}

  render() {
    const { isTabShow } = this.props;

    return (
      <section name="ProjectComponent">
        <div
          className={() =>
            isTabShow ? "tab-pane fade ative show" : "tab-pane fade"
          }
          // name="tab_approve_project"
          // id="tab_approve_project"
          role="tabpanel"
          aria-labelledby="profile-tab"
          // level="1"
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
                <select name="department_code" className="form-control select2">
                  <option value="">โปรดระบุสำนัก</option>
                </select>
              </div>
              <div className="form-group col-lg-6 col-md-8 col-sm-12 m-b-15">
                <label for="project_code">
                  โครงการ&nbsp;
                  <span style={{ color: "red" }}>(*)</span>
                </label>
                <select name="project_code" className="form-control select2">
                  <option value="">โปรดระบุโครงการ</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col">
                <label for="type_location_code" className="control-label">
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
                <label for="section" className="control-label">
                  <span>มาตรา</span>&nbsp;
                  <span style={{ color: "red" }}>(*)</span>
                </label>
                <select name="section" className="form-control select2">
                  <option value="">โปรดระบุมาตรา</option>
                  <option value="5">มาตรา 5</option>
                  <option value="8">มาตรา 8</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col">
                <label for="project_type_name" className="control-label">
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
                <label for="waterway_law_year">ปีที่ประกาศราชกิจจาฯ</label>{" "}
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
                <label for="waterway_law_date">วันที่ประกาศราชกิจจาฯ</label>{" "}
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
                <label for="start" className="control-label">
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
                <label for="finish" className="control-label">
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
                <label for="payment_method" className="control-label">
                  ช่องทางชำระเงิน&nbsp;
                  <span style={{ color: "red" }}>(*)</span>
                </label>
                <select name="payment_method" className="form-control select2">
                  <option value="">โปรดระบุ</option>
                  <option value="1">ณ ที่ทำการโครงการ</option>
                  <option value="2">ผ่านระบบอิเล็กทรอนิกส์</option>
                  <option value="3">ผ่านระบบธนาคาร</option>
                </select>
              </div>
            </div>

            <div className="form-row payment_project">
              <div className="form-group col">
                <label for="payment_project" className="control-label">
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
                <label for="payment_province_code" className="control-label">
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
                <label for="payment_district_code" className="control-label">
                  เขต/อำเภอ&nbsp;
                  <span style={{ color: "red" }}>(*)</span>
                </label>
                <select
                  name="payment_district_code"
                  className="form-control select2"
                >
                  <option value="">โปรดระบุแขวง/อำเภอ</option>
                </select>
              </div>
              <div className="form-group col">
                <label for="payment_subdistrict_code" className="control-label">
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
      </section>
    );
  }
}
