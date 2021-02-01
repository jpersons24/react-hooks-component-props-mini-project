function About(props) {
   return (
      <div id="about">
         <aside>
            <img src={props.image} alt="blog logo"></img>
            <p>{props.about}</p>
         </aside>
      </div>
   )
}

export default About