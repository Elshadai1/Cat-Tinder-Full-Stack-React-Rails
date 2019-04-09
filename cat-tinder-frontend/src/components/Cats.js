import React, { Component } from 'react';
import {
  Col, Container, Row, ListGroup, ListGroupItem, Button, Modal
} from 'react-bootstrap'


class Cats extends Component {
    constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      cats: " "
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow = (e,index) =>  {
    this.setState({ show: index});
  }


render() {
    let {handleDeleteCat, handleUpdateCat} = this.props
      return (
          <Container>
        <Row>
        <Col xs={12}>
          <ListGroup>
          {this.props.cats.map((cat, index) =>{
            return (
              <ListGroupItem key={index}  >
                  <h4>
                    <span className='cat-name'>
                      {cat.name}
                    </span>

                  </h4>


                <button id="submit" onClick={()=> handleDeleteCat(cat)} type="button">
                 Delete Cat
                 </button>

                 <button id="submit" onClick={()=> handleUpdateCat(cat)} type="button">
                  Update Cat
                  </button>


                 <button onClick={e => this.handleShow(e, index)}> More Info </button>
                 <>


        <Modal show={this.state.show === index} onHide={this.handleClose} >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body> {cat.name},  {cat.age}, {cat.enjoys}

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>

              </ListGroupItem>
            )
          })}


        </ListGroup>
        </Col>
        </Row>

  	</Container>
      );
    }
    }


export default Cats;
