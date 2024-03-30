const body_page_result = document.getElementById('body_page_result');
const form_box = document.getElementById('form_box');
const input_box = document.getElementById('input_box');
const search_more = document.getElementById('search_more');
const userkey ="WZJuEYz-hh2QCbWsjJlnU2pNOkmP_bkTwkEZ3atisgY";
let keyword ="";
let pack = 1;

window.onload = async function(){

    const url =`https://api.unsplash.com/search/photos?page=1&query=snow&client_id=${userkey}&per_page=28`;
    const result = await fetch(url);
    const data =  await result.json();
    
     const results =  data.results;

        body_page_result.innerHTML = '';


        results.map((res)=>{
            const imgeContainer = document.createElement("div"); 
            imgeContainer.classList.add("image-container");
        const imge = document.createElement("img");
        imge.src = res.urls.regular;

        const imglink = document.createElement("a");
        imglink.href= res.links.download;
        imglink.target = "_blank";

        const downlode = document.createElement("a");
        downlode.classList.add("downlode_key");
        downlode.innerHTML = "view";

        downlode.href = res.links.html;
        imglink.appendChild(downlode);

        imglink.appendChild(imge);
        imgeContainer.appendChild(imglink)
        body_page_result.appendChild(imgeContainer);
  })
}



async function getdatails(){
    keyword = input_box.value;
    const defaultPerPage = 16;
    const url =`https://api.unsplash.com/search/photos?page=${pack}&query=${keyword}&client_id=${userkey}&per_page=${defaultPerPage}`;
    const result = await fetch(url);
    const data =  await result.json();
    
     const results =  data.results;

        body_page_result.innerHTML = '';


        results.map((res)=>{
            const imgeContainer = document.createElement("div"); 
            imgeContainer.classList.add("image-container");
            
        const imge = document.createElement("img");
        imge.src = res.urls.regular;

        const imglink = document.createElement("a");
        imglink.href= res.links.download;
        imglink.target = "_blank";
      
        const downlode = document.createElement("a");
        downlode.classList.add("downlode_key");
        downlode.innerHTML = "view";


        downlode.href = res.links.html;
        imglink.appendChild(downlode);
        imglink.appendChild(imge);
        imgeContainer.appendChild(imglink)
        body_page_result.appendChild(imgeContainer);
  })
  
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth',
});

  search_more.style.display = "block";

}

form_box.addEventListener('submit',(e)=>{
    e.preventDefault();
    pack = 1;
    getdatails();
});

search_more.addEventListener('click',()=>{
    pack++;
    getdatails();
})

const my_details = document.getElementById('my_details');

   const mygit_url = 'https://api.github.com/users/poovarasan195';

  fetch(mygit_url).then((data)=>{
     return data.json();
  }).then((res)=>{
    const imge = document.createElement("img");
      imge.classList.add("my_avather");
     imge.src = res.avatar_url;
    const h3 = document.createElement("h3");
    h3.innerHTML = res.name + "<br>";
    const span = document.createElement("span");
    span.innerHTML = res.bio;

    my_details.appendChild(imge);
    h3.appendChild(span);
    my_details.appendChild(h3);
  }).catch((error)=>{
    console.log(error);
  })
   function showAlert(message){
      alert(message);
   }