import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
// Components
import { Container } from '../UI';
// hooks
import { QuestionsData } from '../../hooks';

function Questions() {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = (questionIndex) => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };
  return (
    <Container id="#questions" className="grid md:grid-cols-2 lg:gap-24 gap-4">
        <StaticImage
          className="rounded-md object-cover md:h-[600px] w-full"
          src="https://res.cloudinary.com/hms-software/image/upload/v1708441161/questions-2519654_lj2rnr.png"
          placeholder="blurred"
          alt="What we Offer"
        />
        <div className="grid place-content-start place-items-start gap-4 text-justify md:text-left">
          <h1>
            Questions
          </h1>
          <h4 className="">
            Here are some frequently asked questions about our Tours from our loving customers.
            Should you have any other questions, feel free to reach out via the contact form below.
          </h4>
          <dl className="grid w-full gap-2">
            {QuestionsData.map((faq, index) => (
              <button
                className={`${activeQuestionIndex === index ? "border-indigo-600" : ""} rounded-md hover:border-indigo-600 border-2 p-4 transition-all duration-300`}
                type="button"
                aria-label="questions"
                key={index}
                onClick={() => {
                  toggleQuestion(index);
                }}
              >
                <dt className="grid text-lg font-semibold text-gray-700">
                  <div className="flex items-center justify-between text-left">
                    <span>{faq.question}</span>
                    <span className=" text-indigo-600 md:text-3xl ">
                      {activeQuestionIndex === index ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
                    </span>
                  </div>
                  <dt className="pt-2 text-left text-base font-medium text-gray-500 ">
                    {activeQuestionIndex === index ? faq.answer : ''}
                  </dt>
                </dt>
              </button>
            ))}
          </dl>
        </div>
    </Container>
  );
}

export default Questions;
