


let alert = document.getElementById('alert');


const bell = document.getElementById('bell');




bell.addEventListener('click',  function notifications(){

   alert.innerHTML = `<div class = "confirmEmailAlert" id="firstAlert">
                      <div class = "textForAlert" > <em>Alert</em> Confirm Email address</div>
                      <span class = "closebtn" onclick="this.parentNode.remove()" ><img class="closeButton" src="icons/close.svg" alt="close"></span>
                      </div>`;
    alert.innerHTML += `<div class = "confirmEmailAlert" id = "secondAlert">
                       <div class = "textForAlert" > <em>Alert</em> Confirm Email address</div>
                       <span class = "closebtn" onclick="this.parentNode.remove()" ><img class="closeButton" src="icons/close.svg" alt="close"></span>
                       </div>`;});



document.addEventListener('click', function(){if(alert.innerHTML !== ''){
  bellSvg.innerHTML = `
  <path fill="#FFFFFF" class="st0" d="M24,18v-8c0-5.5-4.5-10-10-10S4,4.5,4,10v8l-4,8h9.1c0.5,2.3,2.5,4,4.9,4s4.4-1.7,4.9-4H28L24,18z M14,28
c-1.3,0-2.4-0.8-2.8-2h5.6C16.4,27.2,15.3,28,14,28z M3,24l3-6v-8c0-4.4,3.6-8,8-8s8,3.6,8,8v8l3,6H3z"/> <circle cx="23" cy="5" r="5" fill="red" />`

}else{
  bellSvg.innerHTML = `
  <path fill="#FFFFFF" class="st0" d="M24,18v-8c0-5.5-4.5-10-10-10S4,4.5,4,10v8l-4,8h9.1c0.5,2.3,2.5,4,4.9,4s4.4-1.7,4.9-4H28L24,18z M14,28
c-1.3,0-2.4-0.8-2.8-2h5.6C16.4,27.2,15.3,28,14,28z M3,24l3-6v-8c0-4.4,3.6-8,8-8s8,3.6,8,8v8l3,6H3z"/>`
}})

bellSvg.innerHTML = `
<path fill="#FFFFFF" class="st0" d="M24,18v-8c0-5.5-4.5-10-10-10S4,4.5,4,10v8l-4,8h9.1c0.5,2.3,2.5,4,4.9,4s4.4-1.7,4.9-4H28L24,18z M14,28
c-1.3,0-2.4-0.8-2.8-2h5.6C16.4,27.2,15.3,28,14,28z M3,24l3-6v-8c0-4.4,3.6-8,8-8s8,3.6,8,8v8l3,6H3z"/> <circle cx="23" cy="5" r="5" fill="red" />`;











const hourly = document.getElementById('hourly');
const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');






let chartContainer = document.getElementById('generalTraffic').getContext('2d');
let trafficChart = new Chart(chartContainer, {
    type: 'line',
    data: {
        labels: ['00', '01', '02', '03', '04', '05','06','07','8','09','10','11', '12', '13', '14', '15', '16','17','18','19','20','21','22','23'],

        datasets: [{

            data: [30, 20, 50, 10, 34, 38, 13, 20, 23, 48, 26, 30, 20, 50, 10, 34, 38, 13, 20, 23, 48, 26, 70, 10],

                  lineTension: 0,
                  backgroundColor:['rgba(127,134,202,0.5)'],
                  borderColor: [
                'rgba(127,134,202, 1)'
            ],

    }]
    },
    options: {responsive: true,
        maintainAspectRatio: false,
         legend: {
            display: false
         },

        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});




let dailyTraffic = document.getElementById('dailyTraffic').getContext('2d');
let dailyChart = new Chart(dailyTraffic, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: '# of Hits',
            data: [75, 115, 175, 125, 225, 200, 100],
            backgroundColor: '#7477BF',
            borderWidth: 1,
            lineTension: 0,

            }]
    },
    options: {responsive: true,
        maintainAspectRatio: false,
         legend: {
            display: false
         },

        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});



let mobileUsers = document.getElementById('mobileUsers').getContext('2d');
let mobileUsersChart = new Chart(mobileUsers, {
    type: 'doughnut',
    data: {
        labels:  ["Desktop", "Tablet", "Phones"],
        datasets: [{
            label: '# of Users',
            data: [2000, 550, 500],
            borderWidth: 0,
            backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
            ]
        }]
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            position: 'right',
         },
        title: {
            display: false,
        },
    }
});
var buttons = document.querySelectorAll(".button");

