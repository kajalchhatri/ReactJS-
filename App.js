
// const heading = React.createElement("h1",{id:"heading", xyz:"abc"}, "hello world from react");
// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


/* 
<div id="parent">
<div id="child">
<h1>this is h1 tag</h1>
<h2>this is h2 tag</h2>
</div>
</div>
*/

const parent = React.createElement("div",{id:"parent"}, React.createElement("div",{id:"child"},
    [React.createElement("h1",{}, "this is h1 tag"),React.createElement("h2",{}, "this is h2 tag")] ));

 root.render(parent);