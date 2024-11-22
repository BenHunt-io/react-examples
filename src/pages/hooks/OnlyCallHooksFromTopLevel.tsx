import { useState } from 'react';
import { useEffect } from 'react';
import Layout from '../../Layout';
import { Button } from 'react-bootstrap';


const OnlyCallHooksFromTopLevel = () => {

  const [count, setCount] = useState(0); // for triggering re-renders
  const [firstName] = useState('Mary');

  // Triggers an error on rerender, but only because react detects hooks are called in different order.
  if(count === 0){
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(function useEffect1() {
    console.log(`useEffect1 firstName: ${firstName}`);
    });
  }

  const [lastName] = useState('Poppins');


  useEffect(function updateTitle() {
    console.log(`updateTitle firstName: ${firstName} lastName: ${lastName}`);
  });


    return (
        <Layout>
            <Button onClick={() => setCount(count + 1)}>Re-render</Button>
        </Layout>
    )
}


export default OnlyCallHooksFromTopLevel