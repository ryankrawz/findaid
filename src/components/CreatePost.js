import React, { useState, useContext } from 'react';
import { StoreContext } from 'contexts/StoreContext';
import css from './CreatePost.module.css';
import FileLoader from './FileLoader.js';
import { useHistory } from "react-router-dom";

function CreatePost(props) {
  const [dragging, setDragging] = useState(false); // to show a dragging effect

  const [desc, setDesc] = useState('');
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');

  const [resc, setResc] = useState('');
  const [rescTitle, setrescTitle] = useState('');

  const [pet, setPet] = useState('');
  const [petTitle, setPetTitle] = useState('');

  const [event, setEvent] = useState('');
  const [eventTitle, setEventTitle] = useState('');


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
          setPhoto(e.target.result);
				};
				reader.readAsDataURL(file);
			}
    }
    setDragging(false);    
  }

  function handleDescChange(e){
    setDesc(e.target.value);
  }

  function handleTitleChange(e){
    setTitle(e.target.value);
  }  
  
  function handleLocationChange(e){
    setLocation(e.target.value);
  }

  function handleResourceChange(e){
    setResc(e.target.value);
  }  
  function handleResourceTitleChange(e){
    setrescTitle(e.target.value);
  }
  
  function handlePretitionChange(e){
    setPet(e.target.value);
  }  
  function handlePretitionTitleChange(e){
    setPetTitle(e.target.value);
  }  
  
  function handleEventsChange(e){
    setEvent(e.target.value);
  }

  function handleEventsTitleChange(e){
    setEventTitle(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    if (!photo) {
      setError('You need to add a photo!');
      return;
    } else if (!title) {
      setError('You need to add a title!');
      return;
    } else if (!location) {
      setError('You need to add a location!');
      return;
    } else if (!desc) {
      setError('You need to add a description!');
      return;
    }

    addPost(photo, desc, title, location, rescTitle, resc, petTitle, pet, eventTitle, event); 
    history.push('/');
    setError('');
  }

  function handleCancel(){
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
          <h5>
            Title:
          </h5>
          <textarea placeholder="..." rows="2" value={title} onChange={handleTitleChange}/>
        </div>

        <div className={css.desc} >
        <h5>
            Location:
          </h5>
          <textarea placeholder="..." rows="2" value={location} onChange={handleLocationChange}/>
        </div>   

            <div className={css.desc} >
          <h5>
            Description:
          </h5>
          <textarea placeholder="..." rows="2" value={desc} onChange={handleDescChange}/>
          </div>

          <div className={css.desc} >
          <h5>
            Resources &amp; Information name (optional):
          </h5>
          <textarea placeholder="..." rows="2" value={rescTitle} onChange={handleResourceTitleChange}/>
          </div>

          <div className={css.desc} >
          <h5>
            Resources &amp; Information link:
          </h5>
          <textarea placeholder="..." rows="2" value={resc} onChange={handleResourceChange}/>
          </div>

          <div className={css.desc} >
          <h5>
            Funds &amp; Petitions name (optional):
          </h5>
          <textarea placeholder="..." rows="2" value={petTitle} onChange={handlePretitionTitleChange}/>
          </div>

          <div className={css.desc} >
          <h5>
            Funds &amp; Petitions link:
          </h5>
          <textarea placeholder="..." rows="2" value={pet} onChange={handlePretitionChange}/>
          </div>

          <div className={css.desc} >
          <h5>
            Event name (optional):
          </h5>
          <textarea placeholder="..." rows="2" value={eventTitle} onChange={handleEventsTitleChange}/>
          </div>

          <div className={css.desc} >
          <h5>
            Event link:
          </h5>
          <textarea placeholder="..." rows="2" value={event} onChange={handleEventsChange}/>
          </div>

        <div className={css.error}>
          {error}
        </div>
        <div className={css.actions}>
          <button onClick={handleCancel}>Cancel</button>
          <button onClick={handleSubmit}>Share</button>          
        </div>
    </div>
  );
} export default CreatePost;
