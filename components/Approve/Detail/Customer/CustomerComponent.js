class CustomerComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isTabShow: props.isTabShow,
      isTabGeneral: true,
      isTabPipeOn: false,
      isTabAuthorizeOn: false
    };

    // This binding is necessary to make `this` work in the callback
  }

  componentDidMount() {}

  render() {
    const {
      isTabShow,
      isTabGeneral,
      isTabPipeOn,
      isTabAuthorizeOn
    } = this.state;

    return (
      <section name="CustomerComponent">
        <div
          className={() =>
            isTabShow ? "tab-pane fade ative show" : "tab-pane fade"
          }
          // name="tab_approve_user"
          // id="tab_approve_user"
          role="tabpanel"
          aria-labelledby="home-tab"
          // level="2"
        >
          <div className="form-row">
            <div className="form-group col-md-12">
              <ul className="nav nav-tabs md-tabs" level="2">
                <li
                  className="nav-item"
                  onClick={() =>
                    this.setState({
                      isTabGeneral: true,
                      isTabPipeOn: false,
                      isTabAuthorizeOn: false
                    })
                  }
                >
                  <a
                    className={isTabGeneral ? "nav-link active" : "nav-link"}
                    data-toggle="tab"
                    href="#/"
                    // href="#tab_approve_person"
                    role="tab"
                    // level="2"
                    // sort="0"
                  >
                    ข้อมูลทั่วไป
                  </a>
                  <div className="slide"></div>
                </li>
                <li
                  className="nav-item"
                  onClick={() =>
                    this.setState({
                      isTabGeneral: false,
                      isTabPipeOn: true,
                      isTabAuthorizeOn: false
                    })
                  }
                >
                  <a
                    className={isTabPipeOn ? "nav-link active" : "nav-link"}
                    data-toggle="tab"
                    href="#/"
                    // href="#tab_approve_pipe"
                    role="tab"
                    // level="2"
                    // sort="1"
                  >
                    วางท่อส่งน้ำ
                  </a>
                  <div className="slide"></div>
                </li>
                <li
                  className="nav-item"
                  onClick={() =>
                    this.setState({
                      isTabGeneral: false,
                      isTabPipeOn: false,
                      isTabAuthorizeOn: true
                    })
                  }
                >
                  <a
                    className={
                      isTabAuthorizeOn ? "nav-link active" : "nav-link"
                    }
                    data-toggle="tab"
                    href="#/"
                    // href="#tab_approve_authorize"
                    role="tab"
                    // level="2"
                    // sort="2"
                  >
                    มอบอำนาจ
                  </a>
                  <div className="slide"></div>
                </li>
              </ul>
            </div>
          </div>

          <div className="tab-content card-block">
            {/* GeneralComponent */}
            {isTabGeneral ? <GeneralComponent isTabShow={isTabShow} /> : ""}

            {/* PipeComponent */}
            {isTabPipeOn ? <PipeComponent isTabShow={isTabShow} /> : ""}

            {/* AuthorizeComponent */}
            {isTabAuthorizeOn ? (
              <AuthorizeComponent isTabShow={isTabShow} />
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    );
  }
}
