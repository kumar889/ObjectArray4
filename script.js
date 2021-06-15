const arrayList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

for (let i=0; i<arrayList.length; i++){
    if (arrayList[i]%15 === 0){
        document.write(arrayList[i] + ' fizzbuzz' + '<br>');
    }
    else if (arrayList[i]%3 === 0){
        document.write(arrayList[i] + ' fizz' + '<br>');
    }
    else if (arrayList[i]%5 === 0){
        document.write(arrayList[i] + ' buzz' + '<br>');
    }
    else{document.write(arrayList[i] + '<br>');}
 
}