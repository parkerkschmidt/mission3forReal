using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace mission2.Models
{
    public class CalcModel
    {
        [Required (ErrorMessage = "Please enter the scores for assignments")]
        [Range(1, 100)]
        public float assign { get; set; }

        [Required(ErrorMessage = "Please enter the scores for projects")]
        [Range(1, 100)]
        public float grp_proj { get; set; }

        [Required(ErrorMessage = "Please enter the scores for quizzes")]
        [Range(1, 100)]
        public float quiz { get; set; }

        [Required(ErrorMessage = "Please enter the scores for exams")]
        [Range(1, 100)]
        public float exam { get; set; }

        [Required(ErrorMessage = "Please enter the scores for intex")]
        [Range(1, 100)]
        public float inte { get; set; }

    }
}