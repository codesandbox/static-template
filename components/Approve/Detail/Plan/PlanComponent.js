class PlanComponent extends React.Component {
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
      <section name="PlanComponent">
        <div
          className={() =>
            isTabShow ? "tab-pane fade ative show" : "tab-pane fade"
          }
          // name="tab_approve_plan"
          // id="tab_approve_plan"
          role="tabpanel"
          aria-Labelledby="approve-plan-tab"
          // level="1"
        >
          <form name="frmAdd5">
            <div className="form-row">
              <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                <label for="layout_no">เลขที่แบบแปลนและแผนผัง</label>
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
      </section>
    );
  }
}
