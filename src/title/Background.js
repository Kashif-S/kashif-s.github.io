import React, { useRef, useEffect } from 'react'

class Background extends React.Component {
    constructor(props) {
      super(props);
      this.canvasRef = React.createRef();
    }

    componentDidMount() {
        const canvas = this.canvasRef.current;
        const context = canvas.getContext('2d');
        context.fillStyle = '#0a192f';
        context.fillRect(0, 0, canvas.width, canvas.height);
    }
  
    render() {
        return (
            <div class="Background">
                <canvas ref={this.canvasRef} class="BgCanvas"/>
            </div>
        );
    }
}

export default Background;