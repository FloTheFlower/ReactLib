import React, { Component } from "react";
import { Form, Segment, Button, Grid, Header } from "semantic-ui-react";
import { connect } from 'react-redux';
import { createEvent, updateEvent} from '../eventActions';
import cuid from "cuid";
import { reduxForm, Field} from 'redux-form';
import { Textinput } from "../../common/util/form/Textinput";
import { Textarea } from "../../common/util/form/Textarea";
import { SelectInput } from "../../common/util/form/SelectInput";

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: "" 
  }

  if (eventId && state.events.length > 0 ){

    event = state.events.filter(event => event.id === eventId) [0]
  }

  return {
    event
  }
}




const actions = {
  createEvent,
  updateEvent
}

const category = [
  {key: 'drinks', text: 'Drinks', value: 'drinks'},
  {key: 'culture', text: 'Culture', value: 'culture'},
  {key: 'film', text: 'Film', value: 'film'},
  {key: 'food', text: 'Food', value: 'food'},
  {key: 'music', text: 'Music', value: 'music'},
  {key: 'travel', text: 'Travel', value: 'travel'},
];

class EventForm extends Component {

  // state and componentdidmount sollte eigentlich geloescht werden, aber it broke als ich es geloscht habe, also drin gelassen
  state = {...this.props.event};

  componentDidMount(){
    if (this.props.selectedEvent !== null) {
      this.setState({
      ...this.props.selectedEvent
    }) 
    }
  }

  handleFormSubmit = evt => {
    evt.preventDefault();
    if  (this.state.id){
      this.props.updatedEvent(this.state);
      this.props.history.push(`/events/${this.state.id}`)
    } else {
      const newEvent = {
        ...this.state,
        id: cuid(),
        hostPhotoURL: '/assets/user.png'
      }
    this.props.createEvent(newEvent);
    this.props.history.push(`/events`)
  }
  };

  handleInputChange = ({target: {name, value}}) => {
    this.setState({
      [name]: value
    });
  };

  render() {


    return (
      <Grid>
        <Grid.Column width={10}>
        <Segment>
          <Header sub color='teal' content='Event Details'/>
        <Form onSubmit={this.handleFormSubmit} autoComplete="off">
         <Field name = 'title' component={Textinput} placeholder='Give your event a name'/>
         <Field name = 'category' type='text' component={SelectInput} options={category} multiple={true} placeholder='What is your event about?'/>
         <Field name = 'description' component={Textarea}
         rows = {3}
         placeholder='Tell us about your event'/>

         <Header sub color='teal'content='Event Location Details'></Header>
         <Field name = 'city' component={Textinput} placeholder='Event City'/>
         <Field name = 'venue' component={Textinput} placeholder='Event Venue'/>
         <Field name = 'date' component={Textinput} placeholder='Event Date'/>
      

          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={this.props.history.goBack} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
      </Grid.Column>
      </Grid>
      
    );
  }
}

export default connect(
  mapState, actions
  ) 
  (reduxForm({form: 'eventForm'}) (EventForm));
