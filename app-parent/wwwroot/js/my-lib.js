window.onload = () => {
    const msg = {
        type: 'loaded',
        url: window.location.toString()
    };

    parent.postMessage(msg, '*');
};