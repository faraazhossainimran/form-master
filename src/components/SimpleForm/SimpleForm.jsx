

const SimpleForm = () => {
    const handleSubmit = e => {
        e.preventDefault()
        console.log("form submitted");
    }
    return (
        <div>
            <form>
                <input type="text" name="name" />
                <br/>
                <input type="email" name="email"/>
                <br/>
                <input type="number" name="number"/>
                <br/>
                <input onSubmit={handleSubmit} type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default SimpleForm