import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, PrevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", PrevState);
  }
  constructor(props) {
    super(props);
    /*
    this.state = {
      value: props.counter.value,
      imageUrl: "https://picsum.photos/300",
      tags: ["tag1", "tag2", "tag3"],
    };
    */
  }
  renderTags() {
    if (this.state.tags.length === 0) return <p>there are no tags</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  /*{
  handleIncrement = (product) => {

    this.setState({ value: this.state.value + 1 });
  };

  }*/
  render() {
    // console.log("props", this.props.counter.value);
    return (
      <React.Fragment>
        {/*  <img src={this.state.imageUrl} alt="" />*/}

        <span className={this.getBadgeClasses()}>{this.formatCount()} </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>*/}
        {/*{this.state.tags.length === 0 && "please create a new tag"}
        {this.renderTags()}*/}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
