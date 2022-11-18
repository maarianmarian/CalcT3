import dignas from '../img/dignas.jpg';
import React, {Component} from 'react';


class CalcT extends Component {
    fecha1 = React.createRef();
    fecha2 = React.createRef();
    fechaResult = React.createRef();
    fechaResult = "sin resultado";
    sueldoRef = React.createRef();

    state = {
        fecha1: "sin fecha",
        fecha2: "sin fecha",
        fechaRes: "",
        antig: "",
        sueldo: "",
        vacaciones: "",
        sueldoVacaciones:"",
        aguinaldo: "",
        finiquito: "",
        prima: "",
        sueldoDiario:"",
        granTotal: "",
    }

//definición de fechas
    dateConverter = () => {
        const newStartDate = new Date(this.state.fecha1);
        const newEndDate = new Date(this.state.fecha2);
        const one_day = 1000 * 60 * 60 * 24;
        let result = "";
        result = Math.ceil((newEndDate.getTime() - newStartDate.getTime()) / (one_day))
        // console.log('math result'  + result);
        if (result < 0) {
            return 0
        } else {
            return result
        }
    }

    changeState = () => {

        this.setState({
            fecha1: this.fecha1.current.value,
            fecha2: this.fecha2.current.value,
            sueldo: this.sueldoRef.current.value
        });

    }
    //días, años y sueldo
    calcular = () => {
        let sueldoDiario = 0;
        let vacaciones = 0;
        let aguinaldo = 0;
        let finiq = 0;
        let RestaFechas = 0;
        let antig = 0;
        let prima = 0;
        let sueldoVacaciones = 0;
        let granTotal = 0;

        RestaFechas = this.dateConverter();
        //  PASO 1
        if (this.state.sueldo > 0 && this.state.sueldo !== undefined) {
            sueldoDiario = (this.sueldoRef.current.value/ 7);
            antig = Math.trunc(RestaFechas / 365);
            console.log (antig)

//PASO 2: días de vacaciones

            if (this.state.antig > 0 && this.state.antig !== undefined) {
                vacaciones = 0;}
            if (antig === 1) {
                vacaciones = 6;
            }
            if (antig === 2) {
                vacaciones = 8;
            }
            if (antig === 3) {
                vacaciones = 10;
            }
            if (antig === 4) {
                vacaciones = 12;
            }
            if (antig === 5) {
                vacaciones = 14;
            }
            if (antig === 6) {
                vacaciones = 14;
            }
            if (antig === 7) {
                vacaciones = 14;
            }
            if (antig === 8) {
                vacaciones = 14;
            }
            if (antig === 9) {
                vacaciones = 14;
            }
            if (antig === 10) {
                vacaciones = 16;
            }
            if (antig === 11) {
                vacaciones = 16;
            }
            if (antig === 12) {
                vacaciones = 16;
            }
            if (antig === 13) {
                vacaciones = 16;
            }
            if (antig === 14) {
                vacaciones = 16;
            }
            if (antig === 15) {
                vacaciones = 18;
            }
            if (antig === 16) {
                vacaciones = 18;
            }
            if (antig === 17) {
                vacaciones = 18;
            }
            if (antig === 18) {
                vacaciones = 18;
            }
            if (antig === 19) {
                vacaciones = 18;
            }
            if (antig === 20) {
                vacaciones = 20;
            }
            if (antig === 21) {
                vacaciones = 20;
            }
            if (antig === 22) {
                vacaciones = 20;
            }
            if (antig === 23) {
                vacaciones = 20;
            }
            if (antig === 24) {
                vacaciones = 20;
            }
            if (antig === 25) {
                vacaciones = 22;
            }
            if (antig === 26) {
                vacaciones = 22;
            }
            if (antig === 27) {
                vacaciones = 22;
            }
            if (antig === 28) {
                vacaciones = 22;
            }
            if (antig === 29) {
                vacaciones = 22;
            }
            if (antig === 30) {
                vacaciones = 24;
            }
            if (antig === 31) {
                vacaciones = 24;
            }
            if (antig === 32) {
                vacaciones = 24;
            }
            if (antig === 33) {
                vacaciones = 24;
            }
            if (antig === 34) {
                vacaciones = 24;
            }
            if (antig === 35) {
                vacaciones = 26;
            }
            if (antig === 36) {
                vacaciones = 26;
            }
            if (antig === 37) {
                vacaciones = 26;
            }
            if (antig === 38) {
                vacaciones = 26;
            }
            if (antig === 39) {
                vacaciones = 26;
            }
            if (antig === 40) {
                vacaciones = 28;
            }
            if (antig === 41) {
                vacaciones = 28;
            }
            if (antig === 42) {
                vacaciones = 28;
            }
            if (antig === 43) {
                vacaciones = 28;
            }
            if (antig === 44) {
                vacaciones = 28;
            }
            if (antig === 45) {
                vacaciones = 30;
            }
            if (antig === 46) {
                vacaciones = 30;
            }
            if (antig === 47) {
                vacaciones = 30;
            }
            if (antig === 48) {
                vacaciones = 30;
            }
            if (antig === 49) {
                vacaciones = 30;
            }

            // PASO 3: calculadora
            sueldoVacaciones = (vacaciones * ((sueldoDiario)) / 4).toFixed(2);
            aguinaldo = ((sueldoDiario) * 15).toFixed(2);
            prima  = (vacaciones * ((sueldoDiario)) / 4).toFixed(2);
            finiq= (sueldoDiario + vacaciones).toFixed(2);
            granTotal = (parseFloat(aguinaldo) + parseFloat(sueldoVacaciones));


            this.setState({
                fechaRes: RestaFechas,
                sueldo: this.state.sueldo,
                sueldoDiario: sueldoDiario,
                antig: antig,
                vacaciones: vacaciones,
                finiquito: finiq,
                aguinaldo: aguinaldo,
                prima: prima,
                granTotal : granTotal,
                sueldoVacaciones : sueldoVacaciones,

            });
        }

        console.log('sueldo semanal ' + this.state.sueldo);
        console.log('sueldo diario' + this.state.sueldodiario);
        console.log('dias laborados' + this.state.fechaRes);
        console.log(' antigüedad ' + this.state.antig);
        console.log(' vacaciones ' + this.state.vacaciones);
        console.log('finiquito ' + this.state.finiquito);
        console.log('aguinaldo' + this.state.aguinaldo);
        console.log('prima' + this.state.prima);
        console.log ('grantTotal' + this.state.granTotal);

    }
    render() {
        return (


            <div className="center">

                <div id="sidebar" className="archivosAdminCenter3">
                    <div>
                        <img src={dignas}/>
                    </div>
                    <h1>Dignas</h1>
                    <h2>Finiquito</h2>
                    <label>Sueldo semanal</label><br/>
                    <input type="number" ref={this.sueldoRef} onChange={this.changeState}></input><br/><br/>
                    <label>Fecha de ingreso </label><br/>
                    <input type="date" ref={this.fecha1} onChange={this.changeState}></input><br/><br/>
                    <label>Fecha de salida </label><br/>
                    <input type="date" ref={this.fecha2} onChange={this.changeState}></input><br/><br/>
                    <button className="btn" id="btn-table" onClick={this.calcular}>Calcular</button>
                    <br/><br/>
                    <output>Años de antigüedad: {this.state.antig} </output>
                    <br/> <br/>
                    <output>Aguinaldo: ${this.state.aguinaldo} </output>
                    <br/> <br/>
                    <output>Prima: ${this.state.prima} </output>
                    <br/> <br/>
                    <output>Finiquito: ${this.state.finiquito} </output>
                    <br/> <br/>
                    <output>Gran Total de finiquito: ${this.state.granTotal} </output>
                    <br/> <br/>
                </div>
            </div>
        );
    }
}
export default CalcT;
