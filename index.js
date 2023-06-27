// code your solution here
const denverBroncosWinYear = superbowlWin 
function superbowlWin(record){
    //const win = arr.find(obj => obj.result === 'W' && obj.team === 'Denver Broncos');
    //return win 

    const data = record.find(record => record.result === 'W')
    if(data){
        return data.year;
    }
    else{
    return data
    }
} 
