import { useLayoutEffect, useRef, useState } from 'react';
const Function = () => {
  const healthTips = [
    {
      id: 1,
      title: 'Balanced Diet',
      description:
        'Consume a variety of nutrient-rich foods, including fruits, vegetables, whole grains, lean proteins, and healthy fats. Limit intake of processed foods, sugary beverages, and excessive amounts of saturated and trans fats.',
    },
    {
      id: 2,
      title: 'Portion Control',
      description:
        'Pay attention to portion sizes to avoid overeating. Use smaller plates and bowls to help control portions.',
    },
    {
      id: 3,
      title: 'Stay Hydrated',
      description:
        'Drink plenty of water throughout the day. Limit intake of sugary drinks and alcohol.',
    },
    {
      id: 4,
      title: 'Regular Exercise',
      description:
        'Aim for at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous-intensity activity per week. Include strength training exercises at least two days a week.',
    },
    {
      id: 5,
      title: 'Get Adequate Sleep',
      description:
        'Aim for 7-9 hours of quality sleep each night. Establish a consistent sleep schedule and create a relaxing bedtime routine.',
    },
    {
      id: 6,
      title: 'Manage Stress',
      description:
        'Practice stress-reduction techniques such as deep breathing, meditation, yoga, or spending time in nature. Prioritize activities that bring joy and relaxation.',
    },
    {
      id: 7,
      title: 'Limit Screen Time',
      description:
        'Reduce time spent on electronic devices, especially before bedtime. Take regular breaks from screens and engage in physical activities or hobbies.',
    },
    {
      id: 8,
      title: 'Maintain Social Connections',
      description:
        'Stay connected with friends and family members for emotional support and social interaction. Participate in group activities or volunteer work to foster a sense of community.',
    },
    {
      id: 9,
      title: 'Practice Mindful Eating',
      description:
        'Pay attention to hunger and fullness cues. Eat slowly and savor each bite, focusing on the taste and texture of food.',
    },
    {
      id: 10,
      title: 'Seek Professional Help When Needed',
      description:
        "Consult with healthcare professionals, such as doctors, nutritionists, or personal trainers, for personalized advice and support. Don't hesitate to seek help if struggling with mental health issues or disordered eating habits.",
    },
  ];

  let random = Math.floor(Math.random() * 10);
  console.log(random);

  // Example of accessing the first tip
  console.log(healthTips[0].title);

  const [Val, setVal] = useState(true);
  const [Status, setStatus] = useState('Please Enter Necessary details for BMI');
  const myref = useRef(null);
  const hRef = useRef(null);
  const wRef = useRef(null);
  const handleclick = () => {
    console.log('hey i was cliked');

    // formula for BMI ;

    let height = hRef.current.value / 100;
    let weight = wRef.current.value;
    let bmi = weight / (height * height);
    console.log(height, weight);
    bmi = bmi.toFixed(1);

    // bmi results
    if (height === 0 || weight === '') {
      setStatus('Please enter details');
    } else if (bmi < 18.5) {
      hRef.current.value = '';
      wRef.current.value = '';

      setStatus(
        "Your BMI indicates that you are underweight. It's important to maintain a balanced diet and consult with a healthcare professional to reach a healthier weight."
      );
    } else if (bmi <= 24.9) {
      hRef.current.value = '';
      wRef.current.value = '';
      setStatus(
        'Congratulations! Your BMI falls within the normal weight range. Keep up the good work with healthy eating and regular exercise.'
      );
    } else if (bmi <= 29.9) {
      hRef.current.value = '';
      wRef.current.value = '';

      setStatus(
        'Your BMI suggests that you are overweight. Focus on making small, sustainable changes to your diet and exercise routine to improve your health.'
      );
    } else if (bmi >= 29.9) {
      hRef.current.value = '';
      wRef.current.value = '';
      setStatus(
        "Your BMI indicates obesity. It's essential to prioritize your health by adopting healthier habits, such as regular exercise and nutritious eating."
      );
    }

    myref.current.style.transform = 'translateY(0px)';
    console.log(bmi);
    if (Val == false) {
      myref.current.style.transform = 'translateY(440px)';
    }
  };
  return (
    <div className='my-5 mx-5 flex flex-col justify-center items-start font-bold select-none'>
      {/* headline */}
      <div>
        <h1>Body Mass Index</h1>
      </div>

      {/* gender  */}
      <div className='mt-6'>
        <p>
          Gender (select one<span className='text-red-700'>*</span>)
        </p>
      </div>

      <div className='flex items-center gap-10 justify-evenly my-5 '>
        <div className='h-[150px] w-[150px] border border-black rounded  flex flex-col gap-5 items-center justify-center hover:bg-slate-100 hover:italic hover:font-bold font-thin hover:border-2'>
          <img className='h-10' src='/male-gender.png' alt='' />
          <p>Male</p>
        </div>
        <div className='h-[150px] w-[150px] border border-black rounded flex flex-col gap-5 items-center justify-center hover:bg-slate-100 hover:italic hover:font-bold font-thin hover:border-2'>
          <img className='h-10' src='/femenine.png' alt='' />
          <p>Female</p>
        </div>
      </div>

      {/* function  */}

      <div>
        <p>
          Height (in CM <span className='text-red-700'>*</span>)
        </p>
        <input
          ref={hRef}
          className='bg-slate-100 h-[40px] w-[152%] p-2 my-3 border font-extralight italic'
          type='number'
          placeholder='Enter your height'
        />
      </div>
      <div>
        <p>
          Weight (in KG <span className='text-red-700'>*</span>)
        </p>
        <input
          ref={wRef}
          className='bg-slate-100 h-[40px] w-[152%] p-2 my-3 border font-extralight italic'
          type='number'
          placeholder='Enter your weight'
        />
      </div>
      {/* <div>
        <p>Age</p>
        <input className='bg-slate-100 h-[40px] p-2 my-3 border' type='number' />
      </div> */}

      {/* result  */}
      <div>
        <h1>Note:</h1>
        <span className='note italic '>{healthTips[random].description}</span>
      </div>
      <div className='main'>
        <div
          onClick={() => {
            handleclick();
            setVal(!Val);
          }}
          className='box absolute left-[45%] bottom-[20%] text-white bg-black rounded-[50%] h-[50px] w-[50px] flex items-center justify-center z-10 '
        >
          {Val == true ? 'BMI' : 'X'}
        </div>
        <div
          ref={myref}
          className='result h-[180px] absolute bottom-1 w-[370px] bg-slate-800 text-slate-200 flex items-center justify-center rounded-3xl font-extralight italic '
        >
          {Status}
        </div>
      </div>
    </div>
  );
};
export default Function;
