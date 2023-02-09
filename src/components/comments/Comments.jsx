import React from 'react';

function Comments({c}) {
    return (
        <div>
            <p>Id: {c.id}</p>
            <p>Comments:  {c.body}</p>
        </div>
    );
}

export default Comments;