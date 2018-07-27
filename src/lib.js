export const person = {
    name: "Prabeen",
    age: 23
};

export function getName(name) {
    return "Welcome " + name;
}

export async function getPost() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
}