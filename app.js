class App extends React.Component {
  componentDidMount() {}

  dataSet = {
    columns: [
      {
        // ลำดับ
        title: "ลำดับ",
        data: "no"
      },
      {
        // ชื่อเข้าใช้งาน
        title: "ชื่อเข้าใช้งาน",
        data: "username"
      },
      {
        // ชื่อผู้ใช้งาน
        title: "ชื่อผู้ใช้งาน",
        data: "fullname"
      },
      {
        // คำสั่ง
        title: "คำสั่ง",
        data: "action"
      },
      {
        // รายละเอียด
        title: "รายละเอียด",
        data: "detail"
      },
      {
        // ip
        title: "ip",
        data: "ip_address"
      },
      {
        // โปรแกรมที่ใช้
        title: "โปรแกรมที่ใช้",
        data: "browser"
      },
      {
        // โปรแกรมที่ใช้
        title: "โปรแกรมที่ใช้",
        data: "create_date",
        render: function (data, type, row, meta) {
          // console.log(data, type, row, meta);
          function dateTh(data) {
            let m_short = [
              "ม.ค.",
              "ก.พ.",
              "มี.ค.",
              "เม.ย.",
              "พ.ค.",
              "มิ.ย.",
              "ก.ค.",
              "ส.ค.",
              "ก.ย.",
              "ต.ค.",
              "พ.ย.",
              "ธ.ค."
            ];
            let m_full = [
              "มกราคม",
              "กุมภาพันธ์",
              "มีนาคม",
              "เมษายน",
              "พฤษภาคม",
              "มิถุนายน",
              "กรกฎาคม",
              "สิงหาคม",
              "กันยายน",
              "ตุลาคม",
              "พฤศจิกายน",
              "ธันวาคม"
            ];
            let dmy = data.split(" ")[0];
            let t = data.split(" ")[1].split(":");
            let d = dmy.split("-")[2];
            let m = parseInt(dmy.split("-")[1]);
            let y = (parseInt(dmy.split("-")[0]) + 543).toString();
            dmy =
              d +
              " " +
              " " +
              m_full[m] +
              " " +
              y +
              " เวลา " +
              t[0] +
              "." +
              t[0] +
              " น.";
            return dmy;
          }
          return dateTh(data);
        }
      }
    ],
    clickChild: (e) => {
      e.preventDefault();
      console.log(e);
    }
  };

  render() {
    return (
      <div>
        {/* <TableComponent data={this.dataSet} /> */}
        <ApproveComponent />
        <ApprovePage />
        {/* <RegisterPage />
        <PlanningPage /> */}
        {/* <DropzoneComponent /> */}
      </div>
    );
  }
}
