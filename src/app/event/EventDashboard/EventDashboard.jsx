import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import EventList from '../EventList/EventList'
import {connect} from 'react-redux'
import {createEvent,  updateEvent} from '../eventActions'
import LoadingComponent from '../../layout/LoadingComponent'
import EventActivity from '../EventActivity/EventActivity'
import { firestoreConnect } from 'react-redux-firebase'

const mapState = (state) => ({
  events: state.firestore.ordered.events,
  loading: state.async.loading
}) 


const actions  = {
  createEvent, 
  updateEvent
}


 class EventDashboard extends Component {

    handleDeleteEvent = (id) => {
      this.props.deleteEvent(id);
    }

    
    render() { 
        const {events, loading} = this.props;
        if (loading) return <LoadingComponent />
        return (
            <Grid> 
                <Grid.Column width= {10}>
                   < EventList events={events} deleteEvent={this.handleDeleteEvent} />
                </Grid.Column>
                <Grid.Column width= {6}>
                   <h2> Activity Feed </h2>
                   <EventActivity />
                </Grid.Column>

            </Grid>

        )
    }
}

export default connect(mapState, actions)
 (firestoreConnect([{collection: 'events'}])(EventDashboard));