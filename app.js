console.log('funcionando')


document.addEventListener("DOMContentLoaded",()=>{
    fetchData()
});

const fetchData= async()=>{
    //console.log('obteiendo el dom')
    try {
        loadindData(true);

        const res=await fetch("https://rickandmortyapi.com/api/character");
        const data=await res.json();

        // console.log(data);
        pintarCard(data)
    } catch (error) {
        console.log(error)
    }finally{
      loadindData(false);
    }
};

const pintarCard=data=>{
    //capturando elementos
    const cards=document.getElementById('card-dinamicas');//donde vamos empujar elementos 
    const templateCard=document.getElementById('template-card').content//plantilla
    const fragment=document.createDocumentFragment()//para evitar el reflow
    //console.log(data);
    data.results.forEach(item => {
       // console.log(item)
       const clone=templateCard.cloneNode(true)
       clone.querySelector("h5").textContent=item.name
       clone.querySelector("p").textContent=item.species
       clone.querySelector("img").setAttribute("src",item.image)

       fragment.appendChild(clone)
       cards.appendChild(fragment);
    });
}
const loadindData=estado=>{
    const loading=document.getElementById('loading')
    if(estado){
    loading.classList.remove('d-none')
    }else{
        loading.classList.add('d-none')
    }
}
    