class DetailComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isTabShow: props.isTabShow,
      isTabCustomerOn: true,
      isTabProjectOn: false,
      isTabLandOn: false,
      isTabPlanOn: false
    };

    // This binding is necessary to make `this` work in the callback
    // this.handleOpen = this.handleOpen.bind(this);
    // this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {}

  render() {
    const {
      isTabShow,
      isTabCustomerOn,
      isTabProjectOn,
      isTabLandOn,
      isTabPlanOn
    } = this.state;

    return (
      <section>
        <HeaderComponent isTabShow={isTabShow} />

        {/* ข้อมูลผู้ใช้นำ้ ช้อมูลโครงการ ข้อมูลที่ดิน แบบแปลนและแผนที่ */}
        <div className="form-row">
          <div className="form-group col-md-12">
            <ul className="nav nav-tabs md-tabs" level="1">
              <li
                className="nav-item"
                onClick={() =>
                  this.setState({
                    isTabCustomerOn: true,
                    isTabProjectOn: false,
                    isTabLandOn: false,
                    isTabPlanOn: false
                  })
                }
              >
                <a
                  className={isTabCustomerOn ? "nav-link active" : "nav-link"}
                  data-toggle="tab"
                  href="#/"
                  // href="#tab_approve_user"
                  role="tab"
                  // level="1"
                  // sort="0"
                >
                  ข้อมูลผู้ใช้น้ำ
                </a>
                <div className="slide"></div>
              </li>
              <li
                className="nav-item"
                onClick={() =>
                  this.setState({
                    isTabCustomerOn: false,
                    isTabProjectOn: true,
                    isTabLandOn: false,
                    isTabPlanOn: false
                  })
                }
              >
                <a
                  className={isTabProjectOn ? "nav-link active" : "nav-link"}
                  data-toggle="tab"
                  href="#/"
                  // href="#tab_approve_project"
                  role="tab"
                  // level="1"
                  // sort="1"
                >
                  ข้อมูลโครงการ
                </a>
                <div className="slide"></div>
              </li>
              <li
                className="nav-item"
                onClick={() =>
                  this.setState({
                    isTabCustomerOn: false,
                    isTabProjectOn: false,
                    isTabLandOn: true,
                    isTabPlanOn: false
                  })
                }
              >
                <a
                  className={isTabLandOn ? "nav-link active" : "nav-link"}
                  data-toggle="tab"
                  href="#/"
                  // href="#tab_approve_land"
                  role="tab"
                  // level="1"
                  // sort="2"
                >
                  ข้อมูลที่ดิน
                </a>
                <div className="slide"></div>
              </li>
              <li
                className="nav-item"
                onClick={() =>
                  this.setState({
                    isTabCustomerOn: false,
                    isTabProjectOn: false,
                    isTabLandOn: false,
                    isTabPlanOn: true
                  })
                }
              >
                <a
                  className={isTabPlanOn ? "nav-link active" : "nav-link"}
                  data-toggle="tab"
                  href="#/"
                  // href="#tab_approve_plan"
                  role="tab"
                  // level="1"
                  // sort="3"
                >
                  แบบแปลนและแผนผัง
                </a>
                <div className="slide"></div>
              </li>
            </ul>
          </div>
        </div>

        {/* ระละเอียดแต่ละแท็บ */}
        <div className="form-row">
          <div className="form-group col-md-12">
            <div className="tab-content" name="myTabContent">
              {/* CustomerComponent */}
              {isTabCustomerOn ? (
                <CustomerComponent isTabShow={isTabShow} />
              ) : (
                ""
              )}

              {/* ProjectComponent */}
              {isTabProjectOn ? <ProjectComponent isTabShow={isTabShow} /> : ""}

              {/* LandComponent */}
              {isTabLandOn ? <LandComponent isTabShow={isTabShow} /> : ""}

              {/* PlanComponent */}
              {isTabPlanOn ? <PlanComponent isTabShow={isTabShow} /> : ""}
            </div>
          </div>
        </div>

        {/* ปุ่มบันทึกข้อมูล */}
        <div className="float-right m-t-0 save-data">
          <button
            type="button"
            className="btn btn-danger"
            data-dismiss="modal"
            onClick={this.handleClose}
          >
            ยกเลิก
          </button>
          <button type="button" className="btn btn-success btn-save-data m-l-3">
            บันทึก
          </button>
        </div>
      </section>
    );
  }
}
