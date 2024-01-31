import dignas from '../img/Dignas.jpg';
import React, {Component} from 'react';


class Vacas extends Component {
    fecha1 = React.createRef();
    fecha2 = React.createRef();
    fechaRes = React.createRef();
    sueldoRef = React.createRef();

    state = {
        fecha1: "sin fecha",
        fecha2: "sin fecha",
        fechaRes: "",
        antig: "",
        sueldo: "",
        vacaciones: "",
        prima: "",
        sueldoDiario:"",
        sueldoVacaciones:"",
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
            vacaciones = 12;
          }
          if (antig === 2) {
            vacaciones = 14;
          }
          if (antig === 3) {
            vacaciones = 16;
          }
          if (antig === 4) {
            vacaciones = 18;
          }
          if (antig === 5) {
            vacaciones = 20;
          }
          if (antig === 6) {
            vacaciones = 22;
          }
          if (antig === 7) {
            vacaciones = 22;
          }
          if (antig === 8) {
            vacaciones = 22;
          }
          if (antig === 9) {
            vacaciones = 22;
          }
          if (antig === 10) {
            vacaciones = 22;
          }
          if (antig === 11) {
            vacaciones = 24;
          }
          if (antig === 12) {
            vacaciones = 24;
          }
          if (antig === 13) {
            vacaciones = 24;
          }
          if (antig === 14) {
            vacaciones = 24;
          }
          if (antig === 15) {
            vacaciones = 24;
          }
          if (antig === 16) {
            vacaciones = 26;
          }
          if (antig === 17) {
            vacaciones = 26;
          }
          if (antig === 18) {
            vacaciones = 26;
          }
          if (antig === 19) {
            vacaciones = 26;
          }
          if (antig === 20) {
            vacaciones = 26;
          }
          if (antig === 21) {
            vacaciones = 28;
          }
          if (antig === 22) {
            vacaciones = 28;
          }
          if (antig === 23) {
            vacaciones = 28;
          }
          if (antig === 24) {
            vacaciones = 28;
          }
          if (antig === 25) {
            vacaciones = 28;
          }
          if (antig === 26) {
            vacaciones = 30;
          }
          if (antig === 27) {
            vacaciones = 30;
          }
          if (antig === 28) {
            vacaciones = 30;
          }
          if (antig === 29) {
            vacaciones = 30;
          }
          if (antig === 30) {
            vacaciones = 30;
          }
          if (antig === 31) {
            vacaciones = 32;
          }
          if (antig === 32) {
            vacaciones = 32;
          }
          if (antig === 33) {
            vacaciones = 32;
          }
          if (antig === 34) {
            vacaciones = 32;
          }
          if (antig === 35) {
            vacaciones = 32;
          }
          if (antig === 36) {
            vacaciones = 34;
          }
          if (antig === 37) {
            vacaciones = 34;
          }
          if (antig === 38) {
            vacaciones = 34;
          }
          if (antig === 39) {
            vacaciones = 34;
          }
          if (antig === 40) {
            vacaciones = 34;
          }
          if (antig === 41) {
            vacaciones = 36;
          }
          if (antig === 42) {
            vacaciones = 36;
          }
          if (antig === 43) {
            vacaciones = 36;
          }
          if (antig === 44) {
            vacaciones = 36;
          }
          if (antig === 45) {
            vacaciones = 36;
          }
          if (antig === 46) {
            vacaciones = 38;
          }
          if (antig === 47) {
            vacaciones = 38;
          }
          if (antig === 48) {
            vacaciones = 38;
          }
          if (antig === 49) {
            vacaciones = 38;
          }

            // PASO 3: calculadora

            /* finiq = ((RestaFechas) * ((sueldoDiario / 100)) * 10).toFixed(2);*/
            prima  = (vacaciones * ((sueldoDiario)) / 4).toFixed(2);
            sueldoVacaciones  = (vacaciones * ((sueldoDiario))).toFixed(2);
            granTotal = (parseFloat(prima) + parseFloat(sueldoVacaciones)).toFixed(2);




            this.setState({
                fechaRes: RestaFechas,
                sueldo: this.state.sueldo,
                sueldodiario: sueldoDiario,
                antig: antig,
                vacaciones: vacaciones,
                prima: prima,
                sueldoVacaciones : sueldoVacaciones,
                granTotal : granTotal,

            });
        }

        console.log('sueldo semanal ' + this.state.sueldo);
        console.log('sueldo diario' + this.state.sueldodiario);
        console.log('dias laborados' + this.state.fechaRes);
        console.log(' antigüedad ' + this.state.antig);
        console.log(' vacaciones ' + this.state.vacaciones);
        console.log('vacas' + this.state.vacaciones);
        console.log('prima' + this.state.prima);
        console.log('sueldoVacaciones' + this.state.sueldoVacaciones);
        console.log ('grantTotal' + this.state.granTotal);

    }
    render() {
        return (
            <>


                <div className="center">

                  <div id="sidebar" className="archivosAdminCenter3">
                    <div>
                      <img src={dignas} alt="logo"/>
                    </div>
                    <h1>Dignas</h1>
                    <h2>Vacaciones</h2>
                    <label>Sueldo semanal</label><br/>
                    <input type="number" ref={this.sueldoRef} onChange={this.changeState}></input><br/><br/>
                    <label>Fecha de ingreso </label><br/>
                    <input type="date" ref={this.fecha1} onChange={this.changeState}></input><br/><br/>
                    <label>Fecha de salida </label><br/>
                    <input type="date" ref={this.fecha2} onChange={this.changeState}></input><br/><br/>
                    <button className="btn" id="btn-table" onClick={this.calcular}>Calcular</button>
                    <br/><br/>
                    <output><b>El cálculo de las prestaciones de las personas trabajadoras del hogar, se realizará con base
                      al
                      salario percibido por cada una.</b>
                    </output>
                    <br/> <br/>
                    <output>Años de antigüedad: {this.state.antig} </output>
                    <br/> <br/>
                    <output>Prima Vacacional: ${this.state.prima} </output>
                    <br/> <br/>
                    <output>Días de vacaciones: {this.state.vacaciones} días</output>
                    <br/> <br/>
                    <output>Vacaciones: ${this.state.sueldoVacaciones} </output>
                    <br/> <br/>
                    <output>Gran Total de vacaciones: ${this.state.granTotal} </output>
                    <br/> <br/>
                  </div>
                </div>
            </>
        );
    }
}

export default Vacas;
