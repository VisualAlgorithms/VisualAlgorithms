import React from 'react';

const htmlify = (arg) => {
    const __html = arg.replace(/\t/g, /\040/)
        .replace(/\040/g, '&nbsp')
        .replace(/[\n\r]/g, '<br />')

    return (
        <span dangerouslySetInnerHTML={{ __html }}></span>
    );
}

const parseMethod = (signature, codeString) => {
    const startIndex = codeString.indexOf(signature);
    if (startIndex == -1) return '';
    const startBrace = codeString.indexOf('{', startIndex);
    let i = startBrace + 1;
    let stack = 1;
    while (stack != 0) {
        if (codeString[i] == '{')++stack;
        else if (codeString[i] == '}')--stack;
        ++i;
    }
    return codeString.substring(startIndex, i);
}

export { htmlify, parseMethod };
