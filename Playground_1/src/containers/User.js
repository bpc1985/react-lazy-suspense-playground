import React, { Component, Suspense } from 'react';

const Blog = React.lazy(() => import('./Blog'));

class User extends Component {
  state = {
    displayBlog: false
  };

  modeHandler = () => {
    this.setState(prevState => {
      return { displayBlog: !prevState.displayBlog };
    })
  }

  render() {
    return (
      <div>
        <h1>The User Page</h1>
        <button onClick={this.modeHandler}>Toggle Blog</button>
        {this.state.displayBlog?
          <Suspense fallback={<div>Loading...</div>}>
            <Blog />
          </Suspense>
          :
          null
        }
      </div>
    );
  }
}

export default User;