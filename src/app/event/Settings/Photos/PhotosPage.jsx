import React, {useState, useEffect, Fragment} from "react";
import {connect} from 'react-redux';
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

const actions = {
  uploadProfileImage
}



const PhotosPage = ({uploadProfileImage}) => {
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
        <Header sub color="teal" content="All Photos" />

        <Card.Group itemsPerRow={5}>
          <Card>
            <Image src="https://randomuser.me/api/portraits/men/20.jpg" />
            <Button positive>Main Photo</Button>
          </Card>

          <Card>
            <Image src="https://randomuser.me/api/portraits/men/20.jpg" />
            <div className="ui two buttons">
              <Button basic color="green">
                Main
              </Button>
              <Button basic icon="trash" color="red" />
            </div>
          </Card>
        </Card.Group> 

      </Segment>
    );
  }


export default connect(null, actions)(PhotosPage);
