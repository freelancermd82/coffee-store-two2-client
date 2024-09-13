import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {

    
    const handleAddCoffee = event => {

        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const category = form.category.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, details, category, photo };
        console.log(newCoffee);

        // send data to the server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }


    return (
        <div className='bg-[#F4F3F0] p-20'>
            <h3 className='text-3xl font-extrabold text-center mb-8'>Add a Coffee</h3>
            <form onSubmit={handleAddCoffee}>
                {/* form name and quantity row */}
                <div className='md:flex mb-8 gap-2'>
                    <div className='form-control md: w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Coffee Name</span>
                        </label>
                        <label>
                            <input className='input input-bordered w-full' type="text" name="name" placeholder='coffee name' id="" />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Available quantity</span>
                        </label>
                        <label>
                            <input className='input input-bordered w-full' type="text" name="quantity" placeholder='available quantity' id="" />
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
                            <input className='input input-bordered w-full' type="text" name="supplier" placeholder='supplier' id="" />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>taste</span>
                        </label>
                        <label>
                            <input className='input input-bordered w-full' type="text" name="taste" placeholder='taste' id="" />
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
                            <input className='input input-bordered w-full' type="text" name="category" placeholder='category' id="" />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>details</span>
                        </label>
                        <label>
                            <input className='input input-bordered w-full' type="text" name="details" placeholder='details' id="" />
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
                            <input className='input input-bordered w-full' type="text" name="photo" placeholder='photo url' id="" />
                        </label>
                    </div>
                </div>
                <input className="btn btn-block bg-orange-300" type="submit" value="Add Coffee" />

            </form>
        </div>
    );
};

export default AddCoffee;