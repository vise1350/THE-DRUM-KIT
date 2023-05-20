function Housekeeper(name,experience,cleaningReportoire){
    this.name=name,
    this.experience=experience,
    this.cleaningReportoire=cleaningReportoire;
    this.clean=function(){
        console.log("Cleaning in progress")
        
    }
}





var housekeeper1= new Housekeeper("Harry",12,["toilet","bedroom"])

console.log(housekeeper1)
housekeeper1.clean()