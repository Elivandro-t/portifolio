 const pessoa = [
    {
        auth:"elivandro",
        project: "Monitoramento",
        tecnologia:"html e java"
    },
    {
        auth:"elivandro",
        project: "Chamados usuario",
        tecnologia:"java e angular"
    },
    
]
const json = [
    {
        name:"Home",
        rota:"./home.html",
        image:""
    },
    {
        name:"Meus projetos",
        rota:"./project.html",
        image:""
    },
    {
        name:"Sobre mim",
        rota:"./sobre.html",
        image:""
    }
]
function rodaHeader(){
    let header = document.getElementById("header");
    header.innerHTML += `
     <section class="container_header">
            <div class="menu_logo">
                <img src="../public/pie-chart.png" alt="logo" class="logo-img">
                <p>|</p>
                <span onclick="exibeMenu()" class="menu-drop">Menu</span>
            </div>
            <div>
                Em desenvolvimetnto
            </div>

        </section>
    `
}
function exibeMenu(){
    let aside = document.getElementById("menu-dropdown");
    let main = document.getElementById("mains");
    if (aside.classList.contains("show")) {
        aside.classList.remove("show");
        aside.classList.add("hide");
        main.style.display = "block"
    } else {
        aside.classList.remove("hide");
        aside.classList.add("show");
        main.style.display = "none"
    }
   
}
menu()
function menu(){
   let ul =  document.getElementById("ul");
    json.map((e)=>{
        let li = document.createElement("li");
        let a = document.createElement("a")
        a.setAttribute("href",e.rota)
        li.innerHTML = e.name;
        li.setAttribute("class","li-class")
        a.appendChild(li)
        a.setAttribute("class","a-class")
        ul.appendChild(a)

    })



}
let uls =  document.getElementById("menu-dropdown");
uls.addEventListener("click",function (){
    exibeMenu();

})
let r = document.getElementById("ul");
r.addEventListener("click",function(event){
    event.stopPropagation();
})
dataProjeto()

function dataProjeto(){
   let proj = document.getElementById("projeto");
   pessoa.map((e=>{
    let div = document.createElement("div")
    div.setAttribute("class","class1")
    div.innerHTML +=e.project
    proj.appendChild(div)

   }))

}


