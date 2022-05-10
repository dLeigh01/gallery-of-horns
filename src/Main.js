import React from 'react';
import HornedBeast from './HornedBeast.js';

class Main extends React.Component {
  render() {
    return(
      <main>
        <HornedBeast
          title='Ram'
          imageUrl='https://images.unsplash.com/photo-1558560063-931ca9822a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
          description='A ram'
        />
        <HornedBeast
          title='Stag'
          imageUrl='https://images.unsplash.com/photo-1578343529324-e5358d6feee9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
          description='A stag'
        />
      </main>
    );
  }
}

export default Main;