import React from "react";

function Article({ title, date, preview }) {
    const formatteddate = date ? new Date(date).toDateString : "January 1, 1970";

    return (
        <article>
            <h3>{title}</h3>
            <small>{formatteddate}</small>
            <p>{preview}</p>


        </article>
    );
}

export default Article;