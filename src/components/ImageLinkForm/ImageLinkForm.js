import React from 'react';
import "./ImageLinkForm.css";
const ImageLinkForm = ({onInputChange, onButtonSubmit})=> {

	return (
		 <div>
		 <p className="f3">
		 {"Mr. Brain will detect your face. Behold!"}
		 </p>
		 <div className="center">
		 <div className="form center pa4 br3 shadow-5">
		 	<input className="f4 pa2 w-70 center" type="tex" onChange={onInputChange} />
		 	<button id="imageButton" className="w-30 grow f4 link ph3 pv2 dib white bg-black" onClick={onButtonSubmit}>Detect</button>
		 	</div>
		 </div>
		</div>
		)
}
export default ImageLinkForm;