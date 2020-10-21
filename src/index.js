
module.exports = function check(str, bracketsConfig) {
    for(let i=0;i<str.length;i++){
        for(j=0;j<bracketsConfig.length;j++){
            if(str.includes(bracketsConfig[j][0]+""+bracketsConfig[j][1])){
            str=str.replace(bracketsConfig[j][0]+""+bracketsConfig[j][1],"");
            return check(str,bracketsConfig);
            }
        }
    }
    return str.length==0?true:false;
}
    
