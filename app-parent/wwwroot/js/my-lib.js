window.onload = () => {
    const msg = {
        type: 'hello',
        value: 'world'
    };

    parent.postMessage(msg, '*');
};