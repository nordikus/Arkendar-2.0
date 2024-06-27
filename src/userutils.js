export function findUser(username, password) {
    const userDataString = localStorage.getItem('users');
    if (!userDataString) return null;

    const userData = JSON.parse(userDataString);
    return userData.find(user => user.username === username && user.password === password);
}

export function createUser(username, email, password) {
    const userDataString = localStorage.getItem('users') || '[]';
    const userData = JSON.parse(userDataString);
    userData.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(userData));
}