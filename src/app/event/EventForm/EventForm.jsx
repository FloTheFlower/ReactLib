/* global google */

import React, { Component } from "react";
import { Form, Segment, Button, Grid, Header } from "semantic-ui-react";
import { connect } from 'react-redux';
import { createEvent, updateEvent, cancelToggel} from '../eventActions';
import {reduxForm, Field} from 'redux-form';
import {composeValidators, combineValidators, isRequired, hasLengthGreaterThan} from 'revalidate'
import  Textinput  from "../../common/form/Textinput";
import  Textarea  from "../../common/form/Textarea";
import  SelectInput  from "../../common/form/SelectInput";
import  DateInput  from "../../common/form/DateInput";
import  PlaceInput  from "../../common/form/PlaceInput";
import {getLatLng, geocodeByAddress} from 'react-places-autocomplete'
import { withFirestore } from 'react-redux-firebase';
import { toastr } from 'react-redux-toastr';

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  

  let event = {}

  if (state.firestore.ordered.events && state.firestore.ordered.events.length > 0 ) {
    event = state.events.filter(event => event.id === eventId)[0] || {}

}

  return {
    initalValues: event, 
    event
  };
}; 

const actions = {
  createEvent,
  updateEvent, 
  cancelToggel
}

const validate = combineValidators({
  title: isRequired({message: 'The event title is required'}),
  category: isRequired({message: 'The category is required.'}),
  description: composeValidators(
    isRequired({message: 'Please enter a description.'}),
    hasLengthGreaterThan(4) ({message: 'Description needs to be at least 5 characters.'})
  )(),
  city: isRequired('city'),
  venue: isRequired('venue  '), 
  date: isRequired('date')
})

const category = [
  {key: 'drinks', text: 'Drinks', value: 'drinks'},
  {key: 'culture', text: 'Culture', value: 'culture'},
  {key: 'film', text: 'Film', value: 'film'},
  {key: 'food', text: 'Food', value: 'food'},
  {key: 'music', text: 'Music', value: 'music'},
  {key: 'travel', text: 'Travel', value: 'travel'},
];

class EventForm extends Component {

    state = {
      cityLatLng: {},
      venueLatLng: {}
    }

    async componentDidMount() {
      const {firestore, match} = this.props;
      let event = await firestore.setListener(`events/${match.params.id}`);
  }

  onFormSubmit = async values => {
    values.venueLatLng = this.state.venueLatLng;
    try {

      if  (this.props.initalValues.id){
        if (Object.keys(values.venueLatLng).length === 0) {
          values.venueLatLng = this.props.event.venueLatLng
        }
        this.props.updateEvent(values);
        this.props.history.push(`/events/${this.props.initalValues.id}`)
      } else {
      let createdEvent = await this.props.createEvent(values);
      this.props.history.push(`/events/${createdEvent.id}`)
    }

    } catch(error) {
      console.log(error)
    }
   
  };

 
  handleCitySelect = selectedCity => {
    geocodeByAddress(selectedCity)
      .then(results => getLatLng(results[0]))
      .then (latlng => {
        this.setState({
          cityLatLng: latlng
        })
      })
      .then(() => {
          this.props.change('city', selectedCity)
      })
  }

  handleVenueSelect = selectedVenue => {
    geocodeByAddress(selectedVenue)
      .then(results => getLatLng(results[0]))
      .then (latlng => {
        this.setState({
          venueLatLng: latlng
        })
      })
      .then(() => {
          this.props.change('venue', selectedVenue)
      })
  }


  render() {
    const {history, initalValues, invalid, submitting, pristine, event, cancelToggel} = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
        <Segment>
         <Header sub color='teal' content='Event Details'/>
         <Form onSubmit= {this.props.handleSubmit(this.onFormSubmit)} autoComplete="off">
         <Field name = 'title' component={Textinput} placeholder='Give your event a name'/>

         <Field name = 'category' type='text' component={SelectInput} options={category}  placeholder='What is your event about?'/>
         
         <Field name = 'description' component={Textarea}
         rows = {3}
         placeholder='Tell us about your event'/>

         <Header sub color='teal'content='Event Location Details'></Header>
         <Field 
         name = 'city' 
         component={PlaceInput} 
         options={{ types: ['(cities)']}}
         onSelect={this.handleCitySelect}
         placeholder='Event City'/>


         <Field 
         name = 'venue' 
         component={PlaceInput} 
         options={{ 
          location: new google.maps.LatLng(this.state.cityLatLng),
          radius: 1000,
          types: ['establishment']
          }}
          onSelect={this.handleVenueSelect}
         placeholder='Event Venue'/>

         <Field
                name='date'
                component={DateInput}
                dateFormat='dd LLL yyyy h:mm a'
                placeholder='Event date'
                showTimeSelect
                timeFormat='HH:mm'
              />
      

          <Button disabled={invalid || submitting || pristine} positive type="submit">
            Submit
          </Button>
          <Button onClick={
            initalValues.id 
          ? () => history.push(`/events/${initalValues.id}`) 
          : () =>  history.push(`/events`)
        } 
          type="button">
            Cancel
          </Button>
          <Button type='button' 
          color={event.cancelled ? 'green' : 'red'}
          floated = 'right'
          content = {event.cancelled ? 'Reactivate event' : 'Cancel event '}
          onClick={() => cancelToggel(!event.cancelled, event.id)}
          
          
          />
        </Form>
      </Segment>
      </Grid.Column>
      </Grid>
      
    );
  }
}

export default withFirestore (connect(
  mapState, 
   actions
  ) 
  (reduxForm({form: 'eventForm', validate, enableReinitialize: true}) (EventForm)));