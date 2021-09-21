

  
  var ctx = document.getElementById('myChart');
  var ctx = document.getElementById('myChart').getContext('2d');
  var ctx = 'myChart';
var graficar=document.getElementById("grafico")
var torta=document.getElementById("circular")
var linea=document.getElementById("lineal")
var barra=document.getElementById("barras")


torta.onclick = function(a){
  graficar.onclick = function(a){
  let data1=document.getElementById("data").value;
  let data2=document.getElementById("label").value;
  let arra1 = data2.split(',');
  let arra2 = data1.split(',');
  console.log(arra2);
  console.log(arra1);
  var barColors = ["red", "green","blue","orange","brown"];
  var ctx = document.getElementById('myChart');
  var myChart = new Chart(ctx,{
    type: 'doughnut',
    data: {
      labels: arra1,
      datasets: [{
          axis: 'x',
          label:'valores',
          data: arra2,
          backgroundcolor: barColors,
          bordercolor: barColors,
          borderwidth:1
      }]

    },
    options:{
      scales:{
        y:{
          beginAtZero: true
        }
      }
    }
  });
}
}
linea.onclick = function(z){
  graficar.onclick = function(z){
    let data1=document.getElementById("data").value;
    let data2=document.getElementById("label").value;
    let arra1 = data1.split(',');
    let arra2 = data2.split(',');
    console.log(arra2);
    console.log(arra1);
    var barColors = ["red", "green","blue","orange","brown"];
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx,{
      type : 'line',
      data: {
        labels: arra2,
        datasets: [{
          axis: 'y',
          label: 'grafica',
           data:arra1,
           backgroundcolor: barColors,
            bordercolor:barColors,
            borderwith:1
        }]
      },
      options:{
        indexAxis:'x',
        scales:{
          x:{
            beginAtZero:true
          }
        }
      }
    });
  }
}

  barra.onclick = function(a){
      graficar.onclick = function(a){
        let data1=document.getElementById("data").value;
        let data2=document.getElementById("label").value;
        let arra1 = data2.split(',');
        let arra2 = data1.split(',');
        console.log(arra2);
        console.log(arra1);
        var barColors = ["red", "green","blue","orange","brown"];
        var ctx = document.getElementById('myChart');
        var myChart = new Chart(ctx,{
          type: 'bar',
          data:{
            labels: arra1,
            datasets:[{
              label:'',
              data: arra2,
              backgroundcolor:barColors,
              bordercolor: barColors,
              borderwidth: 1
            }]
          },
          options:{
            indexAxis:'x',
            scales:{
              x:{
                beginAtZero:true
              }
            }
          }
        });
      }
  }