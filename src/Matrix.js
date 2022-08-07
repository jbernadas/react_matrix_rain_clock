import React from 'react';

class Matrix extends React.Component {
    componentDidMount() {
        this.updateCanvas();
    }
    componentWillUnmount() {
        this.updateCanvas();
    }
    updateCanvas() {
        // geting canvas by id canvScr
        const canvScr= document.getElementById("canvScr");
        const canvScrContxt = canvScr.getContext("2d");
         //making the canvas full screen
        canvScr.height = window.innerHeight;
        canvScr.width = window.innerWidth;
    
        //japanese characters - taken from the unicode charset
        let japanese = "先日あーりー様のブログをしてからすっかりファンになった「はるさこう」でございていました５月半ばにひいたをこじらせて、なかなか治らず入の2は3痰の絡みと込みが酷くてしたり、かかりつけのでの吸引4ネブライザと言いますの方がうことが多いですねをしたりして6も7化8す9る0ばかりでにるべくの呼を介されて";
        let matrix = japanese;
        //converting the string into an array of single characters
        matrix = matrix.split("");
    
        let font_size = 15;
        let columns = canvScr.width / font_size; //number of columns for the rain
        //an array of drops - one per column
        let drops = [];
        //x below is the x coordinate
        //1 = y co-ordinate of the drop(same for every drop initially)
        for(let x = 0; x < columns; x++)
            drops[x] = 1; 
    
        //drawing the characters
        const draw = () => {
            //Black BG for the canvas
            //translucent BG to show trail
            canvScrContxt.fillStyle = "rgba(0, 0, 0, 0.04)";
            canvScrContxt.fillRect(0, 0, canvScr.width, canvScr.height);
    
            canvScrContxt.fillStyle = "#0F0"; //green text
            canvScrContxt.font = font_size + "px";
            //looping over drops
            for( let i = 0; i < drops.length; i++ )
            {
                //a random chinese character to print
                let text = matrix[ Math.floor( Math.random() * matrix.length ) ];
                //x = i*font_size, y = value of drops[i]*font_size
                canvScrContxt.fillText(text, i * font_size, drops[i] * font_size);
    
                //sending the drop back to the top randomly after it has crossed the screen
                //adding a randomness to the reset to make the drops scattered on the Y axis
                if( drops[i] * font_size > canvScr.height && Math.random() > 0.975 )
                    drops[i] = 0;
    
                //incrementing Y coordinate
                drops[i]++;
            }
        }
        setInterval(draw, 35);
    }
    render() {
      return (
        <div>
            <canvas ref="canvas" id="canvScr" />
        </div>
          
      );
    }
}

export default Matrix;