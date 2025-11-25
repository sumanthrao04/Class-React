export default DayOne;
function DayOne() {
const user={
    name:"Sumanth Parashuram",
    age:25,
    proffession:"Software Engineer"
};

const styleObj={color:"Red",fontSize:"15px"};

const isUserLoggedIb=true;



return(
    <div>
        <h4 style={styleObj}>Welcome to below User using inline css in react</h4>
        
        <h2>{isUserLoggedIb?`welcome ${user.name}   age:  ${user.age}  profession: ${user.proffession}` : "Please log in" }</h2>
        
    </div>
);


  
}
