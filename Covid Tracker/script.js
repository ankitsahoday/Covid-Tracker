function callapi(){

    fetch("https://api.rootnet.in/covid19-in/stats/latest")
    .then(response=>response.json())
    .then(data => datahandle(data))
}



function datahandle(data)
{
    const {deaths}=data.data.summary;
    const {confirmedCasesIndian}=data.data.summary;
    const {discharged}=data.data.summary
    // console.log(data)
    console.log(""+deaths+" ,"+confirmedCasesIndian+","+discharged);
    // const js=[];
    // for (let index = 0; index <36; index++) {
    //     js.push(data.data.regional[index].loc);
        
    // }
    // //  console.log(js);




  
    

    document.getElementById("cin").innerText=confirmedCasesIndian;
    document.getElementById("din").innerText=deaths;
    document.getElementById("rin").innerText=discharged

    statewise(data);

    
}



  function statewise(data)
  {



  
    let x=document.getElementById("individual").value;
    console.log(x);

    var cins=data.data.regional[x].confirmedCasesIndian;
    var rins=data.data.regional[x].discharged;
    var dins=data.data.regional[x].deaths;
  
    console.log(cins+","+rins+","+dins);

    document.getElementById("cis").innerText=cins;
    document.getElementById("ris").innerText=rins;
    document.getElementById("dis").innerText=dins;
  }  




    
    


 