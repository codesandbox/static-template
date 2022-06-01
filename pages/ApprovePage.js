class ApprovePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  handleCloseModal() {
    // console.log(`closeModal`, this.el);
    $(this.el).hide();
  }

  handleOpenModal() {
    // console.log(`closeModal`, this.el);
    $(this.el).show();
  }

  render() {
    return (
      <section name="ApprovePage">
        <p></p>
      </section>
    );
  }
}
