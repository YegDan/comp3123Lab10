import React, { Component } from 'react'
import { FormDataDisplay } from './FormDataDisplay'

export default class Form extends Component {

    constructor(props){
        super(props)
        this.provinces = ["Alberta", "British Columbia", "Monitoba", 
                        "New Brunswick", "Newfoundland and Labrador", 
                        "Nova Scotia", "Ontario", "Prince Edward Island",
                        "Quebec", "Saskatchewan"]
        this.state = {
            email: '',
            name: '',
            address: '',
            address2: '',
            city: '',
            province: '',
            postalCode: '',
            submitted: false
        }
    }

    onValueChanged = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ submitted: true });
    }

  render() {
    return (
      <div>
        <h1>Data Entry Form</h1>
        <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
                <label for="inputEmail1" className="form-label">Email address</label>
                <input 
                type="email" 
                className="form-control" 
                id="inputEmail1" 
                aria-describedby="emailHelp"
                name="email"
                onChange={(e) => this.onValueChanged(e)} />
                
            </div>
            <div className="mb-3">
                <label for="inputName" className="form-label">Name</label>
                <input 
                type="text" 
                className="form-control" 
                id="inputName"
                name="name"
                onChange={(e) => this.onValueChanged(e)} />
         
            </div>
            <div className="mb-3">
                <label for="address1" className="form-label">Address</label>
                <input type="text" 
                className="form-control" 
                id="address1"
                name="address"
                onChange={(e) => this.onValueChanged(e)} />
         
            </div>
            <div className="mb-3">
                <label for="address2" className="form-label">Address 2</label>
                <input type="text" 
                className="form-control" 
                id="address2"
                name="address2"
                onChange={(e) => this.onValueChanged(e)} />
         
            </div>
            <div className="row">
                <div className="col-md-4 mb-3">
                    <label htmlFor="inputCity" className="form-label">City</label>
                    <input type="text" 
                    className="form-control" 
                    id="inputCity"
                    name="city"
                    onChange={(e) => this.onValueChanged(e)} />
                </div>

                <div className="col-md-4 mb-3">
                    <select name='province' className="form-select" onChange={(e) => this.onValueChanged(e)}>
                        {
                            this.provinces.map((province)=>(
                                <option key={province} value={province}>{province}</option>
                            ))
                        }
                    </select>
                </div>

                <div className="col-md-4 mb-3">
                    <label htmlFor="inputPostalCode" className="form-label">Postal Code</label>

                    <input type="text" 
                    className="form-control" 
                    id="inputPostalCode"
                    name="postalCode"
                    onChange={(e) => this.onValueChanged(e)}/>
                </div>
            </div>

          
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        {this.state.submitted && ( 
          <FormDataDisplay
            email={this.state.email}
            name={this.state.name}
            address={this.state.address}
            address2={this.state.address2}
            city={this.state.city}
            province={this.state.province}
            postalCode={this.state.postalCode}
          />
        )}
      </div>
    )
  }
}
