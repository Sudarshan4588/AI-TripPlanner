import React, { useEffect } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { useState } from 'react';
import Input from 'postcss/lib/input';
import { SelectBudgetOptions } from '@/constants/options';
import { SelectTravelersList } from '@/constants/options';
import { Button } from '@/components/ui/button';






function CreateTrip() {
  const [place,setPlace]=useState();
  const [formData,setFormData]=useState([]);
  const handleInputChange=(name,value)=>{
    setFormData({
      ...formData,
      [name]:value
    })
  }
  useEffect(()=>{
    console.log(formData);

  },[formData])

  
  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="font-bold text-3xl"> Tell us your travel preferences 🛥️🌴</h2>
      <p className="mt-3 text-grey-500 text-xl">
        Just provide some basic information and our trip planner will generate a
        customized itinerary based on your preferences
      </p>

      <div className="mt-20 flex flex-col gap-10">
        <div>
          <h2 className="text-xl my-3 font-medium">
            What is destination of choice?
          </h2>
          <GooglePlacesAutocomplete
            apiKey=""
            selectProps={{
              place,
              onChange: (v) => {
                setPlace(v);
                handleInputChange('location',v)
              },
            }}
          />
          <div>
            <h2 className="text-xl my-3 font-medium">
              How many days are you planning your trip?
            </h2>
            <input
              type="number"
              onChange={(e)=>handleInputChange('no ofdays',e.target.value)}
              placeholder="ex: 4"
              className="border p-2 rounded-md w-full"
            />
          </div>
          <div>
            <h2 className="text-xl my-3 font-medium">what is your budget</h2>
            <div className="grid grid-cols-3 gap-5 mt-5">
              {SelectBudgetOptions.map((item, index) => (
                <div
                  key={index}
                  onClick={()=>handleInputChange('budget',item.title)}
                  className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer ${formData?.budget==item.title&&'shadow-lg border-black'}`}
                >
                  <h2 className="text-4xl">{item.icon} </h2>
                  <h2 className="font-bold text-lg">{item.title}</h2>
                  <h2 className="text-sm text-gray-500">{item.desc}</h2>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl my-3 font-medium">who do you plan on traveling with on your next adventure</h2>
            <div className="grid grid-cols-3 gap-5 mt-5">
              {SelectTravelersList.map((item, index) => (
                <div
                  key={index}
                  onClick={()=>handleInputChange('traveler',item.people)}
                  className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer ${formData?.traveler==item.people&&'shadow-lg border-black'}`}
                >
                  <h2 className="text-4xl">{item.icon} </h2>
                  <h2 className="font-bold text-lg">{item.title}</h2>
                  <h2 className="text-sm text-gray-500">{item.desc}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='my-10 justify-end flex'>
        <Button>Generate Trip</Button>
        </div>
      </div>
    </div>
  );
}

export default CreateTrip
