import React from 'react';
import './EditPost.css';
import IMG_THUMBNAIL from './mountainGraphic.png'

class Upload extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            file: null
        }
    }

    handleChange = (event) => {
        if(!event.target.files[0]) {
            this.setState({
                file: this.state.file
            })
        } else{
            this.setState({
                file: URL.createObjectURL(event.target.files[0])
            })
        }

    }

    removeImage = (e) => {
        this.setState({
            file: null
        })
    }


    render() {
        return(
            <div className="main">
                <img className="thumbnail" src={this.state.file ? this.state.file : IMG_THUMBNAIL}/>
                <input type="file" onChange={this.handleChange}
                       ref={fileInput => this.fileInput = fileInput}/>
                <div className="horizontal buttons">
                    <button className="updatePost" onClick={() => this.fileInput.click()} >upload image</button>
                    <button className="deletePost" onClick={this.removeImage} >delete image</button>

                </div>

            </div>
        )
    }
}

export default Upload;