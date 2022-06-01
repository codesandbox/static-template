class RoyalLandComponent extends React.Component {
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
      <section name="RoyalLandComponent">
        <div
          className={() =>
            isTabShow ? "tab-pane fade ative show" : "tab-pane fade"
          }
          // name="tab_approve_treasury"
          // id="tab_approve_treasury"
          role="tabpanel"
          aria-labelledby="approve-treasury-tab"
          // level="2"
        >
          <form name="frmAdd3">
            <div className="form-row">
              <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                <label for="treasury_province">จังหวัดที่ดินราชพัสดุ</label>
                <input
                  type="text"
                  className="form-control"
                  name="treasury_province"
                  placeholder="จังหวัดที่ดินราชพัสดุ"
                />
              </div>
              <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                <label for="treasury_no">เลขที่หนังสือราชพัสดุ</label>
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
                <label for="treasury_date">วันที่ในหนังสือราชพัสดุ</label>
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
                <label for="treasury_compensate_fee">ค่าชดเชย</label>
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
                <label for="treasury_survey_fee">ค่าตรวจสอบ</label>
                <input
                  type="text"
                  className="form-control allownumericwithdecimal"
                  name="treasury_survey_fee"
                  placeholder="ค่าตรวจสอบ"
                />
              </div>
              <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                <label for="treasury_gauge_fee">ค่าธรรมเนียมรังวัด</label>
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
                <label for="treasury_place">พื้นที่ทำการ(สาขา)</label>
                <input
                  type="text"
                  className="form-control"
                  name="treasury_place"
                  placeholder="พื้นที่ทำการ(สาขา)"
                />
              </div>
              <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                <label for="treasury_receipt_no">เลขที่ใบเสร็จ</label>
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
                <label for="treasury_receipt_date">วันที่ใบเสร็จ</label>
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
      </section>
    );
  }
}
