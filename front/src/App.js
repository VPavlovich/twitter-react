// import React from "react";

// function App() {
//   return <div>Hello world</div>;
// }

// export default App;



import Page from "./component/page";
import PostList from "./container/post-list";

function App() {
  return (
    <Page>
      <PostList />
    </Page>
  )
}

export default App;
