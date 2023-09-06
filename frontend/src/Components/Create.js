import React from 'react';
//import {BrowserRouter as Router, Switch, Route, Link, useParams} from 'react-router-dom';
import axios from 'axios';
import './Create.css'

class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    submitRecipe(e) {
        e.preventDefault();

        axios.post("http://localhost:4000/recipes/",{
            title: this.refs.title.value,
            chef: this.refs.chef.value,
            preptime: this.refs.preptime.value,
            cooktime: this.refs.cooktime.value,
            url: this.refs.url.value,
            img: this.refs.img.value,
            recipesToDo: this.refs.recipesToDo.value
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {

      return (
        <div className="container" id="styless">
          <div className="row justify-content-center mt-5">
            <div className="col-md-8">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title text-center">Add Recipe</h3>
                    <div className="mb-3">
                      <label htmlFor="title">Recipe Title</label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="preparationTime">Preparation Time</label>
                      <input
                        type="text"
                        className="form-control"
                        id="preparationTime"
                        name="preparationTime"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="preparationTime">Cook Time</label>
                      <input
                        type="text"
                        className="form-control"
                        id="preparationTime"
                        name="preparationTime"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="reference">Ingredients</label>
                      <input
                        type="text"
                        className="form-control"
                        id="reference"
                        name="reference"
                      
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="instructions">Instructions</label>
                      <input
                        type="text"
                        className="form-control"
                        id="instructions"
                        name="instructions"
                      
                      />
                    </div>
                    <div className='d-grid'>
                    <button type="submit" 
                    className="btn btn-success btn-block">
                        Create
                    </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
    
    
    
    
      )
      }
}


export default Create;