class HeaderComponent extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <section name="HeaderComponent">
        <div className="form-row btn-action">
          <div className="form-group col-lg-12 col-md-12 col-sm-12">
            <div className="btn-group-modal col-lg-12 col-md-12 col-sm-12">
              <button
                type="button"
                name="btn-edit"
                className="btn btn-warning col-lg-2 col-md-3 col-sm-12"
              >
                <i className="fas fa-check-circle"></i>แก้ไข
              </button>
              <button
                type="button"
                name="btn-confirm"
                className="btn btn-info col-lg-2 col-md-3 col-sm-12"
              >
                <i className="fas fa-check-circle"></i>ยืนยันข้อมูล
              </button>
              <button
                type="button"
                name="btn-signature"
                className="btn btn-success col-lg-3 col-md-5 col-sm-12"
              >
                <i className="fas fa-file-signature"></i>ลงนามหนังสืออนุญาต
              </button>
              <button
                type="button"
                name="btn-renew"
                className="btn btn-primary col-lg-2 col-md-3 col-sm-12"
              >
                <i className="fas fa-check-circle"></i>ต่อสัญญา
              </button>
              <button
                type="button"
                name="btn-delete"
                className="btn btn-danger col-lg-2 col-md-3 col-sm-12"
              >
                <i className="fas fa-trash-alt"></i>ยกเลิก
              </button>
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
              <label for="renew_contract">ต่อสัญญา ครั้งที่</label>
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
      </section>
    );
  }
}
