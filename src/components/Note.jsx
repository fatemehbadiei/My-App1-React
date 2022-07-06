import React, {Component} from "react";


// class Note extends Component{
//     state ={
//
//     }
//     render() {
//         return(
//             <li>{this.props.id} : {this.props.text}</li>
//         )
//     }
// }
//
// export default Note;


// class Note extends Component{
//     state ={
//
//     }
//     render() {
//         return(
//             <>
//                 <h3>{this.props.children}</h3>
//                 <li>{this.props.id} : {this.props.text}</li>
//             </>
//         )
//     }
// }
//
// export default Note;


// class Note extends Component{
//     state ={
//
//     }
//     render() {
//         return(
//             <>
//                 <h3>{this.props.children}</h3>
//                 <li>{this.props.id} : {this.props.text}
//                     <button onClick={this.props.onDelete}>X</button>
//                 </li>
//             </>
//         )
//     }
// }
//
// export default Note;


class Note extends Component {
    state = {}

    render() {
        return (
            <>
                <li>
                    {this.props.id} : {this.props.text}
                    <button onClick={() => this.props.onDelete(this.props.id)}>X</button>
                </li>
            </>
        )
    }
}

export default Note;