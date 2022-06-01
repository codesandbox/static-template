class ApproveComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isTabDetailOn: true,
      isTabAttechFileOn: false
    };

    // This binding is necessary to make `this` work in the callback
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    console.log(`DidMount`, this.state);
  }

  componentWillUnmount() {}

  handleClose() {
    $(this.el).hide();
  }

  handleOpen() {
    $(this.el).show();
  }

  render() {
    const { isTabDetailOn, isTabAttechFileOn } = this.state;

    return (
      <section>
        <button onClick={this.handleOpen}>แสดง</button>
        <div
          className="modal"
          role="dialog"
          // name="WaterApproveModal"
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
                  onClick={this.handleClose}
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
                  {/*<!-- Nav tabs -->*/}
                  <ul className="nav nav-tabs md-tabs" role="tablist" level="0">
                    <li
                      className="nav-item"
                      onClick={() =>
                        this.setState({
                          isTabDetailOn: true,
                          isTabAttechFileOn: false
                        })
                      }
                    >
                      <a
                        className={
                          isTabDetailOn ? "nav-link active" : "nav-link"
                        }
                        data-toggle="tab"
                        href="#/"
                        // href="#tab_approve_detail"
                        role="tab"
                        // sort="1"
                      >
                        รายละเอียด
                      </a>
                      <div className="slide"></div>
                    </li>

                    <li
                      className="nav-item"
                      onClick={() =>
                        this.setState({
                          isTabDetailOn: false,
                          isTabAttechFileOn: true
                        })
                      }
                    >
                      <a
                        className={
                          isTabAttechFileOn ? "nav-link active" : "nav-link"
                        }
                        data-toggle="tab"
                        href="#/"
                        // href="#tab_approve_attach"
                        role="tab"
                        // sort="2"
                      >
                        เอกสารแนบ
                      </a>
                      <div className="slide"></div>
                    </li>
                  </ul>
                  {isTabDetailOn ? (
                    <DetailComponent isTabShow={true} />
                  ) : (
                    <AttachFileComponent isTabShow={true} />
                  )}
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
      </section>
    );
  }
}
