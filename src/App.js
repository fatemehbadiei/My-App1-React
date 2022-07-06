
import React ,{Component} from "react" ;
import Notes from "./components/Notes";

//
// class App extends Component{
//   render (){
//     return(
//         <>
//           <Notes/>
//         </>
//     );
//   }
//
// }
// export default App;


class App extends Component{

    state = {
        notes:[
            {id:5 , text: "note5"},
            {id:6 , text: "note6"},
            {id:7 , text: "note7"},
            {id:8 , text: "note8"},
        ]
    }
    handelDelet =(id) =>{
        const newNotes = this.state.notes.filter(note => note.id !== id);
        this.setState({notes : newNotes})
    }

    render (){
        return(
            <>
                <Notes onDeletApp={this.handelDelet} notes={this.state.notes}/>
            </>
        );
    }

}
export default App;

