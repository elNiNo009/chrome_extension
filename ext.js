



let myLeads=[]

const inputEl =document.getElementById("input-el")
const uLEl =document.getElementById("ul-el")
const inputBtn =document.getElementById("input-btn")

//const cantnot be reassigned

inputBtn.addEventListener("click",function()
   {
      myLeads.push(inputEl.value)
      inputEl.value=""
      render()
   })


 function render()
   {
     let listItems= ""
     for(let i=0; i<myLeads.length; i++)
        {

          //listItems +=" <li><a target= '_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li> "
     listItems +=`
     <li>
          <a target= '_blank' href= '${myLeads[i]}'>
              ${myLeads[i]}
          </a>
    </li>
     `
          /*
        const li=document.createElement("li")
        li.textContent=myLeads[i]
        uLEl.append(li)
          */

        }
        uLEl.innerHTML=listItems
   }
