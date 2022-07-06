import React, {Component} from "react";
import Note from "./Note"

// class Notes extends Component {
//     state = {
//         notes:[
//             {id:5 , text: "note5"},
//             {id:6 , text: "note6"},
//             {id:7 , text: "note7"},
//             {id:8 , text: "note8"},
//         ]
//     }
//
//     render() {
//         return (
//             <ul>
//                 {this.state.notes.map(note => <Note key={note.id} id={note.id} text={note.text}/>)}
//             </ul>
//         )
//     }
// }
//
// export default Notes;




// class Notes extends Component {
//     state = {
//         notes:[
//             {id:5 , text: "note5"},
//             {id:6 , text: "note6"},
//             {id:7 , text: "note7"},
//             {id:8 , text: "note8"},
//         ]
//     }
//
//     render() {
//         return (
//             <ul>
//                 {this.state.notes.map(note => <Note key={note.id} id={note.id} text={note.text}>{note.id}</Note>)}
//             </ul>
//         )
//     }
// }
//
// export default Notes;


//0 of 1
// class Notes extends Component {
//     state = {
//         notes:[
//             {id:5 , text: "note5"},
//             {id:6 , text: "note6"},
//             {id:7 , text: "note7"},
//             {id:8 , text: "note8"},
//         ]
//     }
//     handelDelet(){
//         console.log("called parent");
//     }
//
//     render() {
//         return (
//             <ul>
//                 {this.state.notes.map(note => <Note key={note.id} id={note.id} text={note.text} onDelete={this.handelDelet}>{note.id}</Note>)}
//             </ul>
//         )
//     }
// }
//
// export default Notes;


//1 of 1
// class Notes extends Component {
//     state = {
//         notes:[
//             {id:5 , text: "note5"},
//             {id:6 , text: "note6"},
//             {id:7 , text: "note7"},
//             {id:8 , text: "note8"},
//         ]
//     }
//     handelDelet =(id) =>{
//         const newNotes = this.state.notes.filter(note => note.id === id);
//         console.log(newNotes)
//     }
//
//     render() {
//         return (
//             <ul>
//                 {this.state.notes.map(note => <Note key={note.id} id={note.id} text={note.text} onDelete={this.handelDelet}>{note.id}</Note>)}
//             </ul>
//         )
//     }
// }
//
// export default Notes;


//2 of 1
// class Notes extends Component {
//     state = {
//         notes:[
//             {id:5 , text: "note5"},
//             {id:6 , text: "note6"},
//             {id:7 , text: "note7"},
//             {id:8 , text: "note8"},
//         ]
//     }
//     handelDelet =(id) =>{
//         const newNotes = this.state.notes.filter(note => note.id !== id);
//         console.log(newNotes);
//     }
//
//     render() {
//         return (
//             <ul>
//                 {this.state.notes.map(note => <Note key={note.id} id={note.id} text={note.text} onDelete={this.handelDelet}>{note.id}</Note>)}
//             </ul>
//         )
//     }
// }
//
// export default Notes;

//3 of 1
// class Notes extends Component {
//     state = {
//         notes:[
//             {id:5 , text: "note5"},
//             {id:6 , text: "note6"},
//             {id:7 , text: "note7"},
//             {id:8 , text: "note8"},
//         ]
//     }
//     handelDelet =(id) =>{
//         const newNotes = this.state.notes.filter(note => note.id !== id);
//         this.setState({notes : newNotes})
//     }
//
//     render() {
//         return (
//             <ul>
//                 {this.state.notes.map(note => <Note key={note.id} id={note.id} text={note.text} onDelete={this.handelDelet}>{note.id}</Note>)}
//             </ul>
//         )
//     }
// }
//
// export default Notes;

//4 of 1
// class Notes extends Component {
//     state = {
//         notes:[
//             {id:5 , text: "note5"},
//             {id:6 , text: "note6"},
//             {id:7 , text: "note7"},
//             {id:8 , text: "note8"},
//         ]
//     }
//     handelDelet =(id) =>{
//         const notes = this.state.notes.filter(note => note.id !== id);
//         this.setState({notes})
//     }
//
//     render() {
//         return (
//             <ul>
//                 {this.state.notes.map(note => <Note key={note.id} id={note.id} text={note.text} onDelete={this.handelDelet}>{note.id}</Note>)}
//             </ul>
//         )
//     }
// }
//
// export default Notes;

class Notes extends Component {
    state={

    }

    render() {
        return (
            <ul>
                {this.props.notes.map(note => <Note key={note.id} id={note.id} text={note.text} onDelete={this.props.onDeletApp}>{note.id}</Note>)}
            </ul>
        )
    }
}

export default Notes;