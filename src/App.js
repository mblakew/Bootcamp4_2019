import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuildingID: 0,
      data: this.props.data
    };
    console.log(this.state.data[this.state.data.length-1]);
  }

    filterUpdate(value) {
        this.setState({
            filterText: value
        })
    //Here you will need to set the filterText property of state to the value passed into this function
  }

    selectedUpdate(id) {
        this.setState({
            selectedBuildingID: id
        })
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
  }

    add(building) {
      // console.log('Here we are!');
      let data = this.state.data;
      let length = data.length
      let id = data[length - 1].id + 1;
      // console.log(data[length-1]);
      let newBuilding = {
        id: id,
        code: building.code,
        address: building.address,
        latitude: building.latitude,
        longitude: building.longitude,
        name: building.name,
      }

      data.push(newBuilding);

      this.setState({
        data: data
      })
      // console.log(data[length-1]);
  }
    delete(id) {
      let data = this.state.data;
      let filterData = data.filter(building => building.id !== id);
      this.setState({ data: filterData });
  }

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>
        <Search filterUpdate={this.filterUpdate.bind(this)} />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.props.data}
                    delete={this.delete.bind(this)}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding
                selectedBuildingID={this.state.selectedBuildingID}
                data={this.props.data}
              />
              <AddBuilding add={this.add.bind(this)} />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;