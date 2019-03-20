import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        // set "grid-row-end" how many rows an item will span,
        this.state = { spans: 0 };
        // to create a react ref
        this.imageRef = React.createRef();
    }

    // after componentDidMount react ref got render
    // loading image is an async task, try to console.log() will not give you all the info
    // we should add a listener for 'load'
    componentDidMount() {
        // console.log(this.imageRef);
        // this.imageRef.current.addEventListener('load', ()=>{
        //     console.log(this.imageRef.current.clientHeight);
        // });
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        // height / 10 for "grid-auto-rows" was initialzed to 10px, mean how many of 10px
        const spans = Math.ceil(height / 10);
        this.setState({ spans });
    };

    render() {
        const { description, urls } = this.props.image;

        // return (
        //     <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        //     <img ref={this.imageRef} alt={description} src={urls.regular} />
        //     </div>
        // );
        return (
            // to overwrite css use inline style, to change grid-row-end's span
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img
                    // access react ref
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard;