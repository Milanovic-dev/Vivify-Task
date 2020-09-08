import React, { useState } from 'react';
import '../../styles/components/_movieForm.css';

const AddMovie = ({onCreate}) => {

  const [title, setTitle] = useState('');
	const [subtitle, setSubtitle] = useState('');
	const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  
  const [errors, setErrors] = useState({})

	const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!validateForm()) return;
    
		const data = {
			title,
			subtitle,
			description,
			imageUrl,
			rating: 0
		};

		onCreate(data);
  }
  
  const validateForm = () => {
    const errorsObj = {};
    let flag = true;

    if(title == ''){
      errorsObj.title = 'Title is required';
      flag = false;
    }
    if(subtitle == ''){
      errorsObj.subtitle = 'Subtitle is required';
      flag = false;
    }
    if(description == ''){
      errorsObj.description = 'Description is required';
      flag = false;
    }
    if(imageUrl == ''){
      errorsObj.imageUrl = 'Image is required';
      flag = false;
    }

    setErrors(errorsObj);
    return flag;
  }

  return (
	<div className="add-form">
		<h1>Create a new movie</h1>
		<form onSubmit={handleSubmit}>
			<div>
				<input className="form-input" type="text" placeholder="Naslov" onChange={(e) => setTitle(e.target.value)}></input>
        <div className="form-error">{errors.title ? errors.title : null}</div>
      </div>
			<div>
				<input className="form-input" type="text" placeholder="Podnaslov" onChange={(e) => setSubtitle(e.target.value)}></input>
        <div className="form-error">{errors.subtitle ? errors.subtitle : null}</div>
      </div>
			<div>
				<input className="form-input" type="textarea" placeholder="Opis" onChange={(e) => setDescription(e.target.value)}></input>
        <div className="form-error">{errors.description ? errors.description : null}</div>
			</div>
			<div>
				<input className="form-input" type="text" placeholder="Slika" onChange={(e) => setImageUrl(e.target.value)}></input>
        <div className="form-error">{errors.imageUrl ? errors.imageUrl : null}</div>
      </div>
			<button className="form-submit">Create</button>
		</form>
	</div>
	)
}

export default AddMovie;