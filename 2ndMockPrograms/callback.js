function add(data1,data2){
    let sum = data1+data2;
    console.log(sum);
    }
    
    function sub(data1,data2){
    let sub= data1+data2;
    console.log(sub);
    }
    function calculator(data1,data2,ope){
    ope(data1,data2);
    }
    
    calculator(1,2,add);