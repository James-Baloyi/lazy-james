function makeLazy(imageList, targetDiv){
    var td = targetDiv;
    if(imageList.length > 0){
        console.error('Error: Expected parameter 1 to be array');
        if(!Array.isArray(imageList)){
           console.error('Error: Expected parameter 1 to be array');
        }else{
        var target = document.querySelector(td);
        console.log(td);
        var x;
        for(x = 0; x < imageList.length; x++){
        var loader = document.createElement('div', 'div');
        loader.setAttribute('class', 'm'+x);
        loader.innerHTML = '3.png';
        loader.style.width = '200px';
        loader.style.height = '150px';
        loader.style.background = '#f2f2f2';
        loader.style.textAlign = 'center';
        loader.style.margin = '20px';
        loader.style.display = 'inline-block';
        console.log(imageList.length, x);
        target.appendChild(loader);
    }
    window.addEventListener('scroll', (event)=>{
        var style = window.getComputedStyle(target);
        var targetTop = parseInt(style.getPropertyValue('margin-top')); 
        var off = parseInt(pageYOffset);
        if(Math.floor(targetTop - off) < 0){
            for(x = 0; x < imageList.length; x++){
                document.querySelector('.m'+x).innerHTML = `<img width='100%' src='${imageList[x]}'>`;
                console.log(off, Math.floor(targetTop - off));
            }
        }else{
            console.table('Not yet', targetTop, off, Math.floor(targetTop - off));
        }

    });
}
}
}