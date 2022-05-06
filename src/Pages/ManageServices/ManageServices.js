import React from 'react';
import useServices from '../../hooks/useServies';

const ManageServices = () => {

    const [services, setServices] = useServices()

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `http://localhost:5000/service/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = services.filter(service => service._id !== id)
                    setServices(remaining)
                })
        }
    }

    return (
        <div className='w-50 mx-auto mt-2'>
            <h2 className='mb-5'>Manage Your Services!</h2>
            {
                services.map(service => <div key={service._id}>
                    <h4 className='p-1'>{service.name} <button onClick={() => handleDelete(service._id)} className='bg-danger border text-white'>X</button></h4>
                </div>)
            }
        </div>
    );
};

export default ManageServices;