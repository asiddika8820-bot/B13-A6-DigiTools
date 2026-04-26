
import { use } from "react";
import ModelCard from './ModelCard';

const Models = ({ modelPromise ,carts,setCarts}) => {
    
    const models = use(modelPromise);
    console.log(models);


    return (
        <div className='p-5'> 
            <div className='text-center mb-10'>
                <h2 className='text-5xl font-bold'>Choose your AI Models</h2>
                <p>One subscription gives you access to all frontier AI</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    models.map((model) => (

                        <ModelCard key={model.id} 
                        model={model}
                         
  carts={carts} 
  setCarts={setCarts}></ModelCard>
                    )
                       
                    )
                }
            </div>
        </div>
    );
};

export default Models;