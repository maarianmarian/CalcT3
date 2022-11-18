import './App.css';
import React, {Component} from 'react';
import Bar from "./components/Bar";
import CalcT from "./components/CalcT";
import Vacas from "./components/Vacas";
import Agui from "./components/Agui";
import Finiq from "./components/finiq";


class App extends Component
{
    UNSAFE_componentWillMount() {
        this.setState({view: 1
    })
    }

    ChangeView1 =() =>{
        this.setState({view: 1
        })
        console.log(this.state.view)
    }
    ChangeView2 =() =>{
        this.setState({view: 2
        })
        console.log(this.state.view)
    }
    ChangeView3 =() =>{
        this.setState({view: 3
        })
        console.log(this.state.view)
    }
    ChangeView4 =() =>{
        this.setState({view: 4
        })
        console.log(this.state.view)
    }
    render() {
        if(this.state.view == 1){
            return (
                <>
                    <Bar
                        ChangeView1 = {this.ChangeView1}
                        ChangeView2 = {this.ChangeView2}
                        ChangeView3 = {this.ChangeView3}
                        ChangeView4 = {this.ChangeView4}
                    />
                    <CalcT/>
                    </>
            )
        }
        if(this.state.view == 2){
            return (
                <>
                    <Bar
                        ChangeView1 = {this.ChangeView1}
                        ChangeView2 = {this.ChangeView2}
                        ChangeView3 = {this.ChangeView3}
                        ChangeView4 = {this.ChangeView4}
                    />
                    <Vacas/>
                </>
            )
        }
        if(this.state.view == 3){
            return (
                <>
                    <Bar
                        ChangeView1 = {this.ChangeView1}
                        ChangeView2 = {this.ChangeView2}
                        ChangeView3 = {this.ChangeView3}
                        ChangeView4 = {this.ChangeView4}
                    />
                    <Agui/>
                </>
            )
        }
        if(this.state.view == 4){
            return (
                <>
                    <Bar
                        ChangeView1 = {this.ChangeView1}
                        ChangeView2 = {this.ChangeView2}
                        ChangeView3 = {this.ChangeView3}
                        ChangeView4 = {this.ChangeView4}
                    />
                    <Finiq/>
                </>
            )
        }
    }

}
export default App;
