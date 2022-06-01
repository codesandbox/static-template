class GeneralComponent extends React.Component {
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
      <section name="GeneralComponent">
        <div
          className={() =>
            isTabShow ? "tab-pane fade ative show" : "tab-pane fade"
          }
          // name="tab_approve_person"
          // id="tab_approve_person"
          role="tabpanel"
          // level="2"
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
                <label for="name" className="control-label">
                  ชื่อผู้ใช้น้ำ&nbsp;
                  <span style={{ color: "red" }}>(*)</span>
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
                <label for="user_type" className="control-label">
                  ประเภทผู้ใช้น้ำ&nbsp;
                  <span style={{ color: "red" }}>(*)</span>
                </label>
                <select name="user_type" className="form-control select2">
                  <option value="">โปรดระบุประเภท</option>
                  <option value="1">ส่วนราชการ</option>
                  <option value="2">รัฐวิสาหกิจ</option>
                  <option value="3">บุคคลธรรมดา</option>
                  <option value="4">นิติบุคคล</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-xl-6 col-lg-6 col-md-8 sm-12 m-b-15">
                <label for="company_name" className="control-label">
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
                <label for="store_income" className="control-label">
                  จัดเก็บรายได้&nbsp;
                  <span style={{ color: "red" }}>(*)</span>
                </label>{" "}
                {/*
                                                                <!-- <input type="text" className="form-control" name="store_income_name" placeholder="จัดเก็บรายได้" value=""> -->*/}
                <select name="store_income" className="form-control select2">
                  {/* <!-- <option value="">โปรดระบุ</option> --> */}
                  <option value="true">จัดเก็บรายได้</option>
                  {/* <!-- <option value="false">ไม่จัดเก็บรายได้</option> --> */}
                </select>
              </div>
              <div className="form-group col-xl-3 col-lg-3 col-md-6 sm-12 m-b-15">
                <label for="unit_price" className="control-label">
                  ราคาต่อหน่วย&nbsp;
                  <span style={{ color: "red" }}>(*)</span>
                </label>{" "}
                {/*
                                                                <!-- <input type="text" className="form-control" name="unit_price" placeholder="ราคาต่อหน่วย" value=""> -->*/}
                <select name="unit_price" className="form-control select2">
                  <option value="">โปรดระบุ</option>
                  <option value="0.5000">0.50 บาท</option>
                  <option value="0.0246">0.0246 บาท</option>
                  <option value="0.0064">0.0064 บาท</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-xl-2 col-lg-2 col-md-6 sm-12 m-b-15">
                <label for="address_no" className="control-label">
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
                <label for="soi" className="control-label">
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
                <label for="village_no" className="control-label">
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
                <label for="road" className="control-label">
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
                <label for="province_code" className="control-label">
                  จังหวัด&nbsp;
                  <span style={{ color: "red" }}>(*)</span>
                </label>
                <select name="province_code" className="form-control select2">
                  <option value="">โปรดระบุจังหวัด</option>
                </select>
              </div>
              <div className="form-group col-xl-4 col-lg-4 col-md-6 sm-12 m-b-15">
                <label for="district_code" className="control-label">
                  เขต/อำเภอ&nbsp;
                  <span style={{ color: "red" }}>(*)</span>
                </label>
                <select name="district_code" className="form-control select2">
                  <option value="">โปรดระบุแขวง/อำเภอ</option>
                </select>
              </div>
              <div className="form-group col-xl-4 col-lg-4 col-md-6 sm-12 m-b-15">
                <label for="subdistrict_code" className="control-label">
                  แขวง/ตำบล&nbsp;
                  <span style={{ color: "red" }}>(*)</span>
                </label>
                <select
                  name="subdistrict_code"
                  className="form-control select2"
                >
                  <option value="">โปรดระบุเขต/ตำบล</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-xl-3 col-lg-3 col-md-6 sm-12 m-b-15">
                <label for="offmobile" className="control-label">
                  โทรศัพท์&nbsp;
                  <span style={{ color: "red" }}>(*)</span>
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
                <label for="fax" className="control-label">
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
                <label for="email" className="control-label">
                  อีเมล์&nbsp;
                  <span style={{ color: "red" }}>(*)</span>
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
                <label for="at_km" className="control-label">
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
                <label for="project_province_code" className="control-label">
                  จังหวัด&nbsp;
                  <span style={{ color: "red" }}>(*)</span>
                </label>
                <select
                  name="project_province_code"
                  className="form-control select2"
                >
                  <option value="">โปรดระบุจังหวัด</option>
                </select>
              </div>
              <div className="form-group col">
                <label for="project_district_code" className="control-label">
                  เขต/อำเภอ&nbsp;
                  <span style={{ color: "red" }}>(*)</span>
                </label>
                <select
                  name="project_district_code"
                  className="form-control select2"
                >
                  <option value="">โปรดระบุแขวง/อำเภอ</option>
                </select>
              </div>
              <div className="form-group col">
                <label for="project_subdistrict_code" className="control-label">
                  แขวง/ตำบล&nbsp;
                  <span style={{ color: "red" }}>(*)</span>
                </label>
                <select
                  name="project_subdistrict_code"
                  className="form-control select2"
                >
                  <option value="">โปรดระบุเขต/ตำบล</option>
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
              <strong className=" d-block mb-2 ml-1 my-auto">พิกัด</strong>
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
                <label for="number_hours" className="control-label">
                  ปริมาณน้ำที่จะใช้น้ำต่อชั่วโมง&nbsp;
                  <span style={{ color: "red" }}>(*)</span>
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control allownumericwithdecimal"
                    name="number_hours"
                    placeholder="วันละ"
                    value=""
                  />
                  <div className="input-group-addon">ชม.</div>
                </div>
              </div>
              <div className="form-group col-xl-6 col-lg-6 col-md-6 sm-12 m-b-15">
                <label for="number_permonth" className="control-label">
                  ปริมาณน้ำที่จะใช้ต่อเดือน&nbsp;
                  <span style={{ color: "red" }}>(*)</span>
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
                <label for="water_type" className="control-label">
                  ประเภทการใช้น้ำ&nbsp;
                  <span style={{ color: "red" }}>(*)</span>
                </label>
                <select name="water_type" className="form-control select2">
                  <option value="">โปรดระบุประเภท</option>
                  <option value="10">ประปา</option>
                  <option value="11">อุตสาหกรรม</option>
                  <option value="12">สาธารณะ</option>
                  <option value="13">อื่นๆ</option>
                </select>
              </div>
              <div className="form-group col-xl-8 col-lg-8 col-md-12 sm-12 m-b-15">
                <label for="store_income" className="control-label">
                  เพื่อกิจการ&nbsp;
                  <span style={{ color: "red" }}>(*)</span>
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
      </section>
    );
  }
}
