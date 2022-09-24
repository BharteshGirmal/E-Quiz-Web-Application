import { NavLink, useParams } from "react-router-dom";

export default function Instructions()
{
      let {quizId}=useParams('quizId');
      console.log("QuizId : ",quizId);

	return(
<>
<div style={{backgroundImage:'url("https://wallpaperaccess.com/full/1683028.jpg")', backgroundRepeat:"no-repeat" , backgroundSize:"cover",height:'800px' }}>
<div className="shadow-none p-3 xl-4">
<section className="h-80 h-custom">
<div className="container-fluid py-5 h-100 bg-transparent">
<div className="row d-flex justify-content-center align-items-center h-100 ">
<div className="col-xl-12 col-xl-6 ">
<div className="card rounded-6 border border-warning bg-transparent">
<div className=" main navbar-brand text-warning align-center">
      <h2 style={{textAlign:'center'}}><b>Exam Instructions</b></h2>
      </div>
<div className="card-body p-4 p-md-5">
<form className="px-md-1">  
<div >	
	<ul className="footer " style={{fontSize:'22px' ,textAlign:'left', fontFamily:'serif'}}>
	<li >
	Before starting the test,please verify your Login Id
	</li>
	<li>
	The examination consist of Multiple Choice Question
	</li>
	<li>
	Each MCQ will have 4 choices and a student shall mark his/her 
	choice For MCQs on the system itself
	</li>
	<li>
	Please Dont Press Back Button on Browser,It will Exit The Exam immediately and Response will not be recorded
	</li>
	<li>
	Do not close Your test window directly  when you are taking test
	</li>
	<li>
	There will be no negative marking for any wrong answer or non attempt and answers will be auto calculated
	</li>
        </ul>	
	<h2 style={{ color: "yellow" }}>Best of luck for Your Exam......!</h2> <br/> <br/>

	<NavLink exact to={`/StartExam/${quizId}`}>
            <button className="btn btn-info btn-mb lg-1 fw-bold" style={{alignSelf:'right'}}>Start Exam</button>
      </NavLink>
      <br/>

	
	</div>

</form>
</div>
</div>
</div>
</div>
</div>
</section>
</div>   
</div>
</>

	);
}