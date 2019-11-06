
import React from 'react';
import {connect} from "react-redux";
import {getinfos,updateinfos } from "../actions";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
// import axios from 'axios'

class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            objet:"",
            name:  "",
            phone: "",
            subject:"",
            image:""
        
        };
    }
    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };

    componentDidMount=()=>{
        this.props.getinfos(this.props._id)
    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    render() {
        console.log(this.props.info)
        return (
        <div>
            <span color="warning" className="span"
                onClick={
                    () => {
                        this.toggle();
                        this.props.getinfos(this.props._id)

                    }
            }>Edit</span>
            <Modal isOpen={
                    this.state.modal
                }
                toggle={
                    this.toggle
                }
                className={
                    this.props.className
            }>
                <ModalHeader toggle={
                    this.toggle
                }>Edit Info</ModalHeader>
                <ModalBody>

                    <FormGroup>

                        <Label for="exampleimage">image</Label>
                        <Input id="exampleimage" name="image"
                            value={
                                this.state.image
                            }
                            onChange={
                                this.handleChange
                            }
                            placeholder={this.props.info.image}
                            type="text"/>


                        <Label for="exampleName">name</Label>
                        <Input id="exampleName" name="Name"
                            value={
                                this.state.name
                            }
                            placeholder={this.props.info.name}
                            onChange={
                                this.handleChange                            }
                            type="text"/>

                        <Label for="examplephone">phone</Label>
                        <Input id="examplephone" name="phone"
                            value={
                                this.state.phone
                            }
                            onChange={
                                this.handleChange                            }
                            placeholder={this.props.info.phone}
                            type="text"/>

                         <Label for="examplephone">subject</Label> 
                            <Input id="examplesubject" name="subject"
                            value={
                                this.state.subject
                            }
                            onChange={
                                this.handleChange                            }
                            placeholder={this.props.info.subject}
                            type="text"/>
                         
                         <Label for="examplephone">objet</Label>
                         <Input id="exampleobjet" name="objet"
                            value={
                                this.state.objet
                            }
                            onChange={
                                this.handleChange                            }
                            placeholder={this.props.info.objet}
                            type="text"/>


                    </FormGroup>


                </ModalBody>
                <ModalFooter>

                   
                    <Button color="primary"
                        onClick={
                         () => {
                this.props.updateinfos(this.props.id, {
                  name:this.props.info.name,
                  phone:this.props.info.phone,
                  image:this.props.info.image,
                  objet:this.props.info.objet,
                  subject:this.props.info.subject


                });
              }}
                    >Save</Button>

                    <Button color="secondary"
                        onClick={
                            this.toggle
                    }>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>);
    }
}
export default connect(
   
  state => {
    return {infos:state.info};
  },
  {getinfos,updateinfos}
)(Edit);
