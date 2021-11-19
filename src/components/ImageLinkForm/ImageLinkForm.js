import React from "react";
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonsubmit }) => {
    return (
        <div>
            <p className='f3'>
                {'This Magic Brain will detect faces in your pictures. Give it a try.'}
            </p>
            <div className='center'>
                <div className='center pa4 br3 shadow-5 form'>
                    <input className='f4 pa2 w-70 center' type='text' placeholder='Input .jpg image Url' onChange={onInputChange} />
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onButtonsubmit}>Detect</button>
                </div>
            </div>
        </div>
    );
}
export default ImageLinkForm;