import React from 'react';

class ViewBuilding extends React.Component {
    render() {
        const { selectedBuildingID, data } = this.props;
        let blah;
        
        
        if (selectedBuildingID == 0) {
            blah = <i>Click on a name to view more information...</i>;
        }
        else {
            var concaObject = [];

            const selectedBoi = data.find(e => e.id == selectedBuildingID)

            Object.keys(selectedBoi).map((key) => {
                if (key == "coordinates") {
                    concaObject.push(<li><text className="whiteSpaceNoWrap">latitude: </text><text className="whiteSpaceNoWrap">{selectedBoi[key].latitude}</text></li>)
                    concaObject.push(<li><text className="whiteSpaceNoWrap">longitude: </text><text className="whiteSpaceNoWrap">{selectedBoi[key].longitude}</text></li>)


                }
                else {
                    concaObject.push(<li><text className="whiteSpaceNoWrap">{key}</text><text className="whiteSpaceNoWrap">: </text><text className="whiteSpaceNoWrap">{selectedBoi[key]}</text></li>)

                    
                }
            })
            blah = concaObject;

        }
        return (
            
            <div>
                <p>
                    {blah}
                </p>
            </div>
        );
    }
}
export default ViewBuilding;