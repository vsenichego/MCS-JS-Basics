let i = 0;
while(i < 100000) {
    if (i%6==0){
        let div = document.createElement('div');
        div.innerHTML = i;
        document.body.append(div);
    }
    i++;
}