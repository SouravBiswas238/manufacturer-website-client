import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddReview = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();


  const addReview = (data) => {

    if (data.ratting > 0 && data.ratting < 6) {
      fetch('https://manufacturer-website-server-production.up.railway.app/review', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => {
          toast.success('SuccessFully added your review')

        })
    }
    else {
      toast.error("Please insert a valid ratting")
    }

  }

  return (
    <div className='text-center'>

      <div class="card  bg-base-200 shadow-xl">

        <div class="card-body items-center text-center">
          <h2 class="card-title text-xl text-primary">Please Add a review</h2>


          <form onSubmit={handleSubmit(addReview)} >
            <div className="form-control lg:w-96">
              <input
                {...register("ratting", {
                  required: {
                    value: true,
                    message: 'Add a retting between 1 -5'
                  }

                })}
                type="number" placeholder="Add a retting"
                className="input input-secondary w-full max-w-xs" />
              <label className="label">
                {errors.ratting?.type === 'required' && <span className="label-text-alt text-red-500">{errors.ratting.message}</span>}
              </label>

            </div>

            <div className="form-control lg:w-96">
              <input
                {...register("review", {
                  required: {
                    value: true,
                    message: 'Add review'
                  }

                })}
                type="text" placeholder="Add a review"
                className="input input-secondary w-full max-w-xs" />
              <label className="label">
                {errors.review?.type === 'required' && <span className="label-text-alt text-red-500">{errors.review.message}</span>}
              </label>

            </div>

            <input className='btn lg:w-1/2  text-white' type="submit" value='Add review' />

          </form>




        </div>
      </div>
    </div>
  );
};

export default AddReview;