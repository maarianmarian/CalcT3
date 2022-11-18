import React, { Component } from 'react';

class Bar extends Component {

    render() {
        const {ChangeView1} = this.props
        const {ChangeView2} = this.props
        const {ChangeView3} = this.props
        const {ChangeView4} = this.props

        return(
            <div>
                <tbody >
                <tr >
                    <th className="table" >
                        <div >
                                <ul>
                                    <li>
                                        <div>
                                            <button className="btn-navBar" onClick={ChangeView1}>Completo</button>
                                            <button className="btn-navBar" onClick={ChangeView2}>Vacaciones</button>
                                            <button className="btn-navBar" onClick={ChangeView3}>Aguinaldo</button>
                                            <button className="btn-navBar" onClick={ChangeView4}>Finiquito</button>
                                        </div>
                                    </li>
                                </ul>
                        </div>

                    </th>
                </tr>
                </tbody>
                <div>


                </div>

            </div>
        );
    }

}
export default Bar;