for (button in buttons) {
   buttons[button].onclick = function() {
       buttons.forEach(function(btn){
         btn.classList.remove('highlight');
       })
       this.classList.add('highlight');
       if(this.classList.contains('hourly')){


         let chartContainer = document.getElementById('generalTraffic').getContext('2d');
         let trafficChart = new Chart(chartContainer, {
             type: 'line',
             data: {
               labels: ['00', '01', '02', '03', '04', '05','06','07','8','09','10','11', '12', '13', '14', '15', '16','17','18','19','20','21','22','23'],

               datasets: [{

                   data: [30, 20, 50, 10, 34, 38, 13, 20, 23, 48, 26, 30, 20, 50, 10, 34, 38, 13, 20, 23, 48, 26, 70, 10],

                           lineTension: 0,
                           backgroundColor:['rgba(127,134,202,0.5)'],
                           borderColor: [
                         'rgba(127,134,202, 1)'
                     ],

             }]
             },
             options: {responsive: true,
                 maintainAspectRatio: false,
                  legend: {
                     display: false
                  },

                 scales: {
                     yAxes: [{
                         ticks: {
                             beginAtZero: true
                         }
                     }]
                 }
             }
         });


       }else if(this.classList.contains('daily')){


         let chartContainer = document.getElementById('generalTraffic').getContext('2d');
         let trafficChart = new Chart(chartContainer, {
             type: 'line',
             data: {
               labels: ["S", "M", "T", "W", "T", "F", "S"],
               datasets: [{
                   data: [75, 115, 175, 125, 225, 200, 100],

                           lineTension: 0,
                           backgroundColor:['rgba(127,134,202,0.5)'],
                           borderColor: [
                         'rgba(127,134,202, 1)'
                     ],

             }]
             },
             options: {responsive: true,
                 maintainAspectRatio: false,
                  legend: {
                     display: false
                  },

                 scales: {
                     yAxes: [{
                         ticks: {
                             beginAtZero: true
                         }
                     }]
                 }
             }
         });



       }else if(this.classList.contains('weekly')){


         let chartContainer = document.getElementById('generalTraffic').getContext('2d');
         let trafficChart = new Chart(chartContainer, {
             type: 'line',
             data: {
                 labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26','27-3','4-10','11-17','18-24','25-31'],

                 datasets: [{

                     data: [600, 1200, 1000, 2000, 1700, 1900, 2100, 2000, 2300, 2100, 2600],

                           lineTension: 0,
                           backgroundColor:['rgba(127,134,202,0.5)'],
                           borderColor: [
                         'rgba(127,134,202, 1)'
                     ],

             }]
             },
             options: {responsive: true,
                 maintainAspectRatio: false,
                  legend: {
                     display: false
                  },

                 scales: {
                     yAxes: [{
                         ticks: {
                             beginAtZero: true
                         }
                     }]
                 }
             }
         });


       }else{


         let chartContainer = document.getElementById('generalTraffic').getContext('2d');
         let trafficChart = new Chart(chartContainer, {
             type: 'line',

             data: {
                 labels: ['J','F','M','A','M','J','J','A','S','O','N','D'],

                 datasets: [{

                     data: [3000, 5000, 7000, 4000, 3700, 4900, 2100, 6000, 4300, 3100, 2600, 3000],


                           lineTension: 0,
                           backgroundColor:['rgba(127,134,202,0.5)'],
                           borderColor: [
                         'rgba(127,134,202, 1)'
                     ],

             }]
             },
             options: {responsive: true,
                 maintainAspectRatio: false,
                  legend: {
                     display: false
                  },

                 scales: {
                     yAxes: [{
                         ticks: {
                             beginAtZero: true
                         }
                     }]
                 }
             }
         });

   }
}}






