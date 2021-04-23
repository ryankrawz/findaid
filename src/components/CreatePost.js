import React, { useState, useContext } from 'react';
import { StoreContext } from 'contexts/StoreContext';
import css from './CreatePost.module.css';
import FileLoader from './FileLoader.js';
import {
  useHistory
} from "react-router-dom";

function CreatePost(props) {
  const [dragging, setDragging] = useState(false); // to show a dragging effect

  const [desc, setDesc] = useState('');
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');

  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState(''); // to show an error message
  const history = useHistory();

  let {
    addPost,

  } = useContext(StoreContext);

  function handleFileDragEnter(e){
    setDragging(true);
  }
  function handleFileDragLeave(e){
    setDragging(false);
  }
  function handleFileDrop(e){
    if (e.dataTransfer.types.includes('Files')===false){
			return;
    }
    if (e.dataTransfer.files.length>=1){
      let file = e.dataTransfer.files[0];
      if (file.size>1000000){// larger than 1 MB
        return;
      }
      if (file.type.match(/image.*/)){
				let reader = new FileReader();			
				reader.onloadend = (e) => {
					// TODO: call setPhoto with e.target.result (this is a Base64 image string)
          setPhoto(e.target.result);
		
				};
				reader.readAsDataURL(file);
			}
    }
    setDragging(false);    
  }

  function handleDescChange(e){
    console.log(e.target.value);
    setDesc(e.target.value);
  }

  function handleTitleChange(e){
    console.log(e.target.value);
    console.log(e);
    console.log(e);

    setTitle(e.target.value);
  }  
  
  function handleLocationChange(e){
    console.log(e.target.value);
    setLocation(e.target.value);
  }

  function handleSubmit(e){
     e.preventDefault();
      if (photo===null){
      setError('You need to add a photo!');
      return;
    }
    addPost(photo, title,location, desc); 
    history.push('/');
    setError('');
  }

  function handleCancel(){
    props.onPostCancel();
    history.push('/');
  }

  return (
    <div>
        
        <div className={css.photo}>
          {!photo?  <div className={css.message}>Drop your image</div>:
                    <img src={photo} alt="New Post"/>}
            <FileLoader
              onDragEnter={handleFileDragEnter}
              onDragLeave={handleFileDragLeave}
              onDrop={handleFileDrop}
            >
	            <div className={[css.dropArea, dragging?css.dragging:null].join(' ')}
              ></div>
	          </FileLoader>
          
        </div>
        
        <div className={css.desc} >
					{/* TODO: add textarea */}
          <textarea placeholder="Provide Title..." rows="2" value={title} onChange={handleTitleChange}/>
        </div>

        <div className={css.desc} >
					{/* TODO: add textarea */}
          <textarea placeholder="Location..." rows="2" value={location} onChange={handleLocationChange}/>
        </div>   

            <div className={css.desc} >
					{/* TODO: add textarea */}
          <textarea placeholder="Describe..." rows="2" value={desc} onChange={handleDescChange}/>
          </div>

        <div className={css.error}>
					{/* TODO: show error message */}
          {error}
        </div>
        <div className={css.actions}>
          <button onClick={handleCancel}>Cancel</button>
          <button onClick={handleSubmit}>Share</button>          
        </div>
    </div>
  );
} export default CreatePost;
