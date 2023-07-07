

export function Form() {

    return (
        <form action="">
            <div className="field field-email">
                <input id="input-email" type="email" />
                <label for="input-email">Email :</label>
            </div>
            <div className="field field-message">
                <textarea id="input-message" type="text" />
                <label for="input-message">Message :</label>
            </div>
            <button type="submit">SEND</button>
        </form>
    )
}