let people = [{firstName:"Jane", lastName:"Dullberg", age:26, profilePic:"images/member-1.jpg", dateOfSubscription:"10/15/20", email:"Jane@gmail.com", recentActivity:{ activity:"liked Maximum Analysis Tips and Tricks", time: "2hrs ago"}},
              {firstName:"John", lastName:"Dumphry", age:34, profilePic:"images/member-2.jpg", dateOfSubscription:"10/15/20", email:"John@yahoo.com", recentActivity:{ activity:"commented on Getting an Internet Job", time: "4hrs ago"} },
              {firstName:"Julie", lastName:"Doriatta", age:20, profilePic:"images/member-3.jpg", dateOfSubscription:"10/15/20", email:"Julie@doriatta.com", recentActivity:{ activity:"subscribed to Maximum Analysis", time: "7hrs ago"}},
              {firstName:"Justin", lastName:"Domsley", age:22, profilePic:"images/member-4.jpg", dateOfSubscription:"10/15/20", email:"Justin@gmail.com", recentActivity:{ activity:"liked Maximum Analysis SEO for 2020", time: "15hrs ago"}}]

const membersUl = document.getElementById('membersUl');
const activityUl = document.getElementById('activityUl');

for(let i = 0; i < people.length; i++){

  var li = document.createElement('li');
  let name = people[i].firstName + ' ' + people[i].lastName;
  let profilePic = people[i].profilePic;
  let age = people[i].age;
  let dateOfSubscription = people[i].dateOfSubscription;
  let email = people[i].email;
  membersUl.appendChild(li);


  li.innerHTML = `<img class = "profilePicClass" src="${profilePic}" alt="${name}">
                  <div class = "UserDesc"><h4>${name}</h4><h4> ${email}</h4>
                  </div><h4 class = "date">${dateOfSubscription}</h4>`


}




for(let i = 0; i < people.length; i++){
  let recentActivity = people[i].recentActivity;
  let activity = recentActivity.activity;
  let time = recentActivity.time;



    var li = document.createElement('li');
    let name = people[i].firstName + ' ' + people[i].lastName;
    let profilePic = people[i].profilePic;
    let age = people[i].age;
    let dateOfSubscription = people[i].dateOfSubscription;
    let email = people[i].email;
    activityUl.appendChild(li);

  li.innerHTML = `<img class = "profilePicClass" src="${profilePic}" alt="${name}">
                  <div class = "activityText"><h4>${name} ${activity}</h4><h4> ${time}</h4>
                  </div>`
                }











/*





      const select =  document.getElementById("select");



     for (let i=0; i<timezones.length; i++){

       let timezoneLabel = timezones[i].label;
       let timezoneValue = timezones[i].value;

         let option = document.createElement('option');

        option.innerHTML += `${timezoneLabel}`;
        option.setAttribute('value', `${timezoneValue}`)
 select.appendChild(option);





     }

*/













     var x, i, j, l, ll, selElmnt, a, b, c;
     /* Look for any elements with the class "custom-select": */
     x = document.getElementsByClassName("custom-select");
     l = x.length;
     for (i = 0; i < l; i++) {
       selElmnt = x[i].getElementsByTagName("select")[0];
       ll = selElmnt.length;
       /* For each element, create a new DIV that will act as the selected item: */
       a = document.createElement("DIV");
       a.setAttribute("class", "select-selected");
       a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
       x[i].appendChild(a);
       /* For each element, create a new DIV that will contain the option list: */
       b = document.createElement("DIV");
       b.setAttribute("class", "select-items select-hide");
       for (j = 1; j < ll; j++) {
         /* For each option in the original select element,
         create a new DIV that will act as an option item: */
         c = document.createElement("DIV");
         c.innerHTML = selElmnt.options[j].innerHTML;
         c.addEventListener("click", function(e) {
             /* When an item is clicked, update the original select box,
             and the selected item: */
             var y, i, k, s, h, sl, yl;
             s = this.parentNode.parentNode.getElementsByTagName("select")[0];
             sl = s.length;
             h = this.parentNode.previousSibling;
             for (i = 0; i < sl; i++) {
               if (s.options[i].innerHTML == this.innerHTML) {
                 s.selectedIndex = i;
                 h.innerHTML = this.innerHTML;
                 y = this.parentNode.getElementsByClassName("same-as-selected");
                 yl = y.length;
                 for (k = 0; k < yl; k++) {
                   y[k].removeAttribute("class");
                 }
                 this.setAttribute("class", "same-as-selected");
                 break;
               }
             }
             h.click();
         });
         b.appendChild(c);
       }
       x[i].appendChild(b);
       a.addEventListener("click", function(e) {
         /* When the select box is clicked, close any other select boxes,
         and open/close the current select box: */
         e.stopPropagation();
         closeAllSelect(this);
         this.nextSibling.classList.toggle("select-hide");
         this.classList.toggle("select-arrow-active");
       });
     }

     function closeAllSelect(elmnt) {
       /* A function that will close all select boxes in the document,
       except the current select box: */
       var x, y, i, xl, yl, arrNo = [];
       x = document.getElementsByClassName("select-items");
       y = document.getElementsByClassName("select-selected");
       xl = x.length;
       yl = y.length;
       for (i = 0; i < yl; i++) {
         if (elmnt == y[i]) {
           arrNo.push(i)
         } else {
           y[i].classList.remove("select-arrow-active");
         }
       }
       for (i = 0; i < xl; i++) {
         if (arrNo.indexOf(i)) {
           x[i].classList.add("select-hide");
         }
       }
     }

     /* If the user clicks anywhere outside the select box,
     then close all select boxes: */
     document.addEventListener("click", closeAllSelect);











