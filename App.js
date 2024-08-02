let Parent=React.createElement("div",{id:"Parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"I am H1 tag"),React.createElement("h2",{},"I am H2 tag")]
    )
)








// let heading=React.createElement("h1",{id:"heading"},"Hello World");
// console.log(heading);
let root=ReactDOM.createRoot(document.getElementById("root"));
root.render(Parent);