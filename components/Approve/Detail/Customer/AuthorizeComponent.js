class AuthorizeComponent extends React.Component {
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
      <section name="AuthorizeComponent">
        <div
          className={() =>
            isTabShow ? "tab-pane fade ative show" : "tab-pane fade"
          }
          // name="tab_approve_authorize"
          // id="tab_approve_authorize"
          role="tabpanel"
          // level="2"
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
                <label for="authorize_name" className="control-label">
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
                <label for="authorize_age" className="control-label">
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
                <label for="authorize_nation" className="control-label">
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
                <label for="authorize_tel" className="control-label">
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
                <label for="authorize2_name" className="control-label">
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
                <label for="authorize2_no" className="control-label">
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
                <label for="authorize2_date" className="control-label">
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
                <label for="authorize2_tel" className="control-label">
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
      </section>
    );
  }
}
