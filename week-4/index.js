// assignment 1
function delayedResult(n1, n2, delayTime, callback) {
    setTimeout(function() {
        callback(n1+n2);
    }, delayTime);
}


// 

function ajax(src, callback){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', src, true);
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.response)
            callback(data)
        }
    }
    xhr.send()

}
function render(data){  
    const tableDom = document.querySelector('tbody')

    for (const element of data) {
        const dom = document.createElement('tr')
        dom.innerHTML = `<td>${element.name}</td><td>${element.price}</td><td>${element.description}</td>`
        tableDom.appendChild(dom)
    }

}

ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response){render(response);});