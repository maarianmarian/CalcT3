
import React, { Component } from 'react';
import { Navbar } from "react-bootstrap";



class Bar extends Component {

    render() {
        const {ChangeView1} = this.props
        const {ChangeView2} = this.props
        const {ChangeView3} = this.props
        const {ChangeView4} = this.props

        return(
            <div>



              <Navbar bg="light" variant="dark" sticky="true" offsetTop={50}>
                <tbody >
                <tr >
                    <th className="table" >
                        <div >

                          <Navbar bg="light" variant="dark" sticky="true">
                                        <div>
                                            <button className=".btn-navBar" onClick={ChangeView1}>Liquidación</button>
                                            <button className=".btn-navBar" onClick={ChangeView2}>Vacaciones</button>
                                            <button className=".btn-navBar" onClick={ChangeView3}>Aguinaldo</button>
                                            <button className=".btn-navBar" onClick={ChangeView4}>Finiquito</button>
                                        </div>
                          </Navbar>
                        </div>

                    </th>
                </tr>
                </tbody>
              </Navbar>

            </div>
        );
    }

}
export default Bar;
