function CanDrive(hasDrivingLiscence, isTired, isSober) {
    // Write you code here
    if (hasDrivingLiscence===true){
        if (isTired===true){
          return "You shouldn't drive"
        }
        if (isTired===false){
          if (isSober===true){
            return "You can drive"
          }
          else{
            return "You shouldn't drive"
          }
        }
        if (isTired===false && isSober===true){
          return "You can drive"
        }
    }
    else{
        return "You cannot drive"
    }
}

module.exports = CanDrive;
