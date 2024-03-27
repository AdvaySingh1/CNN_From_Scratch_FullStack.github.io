window.addEventListener('DOMContentLoaded', (event) => {
    const p: HTMLElement | null = document.getElementById("myId");

    if (p) {
        // TypeScript knows that `p` is not `null` now, so it lets you access `innerHTML`
        const date: Date = new Date();
        p.innerHTML = date.toString();
    }
});