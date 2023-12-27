import React from "react";
import  ReactDOM  from "react-dom/client";



/*
  <div id="parent">
   <div id="child">
   <h1>  hi i am a h1 tag</h1>
   </div>
  </div>


*/

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//       "div",
//        { id: "child" },
//        React.createElement(
//         "h1",
//          {},
//          "I am a h1 tag")

//          )

// );
// console.log(parent);

// /*
//   <div id="parent">
//    <div id="child">
//    <h1>  hi i am a h1 tag</h1>
//    <h2>  hi i am a h2 tag</h2>
//    </div>
//   </div>


// */
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am a h1 tag"),
//     React.createElement("h2", {}, "I am a h2 tag"),
//   ])
// );
// console.log(parent);

/*
  <div id="parent">
   <div id="child">
   <h1>  hi i am a h1 tag</h1>
   <h2>  hi i am a h2 tag</h2>
   </div>
   <div id="child2">
   <h1>  hi i am a h1 tag</h1>
   <h2>  hi i am a h2 tag</h2>
   </div>
  </div>


*/
const parent = React.createElement(
    "div",
    { id: "parent" },
  [  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h2", {}, "I am a h2 tag"),
  ]),  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h2", {}, "I am a h2 tag"),
  ])]
  );
  console.log(parent);
//   code line 61-72 is the proof why we need jsx 

// React.createElement("h1",{},"Hello world from react");
// 3 te paramter chaye react.createElement -
//  1st paramter hocche - kon element banate chai
//  2nd parameter - object
//  3rd paramter - content /  children in the object
//  React.createElement()  core react r kaj
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world from react"
// );
// console.log(heading);
//  reacts always want a root/baap to work so creating a root
// createRoot() react dom r kaj
const baba = ReactDOM.createRoot(document.getElementById("root"));
// <div id="root"></div> this is the root jeitar bhetore sob render/screen e show hobe
// baba is containing the address of root so baba will act as the root
// baba hocche react  r root
//  amra baba te change korle oita automatically id=root e change hobe

baba.render(parent);

// heading ta actually ekta object js object
// render() object take niye heading e convert kore baba r niche jholache
