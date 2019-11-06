import React from 'react';

class AddBuilding extends React.Component {
    
    submitHandler() {
        // console.log(this.props);
        const building = {
            code: this.code.value,
            name: this.name.value,
            address: this.address.value || null,
            coordinates: {
              latitude: this.latitude.value || null,
              longitude: this.longitude.value || null
            }
        };
        // console.log(building);
        this.props.add(building);
    }
    render() {
        return (
            <div className='popup'>
                <input
                    type="text"
                    placeholder="Building Code"
                    ref={value => {this.code=value;}}
                />
                <input
                    type="text"
                    placeholder="Building Name"
                    ref={value => {this.name=value;}}
                />
                <input
                    type="text"
                    placeholder="Building Address"
                    ref={value => {this.address=value;}}
                />
                <input
                    type="text"
                    placeholder="Building Latitude"
                    ref={value => {this.latitude=value;}}
                />
                <input
                    type="text"
                    placeholder="Building Longitude"
                    ref={value => {this.longitude=value;}}
                />
                <p><font color="green">Fill out all the fields and then submit</font></p>
                <button onClick={() => this.submitHandler()}>submit</button>
            </div>
        );
    }
}
export default AddBuilding;