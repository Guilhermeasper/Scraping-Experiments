function calcRanked(tab){
    let total = 0;
    for(i = 0; i < tab.length; i++){
        let wl = tab[i].children[3].children[0].children[0].children;
        if(wl.length == 5){
            let w = Math.parseInt(wl[1].innerText.replace("V", ""));
            let l = Math.parseInt(wl[1].innerText.replace("L", ""));
            console.log(w, l);
        }
    }
}