let emailNotificationsButton = document.getElementById('emailNotifications');
let profilePublicButton = document.getElementById('profilePublic');
let timezoneSelect = document.getElementById('select');


const saveButton = document.getElementById('savech');
const cancelButton = document.getElementById('cancelButton');

  saveButton.addEventListener('click',(e)=>{
    let emailNotificationsOption = emailNotificationsButton.checked;
    let profilePublicOption = profilePublicButton.checked;
    let timezoneOption = timezoneSelect.value;
    localStorage.setItem('email', emailNotificationsOption);
    localStorage.setItem('profile', profilePublicOption);
    localStorage.setItem('timezone', timezoneOption);
  });

  cancelButton.addEventListener('click',(e)=>{
    let emailNotificationsOption = emailNotificationsButton.checked;
    let profilePublicOption = profilePublicButton.checked;
    let timezoneOption = timezoneSelect.value;
    localStorage.setItem('email', false);
    localStorage.setItem('profile', false);
    localStorage.setItem('timezone', "init");
  });

emailNotificationsButton.checked = JSON.parse(localStorage.getItem('email'));

profilePublicButton.checked = JSON.parse(localStorage.getItem('profile'))

  const checkedEmail = JSON.parse(localStorage.getItem("emailNotifications"))




    function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].firstName.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].firstName.substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].firstName.substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i].firstName + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}




autocomplete(document.getElementById("myInput"), people);




const bellsvg = document.getElementById('bellSvg');



const alertDiv = document.getElementById('messageAlert');
const messageUserInput = document.getElementById('messageUserInput');
const user = document.getElementById('myInput');
const message =  document.getElementById('textarea');

messageUserInput.addEventListener('click', function(){
  if (user.value === "" && message.value === "") {
       alertDiv.innerHTML = `<div class = "confirmEmailAlert" id = "secondAlert">
                          <div class = "textForAlert" > Please choose a recipient and write a message!</div>
                          <span class = "closebtn" onclick="this.parentElement.style.display='none';" ><img class="closeButton" src="icons/close.svg" alt="close"></span>
                          </div>`;
   }
  else if (user.value === "" && message.value !== "") {
      alertDiv.innerHTML = `<div class = "confirmEmailAlert" id = "secondAlert">
                         <div class = "textForAlert" > Please choose a recipient!</div>
                         <span class = "closebtn" onclick="this.parentElement.style.display='none';" ><img class="closeButton" src="icons/close.svg" alt="close"></span>
                         </div>`;
  }
  else if (user.value !== "" && message.value === "") {
      alertDiv.innerHTML = `<div class = "confirmEmailAlert" id = "secondAlert">
                         <div class = "textForAlert" > Please write a message!</div>
                         <span class = "closebtn" onclick="this.parentElement.style.display='none';" ><img class="closeButton" src="icons/close.svg" alt="close"></span>
                         </div>`;
  }
  else {
      alertDiv.innerHTML = `<div class = "confirmEmailAlert" id = "secondAlert">
                         <div class = "textForAlert" >Your message was sent to ${user.value}!)</div>
                         <span class = "closebtn" onclick="this.parentElement.style.display='none';" ><img class="closeButton" src="icons/close.svg" alt="close"></span>
                         </div>`;
  }
  });
