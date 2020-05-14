import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class Dishdetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish(dish) {
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  renderComments(comments) {
    if (comments != null) {
      const options = { year: "numeric", month: "short", day: "2-digit" };

      return (
        <div>
          <h3>Comments</h3>
          <ul>
            {comments.map((comment) => {
              return (
                <React.Fragment>
                  <p>
                    {comment.comment}
                    <br />
                    -- {comment.author},{" "}
                    {new Intl.DateTimeFormat("en-US", options).format(
                      new Date(Date.parse(comment.date))
                    )}
                  </p>
                </React.Fragment>
              );
            })}
          </ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    if (this.props.dish != null)
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.dish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            {this.renderComments(this.props.dish.comments)}
          </div>
        </div>
      );
    else return <div>no dish selected</div>;
  }
}
export default Dishdetail;
