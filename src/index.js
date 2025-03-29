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
function exibeMenu(){
    let aside = document.getElementById("menu-dropdown");
    if (aside.classList.contains("show")) {
        aside.classList.remove("show");
        aside.classList.add("hide");
    } else {
        aside.classList.remove("hide");
        aside.classList.add("show");
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
        a.appendChild(li)
        ul.appendChild(a)

    })


}
