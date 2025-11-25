export default DayTwo;
function DayTwo(){

    //grreting message
    const hour= new Date().getHours();
   const grreting= hour >1 && hour<12 ? "Good Morning" : hour>=12 && hour<18 ?"Good Afternoon":"Good Night";

   const fruits=["Mango","Banana","Orange","Pineapple"];


    return(
        <>
        
        <h4>{grreting } "Hello User"</h4>
        <h3>Fruits List:</h3>
        <ul>
            {fruits.map((fruitsItem,index)=>(
                <li key={index}>{fruitsItem}</li>
            ))}
        </ul>
        
        </>
    )
}