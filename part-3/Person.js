function Person({ name, age }) {
    return (
        <div class="person" ><p> Learn more about this person!</p>
            <h3>{age > 18 ? "please go vote!" : "you must be 18"}</h3>
            <h1>{name.length > 6 ? name.substring(0, 6) : name}</h1>

        </div >
    );
}