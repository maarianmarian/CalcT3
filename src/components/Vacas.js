import dignas from '../img/dignas.jpg';
import whatsapp from '../img/whatsapp.png';
import React, {Component} from 'react';

let antig =0;
let calcularVacaciones;
calcularVacaciones = (antig) => {
  const antiguedadVacaciones = {
    1: 12,
    2: 14,
    3: 16,
    4: 18,
    5: 20,
    6: 22,
    7: 22,
    8: 22,
    9: 22,
    10: 22,
    11: 24,
    12: 24,
    13: 24,
    14: 24,
    15: 24,
    16: 26,
    17: 26,
    18: 26,
    19: 26,
    20: 26,
    21: 28,
    22: 28,
    23: 28,
    24: 28,
    25: 28,
    26: 30,
    27: 30,
    28: 30,
    29: 30,
    30: 30,
    31: 32,
    32: 32,
    33: 32,
    34: 32,
    35: 32,
    36: 33,
    37: 34,
    38: 34,
    39: 34,
    40: 36,
    41: 36,
    42: 36,
    43: 36,
    44: 36,
    45: 36,
    46: 38,
    47: 38,
    48: 38,
    49: 38,
    50: 40,
  };

  return antiguedadVacaciones[Math.floor(antig)];
};

class Vacas extends Component {
  fecha1 = React.createRef();
  fecha2 = React.createRef();
  fechaRes = React.createRef();
  sueldoRef = React.createRef();

  state = {
    fecha1: "sin fecha",
    fecha2: "sin fecha",
    fechaRes: "",
    sueldo: "",
    vacaciones: "",
    prima: "",
    sueldoDiario: "",
    sueldoVacaciones: "",
    granTotal: "",
    antiguedadVacaciones: "",
    antig:"",
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

  dateConverter2 = () => {
    const newStartDate = new Date(this.state.fecha1);
    const newEndDate = new Date(this.state.fecha2);
    const one_day = 1000 * 60 * 60 * 24;
    let result = "";
    let comparar = new Date();
    let totalAnios = Math.ceil((newEndDate.getTime() - newStartDate.getTime()) / (one_day)) / 365;
    totalAnios = Math.trunc(totalAnios);
    comparar = (newEndDate.getFullYear() - newStartDate.getFullYear());
    if (comparar <= 0) {
      /*DIFERENCIA DE FECHAS SI SON DEL MISMO AÑO*/

      this.aniosRef = totalAnios;
      console.log("anios Ref  dentro del er if" + this.aniosRef)
      result = Math.ceil((newEndDate.getTime() - newStartDate.getTime()) / (one_day))
    } else {
      console.log("anios Ref dentro del else" + this.aniosRef)
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
      sueldo: this.sueldoRef.current.value,
    });

  }
  calcular = () => {

    let sueldoDiario = 0;
    let vacaciones = 0;
    let RestaFechas = 0;
    let RestaFechas2 = 0;
    let prima = 0;
    let sueldoVacaciones = 0;
    let granTotal = 0;
    let antig = 0;


    //días, años y sueldo

    RestaFechas = this.dateConverter();
    RestaFechas2 = this.dateConverter2();
    console.log("días transcurridos: " + RestaFechas2)
    //  PASO 1
    if (this.state.sueldo > 0 && this.state.sueldo !== undefined)
      antig = (RestaFechas / 365);
    sueldoDiario = (this.sueldoRef.current.value / 7);
    vacaciones = calcularVacaciones(antig);
    antig = antig.toFixed(2).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, '$1');
    console.log(antig);


    // PASO 3: calculadora

    /* finiq = ((RestaFechas) * ((sueldoDiario / 100)) * 10).toFixed(2);*/
    prima = (vacaciones * ((sueldoDiario)) / 4).toFixed(2);
    sueldoVacaciones = (vacaciones * ((sueldoDiario))).toFixed(2);
    granTotal = (parseFloat(prima) + parseFloat(sueldoVacaciones)).toFixed(2);


    this.setState({
      fechaRes: RestaFechas,
      fechaRes2: RestaFechas2,
      sueldo: this.state.sueldo,
      sueldodiario: sueldoDiario,
      antig: antig,
      vacaciones: vacaciones,
      prima: prima,
      sueldoVacaciones: sueldoVacaciones,
      granTotal: granTotal,
    });


    console.log('sueldo semanal ' + this.state.sueldo);
    console.log('sueldo diario' + this.state.sueldodiario);
    console.log('dias laborados' + this.state.fechaRes);
    console.log(' antigüedad ' + this.state.antig);
    console.log(' vacaciones ' + this.state.vacaciones);
    console.log('vacas' + this.state.vacaciones);
    console.log('prima' + this.state.prima);
    console.log('sueldoVacaciones' + this.state.sueldoVacaciones);
    console.log('grantTotal' + this.state.granTotal);


  };


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
            <output>Días de vacaciones: {this.state.vacaciones} días</output>
            <br/> <br/>
            <output>Prima Vacacional: ${this.state.prima} </output>
            <br/> <br/>
            <output>Vacaciones: ${this.state.sueldoVacaciones} </output>
            <br/> <br/>
            <output>Gran Total de vacaciones: ${this.state.granTotal} </output>
            <br/> <br/>
          </div>
          <footer>
            *salvo error de carácter aritmético
            <br/>
            <h1_><b>¡Contáctanos!</b></h1_>
            <br/>
            <br/>
            <br/>
            <a
              href="https://api.whatsapp.com/send?phone=5510662703&text=Hola%2C%20las%20contacto%20desde%20app%20de%20Dignas">
              <img src={whatsapp}
                   alt="icono-whatsapp"/>
            </a>

          </footer>
        </div>
      </>
    );
  }
}

export default Vacas;
