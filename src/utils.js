import React from 'react';

const htmlify = (arg) => {    
    const __html = arg.replace(/\t/g, /\040/)
        .replace(/\040/g, '&nbsp')
        .replace(/[\n\r]/g, '<br />')

    return (        
            <span dangerouslySetInnerHTML={{ __html }}></span>
    );
}
export default htmlify;
