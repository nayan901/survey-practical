import { FormControlLabel, FormGroup, Radio } from "@mui/material";
import React, { useState } from "react";

const QuestionAnswer = ({ question, options, type, index, field, updateAnswer, answers }) => {
  
  return (
    <>
      <pre>
        {index + 1}. {question}
      </pre>
      <FormGroup row>
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            control={
              <Radio
                checked={option === answers[field]}
                value={option}
                onChange={() => {
                    return updateAnswer(option, field);
                }}
              />
            }
            label={option}
          />
        ))}
      </FormGroup>
    </>
  );
};

export default QuestionAnswer;
