var num:number=10;
if(num%3==0){
    if(num%5==0){
        console.log(`${num} is divisble by both`);
    }
    else{
        console.log(`${num} is divisble by 3`);
    }
}
else if(num%5==0){
    console.log(`${num} is divisble by 5`);
}
else{
    console.log(`${num} is not divisble by both`); 
}