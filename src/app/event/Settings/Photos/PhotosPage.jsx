import React, {useState, useEffect, Fragment} from "react";
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import toastr from 'react-redux-toastr';
import {
  Image,
  Segment,
  Header,
  Divider,
  Grid,
  Button,
  Card
} from "semantic-ui-react";
import DropzoneInput from "./DropzoneInput";
import {uploadProfileImage} from '../../User/userActions'
import UserPhotos from "./UserPhotos";


const query = ({auth}) => {
  return [

    {
      collection: 'users',
      doc: auth.uid, 
      subcollections: [{collection: 'photos'}], 
      storeAs: 'photos'
    }
  ]
}

const actions = {
  uploadProfileImage
}


const mapState = (state) => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile,
  photos: state.firestore.ordered.photos
})

const PhotosPage = ({uploadProfileImage, photos, profile}) => {
 const [files, setFiles] = useState([]);
const [image, setImage] = useState(null)

useEffect(() => {
  return () => {
    files.forEach(file => URL.revokeObjectURL(file.preview))
  }
}, [files])

 

const handleUploadImage = async() => {
  try{

    await uploadProfileImage(image, files[0].name)
    toastr.success('Success', 'Photo has been uploaded')

  } catch(error) {
    console.log(error);
    toastr.error('Ooops', 'Something went wrong')
  }
}


const handleCacnelCrop = () => {
    setFiles([]);
    setImage(null)

}


    return (
      <Segment>
        <Header dividing size="large" content="Your Photos" />
        <Grid>
          <Grid.Row />
          <Grid.Column width={4}>
            <Header color="teal" sub content="Step 1 - Add Photo" />  
            <DropzoneInput setFiles = {setFiles}/>
          </Grid.Column>
          <Grid.Column width={1} />
          <Grid.Column width={4}>
            <Header sub color="teal" content="Step 2 - Resize image" />
          </Grid.Column>
          <Grid.Column width={1} />
          <Grid.Column width={4}>
            <Header sub color="teal" content="Step 3 - Preview & Upload" />
            {files.length > 0 && (
              <Fragment>
            
            <Image src={files[0].preview} style={{minHeight: '200px', minWidth: '200px'}} />

            <Button.Group>

              <Button onClick={handleUploadImage} style={{width: '100px'}} positive icon='check' />
              <Button onClick={handleCacnelCrop} style={{width: '100px'}} icon='close' />
             

            </Button.Group>
            </Fragment>
           )}


          </Grid.Column>
        </Grid>



        <Divider />
       <UserPhotos photos={photos} profile={profile}/>
      </Segment>
    );
  }


export default compose(
  connect(mapState, actions),
  firestoreConnect(auth => query(auth))
)(PhotosPage);
