class OtherLandComponent extends React.Component {
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
      <section name="OtherLandComponent">
        <div
          className={() =>
            isTabShow ? "tab-pane fade ative show" : "tab-pane fade"
          }
          // name="tab_approve_land_other"
          // id="tab_approve_land_other"
          role="tabpanel"
          aria-labelledby="approve-land-other-tab"
          // level="2"
        >
          <form name="frmAdd4">
            <div className="form-row">
              <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                <label for="public_land_owner">ชื่อที่ดินสาธารณประโยชน์</label>
                <input
                  type="text"
                  className="form-control"
                  name="public_land_owner"
                  placeholder="ชื่อที่ดินสาธารณประโยชน์"
                />
              </div>
              <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                <label for="public_land_no">เลขที่หนังสือยินยอม</label>
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
                <label for="public_land_date">วันที่ในหนังสือยินยอม</label>
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
                <label for="sao_land_owner">ชื่ออบต.</label>
                <input
                  type="text"
                  className="form-control"
                  name="sao_land_owner"
                  placeholder="ชื่ออบต"
                />
              </div>
              <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                <label for="sao_land_no">เลขที่หนังสือยินยอม อบต.</label>
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
                <label for="sao_land_date">วันที่ในหนังสือยินยอม อบต.</label>
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
                <label for="md_land_owner">ชื่อสังกัดกรมเจ้าท่า</label>
                <input
                  type="text"
                  className="form-control"
                  name="md_land_owner"
                  placeholder="ชื่อสังกัดกรมเจ้าท่า"
                />
              </div>
              <div className="form-group col-lg-6 col-md-6 col-sm-12 m-b-15">
                <label for="md_land_no">เลขที่หนังสือยินยอม กรมเจ้าท่า</label>
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
                <label for="another_land_owner">ชื่อที่ดินอื่นๆ</label>
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
      </section>
    );
  }
}
