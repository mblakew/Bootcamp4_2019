import React from 'react';

class ViewBuilding extends React.Component {
    render() {
        let myvar;
        const { selectedBuildingID, data } = this.props;        
        if (selectedBuildingID === 0) {
            myvar = <i>Select a building</i>;
        }
        else {
            var myvar2 = [];

            const building = data.find(b => b.id === selectedBuildingID)

            Object.keys(building)
            .map((k) => {
                if (k !== "coordinates") {
                    myvar2.push(<li><text className="">{k}</text><text className="whiteSpaceNoWrap">: </text><text className="whiteSpaceNoWrap">{building[k]}</text></li>)
                }
                else {
                    myvar2.push(<li><text className="whiteSpaceNoWrap">latitude: </text><text className="whiteSpaceNoWrap">{building[k].latitude}</text></li>)
                    myvar2.push(<li><text className="whiteSpaceNoWrap">longitude: </text><text className="whiteSpaceNoWrap">{building[k].longitude}</text></li>)
                }
            })
            myvar = myvar2;

        }
        return (
            
            <div>
                <p>
                    {myvar}
                </p>
            </div>
        );
    }
}
export default ViewBuilding;