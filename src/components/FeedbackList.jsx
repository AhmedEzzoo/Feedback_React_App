import FeedbackItem from "./FeedbackItem";
import { useContext } from 'react';
import FeedbackContext from "./context/FeedbackContext";
import Spinner  from "./Spinner";

function FeedbackList() {

    const { feedback, isLoading } = useContext(FeedbackContext);

    if (!isLoading && (!feedback || feedback.length === 0)){
        return <p>No available list</p>
      }

      return (isLoading) ? (<Spinner />) : (
        <div className="feedback-list">
           {
            feedback.map((item) => <FeedbackItem  item= {item}  key={item.id} />)
           }
        </div>
      )
}


export default FeedbackList;
