import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = ({ onInputChange, onSubmit }) => {
    return(
        <div>
            <p className='f3'>
                {'Detect faces in your pictures here'}
            </p>
            <div>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
                    <button className='w-30 grow f4 link ph3 pv2 dib black bg-grey'
                    onClick={onSubmit}
                    >Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm