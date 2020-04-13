import React from "react";

function Quoteform({simpson}) {
    return (
        <div>
            <div>
                <p>
                    <strong>{simpson.character}</strong>
                </p>
                <p>
                    <strong>{simpson.quote}</strong>
                </p>
                <img src={simpson.image} alt="simpson" />
            </div>
        </div>
    );
}

export default Quoteform;
