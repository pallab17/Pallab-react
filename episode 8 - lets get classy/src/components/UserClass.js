/*
class based component - normal js class

how to create a class syntax
class component_name
e.g class UserClass

and to make it class based component such that reacts understands that is a class based component and tracks it
syntax entends React.Component
*/

class UserClass extends React.Component {
  // it contains a render method /fn which returns a piece of jsx which will be displayed on the ui
  render() {
    return (
      <div className="user-card">
        <h2>Pallab Banerjee</h2>
        <h3>location - Bally</h3>
        <h4>Contact - github-pallab17</h4>
      </div>
    );
  }
}
