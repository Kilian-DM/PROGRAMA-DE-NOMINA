function calcularempleado() {
  var nombre = document.getElementById("nombre").value;
  var documento= document.getElementById("documento").value;
  var sueldo = document.getElementById("sueldo").value;
  var transporte="";
  var diastrabajados= document.getElementById("diastrabajados").value;
  var salariodiastrabajados="";
  var horasdiurnas = document.getElementById("horasdiurnas").value;
  var salariohorasdiurnas="";
  var horasnocturnas = document.getElementById("horasnocturnas").value;
  var salariohorasnocturnas="";
  var saludpension="";
  var salarioneto="";

  salariodiastrabajados=sueldo/diastrabajados;
  var decimalessalariodiastrabajados=salariodiastrabajados.toFixed(2);
  salariohorasdiurnas=((sueldo/240)*horasdiurnas)*0.25;
  var deciamlessalariohorasdiurnas=salariohorasdiurnas.toFixed(2);
  salariohorasnocturnas=((sueldo/240)*horasnocturnas)*0.75;
  var decimalessalariohorasnocturnas=salariohorasnocturnas.toFixed(2);
  saludpension=sueldo*4/100;
  var decimalessaludpension=saludpension.toFixed(2);
  
  if(sueldo<= 2000000){
    transporte = 117172,00;
    var decimalestransporte=transporte.toFixed(2);
    document.getElementById("nombre-documento").innerHTML="Nombre: "+nombre+"<br><br>Documento: "+documento;
    document.getElementById("salario-diastrabajados").innerHTML="Salario Por dia Trabajado: $"+decimalessalariodiastrabajados+" Pesos Colombianos";
    document.getElementById("subsidio-transporte").innerHTML="Subsidio De Transporte: $"+decimalestransporte+" Pesos Colombianos";
    document.getElementById("salario-horasdiurnas").innerHTML="Salario Horas Diurnas Extas: $"+deciamlessalariohorasdiurnas+" Pesos Colombianos";
    document.getElementById("salario-horasnocturnas").innerHTML="Salario Horas Nocturnas Extas: $"+decimalessalariohorasnocturnas+" Pesos Colombianos";
    document.getElementById("salud-pension").innerHTML="Deduccion De Salud: $"+decimalessaludpension+" Pesos Colombianos<br><br>Deduccion De Pension: $"+decimalessaludpension+" Pesos Colombianos";
    salarioneto=(sueldo*92/100)+(salariohorasdiurnas)+(salariohorasnocturnas)+(transporte)-(saludpension*2);
    var decimalessalarioneto=salarioneto.toFixed(2);
    document.getElementById("salario-neto").innerHTML="Salario Neto: $"+decimalessalarioneto+" Pesos Colombianos";
  }else{
    transporte="";
    document.getElementById("nombre-documento").innerHTML="Nombre: "+nombre+"<br><br>Documento: "+documento;
    document.getElementById("salario-diastrabajados").innerHTML="Salario Por dia Trabajado: $"+decimalessalariodiastrabajados+" Pesos Colombianos";
    document.getElementById("subsidio-transporte").innerHTML="Subsidio De Transporte: "+transporte+"No Recibe Subsidio De Transporte";
    document.getElementById("salario-horasdiurnas").innerHTML="Salario Horas Diurnas Extas: $"+deciamlessalariohorasdiurnas+" Pesos Colombianos";
    document.getElementById("salario-horasnocturnas").innerHTML="Salario Horas Nocturnas Extas: $"+decimalessalariohorasnocturnas+" Pesos Colombianos";
    document.getElementById("salud-pension").innerHTML="Deduccion De Salud: $"+decimalessaludpension+" Pesos Colombianos<br><br>Deduccion De Pension: $"+decimalessaludpension+" Pesos Colombianos";
    salarioneto=(sueldo*92/100)+(salariohorasdiurnas)+(salariohorasnocturnas)+(transporte)-(saludpension*2);
    var decimalessalarioneto=salarioneto.toFixed(2);
    document.getElementById("salario-neto").innerHTML="Salario Neto: $"+decimalessalarioneto+" Pesos Colombianos";
  }
}