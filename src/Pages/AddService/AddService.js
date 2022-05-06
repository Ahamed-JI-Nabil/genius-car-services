import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/service`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    };


    return (
        <div className='w-50 mx-auto'>
            <h2>please add a service</h2>
            <form className='d-flex flex-column mt-5 rounded border-1' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 rounded border-1' placeholder='Name' {...register("name")} />
                <textarea className='mb-2 rounded border-1' placeholder='Description' {...register("description", { required: true })} />
                <input className='mb-2 rounded border-1' placeholder='Price' {...register("price", { required: true })} />
                <input className='mb-2 rounded border-1' placeholder='Photo URL' {...register("img", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
                <input className='btn-primary p-1 rounded border-1' type="submit" value='Add Service' />
            </form>
        </div>
    );
};

export default AddService;