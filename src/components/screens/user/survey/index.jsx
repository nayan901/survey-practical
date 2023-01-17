import React, { useState } from "react";
import { Alert, Box, Button, Paper, Snackbar } from "@mui/material";
import mcq from "../../../../dummyData/mcq.json";
import { QuestionAnswer } from "../../../common";
const SurveyForm = () => {
  const [answers, setAnswer] = useState([]);
  const [snackBar, setSnackBar] = useState({
    open: false,
    severity: "success",
    message: "",
  });
  const acceptSurveySubmission = () => {
    setSnackBar((prev) => {
      return {
        ...prev,
        open: true,
        severity: "success",
        message: "Thanks for submitting your review.",
      };
    });
    setAnswer({})
  };
  const hideSnackBar = () => {
    setSnackBar((prev) => {
      return { ...prev, open: false };
    });
  };
  console.log("answers", answers);
  return (
    <Paper sx={{ mt: 2, mb: 2, width: 1 }}>
      <Box sx={{ p: 2 }}>
        {mcq.map(({ question, options, type }, index) => (
          <QuestionAnswer
            key={index}
            index={index}
            question={question}
            options={options}
            type={type}
            answers={answers}
            field={`option_${index}`}
            updateAnswer={(val, field) => setAnswer((prev) => {
                return {
                    ...prev,
                    [field]: val
                }
            })}
          />
        ))}
        <Button
          onClick={() => acceptSurveySubmission()}
          sx={{ mt: 3 }}
          variant="contained"
          component="label"
        >
          Submit
        </Button>
      </Box>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={snackBar.open}
        autoHideDuration={6000}
        onClose={() => hideSnackBar()}
        message=""
        key={"top" + "center"}
      >
        <Alert severity={snackBar.severity} sx={{ width: "100%" }}>
          {snackBar.message}
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default SurveyForm;
