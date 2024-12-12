const root = ReactDOM.createRoot(document.getElementById("root"));

// div > h1 | ul > li h2 li h2

root.render(
  React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Hello from React div"),
    React.createElement(
      "ul",
      {},
      React.createElement(
        "li",
        {},
        React.createElement("h2", {}, "Hello from React li 1")
      ),
      React.createElement(
        "li",
        {},
        React.createElement("h2", {}, "Hello from React li 2")
      )
    )
  )
);
