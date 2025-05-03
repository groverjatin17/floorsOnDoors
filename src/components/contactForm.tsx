import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormInputs = {
  name: string;
  email: string;
  phone: string;
  address: string;
  date: string;
  time: string;
};

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = () => {
    // console.log(data);
    // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
      <div>
        <input
          {...register('name', { required: 'Name is required' })}
          type='text'
          placeholder='Name'
          className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400'
        />
        {errors.name && (
          <span className='text-red-500 text-sm'>{errors.name.message}</span>
        )}
      </div>

      <div>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
          })}
          type='email'
          placeholder='Email'
          className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400'
        />
        {errors.email && (
          <span className='text-red-500 text-sm'>{errors.email.message}</span>
        )}
      </div>

      <div>
        <input
          {...register('phone', { required: 'Phone number is required' })}
          type='tel'
          placeholder='Phone'
          className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400'
        />
        {errors.phone && (
          <span className='text-red-500 text-sm'>{errors.phone.message}</span>
        )}
      </div>

      <div>
        <input
          {...register('address', { required: 'Address is required' })}
          type='text'
          placeholder='Address'
          className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400'
        />
        {errors.address && (
          <span className='text-red-500 text-sm'>{errors.address.message}</span>
        )}
      </div>

      <div className='flex space-x-4'>
        <div className='flex-1'>
          <input
            {...register('date', { required: 'Date is required' })}
            type='date'
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400'
          />
          {errors.date && (
            <span className='text-red-500 text-sm'>{errors.date.message}</span>
          )}
        </div>
        <div className='flex-1'>
          <input
            {...register('time', { required: 'Time is required' })}
            type='time'
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400'
          />
          {errors.time && (
            <span className='text-red-500 text-sm'>{errors.time.message}</span>
          )}
        </div>
      </div>

      <button
        type='submit'
        className='w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-4 rounded-md transition duration-300'
      >
        BOOK NOW
      </button>
    </form>
  );
};

export default ContactForm;
