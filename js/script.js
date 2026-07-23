function getComputerChoice (rock,paper,scissors ) {
    // Math.random() *3 is used so that we keep our range to 0 to 2.99
    // Math.floor() is used to round down our options so that we only have 0 , 1, 2

    const randomIndex = Math.floor(Math.random() * 3)

    if (randomIndex == 0) return rock

    if (randomIndex == 1) return paper

    if (randomIndex == 2) return scissors

}