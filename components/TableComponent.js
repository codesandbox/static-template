class TableComponent extends React.Component {
  componentDidMount() {
    // console.log(`componentDidMount`, this.el);
    const { columns, clickChild } = this.props.data;
    this.$el = $(this.el);
    this.$el.DataTable({
      ajax: {
        url: "https://misfund.rid.go.th/damsafety/history/dataTable",
        data: function (data) {
          // preLoader("#" + table);
          // bind_tag_status();
          // data["department_code"] = $("[name=search-department]").val();
          // data["project_code"] = $("[name=search-project]").val();
          // data["document_no"] = $("[name=search-document-no]").val();
          // data["name"] = $("[name=search-name]").val();
          // data["status"] = $("[name=search-status]").val();
          // data["status1"] = $("[name=search-status-1]").val();
          return data;
        },
        type: "POST"
      },
      columns,
      dom:
        '<"row"<"col-sm-6"l><"col-sm-6">><"dt-responsive table-responsive"tr><"row"<"col-sm-6"i><"col-sm-6"p>>',
      ordering: true,
      pagging: true,
      processing: false,
      serverSide: true,
      language: {
        lengthMenu: "แสดง _MENU_ รายการ",
        zeroRecords: "ไม่พบข้อมูลที่ต้องการ",
        info: "แสดง _START_ ถึง _END_ จาก _TOTAL_ รายการ",
        infoFiltered: "",
        infoEmpty: "แสดง 0 ถึง 0 จาก 0 รายการ",
        paginate: {
          next: "ถัดไป",
          previous: "ก่อนหน้า"
        }
      }
    });

    this.$el.on("click", "td", clickChild);
  }

  componentWillUnmount() {}

  render() {
    return (
      <div className="dataTable">
        <table
          className="table table-striped table-bordered nowrap"
          width="100%"
          ref={(el) => (this.el = el)}
        ></table>
      </div>
    );
  }
}
