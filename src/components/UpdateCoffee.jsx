import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, details, category, photo } = coffee;


    const handleUpdatedCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const photo = form.photo.value;

        const updatedCoffee = { name, quantity, supplier, taste, category, photo };
        console.log(updatedCoffee);

        // send data to the server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee update successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }





    return (
        <div className='bg-[#F4F3F0] p-20'>
            <h3 className='text-3xl font-extrabold text-center mb-8'>Update Coffee : {name}</h3>
            <form onSubmit={handleUpdatedCoffee}>
                {/* form name and quantity row */}
                <div className='md:flex mb-8 gap-2'>
                    <div className='form-control md: w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Coffee Name</span>
                        </label>
                        <label>
                            <input className='input input-bordered w-full' type="text" name="name" defaultValue={name} placeholder='coffee name' id="" />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Available quantity</span>
                        </label>
                        <label>
                            <input className='input input-bordered w-full' type="text" name="quantity" defaultValue={quantity} placeholder='available quantity' id="" />
                        </label>
                    </div>
                </div>
                {/* form supplier and taste row */}
                <div className='md:flex mb-8 gap-2'>
                    <div className='form-control md: w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Supplier name</span>
                        </label>
                        <label>
                            <input className='input input-bordered w-full' type="text" name="supplier" defaultValue={supplier} placeholder='supplier' id="" />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>taste</span>
                        </label>
                        <label>
                            <input className='input input-bordered w-full' type="text" name="taste" defaultValue={taste} placeholder='taste' id="" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className='md:flex mb-8 gap-2'>
                    <div className='form-control md: w-1/2'>
                        <label className='label'>
                            <span className='label-text'>category</span>
                        </label>
                        <label>
                            <input className='input input-bordered w-full' type="text" name="category" defaultValue={category} placeholder='category' id="" />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>details</span>
                        </label>
                        <label>
                            <input className='input input-bordered w-full' type="text" name="details" defaultValue={details} placeholder='details' id="" />
                        </label>
                    </div>
                </div>
                {/* form photo url row */}
                <div className='mb-8'>
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>Photo</span>
                        </label>
                        <label>
                            <input className='input input-bordered w-full' type="text" name="photo" defaultValue={photo} placeholder='photo url' id="" />
                        </label>
                    </div>
                </div>
                <input className="btn btn-block bg-orange-300" type="submit" value="Update Coffee" />

            </form>
        </div>
    );
};

export default UpdateCoffee;