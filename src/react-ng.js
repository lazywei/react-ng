var ReactNgMixin = {
  /********************/
  /*     react-if     */
  /********************/

  componentWillMount: function() {
    this.renderComponent = this.render;
  },

  componentWillUpdate: function() {
    if (this.props.if != undefined && !this.props.if) {
      this.render = function() {
        return null;
      }
    } else {
      this.render = this.renderComponent;
    }
  }
};
