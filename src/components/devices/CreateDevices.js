import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { createDevices } from '../../store/actions/devicesActions'
import { storage } from '../../config/fbConfig'
import firebase from '../../config/fbConfig'

class CreateDevices extends Component {
  constructor() {
    super()
    this.state = {
      brand: '',
      deviceTitle: '',
      descript: '',
      color1: '',
      color2: '',
      color3: '',
      url: '',
      progress: 0
    }
    this.fileInput = React.createRef();
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const metadata = {
      contentType: 'image/jpeg'
    }

    const uploadTask = storage.ref(`deviceImages/${this.fileInput.current.files[0].name}`).put(this.fileInput.current.files[0], metadata)

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, (snapshot) => {
      // progress function ...
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)

      this.setState({
        progress: progress
      })

    }, (error) => {
      // error function...
      switch (error.code) {
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;
    
        case 'storage/canceled':
          // User canceled the upload
          break;
    
        case 'storage/unknown':
          // Unknown error occurred, inspect error.serverResponse
          break;

        default:
          break;
      }
    }, () => {
      // complete function ...
      storage.ref('deviceImages').child(this.fileInput.current.files[0].name).getDownloadURL().then(url => {
        this.setState({ 
          url: url 
        })
      }).then(() => {
        this.props.createDevices(this.state)
      })
    })
  }
  
  render() {
    const { auth } = this.props
    if (!auth.uid) return <Redirect to="/auth" />
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit} className="create-form">
          <h5>Post a new device!</h5>
          <div className="input-field-group">
            <div>
              <input
                id="brand"
                className="input"
                type="text"
                placeholder="Brand Name"
                onChange={this.handleChange}
              />
            </div>

            <div>
              <input
                id="deviceTitle"
                className="input"
                type="text"
                placeholder="Device Name"
                onChange={this.handleChange}
              />
            </div>

            <div>
              <input
                id="descript"
                className="input"
                type="text"
                placeholder="Description"
                onChange={this.handleChange}
              />
            </div>

            <div>
              <input
                id="color1"
                className="input"
                type="text"
                placeholder="Color"
                onChange={this.handleChange}
              />
            </div>

            <div>
              <input
                id="color2"
                className="input"
                type="text"
                placeholder="Color"
                onChange={this.handleChange}
              />
            </div>

            <div>
              <input
                id="color3"
                className="input"
                type="text"
                placeholder="Color"
                onChange={this.handleChange}
              />
            </div>

            <div>
              <input
                id="image"
                className="input image-input"
                type="file"
                ref={this.fileInput}
                placeholder="Upload File"
                onChange={this.handleChange}
              />
            </div>

            <div className="progress">
              <progress value={this.state.progress} max="100" />
            </div>

            <div className="button-wrapper">
              <button className="btn">Create</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createDevices: (device) => dispatch(createDevices(device))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateDevices)