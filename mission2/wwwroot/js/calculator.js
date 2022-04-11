// create function to calculate grade
function myCalculator() {


    //define variables using jquery, pulling in values from html form
    let fAssignment = $('#assignment').val();
    let fGrp_Project = $('#grp_project').val();
    let fQuizzes = $('#quizzes').val();
    let fExams = $('#exams').val();
    let fIntex = $('#intex').val();

    let fAssignWeight = .55;
    let fGrpPrjWeight = .05;
    let fQuizWeight = .10;
    let fExamWeight = .20;
    let fIntexWeight = .10;

    let fFinalGrade = Math.round(((fAssignment * fAssignWeight) + (fGrp_Project * fGrpPrjWeight) + (fQuizzes * fQuizWeight) + (fExams * fExamWeight) + (fIntex * fIntexWeight)));
    let sLetterGrade

    // if statement to compare final grade % and assign letter grade
    if (fFinalGrade >= 90) {
        sLetterGrade = 'A';
    }
    else if (fFinalGrade >= 80) {
        sLetterGrade = 'B';
    }
    else if (fFinalGrade >= 70) {
        sLetterGrade = 'C';
    }
    else if (fFinalGrade >= 60) {
        sLetterGrade = 'D';
    }
    else {
        sLetterGrade = 'F';
    }

    // print out grades in alert
    alert("Your grade is: " + "\n" + fFinalGrade + " " + sLetterGrade);

}

// on click, run the mycalculator function from above
$("#calc_button").click(function () {
    myCalculator();
});