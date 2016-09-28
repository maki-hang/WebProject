function draw(inputNum: number): void {
    var maxline, spacenum, starnum: number = 0;
    var star, space: string = "";
  
    for (maxline = 0; maxline < inputNum; maxline++) {
        star = "";
        space = "";
        for (spacenum = 0; spacenum < (inputNum - maxline - 1); spacenum++) {
            space += " ";
        }
        for (starnum = 0; starnum < (2 * maxline + 1); starnum++) {
            star += "*";
        }
        console.log(space + star);

    
    }
}

window.onload = () => {

       draw(5);
    };
