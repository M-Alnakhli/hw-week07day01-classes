class RunTracker{
name
email 
runs=[]
constructor(name,email){
    this.name =name
    this.email =email

}
addrun(date,distance,time){
    runs.push([date,distance,time])
    
}

totalDistance(){
return runs.reduce(function(total, currentValue, currentIndex, arr){total + currentValue[1]})

}
longestDistance(){
return runs.reduce(function(total, currentValue, currentIndex, arr)
{if(total < currentValue[1]){
    total =currentValue[1]
}})}

averageSpeed(){
distance= runs.reduce(function(total, currentValue, currentIndex, arr){total + currentValue[1]})
time=runs.reduce(function(total, currentValue, currentIndex, arr){total + currentValue[2]})
return distance/time
}
}
