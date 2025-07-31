const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];



// Mettiamo tutte le card in pagina

        // <div class="card flex-c col col-md-6 col-lg-4">
        //     <img class="card-image" src="./img/female1.png" alt="">
        //     <div class="card-body">
        //         <h5>Name</h5>
        //         <span>Job</span>
        //         <br>
        //         <a href="#">Mail</a>
        //     </div>
        // </div>

for (let i = 0; i<teamMembers.length; i++) {

  const thisMember = teamMembers[i]

  const {name, role, email, img} = thisMember

  const innerhtml = `
    <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
      <div class="card">
      <div class="flex-c">
        <img class="card-image" src="./${img}" alt="">
        <div class="card-body">
            <h5>${name}</h5>
            <span>${role}</span>
            <a href="#">${email}</a>
        </div>
      </div>
      </div>
    </div>
  `

  const containerEl = document.getElementById('cnt')
  containerEl.insertAdjacentHTML('beforeend', innerhtml)
  
}

// Form to add new cards


