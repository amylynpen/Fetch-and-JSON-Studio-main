// TODO: add code here

window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (json) {
            const div = document.getElementById("container");
            div.innerHTML = `<h2>Number of Astronauts: ${json.length}</h2>`;

            json.sort(GetSortOrder("hoursInSpace")); //Pass the attribute to be sorted on  
            function GetSortOrder(time) {
                return function (a, b) {
                    if (a[time] < b[time]) {
                        return 1;
                    } else if (a[time] > b[time]) {
                        return -1;
                    }
                    return 0;
                }
            }

            for (var item in json) {
                if (json[item].active == true) {
                    div.innerHTML += `
                    <div class="astronaut">
                    <div class="bio">
                    <h3>${json[item].firstName}${json[item].lastName}</h3>
                    <ul>                        
                        <li>Hours in space: ${json[item].hoursInSpace} </li>                                      
                        <li style="color: green">Active: ${json[item].active}</li>
                        <li>Skills: ${json[item].skills} </li>       
                        
                    </ul>
                    </div>
                    <img src=${json[item].picture} class="avatar" ></img>   
                </div>
               `;
                } else {

                    div.innerHTML += `
                <div class="astronaut">
                <div class="bio">
                <h3>${json[item].firstName}${json[item].lastName}</h3>
                <ul>                        
                    <li>Hours in space: ${json[item].hoursInSpace} </li>                                      
                    <li>Active: ${json[item].active}</li>
                    <li>Skills: ${json[item].skills} </li>       
                    
                </ul>
                </div>
                <img src=${json[item].picture} class="avatar" ></img>   
            </div>
           `;
                }

            }

        });
    });
});