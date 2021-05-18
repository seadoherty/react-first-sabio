import React from "react";

const CompanyCard =(props)=>{
    const cardStyle = {
        width: "22rem",
      };

    return(
        <div className="card shadow m-2" style={cardStyle}>       
        <div className="card-body">
          <h5 className="card-title text-center">{props.company.name}</h5>  
          <h5 className="card-title text-center">{props.company.profile}</h5>  
          <h5 className="card-title text-center">{props.company.summary}</h5>
          <h5 className="card-title text-center">{props.company.headline}</h5>
        </div>
      </div>
    )
}

export default React.memo(CompanyCard);