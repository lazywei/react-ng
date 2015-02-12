ReactNg
=======

# Usage

### rcIf

```
var ReactNgMixin = require('react-ng');

var A = React.createClass({
  mixins: [ReactNgMixin],
  render: function(){
    return <div>A</div>
  }
})

var B = React.createClass({
  mixins: [ReactNgMixin],
  render: function(){
    return <div>B</div>
  }
})

var Test = React.createClass({
  render: function(){
    return (
      <A rcIf={false} />
      <B rcIf={true} />
    )
  }
})

React.render(
  <Test />,
  element
)
```
