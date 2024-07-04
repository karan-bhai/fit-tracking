const btn = document.getElementById("form");
const form2 = document.getElementById("form2");
const m = document.getElementById("msection");
const date = document.getElementById("date")
const display= document.getElementById("display");

btn.addEventListener("submit",(event)=>{

    let d = event.target.date.value;
    let m = event.target.msection.value;
    let n = event.target.nsection.value;
    let wot = event.target.wt.value;
    let wkt = event.target.wtime.value;

    let userData = JSON.parse(localStorage.getItem("Fit_Per"))??[];
    event.target.reset();
    userData.push({
        'Date':d,
        'msection':m,
        'nsection':n,
        'workoutsec':wot,
        'wakeupsec':wkt
    })
    localStorage.setItem("Fit_Per",JSON.stringify(userData ));
    
    displayData();
    event.preventDefault();
    
})



let displayData=()=>{
    let userData = JSON.parse(localStorage.getItem("Fit_Per"))??[];
    let showdata ='';
    
    userData.forEach((element,i) => {
            showdata+=`                             
                    <tr>
                    <td><input  value="${element.Date}" readonly></td>
                    <td><input  value="${element.msection}" readonly></td>
                    <td><input  value="${element.nsection}" readonly></td>
                    <td><input  value="${element.workoutsec}" readonly></td>
                    <td><input  value="${element.wakeupsec}" readonly></td>
                    </tr>              
              `
            });
            
            form2.innerHTML=showdata;
            
        }
    displayData();

