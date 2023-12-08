let glass = document.querySelectorAll(".glass");
let start = 0   ;
let done = document.querySelector('.done');
let rem = document.querySelector('.rem');

Array.from(glass).forEach((item) =>{
    item.addEventListener('click',(e)=>{
        let id = e.target.id;
        let no = id[2];
        no = Number(no);
        if(no <= start){
            for(let i = no;i<=start;i++){
                let newId = `#n-${i}`;
                let elem = document.querySelector(newId);
                elem.classList.remove('selected');
            }
            start = no-1;
            percentage(start)
        }
        else{
            for(let i = start+1;i<=no;i++){
                let newId = `#n-${i}`;
                let elem = document.querySelector(newId);
                elem.classList.add('selected');
            }
            start = no;
            percentage(start);
        }
    })
})

function percentage(start){
    let pcen = start/8;
    pcen *= 100;
    done.style.height = `${pcen}%`;
    rem.style.height = `${100-pcen}%`;
    document.querySelector(".remval").innerHTML = `${(100-pcen)*2/100}L`;
    if(pcen){
        document.querySelector(".doneval").innerHTML = `${pcen}%`;
    }
    else{
        document.querySelector(".doneval").innerHTML = '';
    }
}