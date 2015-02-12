var ReactNgMixin = {
  /***************/
  /*    rcIf    */
  /***************/

  componentWillMount: function() {
    this.origRenderer = this.render;
    if (this.props.rcIf === undefined) {
      this.props.rcIf = true;
    }
    this.reactIfComponent(this.props.rcIf);
  },

  componentWillReceiveProps: function(nextProps) {
    this.reactIfComponent(nextProps.rcIf);
  },

  reactIfComponent: function(willShow) {
    if (willShow !== undefined && !willShow) {
      this.render = function() {
        return null;
      };
    } else {
      this.render = this.origRenderer;
    }
  }
};
