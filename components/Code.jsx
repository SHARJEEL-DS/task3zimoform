import React,{useEffect,useState} from 'react'
import Code1 from './Code1'
import Code2 from './Code2'
import Code3 from './Code3'
import Code4 from './Code4'

function Code() {
    const [index,setindex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
          setindex(prev => prev+1);
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);
      const renderComponent = () => {
      if(index%4===0)
      return <Code1/>
      if(index%4===1)
      return <Code2/>
      if(index%4===2)
      return <Code3/>
      if(index%4===3)
      return <Code4/>
      if(index%4===4)
      return <Code1/>

      return null;
      }
  return (
    <div className='code'>
      {renderComponent()}
    </div>
  )
}

export default Code
