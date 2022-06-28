import { createContext, useState, useEffect } from "react";


const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {

  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback]  = useState([]);

  useEffect(() => {
   
    const fetchData = async () => {
       const result = await fetch("/feedback?_sort=id&_order=desc");
       const data = await result.json();
       setFeedback(data);
       setIsLoading(false);
      }
     
      fetchData();
      
    
  }, []);

      const [feedbackEdit, setFeedbackEdit] = useState({
            item : {},
            edit : false,
      });

    const editFeedback = (item) => {
          setFeedbackEdit({
            item,
            edit : true
          });
    };

      const updateFeedback = async (id, feedbackObj) => {

          const result = await fetch(`/feedback/${id}`, {
            method : 'PUT',
            headers : {
              'Content-Type' : 'application/json'
            },
            body : JSON.stringify(feedbackObj),
          });

          const data = await result.json();

            setFeedback(feedback.map((item) => item.id === id ? {...data, ...feedbackObj} : item));
      }

    const addNewFeedback = async (newFeedback) => {
        const result = await fetch("/feedback", {
          method : 'POST',
          headers:{
            'Content-Type': 'application/json',
          },
          body : JSON.stringify(newFeedback)
        });

        const data = await result.json();

        setFeedback([data, ...feedback]);
    };


    const deleteFromList = async (id) => {

        await fetch(`/feedback/${id}`, {method : 'DELETE'});

        setFeedback(feedback.filter((item) => item.id !== id ));
    } ;

    return (
        <FeedbackContext.Provider  value={{ 
            feedback : feedback, 
            feedbackEdit,
            isLoading,
            deleteFromList,
            addNewFeedback,
            editFeedback,
            updateFeedback,
            }}>
            {children}
        </FeedbackContext.Provider>
    );
}




export default FeedbackContext;