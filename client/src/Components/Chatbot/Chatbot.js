import React, {useEffect} from 'react'

export default function Chatbot(props) {

    useEffect(() => {
        const script1 = document.createElement('script');
        script1.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
        script1.async = true;
        document.body.appendChild(script1);
    
        const script2 = document.createElement('script');
        script2.src = 'https://mediafiles.botpress.cloud/f277bb1e-e302-41e1-a5b8-fecf5b659593/webchat/config.js';
        script2.defer = true;
        document.body.appendChild(script2);
    
        return () => {
          document.body.removeChild(script1);
          document.body.removeChild(script2);
        };
      }, []);
    

  return (
    <div id="webchat-container">
        
    </div>
  )
}