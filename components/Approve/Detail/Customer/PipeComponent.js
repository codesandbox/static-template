class PipeComponent extends React.Component {
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
      <section name="PipeComponent">
        <div
          className={() =>
            isTabShow ? "tab-pane fade ative show" : "tab-pane fade"
          }
          // name="tab_approve_pipe"
          // id="tab_approve_pipe"
          role="tabpanel"
          // level="2"
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
                <input type="hidden" value="1" name="total_pipe" />

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

                    <h5 className="card-header hide-tab" data-name="ชุดท่อ">
                      ชุดท่อที่ 1
                    </h5>

                    <div className="card-body">
                      <input type="hidden" value="1" name="total_sub_pipe_1" />
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
                            <span style={{ color: "red" }}>(*)</span>
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
                            <div className="input-group-addon">นิ้ว</div>
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
                            <span style={{ color: "red" }}>(*)</span>
                          </label>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control pipe_amount allownumericwithdecimal"
                              name="pipe_amount_1_1"
                              placeholder="จำนวน"
                              value=""
                            />
                            <div className="input-group-addon">ท่อ</div>
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
                            <span style={{ color: "red" }}>(*)</span>
                          </label>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control pump_maximum allownumericwithdecimal"
                              name="pump_maximum_1_1"
                              placeholder="ปริมาตรน้ำสูงสุด"
                              value=""
                            />
                            <div className="input-group-addon">ลบ.ม.</div>
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
                            <option value="">โปรดระบุ</option>
                            <option value="true">ติดตั้ง</option>
                            <option value="false">ไม่ติดตั้ง</option>
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
                            <div className="input-group-addon">มม.</div>
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
      </section>
    );
  }
}
