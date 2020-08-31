async function deleteFormHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
    });
    document.location.replace('/dashboard/');
};


document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);