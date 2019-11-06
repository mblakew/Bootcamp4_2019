import React from 'react';


// class RemoveBuilding extends React.Component {
// 	render() {
// 		const { data, removedUpdate, selectedBuilding } = this.props;
// 		return(
// 			<div>
// 				<button onClick = { () => removedUpdate(selectedBuilding)}>
// 					<i>
// 						Click to delete
// 					</i>

// 				</button>
// 			</div>
// 		);
// 	}
// }



class RemoveBuilding extends React.Component
{
    // onRemove() {
    //     console.log(this.props.id);
    //     if(this.props.building){
    //         this.props.removeBuilding(this.props.building);
    //     }
    //     else{
    //         console.log('no id');
    //     }
    // }

    render() {
        const { data, building, removeBuilding } = this.props;
        return (
            <button onClick = { () => removeBuilding(building)}>
                <p> Remove It!! </p>
            </button>

        );
    }
}

export default RemoveBuilding;