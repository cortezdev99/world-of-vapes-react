import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { createJuice } from '../../store/actions/juiceActions'
import { storage } from '../../config/fbConfig'
import firebase from '../../config/fbConfig'

class CreateJuice extends Component {
  constructor() {
    super()
    this.state = {
      brand: '',
      descript: '',
      flavor1: '',
      flavor2: '',
      flavor3: '',
      url: '',
      progress: 0,
      fileName: '',
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
    if (!this.fileInput.current.files[0]) {
      this.props.createJuice(this.state)
    } else {
      const metadata = {
        contentType: 'image/jpeg'
      }
  
      const uploadTask = storage.ref(`juiceImages/${this.fileInput.current.files[0].name}`).put(this.fileInput.current.files[0], metadata)
  
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
        storage.ref('juiceImages').child(this.fileInput.current.files[0].name).getDownloadURL().then(url => {
          this.setState({ 
            url: url,
            fileName: this.fileInput.current.files[0].name
          })
        }).then(() => {
          this.props.createJuice(this.state)
        })
      })
    }
  }
  
  render() {
    const { auth } = this.props
    if (!auth.uid) return <Redirect to="/auth" />
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit} className="create-form">
          <h5>Post a new juice!</h5>
          <div className="input-field-group">
            <div>
              <input
                id="brand"
                type="text"
                placeholder="Brand Name"
                onChange={this.handleChange}
              />
            </div>

            <div>
              <input
                id="descript"
                type="text"
                placeholder="Description"
                onChange={this.handleChange}
              />
            </div>

            <div>
              <input
                id="flavor1"
                type="text"
                placeholder="Flavor"
                onChange={this.handleChange}
              />
            </div>

            <div>
              <input
                id="flavor2"
                type="text"
                placeholder="Flavor"
                onChange={this.handleChange}
              />
            </div>

            <div>
              <input
                id="flavor3"
                type="text"
                placeholder="Flavor"
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
    createJuice: (juice) => dispatch(createJuice(juice))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateJuice)