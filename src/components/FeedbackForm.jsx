import { useState, useContext } from 'react';
import FeedbackContext  from './context/FeedbackContext';
import FeedbackRating from './FeedbackRating';
import Card from './shared/Card';
import Button from './shared/Button';
import { useEffect } from 'react';

function FeedbackForm() {
    const [text, setText] = useState('');
    const [buttonState, setButtonState] = useState(true);
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState(10);

    const { addNewFeedback, feedbackEdit,  updateFeedback } = useContext(FeedbackContext);

    useEffect (() => {

        if (feedbackEdit.edit){
        setText(feedbackEdit.item.text);
        setButtonState(false);
        setRating(feedbackEdit.item.rating);
        }
    }, [feedbackEdit]);

    const handleFeedback = (e) => {

        e.preventDefault();
        
       if (text.trim().length >= 10){
        const feedbackObj = {
            text,
            rating 
        };
        if (feedbackEdit.edit){
            updateFeedback(feedbackEdit.item.id ,feedbackObj);
        }else {
            addNewFeedback(feedbackObj); 
        }

        setText('');
    }
};


    const handleChange = (e) => {

        setText(e.target.value);
        if (text === '') {
            setButtonState(true);
            setMessage(null);
        }else if (text !== '' && text.trim().length <= 10){
            setButtonState(true);
            setMessage('Message must be more than 10 characters');
        }else{
            setButtonState(false);
            setMessage(null);      
        }   

    };



  return (
    <Card>
        <form onSubmit={handleFeedback}>
            <h2>How would you rate your service with us ?</h2>
            <FeedbackRating  select ={(rating) => setRating(rating)}/>
            <div className ='input-group'>
                <input 
                 onChange={handleChange}
                 placeholder = 'Write your comment'
                 type = 'text'
                 value = {text}
                />
                <Button type='submit' version='secondary' isDisabled={buttonState}>send</Button>
            </div>
            {message}
        </form>
    </Card>
  )
}


export default FeedbackForm;
