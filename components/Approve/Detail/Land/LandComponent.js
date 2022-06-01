class LandComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isTabShow: props.isTabShow,
      isTabRoyalLand: true,
      isTabOtherLand: false
    };

    // This binding is necessary to make `this` work in the callback
  }

  componentDidMount() {}

  render() {
    const { isTabShow, isTabRoyalLand, isTabOtherLand } = this.state;

    return (
      <section name="LandComponent">
        <div
          className={() =>
            isTabShow ? "tab-pane fade ative show" : "tab-pane fade"
          }
          // name="tab_approve_land"
          // id="tab_approve_land"
          role="tabpanel"
          aria-labelledby="approve-land-tab"
          // level="1"
        >
          <div className="form-group col-lg-12 col-md-12 col-sm-12">
            <ul className="nav nav-tabs md-tabs" role="tablist" level="2">
              <li
                className="nav-item"
                onClick={() => {
                  this.setState({
                    isTabRoyalLand: true,
                    isTabOtherLand: false
                  });
                }}
              >
                <a
                  className={isTabRoyalLand ? "nav-link active" : "nav-link"}
                  data-toggle="tab"
                  href="#/"
                  // href="#tab_approve_treasury"
                  role="tab"
                  aria-controls="tab_treasury"
                  aria-selected="true"
                  // level="2"
                >
                  ข้อมูลที่ดินราชพัสดุ
                </a>
                <div className="slide"></div>
              </li>
              <li
                className="nav-item"
                onClick={() => {
                  this.setState({
                    isTabRoyalLand: false,
                    isTabOtherLand: true
                  });
                }}
              >
                <a
                  className={isTabOtherLand ? "nav-link active" : "nav-link"}
                  data-toggle="tab"
                  href="#/"
                  // href="#tab_approve_land_other"
                  role="tab"
                  aria-controls="tab_land_other"
                  aria-selected="false"
                  // level="2"
                >
                  ข้อมูลที่ดินอื่นๆ
                </a>
                <div className="slide"></div>
              </li>
            </ul>

            <div className="tab-content card-block">
              {/* RoyalLandComponent */}
              {isTabRoyalLand ? <RoyalLandComponent isTabShow={true} /> : ""}

              {/* OtherLandComponent */}
              {isTabOtherLand ? <OtherLandComponent isTabShow={true} /> : ""}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
