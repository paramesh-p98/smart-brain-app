import React from 'react';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particles from "react-tsparticles";
import './App.css';
import { particleOptions } from './particleOptions';
import { Component } from 'react';


const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  route: 'Signin',
  isSignedIn: false,
  userProfile: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({
      userProfile:
      {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    })

  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({ box: box })
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  onButtonsubmit = () => {
    this.setState({ imageUrl: this.state.input })
    fetch('https://ancient-waters-25508.herokuapp.com/imageapi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        input: this.state.input
      })
    }).then(response => response.json())
      .then(response => {
        if (response) {
          fetch('https://ancient-waters-25508.herokuapp.com:3001/image', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: this.state.userProfile.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.userProfile, { entries: count }))
            }).catch(console.log)
        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => this.displayFaceBox({ leftCol: 0, topRow: 0, rightCol: 0, bottomRow: 0 }));
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState);
    } else if (route === 'home') {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  }

  render() {
    return (
      <div className="App" >
        <Particles
          className='particles'
          id="tsparticles"
          options={particleOptions}
        />
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
        {this.state.route === 'home' ?
          <div>
            <Logo />
            <Rank name={this.state.userProfile.name} entries={this.state.userProfile.entries} />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonsubmit={this.onButtonsubmit}
            />
            <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
          </div>
          : (
            this.state.route === 'register' ?
              < Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
              :
              < Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
          )
        }
      </div>
    );
  }
}

export default App;
