function Tweet({ username, name, date, message }) {
    return (
        <div class="tweet">
            <p class="username">{username}</p>
            <h3 class="name">{name}</h3>
            <p class="date">{date}</p>
            <p class="message">{message}</p>
        </div>
    );
}