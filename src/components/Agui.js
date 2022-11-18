import dignas from '../img/dignas.jpg';
import React, {Component} from 'react';




class Agui extends Component {
    fecha1 = React.createRef();
    fecha2 = React.createRef();
    fechaResult = React.createRef();
    fechaResult = "sin resultado";
    sueldoRef = React.createRef();
    aniosRef = React.createRef();
    diasRef = React.createRef();


    state = {
        fecha1: "sin fecha",
        fecha2: "sin fecha",
        fechaRes: "",
        antig: "",
        sueldo: "",
        vacaciones: "",
        sueldoDiario:"",
        corresp:"",

    }


//definición de fechas Y ANTIGÜEDAD EN AÑOS Y DIAS
    dateConverter = () => {
        const newStartDate = new Date(this.state.fecha1);
        const newEndDate = new Date(this.state.fecha2);
        const one_day = 1000 * 60 * 60 * 24;
        let result = "";
        let comparar = new Date();
        let totalAnios = Math.ceil((newEndDate.getTime() - newStartDate.getTime()) / (one_day))/365;
        totalAnios = Math.trunc(totalAnios);
        comparar = (newEndDate.getFullYear() - newStartDate.getFullYear());
        if(comparar <= 0){
            /*DIFERENCIA DE FECHAS SI SON DEL MISMO AÑO*/
            this.aniosRef = totalAnios;
            console.log("anios Ref  dentro del er if" +  this.aniosRef)
            result = Math.ceil((newEndDate.getTime() - newStartDate.getTime()) / (one_day))
        }else{
            console.log("anios Ref dentro del else" +  this.aniosRef)
            this.aniosRef = totalAnios;
            var now = new Date(this.state.fecha2);
            var start = new Date(now.getFullYear(), 0, 0);
            var diff = now - start;
            var oneDay = 1000 * 60 * 60 * 24;
            var day = Math.floor(diff / oneDay);
            result = day;
            /*DIFERENCIA DE FECHAS SI SON DEL DIFERENTE AÑO*/
        }

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
        let corresp = 0;





        RestaFechas = this.dateConverter();
        console.log("días transcurridos: " + RestaFechas)
        //  PASO 1
        if (this.state.sueldo > 0 && this.state.sueldo !== undefined) {
            sueldoDiario = (this.sueldoRef.current.value / 7);


//DEFINIENDO CORRESPONDIENTE


            corresp = (((sueldoDiario * 15 ) / 365)* RestaFechas).toFixed(2);
            console.log('CORRESPONDIENTE: ' + corresp);

            this.setState({
                fechaRes: RestaFechas,
                sueldo: this.state.sueldo,
                sueldodiario: sueldoDiario,
                antiguedad: antig,
                vacaciones: vacaciones,
                correspondiente: corresp,
                anios: this.aniosRef
            });
        }

        console.log('sueldo semanal ' + this.state.sueldo);
        console.log('sueldo diario' + this.state.sueldodiario);
        console.log('dias laborados' + this.state.fechaRes);
        console.log(' antigüedad ' + antig);
        console.log(' vacaciones ' + this.state.vacaciones);
        console.log('Años Antigüedad' + this.state.anios);
        console.log('Días Antigüedad' + this.state.fechaRes);
        console.log('corresp' + this.state.corresp);

    }



    render()


    {
        return (
            <>




                <div className="center">


                    <div id="sidebar" className="archivosAdminCenter3">
                        <div>
                            <img src={dignas}/>
                        </div>
                        <h1>Dignas</h1>
                        <h2>Aguinaldo</h2>
                        <label>Sueldo semanal</label><br/>
                        <input type="number" ref={this.sueldoRef} onChange={this.changeState}></input><br/><br/>
                        <label>Fecha de ingreso </label><br/>
                        <input type="date" ref={this.fecha1} onChange={this.changeState}></input><br/><br/>
                        <label>Fecha de salida </label><br/>
                        <input type="date" ref={this.fecha2} onChange={this.changeState}></input><br/><br/>
                        <button className="btn" id="btn-table" onClick={this.calcular}>Calcular</button>
                        <br/><br/>
                        <output>Años de antigüedad: {this.state.anios} </output>
                        <br/> <br/>
                        <output>Días transcurridos del año en curso: {this.state.fechaRes} </output>
                        <br/> <br/>
                        <output>Correspondiente: ${this.state.correspondiente} </output>
                        <br/> <br/>


                    </div>
                </div>
            </>
        );
    }
}
export default Agui;
