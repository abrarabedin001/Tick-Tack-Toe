// assignments
let arr = ["0","1","2","3","4","5","6","7","8"]
let turn = 1;
let game = document.querySelector(".table")
let turnXO = document.querySelector("#turnXO")
let restart = document.querySelector("#restart")





//event listeners

restart.onclick = () =>{
    location.reload();
    return false;
}

game.onclick = (e)=>{
    // let identifier = e.target.getAttribute("data-value")
    
    let target = e.target
    // console.log(target)
    let value = target.getAttribute("data-value")
    // console.log(value)
    let index = target.getAttribute("data-index")
    if( value == "A"  ){
        if(turn%2 ==  0){
            target.innerHTML = `X`
            target.setAttribute('data-value',"X")
            turnXO.innerHTML = `X`
            arr[index] = "X"
            turn++
            
            win()
            
        }else{
            target.innerHTML = `O`
            target.setAttribute('data-value',"O")
            turnXO.innerHTML = `O`
            arr[index] = "O"
            turn++
            
            win()
            
        }
        // console.log(target.innerHTML)
    }
};

win = () =>{
    // let index = e.target.getAttribute("data-index")
    // console.log(index)
    if(arr[0]==arr[1] && arr[1]==arr[2]){
        alert(arr[0]+" WON!");
        location.reload();
        return false;
    }
    if(arr[3]==arr[4] && arr[4]==arr[5]){
        alert(arr[0]+" WON!");
        location.reload();
        return false;
    }
    if(arr[6]==arr[7] && arr[7]==arr[8]){
        alert(arr[6]+" WON!");
        location.reload();
        return false;
    }
    if(arr[0]==arr[3] && arr[3]==arr[6]){
        alert(arr[0]+" WON!");
        location.reload();
        return false;
    }
    if(arr[1]==arr[4] && arr[4]==arr[7]){
        alert(arr[1]+" WON!");
        location.reload();
        return false;
    }
    if(arr[2]==arr[5] && arr[5]==arr[8]){
        alert(arr[2]+" WON!");
        location.reload();
        return false;
    }
    if(arr[0]==arr[4] && arr[4]==arr[8]){
        alert(arr[0]+" WON!");
        location.reload();
        return false;
    }
    if(arr[6]==arr[4] && arr[4]==arr[2]){
        alert(arr[6]+" WON!");
        location.reload();
        return false;
    }
    if(turn == 10){
        alert("DRAW!");
    }
}