import React, { useEffect, useState } from 'react';
import ToolCard from './ToolCard';
import {
    useQuery
} from 'react-query'

const Tools = () => {
    /*  const [tools, setTools] = useState([])
     useEffect(() => {
         fetch("https://whispering-mountain-30344.herokuapp.com/tools")
             .then(res => res.json())
             .then(data => {
                 setTools(data)
             })
     }, []) */

    const { data: tools, isLoading, refetch } = useQuery("tools", () => fetch(`https://whispering-mountain-30344.herokuapp.com/tools`)
        .then(res => res.json())
    )

    return (
        <div className='lg:p-8 p-3'>
            <h2 className='text-4xl text-center font-bold my-6'>Tools We Make</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    tools?.map(tool => <ToolCard
                        tool={tool}
                        key={tool._id}
                    ></ToolCard>)
                }
            </div>
        </div>
    );
};

export default Tools;