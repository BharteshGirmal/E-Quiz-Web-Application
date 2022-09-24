import { Link, NavLink } from 'react-router-dom';
import './Homepage.css';
export default function Homepage()
{
 
      
        return(
            <>
            <body className="main">
            <div className='sticky-top class'>      
            <div className=" header">
            <h1>E-Quiz Web Application</h1>
            </div>
            <div className="navbar navbar-brand sticky-top class   ">
                  <Link to="/StudentLogin">Student Login</Link>
                  <Link to="/FacultyLogin">Faculty Login</Link>
                  <div className="dropdown">
                        <button className="dropbtn">Create Account
                          <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                              <Link to="/StudentRegistration">Register as Student</Link>
                              <Link to="/FacultyRegistration">Register as Faculty</Link>
                        </div>
                  </div>
                  </div> 
                  </div>
         
            <div className="card demo">
            <br/><br/><br/><br/>
            <img src="https://cdn.pixabay.com/photo/2018/08/31/11/17/quiz-3644414_960_720.png" className="card-img-top" style={{width:"300px",height:"300px",alignSelf:"center"}} alt="..."/>
            <div className="card-body">
            <div className="card-title" style={{textAlign:"center"}}><h3>Take a Demo Test</h3>
                  <Link to="/DemoQuiz" className="btn btn-success btn-lg lg-12">START</Link>
                  </div>
        </div>
      </div>
      <div className='about'>      
      <div className='box' style={{alignSelf:'center'}}>
            <div className='col-xl-12  text-light '>
            <div className="bg-transparent">
            <br/><br/><br/><br/><br/>
            <div style={{textAlign:'center'}}>
            <img src="https://www.freeiconspng.com/thumbs/about-us-icon/information-about-us-icon-10.png" className="card-img-top" style={{width:"300px",height:"300px" , resize:'contain' ,alignSelf:'center' }} alt="..."/>
            <div className="card-body" style={{alignSelf:'center'}}>
            <br/>
            <div  className="card-title"><h2>About us</h2></div>
            <h3><p className="card-text fw-bold text-light">
            The E-Quiz Application project developed to overcome the time consuming problem 
            of manual system. Apart from that in current system, 
            checking the answer sheets after taking test, 
            waste the examiners time, so this application will check the correct answer 
            and save the examiner time and carry the examination in an effective manner.
            The objective of this project is to manage the details of students, 
            Quiz papers, marks, Quiz topics, and papers in a good manner.  
            The performance of  the  student  will  be  fully  monitored  by Faculty. 
            The project will reduce the manual process in managing Quiz and all issues regarding that.
            It provides a common platform to connect student and teacher online. The registered teacher can create 
            Quiz and registered student can give quiz and can access himself/herself at given schedule.
      
                  </p> </h3>
            <a href="/..." className="btn btn-primary">Go somewhere</a>
            <br/><br/><br/><br/><br/>
            </div>
        </div>
      </div>
      </div>
      </div>
      <div className='box ' style={{alignSelf:'center'}}>
      <div className='col-xl-12 text-light'>
            <div className="bg-transparent " >
            <br/><br/><br/><br/><br/>
            <div style={{textAlign:'center'}}>
            <img src="https://static.ess.com/uploads/Teaching-Icon.png" className="card-img-top" style={{width:"300px",height:"300px",alignSelf:"center"}} alt="..."/>
            <div className="card-body" style={{alignSelf:'center'}}>
            <div style={{textAlign:'center'}}>
            <br/>
            <div className="card-title"><h2>Techer</h2></div>
            <h3><p className="card-text fw-bold text-light">
            If a Faculty is new in the system will do registration first, 
            then do Login with his/her given Id and system will authenticate the Faculty.
            After Login multiple tabs are shown, where he can create quiz, 
            Edit Quiz Questions, Delete Quiz Question, Create Quiz schedule, 
            Edit Quiz Schedule, View Student Results, view Students Details.
            Faculty will add the Quiz schedule for which Topic 
            they have to arrange the quiz and also add a MCQ question for the particular Quiz wise.
      
                  </p></h3>
            <a href="/..." className="btn btn-primary">Go somewhere</a>
            <br/><br/><br/><br/><br/>
            </div>
            </div>
        </div>
      </div>
      </div>
      <div className='box' style={{alignSelf:'center'}}>
      <div className='col-xl-12 text-light'>
            <div className="bg-transparent " >
            <br/><br/><br/><br/><br/>
            <div style={{textAlign:'center'}}>
            <img src="https://icons.iconarchive.com/icons/graphicloads/100-flat/128/student-icon.png" className="card-img-top" style={{width:"300px",height:"300px",alignSelf:"center"}} alt="..."/>
            <div className="card-body" style={{alignSelf:'center'}}>
            <div style={{textAlign:'center'}}>
            <br/>
            <div className="card-title"><h2>Student</h2></div>
            <h3><p className="card-text fw-bold text-light">
                  If a student is new do registrations first, 
                  if a student is registered do login, after login he/she can view the schedule 
                  of upcoming quiz with date and time in the Menu of view schedule.
                  Then he/she can select the Quiz and then redirected to the Instructions 
                  related to the quiz page after reading all Instructions 
                  he/she can start/give test After submitting Quiz student can get result instantly 
                  </p></h3>
            <Link to="/Instructions" className="btn btn-primary">Go somewhere</Link>
            <br/><br/><br/><br/><br/>
            </div>
            </div>
        </div>
      </div>
      </div>
      </div>
      </div>
      
      
      <div className="contactus " style={{textAlign:'justify'}}>
            <br/><br/><br/><br/>
            <br/><br/><br/><br/>
            
      
            <table className="border box text-justify border border-0 bg-transparent text-warning col-xl-6" style={{alignItems:'left'}}>
            <thead className="bg-dark  border border-warning  text-warning col-xl-6" style={{fontSize:"25px"}}>
            <tr>
            <th colSpan={3} style={{textAlign:'center'}}><h1>Contact Us</h1></th>
          </tr>
        </thead>
        <tbody style={{fontSize:"25px"}}>
            <tr>
            <td>
                <div className="ms-3 fw-bolder" >Nilima Panasare
                  </div>
            </td>
            <td>
                <div className="fw-bolder" >
                 &emsp;9898989898
                </div>
            </td>
            <td>
            <div className="fw-bolder">
            &emsp;nilimapansare@gmail.com
                </div>
            </td>
          </tr>
          <tr>
          <td>
                <div className="fw-bolder" >&emsp;Bhartesh Girmal
                  </div>
            </td>
            <td>
                <div className="fw-bolder">
                &emsp;9503042573
                </div>
            </td>
            <td>
            <div className="fw-bolder">
            &emsp;bharteshgirmal@gmail.com
                </div>
            </td>
          </tr>
          <tr>
          <td>
                <div className="fw-bolder">&emsp;Hardik Parab
                  </div>
            </td>
            <td>
                <div className="fw-bolder" >
                &emsp;9924181577
                </div>
            </td>
            <td>
            <div className="fw-bolder" >
            &emsp;hardikparab@gmail.com
                </div>
            </td>
          </tr>
          <tr >
          <td>
                <div className="fw-bolder" >&emsp;Shhubham Sharma
                  </div>
            </td>
            <td>
                <div className="fw-bolder" >
                &emsp;9767433606
                </div>
            </td>
            <td >
            <div className="fw-bolder">
            &emsp;shubhamsharma@gmail.com
                </div>
            </td>
          </tr>
          <tr>
          <td>
                <div className="fw-bolder" >Rushikesh Petkar
                  </div>
            </td>
            <td>
                <div className="fw-bolder" >
                &emsp;9527249446
                </div>
            </td>
            <td>
            <div className="fw-bolder">
            &emsp;rushikeskpetkar@gmail.com
                </div>
            </td>
          </tr>
        </tbody>
      </table>  
            <br/><br/><br/><br/>
            <br/><br/><br/><br/>
            <br/><br/><br/><br/>
      </div>
      </div> 
            <div className="footer main">
                  <b><center>All Rights Reserverd @Cdac-March-2022</center></b>   
            </div>      
      </body>
      </>
            )
      }