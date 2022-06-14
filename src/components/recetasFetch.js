const fetchRecetas = (time, task) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(task);
        }, time);
    })};

export default fetchRecetas;