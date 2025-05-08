export function getUser() {
    const user = localStorage.getItem("user");
    return user || "";
}
