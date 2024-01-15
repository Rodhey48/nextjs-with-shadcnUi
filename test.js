function spinWords(string){
    //TODO Have fun :)
    let splited = string.split(" ")
    for( let i = 0; i < splited.length; i++) {
        if(splited[i].length >= 5) {
            // console.log(splited[i])
            let splitedAgain = splited[i].split('')
            // console.log(splitedAgain)
            splited[i] = splitedAgain.reverse().join('')
            // console.log(splited[i])
      }
    }
    const result = splited.join(" ")
    return result
  }

  console.log(spinWords("Welcome"))

  console.log("========================")

  console.log(spinWords("Hey fellow warriors"))