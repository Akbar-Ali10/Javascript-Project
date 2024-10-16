

function search(){
    let textTosearch = document.getElementById("textTosearch").value;
    let para = document.getElementById("para");
    textTosearch = textTosearch.replace(/[.*+?^${}()]|[\]\\]/g,"\\$&");

    let pattern = new RegExp(`${textTosearch}`,"gi");

    para.innerHTML = para.textContent.replace(pattern, match => `<mark>${match}</mark>`)
    
}

